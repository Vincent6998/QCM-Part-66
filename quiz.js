const allQuestions = [
{
	"question": "SCF member system cards are directly powered by:",
	"choices" :[
	"A) The preregulator",
	"B) The linear regulator",
	"C) The linear Output Monitor/Control"
	],
	"correctAnswer": "B",
  "category": "ATA 31"
},
{
	"question": "An AIMS cabinet is connected to all theses Arinc 629 Buses:",
	"choices" :[
	"A) Systems",
	"B) Systems and Flight Control",
	"C) Systems, Flight Controls and intercabinet"
	],
	"correctAnswer": "B",
  "category": "ATA 31"
},
{
	"question": "To dataload the ACMF in a AIMS 2 cabinet you select:",
	"choices" :[
	"A) the IOMs",
	"B) the CPM STD",
	"C) The CPM COMM"
	],
	"correctAnswer": "B",
  "category": "ATA 31"
},
{
	"question": "Each CPM is able to compute:",
	"choices" :[
	"A) FMCF and TMCf",
	"B) DCGF and UTCF",
	"C) ACMF and CMCF"
	],
	"correctAnswer": "B",
  "category": "ATA 31"
},
{
	"question": "The Power Conditioning Modules supply:",
	"choices" :[
	"A) all CPM and IOM power demands in the left or right AIMS",
	"B) all CPM and IOM backup power demand in both AIMS",
	"C) 115VAC to the CPMGG to keep DU ON if MAin AC Buses are lost"
	],
	"correctAnswer": "A",
  "category": "ATA 31"
},
{
    "question": "The inboard DU normally display:",
    "choices": [
        "A) Nd or Mfd format",
        "B) EICAS format",
        "C) PFD format"
    ],
    "correctAnswer": "A",
  "category": "ATA 31"
},
{
    "question": "To install a lower center DU you have to :",
    "choices": [
        "A) Remove the upper Du first",
        "B) move the control column rearward",
        "C) Turn the DU by 180*"
    ],
    "correctAnswer": "C",
  "category": "ATA 31"
},
{
    "question": "Data display on ND and PFD are controlled by:",
    "choices": [
        "A) EFIS Control Panel",
        "B) Display Control Panel",
        "C) Instrument Source Selected Panel"
    ],
    "correctAnswer": "A",
  "category": "ATA 45"
},
{
    "question": "The EICAS format can manually be switched to:",
    "choices": [
        "A) The lower center DU",
        "B) either the left or right inboard DU",
        "C) either the left or right outboard DU"
    ],
    "correctAnswer": "B",
  "category": "ATA 45"
},
{
    "question": "If the DSP is selected to a DU which is displaying EICAS:",
    "choices": [
        "A) Only the ENG and STAT format select switches remain active",
        "B) Only the ENG, FUEL and AIR format select switch remain active ",
        "C) Only the HYD, ELEC, FUEL and AIR format select switch remain active"
    ],
    "correctAnswer": "B",
  "category": "ATA 45"
},

{
    "question": "A CPM/GG normally sends DATA to:",
    "choices": [
        "A) a pair of Display Unit (on the same side : LH, CTR, or RH)",
        "B) 3 Display Unit ",
        "C) all display Unit"
    ],
    "correctAnswer": "A",
  "category": "ATA 45"
},
{
    "question": "If there is no PDS fault and you select the ALTN position on the RH ISSP DSPL CTRL switch:",
    "choices": [
        "A) nothing change ",
        "B) the PFD format moves to the RH INBD DU",
        "C) the RH INBD AND OUTBD DU switch to another CPM/GG"
    ],
    "correctAnswer": "C",
  "category": "ATA 45"
},
{
    "question": "The cursor Control Device light are wired to:",
    "choices": [
        "A) the OPAS",
        "B) the IOM",
        "C) the CPM/GG"
    ],
    "correctAnswer": "A",
  "category": "ATA 45"
},
{
    "question": "The alternate RH EFIS control panel function can be accessed from:",
    "choices": [
        "A) any CDU",
        "B) The Onside CDU",
        "C) The DSP"
    ],
    "correctAnswer": "B",
  "category": "ATA 45"
},
{
    "question": "If the Right EFIS CTL PNL and CDU are failed :",
    "choices": [
        "A) The F/O cannot control the EFIS anymore ",
        "B) the center CDU is a backup for a failed CDU for the EFIS control panel ",
        "C) the left EFIS CTL Panel control the Right EFIS"
    ],
    "correctAnswer": "B",
  "category": "ATA 45"
},
{
    "question": "A CPM/GG can generate:",
    "choices": [
        "A) 3 different display format : 1 essential and 2 critical ",
        "B) 2 different display format : 1 essential and 1 critical",
        "C) 3 different display format : 2 essential and 1 critical "
    ],
    "correctAnswer": "A",
  "category": "ATA 45"
},
{
    "question": "Snapchot created with the EICAS event switch are recorded by:",
    "choices": [
        "A) the CPM/GG",
        "B) the CMCS ",
        "C) the QAR"
    ],
    "correctAnswer": "A",
  "category": "ATA 45"
},
  ];
let currentQuestion = 0;
let score = 0;
let timer;
let selectedQuestions;
let usedQuestions = [];
let allQuestionsCopy = [...allQuestions];
let questions = [];
let userAnswers = [];

const numberOfQuestions = 20;

function filterQuestionsByCategory(categories) {
    return allQuestions.filter(question => categories.includes(question.category));
}

