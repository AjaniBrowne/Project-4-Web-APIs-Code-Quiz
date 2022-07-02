var counter = 0;
var seconds = 60;
var timerId;
var score = 10;
var finalAnswerCheck = 0;

var questionArray = [
    {
        questions:"what is Javascript?",
        answers:["Pizza","Tuna","Mark-up Language","Internet"],
        rightAnswer:"Mark-up Language"
    },
    {
        questions:"What is CSS?",
        answers:["Corvette","BMX","<Script>","Styling Tool"],
        rightAnswer:"Styling Tool"
    },
    {
        questions:"What is HTML?",
        answers:["Run DMC","Carrots","AJAX","The skeleton of a webpage"],
        rightAnswer:"The skeleton of a webpage"
    },
];

function timer()
{
    document.getElementById("start").style.display = "none";
    timerId = setInterval(function(){

        if(seconds <= -1){
            clearTimeout(timerId);
            showResults();
        }
        else{
            seconds--;
            document.getElementById("time").innerHTML = seconds;
        }
    }, 1000);
}

function startQuiz(){
    document.getElementById("questions").innerHTML = "";
 var h2 = document.createElement("h2");
h2.innerHTML = questionArray[counter].questions;
document.getElementById("questions").appendChild(h2);

for(var i=0; i<questionArray[counter].answers.length; i++){
    var btn = document.createElement("button");
    btn.textContent = questionArray[counter].answers[i];
    btn.setAttribute("value",questionArray[counter].answers[i] )
    btn.onclick = answerCheck;
    document.getElementById("questions").appendChild(btn);
    
}
}

function answerCheck(){
    if(this.value === questionArray[counter].rightAnswer)
    {
        score = score + 10;
        counter++;
        
        if(counter === questionArray.length){
            clearTimeout(timerId);
            showResults();
        }
        else{
            startQuiz();
        }
    }
    else
    {
        seconds = seconds - 5;
        counter++;
        if(seconds <= -1 || counter === questionArray.length){
            clearTimeout(timerId);
            showResults();
        }
        else
        {
            startQuiz();
        }
    }
}

function showResults()
{ document.getElementById("questions").innerHTML = `<h2> Score: ${seconds} </h2>
<input type="text" id = "finalInput" >`;
document.getElementById("submitBtn").disabled = false;


}

function saveHighScore()
{
   var user = document.getElementById("finalInput").value.trim();
   if(user){
    var previousScores = JSON.parse(window.localStorage.getItem("highScores")) || []
    var combo = {score:seconds,name:user}
    previousScores.push(combo);
    previousScores.sort(function(a,b){
        return b.score-a.score;
    })
    window.localStorage.setItem("highScores",JSON.stringify(previousScores));
    window.location.href = "high-scores.html"
   }

}




document.getElementById("startBtn").addEventListener('click', function(){
    timer();
    startQuiz();
});