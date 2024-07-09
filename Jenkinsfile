pipeline {
    agent any

    stages {
        stage('clone') {
            steps {
                git url:"https://github.com/visheshvishu/demo-docker.git", branch: "main"
            }
        }
        stage('docker') {
            steps {
                sh "docker-compose down --remove"
                sh "docker-compose up -d --build"
            }
        }
        stage('End') {
            steps {
                echo "Pipeline is build successfully :)"
            }
        }
    }
}
