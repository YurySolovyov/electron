const { app, shell } = require('electron');
const fs = require('fs');
const path = require('path');


var count = 0;
setInterval(() => {
  console.log(count++);
  if (count === 10) {
    app.quit();
  }
}, 20);

app.on('ready', function() {
  const filepath = path.join(__dirname, 'test.md');
  fs.writeFileSync(filepath, '# Hello');
  shell.moveItemToTrash(filepath, function(success) {
    console.log('Done: ', success);
    app.quit();
  });
});
