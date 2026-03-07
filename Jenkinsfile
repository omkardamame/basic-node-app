pipeline {

	agent any

	environment {
		IMAGE_NAME = "omkardamame/basic-node-app"
	}

	stages {

		stage('Checkout Code') {
			steps {
				checkout scm
			}
		}

		stage('Create Docker Container') {
			agent { 
				docker {
					image 'node:22-alpine'
					args '-u root:root'
				}
			}
		}

		stage('Install Dependencies') {
			steps {
				sh 'npm install'
			}
		}

		stage('Run Tests using Jest package') {
			steps {
				sh 'npm test'
			}
		}

		stage('Build Docker Image') {
			steps {
				sh 'docker build -t $IMAGE_NAME:v1'
			}
		}

		stage('Push Docker Image') {
			steps {
				withCredentials([usernamePassword(
				credentialId: 'dockerhub',
				usernameVariable: 'USER',
				passwordVariable: 'PASS')]) {

					sh '''
					echo $PASS | docker login -u $USER --password-stdin docker push $IMAGE_NAME:v1
					'''
				}
			}
		}
	}
}

