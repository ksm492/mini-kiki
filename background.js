// https://developer.chrome.com/extensions/background_pages
// https://stackoverflow.com/questions/27239280/

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    if (tab.url.indexOf("twitter") != -1) {
      chrome.tabs.create({url:"social.html"});
    } else if (tab.url.indexOf("youtube") != -1) {
      chrome.tabs.create({url:"social.html"});
    } else if (tab.url.indexOf("instagram") != -1) {
      chrome.tabs.create({url:"social.html"});
    } else if (tab.url.indexOf("tiktok") != -1) {
      chrome.tabs.create({url:"social.html"});
    }
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    if (tab.url.indexOf("amazon") != -1) {
      chrome.tabs.create({url:"shopping.html"});
    } else if (tab.url.indexOf("urbanoutfitters") != -1) {
      chrome.tabs.create({url:"shopping.html"});
    } else if (tab.url.indexOf("ae") != -1) {
      chrome.tabs.create({url:"shopping.html"});
    } else if (tab.url.indexOf("ulta") != -1) {
      chrome.tabs.create({url:"shopping.html"});
    } else if (tab.url.indexOf("sephora") != -1) {
      chrome.tabs.create({url:"shopping.html"});
    } else if (tab.url.indexOf("brandymelville") != -1) {
      chrome.tabs.create({url:"shopping.html"});
    }
  }
});
