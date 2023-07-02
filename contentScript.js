document.addEventListener("DOMContentLoaded", function () {
  var openAllLinksButton = document.getElementById("openAllLinks");

  openAllLinksButton.addEventListener("click", function () {
    // Get all links with a specific class
    var links = Array.from(document.getElementsByClassName("tech"));

    // Extract the URLs from the link elements and store them in an array
    var urls = links.map(function (link) {
      return link.href;
    });

    // Open each URL in a new tab
    urls.forEach(function (url) {
      window.open(url, "_blank");
    });

    // Close the popup after opening the links (optional)
    window.close();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var openAllLinksButton = document.getElementById("openAllLinks");

  openAllLinksButton.addEventListener("click", function () {
    // Get all links with a specific class
    var links = Array.from(document.getElementsByClassName("favs"));

    // Extract the URLs from the link elements and store them in an array
    var urls = links.map(function (link) {
      return link.href;
    });

    // Open each URL in a new tab
    urls.forEach(function (url) {
      window.open(url, "_blank");
    });

    // Close the popup after opening the links (optional)
    window.close();
  });
});
