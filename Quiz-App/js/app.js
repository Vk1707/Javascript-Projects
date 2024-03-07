//Question Bank Create Using Array
const questions = [
    {
        'que' : 'What is HTML Full Form ?',
        'a': 'Hyper Text Mail Language',
        'b': 'Hyper Term Market Lang',
        'c': 'Hyper Text Markup Language',
        'd': 'High Time Mail Language',
        'correct': 'c'
    },
    {
        'que' : 'CSS Stands For : ',
        'a' : 'Color and Style Sheet',
        'b' : 'Cascading Style Sheet',
        'c' : 'Cascade Style Sheet',
        'd' : 'None Of The Above',
        'correct' : 'b'
    },
    {
        'que' : 'PHP Stands For : ',
        'a' : 'Hypertext Preprocessor',
        'b' : 'Pretext Hypertext Preprocessor',
        'c' : 'Personal Home Processor',
        'd' : 'None Of The Above',
        'correct' : 'a'
    },
    {
       'que' : 'The correct sequence of HTML tags for starting a webpage is -',
        'a' :'Head, Title, HTML, body',
        'b' : 'HTML, Body, Title, Head',
        'c' : 'HTML, Head, Title, Body',
        'd' : 'Head, HTML, Title, Body',
        'correct' : 'c'
    },
    {
       'que' : 'Which of the following element is responsible for making the text bold in HTML?',
        'a' :'<pre>',
        'b' : '<b>',
        'c' : '<a>',
        'd' : '<br>',
        'correct' : 'b'
    },
]
// Set Index 0 for get question 1
let index = 0;

//Return Total No. of Question 
let total = questions.length;

let right = 0, wrong = 0;

// Select all input radio options
const optionInput = document.querySelectorAll(".options")

//Function For LoadQuestion
const loadQuestion = () => {
    //call end quiz function
    if(index === total){
        return endQuiz();
    }
    //Get Question data from array
    const data = questions[index];

    //Display Question to User From Array
    document.getElementById("question").innerText =`${index + 1}) ${data.que}`;

    //Reset checked status of radio button after each questions
    resetOption();

    //display options from array dynamically
    optionInput[0].nextElementSibling.innerText = ` a) ${data.a}`;
    optionInput[1].nextElementSibling.innerText = ` b) ${data.b}`;
    optionInput[2].nextElementSibling.innerText = ` c) ${data.c}`;
    optionInput[3].nextElementSibling.innerText = ` d) ${data.d}`;
}

//Submit Question And Check Correct Answer
const submitQuiz = () => {
    const data = questions[index];
    const ans  = getAnswer();
    //Check Checked Value And Correct Value is Equal
    if (ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    //load next question
    index++;
    loadQuestion();
    return;
}

//Get Answer Checked Value
const getAnswer = () => {
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

//Reset Function For Radio Button Checked Status
const resetOption = () => {
    optionInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

// Return Result 
const endQuiz = () => {
    document.getElementById('result').removeAttribute("hidden");
    document.getElementById('result').innerHTML=`
    <div style = "text-align:center">
     <h2> Thank You For Playing Quiz <br> Quiz is Ended </h2>
     <h2> ${right} are correct out of ${total} </h2>
     <button id="btn" onclick="reQuiz()" type="submit"> Play Again </button>
     </div> 
     `
     queBox.classList.add("disp-queBox");
     
     return;
}

//ReStart Quiz
const reQuiz = () => {
    document.getElementById('result').setAttribute("hidden", "");
    queBox.classList.remove("disp-queBox");

    //Reset Index And Right Answer Value
    index = 0;
    right = 0;
    loadQuestion();
}

// intial function
loadQuestion();