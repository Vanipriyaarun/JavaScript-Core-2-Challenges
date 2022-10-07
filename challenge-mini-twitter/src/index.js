let tweet = document.getElementById("tweetInput");
let tweetBtn=document.getElementById("submitBtn");
let tweetOutput=document.getElementById("tweet-list");
tweetBtn.addEventListener("click", addtweet);

function addtweet(e) {
  e.preventDefault();
  let tweetList=document.createElement('li');
  tweetList.innerHTML=tweet.value;
  tweetOutput.appendChild(tweetList);
  tweet.value=""
  }