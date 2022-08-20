let rightButton;
let i;
let nextLevel = 3;
let counter = 1;
let difficultyOne = 10;
let difficultyTwo = 10;
let difficultyMultiplication = 5;
let difficultyDivision = 5;
let difficultyPowerBase = 10;
let difficultyPowerPower = 2;
let randomizer = 3;
let nextStage = nextLevel * 5;
let numberCorrect = 0;
let stageCounter = 1;
let multiplier = 5;
let divider = 4;
let power = 10;
let stageSelectButton = document.querySelector('#stageSelectButton');
let stage2SelectButton = document.querySelector('#stage2');
let stage3SelectButton = document.querySelector('#stage3');
let stage4SelectButton = document.querySelector('#stage4');
let stage5SelectButton = document.querySelector('#stage5');
stageSelectButton.style.visibility = 'hidden';
let stageSelectorbool = false;
let stage2bool = false;
let stage3bool = false;
let stage4bool = false;
let finalStageBool = false;
changePage(3);
stageChecker();
allStagesHidden();



function stageChecker() {
    if (numberCorrect >= nextStage) {
        stageSelectorbool = true;
        changePage(5);
        document.getElementById("score").innerHTML = "Stage Complete!";
        stageCounter++;
    }
    if (stageCounter == 2) {
        stage2bool = true;
    }
    if (stageCounter == 3) {
        stage3bool = true;
    }
    if (stageCounter == 4) {
        stage4bool = true;
    }
    if (stageCounter == 5) {
        finalStageBool = true;
    }
    if (stageCounter == 6)
    {
        document.getElementById("score").innerHTML = "Congratzzz!!! \n You have no life.";
        changePage(7);

    }
}


function questionGeneratorAddition() {
    let randomNumberOne = Math.floor(Math.random() * difficultyOne) + 1;
    let randomNumberTwo = Math.floor(Math.random() * difficultyTwo) + 1;
    let fakeButton1;
    let fakeButton2;
    let theRealAnswer = randomNumberOne + randomNumberTwo;
    document.getElementById("question").innerHTML = "What is " + randomNumberOne + " + " + randomNumberTwo + "?";
    rightButton = Math.floor(Math.random() * 3) + 1;
    do {
        fakeButton1 = Math.round((theRealAnswer - randomizer) + Math.floor(Math.random() * 2 * randomizer));
        fakeButton2 = Math.round((theRealAnswer - randomizer) + Math.floor(Math.random() * 2 * randomizer));
    } while (fakeButton1 == theRealAnswer || fakeButton1 == fakeButton2 || fakeButton2 == theRealAnswer);

    if (rightButton == 1) {
        document.getElementById("button1").innerHTML = theRealAnswer;
        document.getElementById("button2").innerHTML = fakeButton1;
        document.getElementById("button3").innerHTML = fakeButton2;
    }
    else if (rightButton == 2) {
        document.getElementById("button2").innerHTML = theRealAnswer;
        document.getElementById("button3").innerHTML = fakeButton1;
        document.getElementById("button1").innerHTML = fakeButton2;
    }
    else if (rightButton == 3) {
        document.getElementById("button3").innerHTML = theRealAnswer;
        document.getElementById("button1").innerHTML = fakeButton1;
        document.getElementById("button2").innerHTML = fakeButton2;
    }

}

function questionGeneratorMultiplication() {
    let randomNumberOne = Math.floor(Math.random() * difficultyMultiplication) + 1;
    let randomNumberTwo = Math.floor(Math.random() * difficultyMultiplication) + 1;
    let fakeButton1;
    let fakeButton2;
    let theRealAnswer = randomNumberOne * randomNumberTwo;
    document.getElementById("question").innerHTML = "What is " + randomNumberOne + " * " + randomNumberTwo + "?";
    rightButton = Math.floor(Math.random() * 3) + 1;
    do {
        do {
            fakeButton1 = Math.round(randomNumberOne * Math.floor(Math.random() * (randomNumberTwo + multiplier)));
            fakeButton2 = Math.round(randomNumberOne * Math.floor(Math.random() * (randomNumberTwo + multiplier)));
        } while (Math.abs(theRealAnswer - fakeButton1) > (randomNumberOne * 3) || Math.abs(theRealAnswer - fakeButton2) > (randomNumberOne * 3))

    } while (fakeButton1 == theRealAnswer || fakeButton1 == fakeButton2 || fakeButton2 == theRealAnswer || fakeButton1 < 0 || fakeButton2 < 0);

    if (rightButton == 1) {
        document.getElementById("button1").innerHTML = theRealAnswer;
        document.getElementById("button2").innerHTML = fakeButton1;
        document.getElementById("button3").innerHTML = fakeButton2;
    }
    else if (rightButton == 2) {
        document.getElementById("button2").innerHTML = theRealAnswer;
        document.getElementById("button3").innerHTML = fakeButton1;
        document.getElementById("button1").innerHTML = fakeButton2;
    }
    else if (rightButton == 3) {
        document.getElementById("button3").innerHTML = theRealAnswer;
        document.getElementById("button1").innerHTML = fakeButton1;
        document.getElementById("button2").innerHTML = fakeButton2;
    }

}

