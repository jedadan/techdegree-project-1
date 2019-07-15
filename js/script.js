/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing

// Array of 'Brooklyn Nine Nine' quotes, can't wait for the next season!

let quotes = [
  {
    quote:
      "You should make me your campaign manager. I was born for politics! I have great hair and I love lying.",
    source: "Gina Linetti",
    citation: "Brooklyn Nine-Nine",
    episode: "Full Boyle",
    year: 2014
  },
  {
    quote:
      "A place where everybody knows your name is hell. You’re describing hell.",
    source: "Rosa Diaz",
    citation: "Brooklyn Nine-Nine",
    episode: "A Tale of Two Bandits",
    year: 2019
  },
  {
    quote:
      "Jake, piece of advice: just give up. It’s the Boyle way. It’s why our family crest is a white flag.",
    source: "Charles Boyle",
    citation: "Brooklyn Nine-Nine",
    episode: "NutriBoom",
    year: 2018
  },
  {
    quote: "If I die, turn my tweets into a book.",
    source: "Gina Linetti",
    citation: "Brooklyn Nine-Nine",
    episode: "Halloween III",
    year: 2015
  },
  {
    quote:
      "Where were you? You were gone for three hours. I know because I sang 'This Is How We Do It' 143 times.",
    source: "Jake Peralta",
    citation: "Brooklyn Nine-Nine",
    episode: "Sabatoge",
    year: 2015
  },
  {
    quote:
      "We've busted murderers; we've taken down cartels. But today we face the worst New York has to offer- the Fire Department.",
    source: "Jake Peralta",
    citation: "Brooklyn Nine-Nine",
    episode: "Operation: Broken Feather",
    year: 2014
  },
  {
    quote:
      "It's Gina's phone, leave me a voicemail. I won't check it 'cause it's not 1993.",
    source: "Gina Linetti",
    citation: "Brooklyn Nine-Nine",
    episode: "The Mole",
    year: 2014
  }
];

// Generates a random number to grab a quote at random

function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length);
  return quotes[randomNum];
}

// Create color variable and creates functions to change the background color to a random color in the array

let color = [
  "IndianRed",
  "MediumVioletRed",
  "DarkOrange",
  "Gold",
  "Lavender",
  "LightSteelBlue",
  "DimGray"
];

function randomColor() {
  let randomCol = Math.floor(Math.random() * color.length);
  return color[randomCol];
}

function changeColor() {
  let colorChange = randomColor();

  document.body.style.background = colorChange;
  document.getElementById("loadQuote").style.backgroundColor = colorChange;
}

// Creates function to display random quote and color to page

function printQuote() {
  changeColor();
  let randomQuote = getRandomQuote();
  let html = "";
  html += '<p class="quote">' + randomQuote["quote"] + "</p>";
  html += '<p class="source">' + randomQuote["source"];

  if (randomQuote["citation"] !== undefined) {
    html += '<span class="citation">' + randomQuote["citation"] + "</span>";
  }

  if (randomQuote["episode"] !== undefined) {
    html += '<span class="episode">' + randomQuote["episode"] + "</span>";
  }

  if (randomQuote["year"] !== undefined) {
    html += '<span class="year">' + randomQuote["year"] + "</span>";
  }

  html += "</p>";

  document.getElementById("quote-box").innerHTML = html;
}

// 5 second interval in between quotes

setInterval(printQuote, 5000);

// Button functionality to display a new quote

document
  .getElementById("loadQuote")
  .addEventListener("click", printQuote, false);
