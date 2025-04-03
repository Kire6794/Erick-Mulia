pipeline {
  agent any
  stages {
    stage('Build') {
        agent {
            docker {
                image 'node:22-alpine'
                reuseNode true
            }
        }
        steps {
            sh '''
                echo "=== Versions ==="
                node --version
                npm --version
            
                echo "=== Installing dependencies ==="
                npm ci
            
                echo "=== Building project ==="
                npm run build
            
                echo "=== Build artifacts ==="
                ls -la build/
            '''
        }
    }
    stage('Test') {
        agent {
            docker {
                image 'node:22-alpine'
                reuseNode true
            }
        }
        steps {
            sh 'npm test'
        }
    }
}
}
