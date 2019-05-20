node ('master') {

    git url: 'https://github.com/thatjs/karma-jasmine-unit-test.git'

    stage ('init') {
        sh 'npm install'
    }

    stage ('build') {
        sh 'gulp build'
    }

    stage ('test') {
        sh 'gulp test'
    }

}
