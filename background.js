// https://developer.chrome.com/extensions/background_pages
// https://stackoverflow.com/questions/27239280/


//Social Media Url Recognition
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
    } else if (tab.url.indexOf("netflix") != -1) {
      chrome.tabs.create({url:"social.html"});
    } else if (tab.url.indexOf("disneyplus") != -1) {
      chrome.tabs.create({url:"social.html"});
    }
  }
});


//Shopping Url Recognition
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

//School Url Recognition
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    if (tab.url.indexOf("drive.google") != -1) {
      chrome.tabs.create({url:"school.html"});
    } else if (tab.url.indexOf("mail.google") != -1) {
      chrome.tabs.create({url:"school.html"});
    } else if (tab.url.indexOf("newclasses") != -1) {
      chrome.tabs.create({url:"school.html"});
    } else if (tab.url.indexOf("zoom") != -1) {
      chrome.tabs.create({url:"school.html"});
    }
  }
});
