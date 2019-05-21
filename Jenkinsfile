node ('master') {

    git url: 'https://github.com/thatjs/karma-jasmine-unit-test.git'

    stage ('init') {
        sh 'source .nvm/nvm.sh'
        sh 'nvm use'
        sh 'npm install'
    }

    stage ('build') {
        sh 'gulp build'
    }

    stage ('test') {
        sh 'gulp test'
    }

}
