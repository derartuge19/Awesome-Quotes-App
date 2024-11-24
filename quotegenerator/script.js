let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    person: "Winston Churchill",
  },
  {
    quote: "Believe you can and you're halfway there.",
    person: "Theodore Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop.",
    person: "Confucius",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    person: "Steve Jobs",
  },
  {
    quote:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
    person: "Albert Einstein",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    person: "John Lennon",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "Nelson Mandela",
  },
  {
    quote: "You miss 100% of the shots you don't take.",
    person: "Wayne Gretzky",
  },
  {
    quote: "The purpose of our lives is to be happy.",
    person: "Dalai Lama",
  },
  {
    quote: "Get busy living or get busy dying.",
    person: "Stephen King",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    person: "Mae West",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    person: "Abraham Lincoln",
  },
  {
    quote:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    person: "Thomas Edison",
  },
  {
    quote:
      "Success usually comes to those who are too busy to be looking for it.",
    person: "Henry David Thoreau",
  },
  {
    quote: "Don’t be afraid to give up the good to go for the great.",
    person: "John D. Rockefeller",
  },
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    person: "Franklin D. Roosevelt",
  },
  {
    quote:
      "Happiness is not something ready made. It comes from your own actions.",
    person: "Dalai Lama",
  },
  {
    quote:
      "Hardships often prepare ordinary people for an extraordinary destiny.",
    person: "C.S. Lewis",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    person: "Mahatma Gandhi",
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
    person: "Robert Frost",
  },
  {
    quote: "The best way to predict your future is to create it.",
    person: "Peter Drucker",
  },
  {
    quote: "The mind is everything. What you think you become.",
    person: "Buddha",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    person: "Helen Keller",
  },
  {
    quote:
      "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    person: "Ralph Waldo Emerson",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    person: "Eleanor Roosevelt",
  },
  {
    quote: "You can't use up creativity. The more you use, the more you have.",
    person: "Maya Angelou",
  },
  {
    quote: "Everything you’ve ever wanted is on the other side of fear.",
    person: "George Addair",
  },
  {
    quote: "Opportunities don't happen, you create them.",
    person: "Chris Grosser",
  },
  {
    quote: "Act as if what you do makes a difference. It does.",
    person: "William James",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
