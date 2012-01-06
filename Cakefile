path = require 'path'
{ run, compileScript } = require 'muffin'
{spawn, exec} = require 'child_process'

task 'build', 'compile coffeescript → javascript', (options) ->
    run
        options:options
        files:[
            "./src/**/*.coffee"
        ]
        map:
            'src/(.+).coffee': (m) ->
                compileScript m[0], path.join("lib" ,"#{m[1]}.js"), options

task 'test', ->
	command = './node_modules/.bin/mocha ./test/*.test.coffee --require should --reporter spec'
	cmd = spawn '/bin/sh', ['-c', command]
	cmd.stdout.on 'data', (data) -> process.stdout.write data
	cmd.stderr.on 'data', (data) -> process.stderr.write data
	process.on 'SIGHUP', -> cmd.kill()