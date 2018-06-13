const spawn = require("cross-spawn");

(function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();

spawn('echo', ['Starting this nasty little Linux test'], { stdio: 'inherit' });

spawn('echo', ["$PATH"], { stdio: 'inherit' });

spawn('echo', [process.env.PATH], { stdio: 'inherit' })

// spawn('mp4hls', ['--help'], { stdio: 'inherit' })

spawn('mp4hls', ['--help'], { stdio: 'inherit' })


// spawn('echo', ['Here is the Windows test'], { stdio: 'inherit' });

// spawn('path', { stdio: 'inherit' });

process.exit()