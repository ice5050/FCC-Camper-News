$(document).ready(function() {
  updateNews();
});

function updateNews() {
  clearNews();
  FreecodecampService.getNews().done(function(data) {
    for (var i = 0; i < data.length; i++) {
      if (i === 0) {
        updateTopNews(data[i]);
      }else if (i % 2 !== 0) {
        addNewsToLeftArticleList(data[i]);
      }else {
        addNewsToRightArticleList(data[i]);
      }
    }
  });
}

function updateTopNews(news) {
  var $topNews = $(".top-news > div");
  $topNews.html('<a href="' + news.link + '">'
        + '<div class="pure-g article">'
          + '<div class="pure-u-12-24 article-img">'
            + '<img class="pure-img" src="' + (news.image || "http://i.imgur.com/r9HVrrx.png") + '">'
          + '</div>'
          + '<div class="pure-u-12-24 article-content">'
            + '<p class="headline">' + news.headline + '</p>'
            + '<p class="info">'
              + '<span class="like"><i class="fa fa-heart"></i> ' + news.rank + '</span>'
              + '<span class="author"><span class="by">by</span> ' + news.author.username + '</span>'
            + '</p>'
          + '</div>'
        + '</div>'
      + '</a>');
}

function addNewsToLeftArticleList(news) {
  var $leftArticleList = $(".article-list-left");
  $leftArticleList.append('<a href="' + news.link + '">'
        + '<div class="pure-g article">'
          + '<div class="pure-u-8-24 article-img">'
            + '<img class="pure-img" src="' + (news.image || "http://i.imgur.com/r9HVrrx.png") + '">'
          + '</div>'
          + '<div class="pure-u-16-24 article-content">'
            + '<p class="headline">' + news.headline + '</p>'
            + '<p class="info">'
              + '<span class="like"><i class="fa fa-heart"></i> ' + news.rank + '</span>'
              + '<span class="author"><span class="by">by</span> ' + news.author.username + '</span>'
            + '</p>'
          + '</div>'
        + '</div>'
      + '</a>');
}

function addNewsToRightArticleList(news) {
  var $rightArticleList = $(".article-list-right");
  $rightArticleList.append('<a href="' + news.link + '">'
        + '<div class="pure-g article">'
          + '<div class="pure-u-8-24 article-img">'
            + '<img class="pure-img" src="' + (news.image || "http://i.imgur.com/r9HVrrx.png") + '">'
          + '</div>'
          + '<div class="pure-u-16-24 article-content">'
            + '<p class="headline">' + news.headline + '</p>'
            + '<p class="info">'
              + '<span class="like"><i class="fa fa-heart"></i> ' + news.rank + '</span>'
              + '<span class="author"><span class="by">by</span> ' + news.author.username + '</span>'
            + '</p>'
          + '</div>'
        + '</div>'
      + '</a>');
}

function clearNews() {
  var $topNews = $(".top-news > div");
  var $leftArticleList = $(".article-list-left");
  var $rightArticleList = $(".article-right-list");

  $topNews.html();
  $leftArticleList.html();
  $rightArticleList.html();
}
