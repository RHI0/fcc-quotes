var GLOBAL = {};
GLOBAL.quoteUsed = '';
GLOBAL.quote = '';
GLOBAL.authorsArray = [];
GLOBAL.authors = {
  "Africa - aka, Kyle Ross": [
    "Some days I wish I was gay.",
    "Today I vomited out of my ass",
  ]
}
for (var author in GLOBAL.authors) {
  if (GLOBAL.authors.hasOwnProperty(author)) {
    GLOBAL.authorsArray.push(author);
  }
};
//https://www.aaastateofplay.com/life-advice-from-50-beloved-characters-in-kids-entertainment/
function getRandomQuote() {
  // pick a new author
  var newAuthor = GLOBAL.authorsArray[Math.floor(Math.random() * (GLOBAL.authorsArray.length - 0) + 0)];
  //if the newauthor is the same as the last author, get some one else.
  if (GLOBAL.authorUsed == newAuthor) {
    while (GLOBAL.authorUsed == newAuthor) {
      newAuthor = GLOBAL.authorsArray[Math.floor(Math.random() * (GLOBAL.authorsArray.length - 0) + 0)]
    }
  }
  GLOBAL.authorUsed = newAuthor;
  var quotes = GLOBAL.authors[newAuthor];
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length - 0) + 0];
  var quote = {
    text: randomQuote,
    author: GLOBAL.authorUsed
  };
  GLOBAL.quote = quote.text;
  return quote;
}
$(function () {
  var loadedQuote = getRandomQuote();
  $('#text').text(loadedQuote.text);
  $('#author').text(loadedQuote.author);
  $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hastags=quotes&related=freecodecamp&text=' + loadedQuote.text);
  $('#newquote').click(function () {
    lastQuote = GLOBAL.quoteUsed.toString();
    var newQuote = getRandomQuote();
    //$('#text').text(getRandomQuote(quotes));
    $('#text').text(newQuote.text);
    $('#author').text(newQuote.author);
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hastags=quotes&related=freecodecamp&text=' + newQuote.text);
  });
  /*$('#tweet').click(function () {
    var hrefForTweeting = 'https://twitter.com/intent/tweet?hastags=quotes&related=freecodecamp&text=';
    window.open(hrefForTweeting + GLOBAL.quote);
  });*/
})
