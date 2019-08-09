function populate() {
    if (quiz.isEnded()) {

        // showScores();

    } else {
        // show questions
        var elements = document.getElementById("question");
        elements.innerHTML = quiz.getQuestionIndex().text;
    }
}


var questions = [
    new Questions("which one is not an object oriented programming language?", ["java", "c#", "c++", "c"], "c"),
    new Questions("which language is used for styling web pages?", ["HTML", "Jquery", "CSS", "XML"], "CSS"),
    new Questions("There are --------- manin components of Object Oriented Programming?", ["1", "6", "2", "4"], "4"),
    new Questions("which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Questions("MVC is a --------?", ["Language", "Library", "Framework", "All"], "Framework")
];

var quiz = new Quiz(questions);

populate();