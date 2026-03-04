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

