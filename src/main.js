const { app, BrowserWindow } = require('electron/main')
const {  autoUpdater } = require('electron-updater');
const path = require('node:path')

autoUpdater.setFeedURL({
  provider: 'github',
  owner: 'tacticsweaver', // GitHub 계정 이름
  repo: 'electron-monitor'
})


autoUpdater.checkForUpdates()



function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})
autoUpdater.on('checking-for-update', ()=>{
  console.log('check')
})

autoUpdater.on('error', (error, message)=>{
  //console.log(error, message)
})

autoUpdater.on('update-downloaded', () => {
  console.log('Update downloaded!!!!!!!!');
  // 업데이트가 다운로드되었음을 알리고, 재시작을 요청할 수 있음
});

autoUpdater.on('update-available', () => {
  console.log('update available!!!!!!!')
});

app.on('window-all-closed', () => {
  console.log('allclose');
  console.log(process.platform)
  if (process.platform !== 'darwin') {
    app.quit()
  }
})