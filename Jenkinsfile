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
                sh "docker-compose up -d"
            }
        }
    }
}
