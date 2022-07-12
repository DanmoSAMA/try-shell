// child_process.spawn 使用指定的命令行参数创建新进程，创建的进程任人处置

const fs = require('fs')
const child_process = require('child_process')

for (var i = 0; i < 3; i++) {
  // 创建子进程，spawn的意思是产生
  var workerProcess = child_process.spawn('node', ['support.js', i])

  // 暂时没查到此处第一个参数的含义
  workerProcess.stdout.on('data', function (data) {
    console.log('stdout: ' + data)
  })

  workerProcess.stderr.on('data', function (data) {
    console.log('stderr: ' + data)
  })

  workerProcess.on('close', function (code) {
    console.log('子进程已退出，退出码 ' + code)
  })
}
