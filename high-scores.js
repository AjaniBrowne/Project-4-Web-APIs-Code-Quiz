console.log("test")
const highScoresList = document.querySelector("#finalScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

var content= highScores.map((score)=>{
    return `<li class="high-score"> ${score.name} - ${score.score} </li>`
}).join("")
highScoresList.innerHTML = content;
console.log(content)