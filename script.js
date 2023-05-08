let btn = document.querySelector ('.new-quote');
let quote = document.querySelector ('.quote');
let person = document.querySelector ('.person');

const quotes = [
    {
        quote: `" You're braver than you believe, and stronger than you seem, and smarter than you think."`,
        person : ` "A.A. Mine"`
    },
    {
        quote: `"Keep your face to the sunshine and you cannot see a shadow."`,
        person : ` "Helen Keller"`
    },
    {
        quote: `" In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact."`,
        person : ` "Les Brown"`
    },
    {
        quote: `" The only time you fail is when you fall down and stay down."`,
        person : ` "Stephen Richards"`
    },
    {
        quote: `" Positive anything is better than negative nothing."`,
        person : ` "Elbert Hubbard"`
    },
    {
        quote: `" Optimism is a happiness magnet. If you stay positive good things and good people will be drawn to you."`,
        person : ` "Mary Lou Retton"`
    },
    {
        quote: `" It’s not whether you get knocked down, it’s whether you get up."`,
        person : ` "Vince Lombardi"`
    },
    {
        quote: `" The struggle you’re in today is developing the strength you need tomorrow."`,
        person : ` "Robert Tew"`
    }

];

btn.addEventListener('click', function () {
     let random = Math.floor(Math.random() * quotes.length);
     quote.innerHTML = quotes[random]. quote;
     person.innerHTML = quotes[random]. person;
})