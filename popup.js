document.getElementById('playPause').addEventListener('click', () => {
    chrome.runtime.sendMessage({ command: 'play-pause' });
  });
  
  document.getElementById('prevVideo').addEventListener('click', () => {
    chrome.runtime.sendMessage({ command: 'prev-video' });
  });
  
  document.getElementById('rewind').addEventListener('click', () => {
    chrome.runtime.sendMessage({ command: 'rewind-5-seconds' });
  });
  
  document.getElementById('forward').addEventListener('click', () => {
    chrome.runtime.sendMessage({ command: 'forward-5-seconds' });
  });
  