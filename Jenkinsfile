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
                docker build -t thehkj04/cloudpulse:v2 \
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

                    docker push thehkj04/cloudpulse:v2
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {

                sh '''
                kubectl apply -f k8s/

                kubectl rollout restart deployment/cloudpulse \
                -n cloudpulse
                '''
            }
        }
    }
}