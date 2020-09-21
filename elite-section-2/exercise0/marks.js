correctAnswers = [
    {
        'Question':'Who is the highest run scorer in one match in T20?',
        'a':'Chris Gayle',
        'b':'Virat Kohli',
        'c':'Rohit Sharma',
        'd':'Yuvraj Singh',
        'correctAnswer':'a'
    },
    {
        'Question':'Who is the first person to have hit six sixes in international cricket?',
        'a':'Chris Gayle',
        'b':'MS Dhoni',
        'c':'Jos Buttler',
        'd':'Yuvraj Singh',
        'correctAnswer':'d'
    },
    {
        'Question':'Who has the most maiden overs in T20I cricket?',
        'a':'Lasith Malinga',
        'b':'Jasprit Bumrah',
        'c':'Muttiah Muralitharan',
        'd':'Harbhajan Singh',
        'correctAnswer':'b'
    },
    {
        'Question':'Who is the only captain to have won all the three ICC trophies for his country?',
        'a':'Ricky Ponting',
        'b':'MS Dhoni',
        'c':'Brian Lara',
        'd':'Michael Clarke',
        'correctAnswer':'b'
    },
    // 'a', 'b', 'c', 'd'
]
// inputAnswers = ['a', 'b', 'c', 'd']
// checkExam(correctAnswers, inputAnswers)
questionForm = document.getElementById('questionForm')
questionsDiv = document.getElementById('questions')
for (a = 0; a < correctAnswers.length; a++){
    questionsDiv.innerHTML += a+1+'. '+correctAnswers[a].Question+'<br><select class="answerSelect" id="'+a+'"><option value="">Choose an Answer</option><option value="a">'+correctAnswers[a].a+'</option><option value="b">'+correctAnswers[a].b+'</option><option value="c">'+correctAnswers[a].c+'</option><option value="d">'+correctAnswers[a].d+'</option></select><br><br>'
}

function answerCall(e){
    e.preventDefault();
    var inputAnswers = []
    inputs = document.querySelectorAll('.answerSelect')
    for (i=0;i<inputs.length; i++){
        inputAnswers.push(inputs[i].value);
    };   
    console.log(inputAnswers)
    checkExam(correctAnswers, inputAnswers)
    return false;
}

function checkExam(correctAnswers, inputAnswers) {
    var marks = 0;
    for (var c = 0; c < correctAnswers.length; c++) {
        console.log("Input answer is: "+inputAnswers[c])
        console.log("Correct answer is: "+correctAnswers[c].correctAnswer)
        if (correctAnswers[c].correctAnswer == inputAnswers[c]) {
            marks += 4;
        } else if (inputAnswers[c] == "") {
            // Do nothing since the marks to be added/subtracted is 0
        } else if (inputAnswers[c] != correctAnswers[c].correctAnswer) {
            marks -= 1;
        }
        var finalMarks
        if (marks < 0) {
            finalMarks = 0;
        } else {
            finalMarks = marks
        }
    };
    console.log("Marks are: " + finalMarks)
    marksDiv= document.getElementById('marks-given')
    marksDiv.innerHTML = "Your marks are: "+finalMarks
};