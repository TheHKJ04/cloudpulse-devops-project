pipeline {

    agent any

    stages {

        stage('Clone') {
            steps {
                git credentialsId: 'github-token',
                    url: 'https://github.com/TheHKJ04/cloudpulse-devops-project.git',
                    branch: 'main'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                docker pull thehkj04/cloudpulse:latest || true
                docker build -t thehkj04/cloudpulse:${BUILD_NUMBER} \
                    -t thehkj04/cloudpulse:latest \
                    --cache-from thehkj04/cloudpulse:latest \
                    -f docker/Dockerfile .
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([
                    usernamePassword(
                        credentialsId: 'dockerhub',
                        usernameVariable: 'USER',
                        passwordVariable: 'PASS'
                    )
                ]) {
                    sh '''
                    echo $PASS | docker login -u $USER --password-stdin
                    docker push thehkj04/cloudpulse:${BUILD_NUMBER}
                    docker push thehkj04/cloudpulse:latest
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f k8s/
                kubectl set image deployment/cloudpulse \
                    cloudpulse=thehkj04/cloudpulse:${BUILD_NUMBER} \
                    -n cloudpulse
                kubectl rollout status deployment/cloudpulse \
                    -n cloudpulse
                '''
            }
        }
    }

    post {
        success {
            echo "Pipeline succeeded! Image: thehkj04/cloudpulse:${BUILD_NUMBER}"
        }
        failure {
            echo "Pipeline failed at stage. Check logs above."
        }
    }
}
