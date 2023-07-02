document.addEventListener("DOMContentLoaded", function () {
  var openAllLinksButton = document.getElementById("openAllLinks");

  openAllLinksButton.addEventListener("click", function () {
    // Get all links with a specific class
    var links = Array.from(document.getElementsByClassName("tech"));

    // Extract the URLs from the link elements and store them in an array
    var urls = links.map(function (link) {
      return link.href;
    });

    // Send a message to the background script with the URLs
    chrome.runtime.sendMessage({ action: "openAllLinks", urls: urls });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var openEssentialLinks = document.getElementById("openEssentialLinks");

  openEssentialLinks.addEventListener("click", function () {
    // Get all links with a specific class
    var links = Array.from(document.getElementsByClassName("favs"));

    // Extract the URLs from the link elements and store them in an array
    var urls = links.map(function (link) {
      return link.href;
    });

    // Send a message to the background script with the URLs
    chrome.runtime.sendMessage({ action: "openEssentialLinks", urls: urls });
  });
});
