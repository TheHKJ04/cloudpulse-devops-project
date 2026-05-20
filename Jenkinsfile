pipeline {

    agent any

    stages {

        stage('Clone') {
            steps {
                git credentialsId: 'github-token',
                    url: 'https://github.com/TheHKJ04/cloud-pulse-devops-project.git',
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

        stage('Deploy Application') {

            steps {

                sh '''
                docker stop cloudpulse-app || true

                docker rm cloudpulse-app || true

                docker pull thehkj04/cloudpulse:v2

                docker run -d \
                --name cloudpulse-app \
                -p 30080:80 \
                thehkj04/cloudpulse:v2
                '''
            }
        }
    }
}