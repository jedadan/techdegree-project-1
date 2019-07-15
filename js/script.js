/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
let quotes = [
  {
    quote:
      '"You should make me your campaign manager. I was born for politics! I have great hair and I love lying."',
    source: "Gina Linetti",
    citation: "Brooklyn Nine-Nine",
    year: 2014
  },
  {
    quote:
      "“A place where everybody knows your name is hell. You’re describing hell.”",
    source: "Rosa Diaz",
    citation: "Brooklyn Nine-Nine",
    year: 2019
  },
  {
    quote:
      "“Jake, piece of advice: just give up. It’s the Boyle way. It’s why our family crest is a white flag.”",
    source: "Charles Boyle",
    citation: "Brooklyn Nine-Nine",
    year: 2018
  },
  {
    quote: "“If I die, turn my tweets into a book.”",
    source: "Gina Linetti",
    citation: "Brooklyn Nine-Nine",
    year: 2015
  },
  {
    quote:
      "\"Where were you? You were gone for three hours. I know because I sang 'This Is How We Do It' 143 times.\"",
    source: "Jake Peralta",
    citation: "Brooklyn Nine-Nine",
    year: 2015
  },
  {
    quote:
      "\"We've busted murderers; we've taken down cartels. But today we face the worst New York has to offer- the Fire Department.\"",
    source: "Jake Peralta",
    citation: "Brooklyn Nine-Nine",
    year: 2014
  },
  {
    quote:
      "\"It's Gina's phone, leave me a voicemail. I won't check it 'cause it's not 1993.\"",
    source: "Gina Linetti",
    citation: "Brooklyn Nine-Nine",
    year: 2014
  }
];

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Use the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * 7) + 1;
  return quotes[randomNum];
}

/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  let randomQuote = getRandomQuote();
  let html = "";
  html =
    '<p class="quote">' +
    randomQuote["quote"] +
    "</p>" +
    '<p class="source">' +
    randomQuote["source"];

  if (randomQuote["citation"] !== undefined) {
    html += '<span class="citation">' + randomQuote["citation"] + "</span>";
  }

  if (randomQuote["year"] !== undefined) {
    html += '<span class="year">' + randomQuote["year"] + "</span>";
  }

  html += "</p>";

  document.getElementById("quote-box").innerHTML = html;
}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