function questionGeneratorDivision() {
    let randomNumberTwo = Math.floor(Math.random() * difficultyDivision) + 1;
    let theRealAnswer = Math.floor(Math.random() * difficultyDivision) + 1;
    let randomNumberOne = randomNumberTwo * theRealAnswer;
    let fakeButton1;
    let fakeButton2;
    document.getElementById("question").innerHTML = "What is " + randomNumberOne + " / " + randomNumberTwo + "?";
    rightButton = Math.floor(Math.random() * 3) + 1;
    do {
        do {
            fakeButton1 = Math.floor(Math.random() * (theRealAnswer + divider));
            fakeButton2 = Math.floor(Math.random() * (theRealAnswer + divider));
        } while (Math.abs(fakeButton1 - theRealAnswer) >= divider || Math.abs(fakeButton2 - theRealAnswer) >= divider)

    } while (fakeButton1 == theRealAnswer || fakeButton1 == fakeButton2 || fakeButton2 == theRealAnswer || fakeButton1 < 0 || fakeButton2 < 0);

    if (rightButton == 1) {
        document.getElementById("button1").innerHTML = theRealAnswer;
        document.getElementById("button2").innerHTML = fakeButton1;
        document.getElementById("button3").innerHTML = fakeButton2;
    }
    else if (rightButton == 2) {
        document.getElementById("button2").innerHTML = theRealAnswer;
        document.getElementById("button3").innerHTML = fakeButton1;
        document.getElementById("button1").innerHTML = fakeButton2;
    }
    else if (rightButton == 3) {
        document.getElementById("button3").innerHTML = theRealAnswer;
        document.getElementById("button1").innerHTML = fakeButton1;
        document.getElementById("button2").innerHTML = fakeButton2;
    }

}

function questionGeneratorPower() {
    let theRealAnswer = 1;
    let randomNumberOne = Math.floor(Math.random() * difficultyPowerBase) + 1;
    for (let j = 0; j < difficultyPowerPower; j++) {
        theRealAnswer = theRealAnswer * randomNumberOne
    }
    let fakeButton1;
    let fakeButton2;
    document.getElementById("question").innerHTML = "What is " + randomNumberOne + " to the power of " + difficultyPowerPower + "?";
    rightButton = Math.floor(Math.random() * 3) + 1;
    do {
        do {
            fakeButton1 = Math.floor(Math.random() * (theRealAnswer + power));
            fakeButton2 = Math.floor(Math.random() * (theRealAnswer + power));
        } while (Math.abs(fakeButton1 - theRealAnswer) >= power || Math.abs(fakeButton2 - theRealAnswer) >= power)

    } while (fakeButton1 == theRealAnswer || fakeButton1 == fakeButton2 || fakeButton2 == theRealAnswer || fakeButton1 < 0 || fakeButton2 < 0);

    if (rightButton == 1) {
        document.getElementById("button1").innerHTML = theRealAnswer;
        document.getElementById("button2").innerHTML = fakeButton1;
        document.getElementById("button3").innerHTML = fakeButton2;
    }
    else if (rightButton == 2) {
        document.getElementById("button2").innerHTML = theRealAnswer;
        document.getElementById("button3").innerHTML = fakeButton1;
        document.getElementById("button1").innerHTML = fakeButton2;
    }
    else if (rightButton == 3) {
        document.getElementById("button3").innerHTML = theRealAnswer;
        document.getElementById("button1").innerHTML = fakeButton1;
        document.getElementById("button2").innerHTML = fakeButton2;
    }

}

