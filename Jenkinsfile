pipeline {
    agent any
    environment {
        scannerHome = tool name: 'sonar'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git url: "https://github.com/visheshvishu/demo-docker.git", branch: "main"
            }
        }
        // stage('SonarQube analysis') {
        //     steps {
        //         withSonarQubeEnv('sonar') {
        //             sh "${scannerHome}/bin/sonar-scanner \
        //                 -Dsonar.projectName=wanderlust \
        //                 -Dsonar.projectKey=wanderlust \
        //                 -Dsonar.host.url=http://172.27.190.167:9000"
        //         }
        //     }
        // }
        
        stage('Build and Deploy with Docker') {
            steps {
                sh "docker-compose down --remove"
                sh "docker-compose up -d --build"
            }
        }
        
        stage('Push Docker Images to Registry') {
            steps {
                withDockerRegistry(url: 'https://index.docker.io/v1/', credentialsId: 'jenkins-dockerHub') {
                    sh "docker push visheshvishu/wanderlust_backend:latest"
                    sh "docker push visheshvishu/wanderlust_frontend:latest"
                }
            }
        }
        
        stage('Final Message') {
            steps {
                echo "Images pushed SUCCESSFULLY :)"
            }
        }
    }
}