function displayCategories() {
    console.log("Displaying categories...");
    let categories = [...new Set(allQuestions.map(question => question.category))];
    let categoriesHTML = categories.map(category => `<label><input type="checkbox" value="${category}">${category}</label>`).join("");
    let categoriesElement = document.getElementById("categories");
    console.log(categoriesElement); // Vérifier si l'élément existe
    if (categoriesElement) {
        console.log("Categories element found.");
        categoriesElement.innerHTML = categoriesHTML;
    } else {
        console.log("Categories element not found.");
    }
}

function startQuiz(selectedCategories) {
    console.log("Starting quiz...");
    selectedQuestions = filterQuestionsByCategory(selectedCategories);
    console.log("Selected questions:", selectedQuestions);
    allQuestionsCopy = [...selectedQuestions];
    shuffleQuestions();
    document.getElementById("startButton").style.display = "none";
    document.getElementById("submitButton").style.display = "block";
    document.getElementById("quiz").style.display = "block";
    displayQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffleQuestions() {
    if (allQuestionsCopy.length === 0) {
        allQuestionsCopy = [...usedQuestions];
        usedQuestions = [];
    }
    let remainingQuestions = allQuestionsCopy.filter(question => !usedQuestions.includes(question));
    shuffleArray(remainingQuestions);
    questions = remainingQuestions.slice(0, numberOfQuestions);
    usedQuestions = usedQuestions.concat(questions);
}

function displayQuestion() {
    console.log("Displaying question...");
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    if (currentQuestion >= questions.length) {
        displayFinalResult();
    } else {
        questionElement.innerHTML = `Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`;
        let choicesHTML = "";
        questions[currentQuestion].choices.forEach((choice) => {
            choicesHTML += `<label><input type="radio" name="choice" value="${choice}"> ${choice}</label><br>`;
        });
        choicesElement.innerHTML = choicesHTML;

        document.getElementById("submitButton").style.display = "block";
        document.getElementById("nextButton").style.display = "none";
    }
}

function showResult(isCorrect, selectedChoice) {
    const choices = document.querySelectorAll("input[type='radio']");
    const correctChoice = questions[currentQuestion].correctAnswer;

    const userAnswer = selectedChoice.value;
    userAnswers.push({
        question: questions[currentQuestion].question,
        choices: questions[currentQuestion].choices,
        correctAnswer: correctChoice,
        userAnswer: userAnswer
    });

    choices.forEach((choice) => {
        choice.disabled = true;
        const label = choice.parentNode;
        if (choice.value === correctChoice) {
            label.style.color = "green";
            label.innerHTML += "  <span>&#9989;</span>";
        } else if (choice.checked) {
            label.style.color = "red";
            label.innerHTML += "  <span>&#10060;</span>";
        }
    });

    if (isCorrect) {
        score++;
        displayMessage("Bonne réponse!", "green");
    } else {
        displayMessage(`Mauvaise réponse. La bonne réponse est la réponse ${correctChoice}.`, "red");
    }

    document.getElementById("submitButton").style.display = "none";
    document.getElementById("nextButton").style.display = "block";
}

function displayMessage(message, color) {
    const messageElement = document.createElement("p");
    messageElement.style.color = color;
    messageElement.textContent = message;
    const quizElement = document.getElementById("quiz");
    quizElement.appendChild(messageElement);
}

function checkAnswer() {
    console.log("Checking answer...");
    const selectedChoice = document.querySelector("input[name='choice']:checked");

    if (selectedChoice) {
        const selectedValue = selectedChoice.value.trim().toLowerCase();
        const correctAnswer = questions[currentQuestion].correctAnswer.trim().toLowerCase();

        const isCorrect = selectedValue === correctAnswer;
        showResult(isCorrect, selectedChoice);

        clearTimeout(timer);
        startTimer();
    } else {
        alert("Veuillez sélectionner une réponse.");
    }
}

function startTimer() {
    timer = setTimeout(nextQuestion, 5000);
}

function nextQuestion() {
    clearTimeout(timer);
    currentQuestion++;
    displayQuestion();
}

function displayFinalResult() {
    const quizElement = document.getElementById("quiz");
    const percentage = (score / questions.length) * 100;
    const finalResult = `Quiz terminé ! Votre score est : ${score} / ${questions.length} (${percentage.toFixed(2)} %)`;
    quizElement.innerHTML = finalResult;

    if (percentage >= 75) {
        quizElement.innerHTML += `<p>BRAVO ! Vous avez réussi le test avec un score de réussite de ${percentage.toFixed(2)} %.</p>`;
    }

    displayQuestionRecap(); // Afficher le récapitulatif des questions
}

function displayQuestionRecap() {
    const quizElement = document.getElementById("quiz");
    quizElement.innerHTML += "<h2>Récapitulatif des questions</h2>";

    userAnswers.forEach((answer, index) => {
        const questionHTML = `<p>Question ${index + 1}: ${answer.question}</p>`;
        let choicesHTML = "";
        answer.choices.forEach((choice) => {
            if (choice === answer.correctAnswer) {
                choicesHTML += `<p style="color: green;">${choice} (Bonne réponse)</p>`;
            } else {
                if (choice === answer.userAnswer) {
                    choicesHTML += `<p style="color: red;">${choice} (Votre réponse)</p>`;
                } else {
                    choicesHTML += `<p>${choice}</p>`;
                }
            }
        });
        quizElement.innerHTML += questionHTML + choicesHTML;
    });

    quizElement.innerHTML += "<button onclick='restartQuiz()'>Recommencer</button>";
}

function restartQuiz() {
    console.log("Restarting quiz...");
    window.location.reload();
}

displayCategories(); // Afficher les catégories dès le chargement de la page
