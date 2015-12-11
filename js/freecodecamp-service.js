var FreecodecampService = (function() {
  var FREECODECAMP_NEWS_API = "http://www.freecodecamp.com/news/hot";
  return {
    getNews: getNews
  };

  function getNews() {
    return $.getJSON(FREECODECAMP_NEWS_API);
  }
})();
