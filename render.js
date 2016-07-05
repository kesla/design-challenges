const cp = require('child_process');
const glob = require('glob');

const dirs = glob.sync(__dirname + '/project-*');

dirs.forEach(dir => {
  cp.exec(`sketchtool export artboards ${dir}/*.sketch --formats=svg --output=${dir}/.renders && git add ${dir}/.renders`, (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
      return;
    }
    console.log(dir);
    console.log(stdout);
    if (stderr) {
      console.log(stderr);
    }
  });
});
