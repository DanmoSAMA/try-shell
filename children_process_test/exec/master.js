// child_process.exec 使用子进程 执行 命令，缓存子进程的输出，并将子进程的输出以回调函数参数的形式返回

const fs = require('fs')
const child_process = require('child_process')

for (var i = 0; i < 3; i++) {
  // 创建子进程，执行 node support i(args)
  var workerProcess = child_process.exec(
    'node support.js ' + i,
    // 子进程的输出被缓存到stdout
    function (error, stdout, stderr) {
      if (error) {
        console.log(error.stack)
        console.log('Error code: ' + error.code)
        console.log('Signal received: ' + error.signal)
      }
      // 在此处输出
      console.log('stdout: ' + stdout)
      console.log('stderr: ' + stderr)
    }
  )

  workerProcess.on('exit', function (code) {
    console.log('子进程已退出，退出码 ' + code)
  })
}
