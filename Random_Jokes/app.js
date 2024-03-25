const jokes = [
    {
        "joke": "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
    },
    {
        "joke": "Algorithm: A word used by programmers when they don't want to explain how their code works.",
    },
    {
        "joke": "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
    },
    {
        "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
    },
    {
        "joke": "Have a great weekend!\nI hope your code behaves the same on Monday as it did on Friday.",
    },
    {
        "joke": "Knock knock.\nWho's there?\nRecursion.\nRecursion who?\nKnock knock.",
    },
    {
        "joke": "Debugging is like being the detective in a crime movie where you're also the murderer at the same time.",
    },
    {
        "joke": "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
    },
    {
        "joke": "Four engineers get into a car. The car won't start.\nThe Mechanical engineer says \"It's a broken starter\".\nThe Electrical engineer says \"Dead battery\".\nThe Chemical engineer says \"Impurities in the gasoline\".\nThe IT engineer says \"Hey guys, I have an idea: How about we all get out of the car and get back in\".",
    },
    {
        "joke": "UDP is better in the COVID era since it avoids unnecessary handshakes.",
    }
]

let rIndex = Math.floor(Math.random() * (jokes.length) );

console.log(rIndex)
// document.createElement(div)
document.getElementById("box").innerHTML = `<span class="titleJoke">Joke of The Day :</span> <br> <span class="jokeBox">{ ${jokes[rIndex].joke} }</span> <br> 
<button class = "btn" onclick="window.location.reload()">Laugh Again</button>
`;