export default function randomQuote () {
    return quotes[Math.floor(Math.random() * quotes.length)]
}

const quotes = [
   "Break your goal into smaller pieces." ,
   "Immediately do any task that would only take one minute to complete",
   "Keep your phone out of sight while you're working",
   "Protect your thinking time",
   "Do the one thing that would make you satisfied with your day",
   "Sharpen the saw",
   "You miss 100% of the shots you don’t take.",
   "Sometimes, things may not go your way, but the effort should be there every single night.",
   'He who is not courageous enough to take risks will accomplish nothing in life.',
   'Action is the foundational key to all success.',
   'Amateurs sit and wait for inspiration, the rest of us just get up and go to work.',
   'The critical ingredient is getting off your butt and doing something. ',
]