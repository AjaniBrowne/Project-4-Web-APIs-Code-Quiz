var counter = 0;
var seconds = 60;
var timerId;
var score = 10;

console.log("Inside JS");
var questionArray = [
    {
        questions:"what is Javascript?",
        answers:["a","b","c","d"],
        rightAnswer:"d"
    },
    {
        questions:"What is CSS?",
        answers:[],
        rightAnswer:"Tool used to stylea webpage"
    },
    {
        questions:"What is HTML?",
        answers:[],
        rightAnswer:"The skeleton of a webpage"
    },
];

function timer()
{
    document.getElementById("start").style.display = "none";
    timerId = setInterval(function(){

        if(seconds === -1){
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
        if(seconds === -1 || counter === questionArray.length){
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
{

}



document.getElementById("startBtn").addEventListener('click', function(){
    timer();
    startQuiz();
});