function questionGeneratorFinal() {
    let fakeButton1;
    let fakeButton2;
    let randomNumberOne;
    let randomNumberTwo;
    let randomNumberThree;
    let theRealAnswer;
    if (counter == 1)
    {
        randomNumberOne = Math.floor(Math.random() * 9000) + 1001;
        randomNumberTwo = Math.floor(Math.random() * 9000) + 1001;
        theRealAnswer = randomNumberOne + randomNumberTwo;
        document.getElementById("question").innerHTML = "What is " + randomNumberOne + " + " + randomNumberTwo + "?";
    }
    else if (counter == 2)
    {
        randomNumberOne = Math.floor(Math.random() * 100) + 100;
        randomNumberTwo = Math.floor(Math.random() * 100) + 100;
        theRealAnswer = randomNumberOne * randomNumberTwo;
        document.getElementById("question").innerHTML = "What is " + randomNumberOne + " * " + randomNumberTwo + "?";
    }
    else if(counter == 3)
    {
        randomNumberTwo = Math.floor(Math.random() * 60) + 51;
        theRealAnswer = Math.floor(Math.random() * 60) + 51;
        randomNumberOne = randomNumberTwo * theRealAnswer;
        document.getElementById("question").innerHTML = "What is " + randomNumberOne + " / " + randomNumberTwo + "?";
    }
    else if(counter == 4)
    {
        theRealAnswer = 1;
        randomNumberOne = Math.floor(Math.random() * 5) + 5;
        for (let j = 0; j < 5; j++) {
            theRealAnswer = theRealAnswer * randomNumberOne
        }
        document.getElementById("question").innerHTML = "What is " + randomNumberOne + " to the power of " + 5 + "?";
    }
    else if(counter == 5)
    {
        randomNumberOne = Math.floor(Math.random() * 8) + 2;
        randomNumberTwo = Math.floor(Math.random() * 40) + 11;
        randomNumberThree = Math.floor(Math.random() * 40) + 11;
        theRealAnswer = (randomNumberTwo + randomNumberThree) * (randomNumberTwo + randomNumberThree) * randomNumberOne;
        document.getElementById("question").innerHTML = "What is " + randomNumberOne + " * ( " + randomNumberTwo + " + " + randomNumberThree + ")^2";
    }
    rightButton = Math.floor(Math.random() * 3) + 1;
    do {
      
            fakeButton1 = Math.floor(Math.random() * 101) + theRealAnswer - 50;
            fakeButton2 = Math.floor(Math.random() * 101) + theRealAnswer - 50;
       

    } while (fakeButton1 == theRealAnswer || fakeButton1 == fakeButton2 || fakeButton2 == theRealAnswer || fakeButton1 < 0 || fakeButton2 < 0);

    if (rightButton == 1) {
        document.getElementById("button1").innerHTML = theRealAnswer;
        document.getElementById("button2").innerHTML = fakeButton1;
        document.getElementById("button3").innerHTML = fakeButton2;
    }
    else if (rightButton == 2) {
        document.getElementById("button2").innerHTML = theRealAnswer;
        document.getElementById("button3").innerHTML = fakeButton1;
        document.getElementById("button1").innerHTML = fakeButton2;
    }
    else if (rightButton == 3) {
        document.getElementById("button3").innerHTML = theRealAnswer;
        document.getElementById("button1").innerHTML = fakeButton1;
        document.getElementById("button2").innerHTML = fakeButton2;
    }

}

function clicked(buttonNumber) {
    if (buttonNumber == rightButton) {
        i++;
        numberCorrect++;
        document.getElementById("rightOrWrong").innerHTML = "Nice!";
        document.getElementById("score").innerHTML = i + " Out of " + nextLevel;
        if (i >= nextLevel) {
            document.getElementById("score").innerHTML = "Nice Job!";
            changePage(2);
        }
        stageChecker();
        questionGenerator();

    }
    else {
        document.getElementById("score").innerHTML = "You Lose!";
        changePage(1);
    }
}

function changePage(reasonToChangePage) {
    let stylesheet = document.getElementById("stylesheet");
    if (reasonToChangePage == 1) {
        stylesheet.setAttribute('href', "lose.css");
    }
    else if (reasonToChangePage == 2) {
        stylesheet.setAttribute('href', "nextLevel.css");
    }
    else if (reasonToChangePage == 3) {
        stylesheet.setAttribute('href', "homePage.css");
    }
    else if (reasonToChangePage == 4) {
        stylesheet.setAttribute('href', "mainStyles.css");
    }
    else if (reasonToChangePage == 5) {
        stylesheet.setAttribute('href', "nextStage.css");
    }
    else if (reasonToChangePage == 6) {
        stylesheet.setAttribute('href', "stageSelector.css");
    }
    else if (reasonToChangePage == 7) {
        stylesheet.setAttribute('href', "FinalPage.css");
    }
}

