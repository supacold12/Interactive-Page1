function changeText() {
    document.getElementById('text').innerHTML = "You clicked the button! Nice job.";
    document.getElementById('text').style.color = "blue";
}

function changeColor() {
    document.getElementById('box').style.backgroundColor = "pink";
}

function resizeBox() {
    document.getElementById('box').style.width = "400px";
    document.getElementById('box').style.height = "150px";
}

function askQuestion() {
    var answer = confirm("Do you like this page?");
    document.getElementById('result').innerHTML = answer;
}
