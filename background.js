// Listen for shortcut commands
chrome.commands.onCommand.addListener((command) => {
    chrome.tabs.query({ url: "*://*.youtube.com/*" }, (tabs) => {
      if (tabs.length > 0) {
        tabs.forEach((tab) => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: controlYouTubePlayback,
            args: [command]
          });
        });
      }
    });
  });
  
  // Handle messages from the popup
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    chrome.tabs.query({ url: "*://*.youtube.com/*" }, (tabs) => {
      if (tabs.length > 0) {
        tabs.forEach((tab) => {
          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: controlYouTubePlayback,
            args: [message.command]
          });
        });
      }
    });
  });
  
  // Function to control YouTube playback
  function controlYouTubePlayback(command) {
    const video = document.querySelector('video');
    if (!video) return;
  
    switch (command) {
      case 'play-pause':
        if (video.paused) {
          video.play();
        } else {
          video.pause();
        }
        break;
      case 'prev-video':
        document.querySelector('.ytp-prev-button').click();
        break;
      case 'rewind-5-seconds':
        video.currentTime = Math.max(0, video.currentTime - 5);
        break;
      case 'forward-5-seconds':
        video.currentTime = Math.min(video.duration, video.currentTime + 5);
        break;
      default:
        console.log('Unknown command:', command);
    }
  }
  