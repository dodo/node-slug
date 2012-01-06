path = require 'path'
{ run, compileScript, exec } = require 'muffin'

task 'build', 'compile coffeescript → javascript', (options) ->
    run
        options:options
        files:[
            "./src/**/*.coffee"
        ]
        map:
            'src/(.+).coffee': (m) ->
                compileScript m[0], path.join("lib" ,"#{m[1]}.js"), options

task 'test', "run the tests", (options) ->
    mocha = [
        "./node_modules/.bin/mocha"
        "./test/*.test.coffee"
        "--require should"
        "--reporter spec"
        "--colors"
    ].join ' '

    cmd = exec(mocha, options)[0]

    cmd.stdout.pipe process.stdout
    cmd.stderr.pipe process.stderr

    process.on 'SIGHUP', ->
        cmd.kill()
