// child_process.fork 是 spawn() 方法的特殊形式，用于创建进程

const fs = require('fs')
const child_process = require('child_process')

for (var i = 0; i < 3; i++) {
  var worker_process = child_process.fork('support.js', [i])

  worker_process.on('close', function (code) {
    console.log('子进程已退出，退出码 ' + code)
  })
}
