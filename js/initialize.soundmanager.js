
soundManager.setup({
  url: 'swf/',
  // optional: use 100% HTML5 mode where available
  // preferFlash: false,
  onready: function() {
    // var mySound = soundManager.createSound({
    //   id: 'aSound',
    //   url: '/records/cd1.mp3'
    // });
    // mySound.play();
  },
  ontimeout: function() {
    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
  }
});