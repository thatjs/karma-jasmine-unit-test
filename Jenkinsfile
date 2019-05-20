node ('master') {

     git url: 'https://github.com/thatjs/karma-jasmine-unit-test.git'

    stage ('build') {
        sh 'gulp build'
    }

    stage ('test') {
        sh 'gulp test'
    }

}
