const quoteText = document.querySelector(".quote");
authorName = document.querySelector(".authorname");
quoteBtn = document.querySelector("button");

function randomQuote() {
  //   console.log("Clicked");
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quoteText.innerHTML = result.content;
      authorName.innerHTML = result.author;
    });
}

quoteBtn.addEventListener("click", randomQuote);
