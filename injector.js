const robot = require('robotjs');
const { clipboard } = require('electron');

function typeText(text) {
  clipboard.writeText(text);

  setTimeout(() => {
    robot.keyTap('v', 'control'); //
  }, 500);
}

module.exports = { typeText };