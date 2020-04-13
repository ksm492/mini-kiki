// https://developer.chrome.com/extensions/background_pages
// https://stackoverflow.com/questions/27239280/

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    if (tab.url.indexOf("https://twitter.com/explore") != -1) {
      chrome.tabs.create({url:"social.html"});
    }
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    if (tab.url.indexOf("https://www.youtube.com/") != -1) {
      chrome.tabs.create({url:"social.html"});
    }
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    if (tab.url.indexOf("https://www.instagram.com/") != -1) {
      chrome.tabs.create({url:"social.html"});
    }
  }
});
