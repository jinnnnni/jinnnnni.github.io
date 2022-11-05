const quotes = [
    {
        quote : "The way to get started is to quit talking and begin doing.",
        author : "Walt Disney"
    },
    {
        quote : "Life is what happens when you're busy making other plans.",
        author : "John Lennon"
    },
    {
        quote : "The world is a book and those who do not travel read only one page.",
        author : "Saint Augustine"
    },
    {
        quote : "Life is either a daring adventure or nothing at all.",
        author : "Hellen Keller"
    },
    {
        quote : "To Travel is to Live.",
        author : "Hans Christian Andersen"
    },
    {
        quote : "Travel expands the mind and fills the gap",
        author : "Sheda Savage"
    },
    {
        quote : "We wander for distraction, but we travel for fulfilment.",
        author : "Hilaire Belloc"
    },
    {
        quote : "Never go on trips with anyone you do not love.",
        author : "Hammingway"
    }
]




function setQuote (){


    const quoteh = document.getElementById("quote");
    const quote1 = document.getElementById("quote1");
    const quote2 = document.getElementById("quote2");

    const bigQuote = quotes[Math.floor(Math.random() * quotes.length)]
    const quote = bigQuote.quote;
    const author = bigQuote.author;

    const quoteLen = quote.length;
    const authorLen = author.length;

    quote1.innerText = quote;
    quote2.innerText = author;

    quote1.style.width = `${quoteLen}ch`;
    quote1.style.animation = `typing 2s steps(${quoteLen}) infinite, blink .5s step-end infinite alternate`;
    quote1.style.animationDuration = "7s";

}


setQuote();

setInterval(setQuote, 7000);
