// contentScript.js

function openLinks(links) {
  links.forEach(function (link) {
    chrome.tabs.create({ url: link });
  });
}

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "openAllLinks") {
    openLinks(message.links);
  }
});