function startGame() {
    changePage(4);
    i = 0
    document.getElementById("score").innerHTML = "";
    document.getElementById("rightOrWrong").innerHTML = "";
    numberCorrect = 0;
    counter = 1;
    difficultyOne = 10;
    difficultyTwo = 10;
    difficultyMultiplication = 5;
    document.getElementById("whatLevel").innerHTML = "";
    stageCounter = 1;
    randomizer = 3;
    divider = 4;
    power = 4;
    difficultyDivision = 10;
    difficultyPowerBase = 10;
    difficultyPowerPower = 2;
    stageSelectButton.style.visibility = 'hidden';
    questionGenerator();

}

function tryAgain() {
    document.getElementById("startButton").innerHTML = "Restart";
    if (stageSelectorbool == true) {
        stageSelectButton.style.visibility = 'visible';
    }
    changePage(3);
}
function nextLevelButton() {
    counter++;
    changePage(4);
    i = 0
    document.getElementById("whatLevel").innerHTML = "Level " + counter;
    document.getElementById("rightOrWrong").innerHTML = "";
    document.getElementById("score").innerHTML = "";
    difficultyUpdater();
    questionGenerator();
}

function questionGenerator() {
    if (stageCounter == 1) {
        questionGeneratorAddition();
    }
    else if (stageCounter == 2) {
        questionGeneratorMultiplication();
    }
    else if (stageCounter == 3) {
        questionGeneratorDivision();
    }
    else if (stageCounter == 4) {
        questionGeneratorPower();
    }
    else if(stageCounter == 5){
        questionGeneratorFinal();
    }

}

function nextStageButton() {
    i = 0
    counter = 1;
    numberCorrect = 0;
    document.getElementById("whatLevel").innerHTML = "Level " + counter;
    document.getElementById("rightOrWrong").innerHTML = "";
    document.getElementById("score").innerHTML = "";
    questionGenerator();
    changePage(4);


}
function difficultyUpdater() {
    if (stageCounter == 1) {
        if (counter % 2 == 0) {
            difficultyOne = difficultyOne * 10;
        }
        else {
            difficultyTwo = difficultyTwo * 10;
        }
        randomizer = randomizer * 3;
    }
    else if (stageCounter == 2) {
        difficultyMultiplication = difficultyMultiplication * 2;
        multiplier = multiplier + 2;
    }
    else if (stageCounter == 3) {
        difficultyDivision = difficultyDivision + 10;
        divider = divider + 2;
    }
    else if (stageCounter == 4) {
        if (counter == 1 || counter == 2 || counter == 3) {
            difficultyPowerPower++;
        }
        else if (counter == 4) {
            difficultyPowerPower = 2;
            difficultyPowerBase = 50;
        }
        else if (counter == 5) {
            difficultyPowerBase = 100;
        }
        power = power + 2;

    }

}

function stageSelect() {
    stageSelectButton.style.visibility = 'hidden';
    changePage(6);
    if (stage2bool) {
        stage2SelectButton.style.visibility = 'visible';
    }
    if (stage3bool) {
        stage3SelectButton.style.visibility = 'visible';
    }
    if (stage4bool) {
        stage4SelectButton.style.visibility = 'visible';
    }
    if (finalStageBool) {
        stage5SelectButton.style.visibility = 'visible';
    }
}

function changeStage(stageChangedTo) {
    stageCounter = stageChangedTo;
    i = 0
    document.getElementById("score").innerHTML = "";
    document.getElementById("rightOrWrong").innerHTML = "";
    numberCorrect = 0;
    counter = 1;
    difficultyOne = 10;
    difficultyTwo = 10;
    difficultyMultiplication = 5;
    divider = 4;
    power = 4;
    difficultyDivision = 10;
    difficultyPowerBase = 10;
    difficultyPowerPower = 2;
    document.getElementById("whatLevel").innerHTML = "";
    randomizer = 3;
    allStagesHidden();
    questionGenerator();
    changePage(4);
}

function allStagesHidden() {
    stage2SelectButton.style.visibility = 'hidden';
    stage3SelectButton.style.visibility = 'hidden';
    stage4SelectButton.style.visibility = 'hidden';
    stage5SelectButton.style.visibility = 'hidden';
}

