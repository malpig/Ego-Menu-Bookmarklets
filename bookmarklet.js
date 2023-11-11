javascript:(function() {
  var scriptElement = document.createElement('script');
  var sourceUrl = 'https://raw.githubusercontent.com/malpig/Ego-Menu-Bookmarklets/main/Menu.js';
  fetch(sourceUrl)
    .then(response => response.text())
    .then(sourceCode => {
      scriptElement.text = sourceCode;
      document.body.appendChild(scriptElement);
    })
    .catch(error => console.error('Error fetching script:', error));
})();
