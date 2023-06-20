chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "openAllLinks") {
    var urls = message.urls;

    // Open each URL in a new tab
    urls.forEach(function (url) {
      chrome.tabs.create({ url: url });
    });
  }
});
