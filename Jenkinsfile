pipeline {

    agent any

    stages {

        stage('Clone') {

            steps {
                git 'https://github.com/TheHKJ04/cloudpulse-devops-project.git'
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

        stage('Deploy Kubernetes') {

            steps {

                sh 'kubectl apply -f kubernetes/'
            }
        }
    }
}