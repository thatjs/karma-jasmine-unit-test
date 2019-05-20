node ('master') {
     git url: 'https://github.com/thatjs/karma-jasmine-unit-test.git'

    stage ('build') {
        gulp build
    }

    stage ('test') {
        gulp test
    }

}
