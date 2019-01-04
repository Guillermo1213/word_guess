    var car_models = ["wrx", "genesis", "911", "gtr", "mclaren", "m4" ];
    
    var current_word = "";

    var split_word = []

    var blanks = 0;

    var wrong_guess = [];

    var word = [];

    var wins = 0;
    
    var guesses_remaining = 9;
    
    function word_generate() {

        //Task#1: Select random var from car_models

        current_word = car_models[Math.floor(Math.random() * car_models.length)];

        //Task#2: Split rand in to individual letters

        split_word = current_word.split("");

        blanks = split_word.length;

        for (var i=0; i < blanks; i++) {
            word.push("_");
            }
        
        document.getElementById("word_blanks").innerHTML = " " + word.join(" ");
        
        console.log(current_word);
        console.log(split_word);
        console.log(blanks);
        console.log(word);
    
    }

    function new_game() {

        guesses_remaining = 9;
        wrong_guess = [];
        word = [];
        word_generate()

    }
    
    function corect() {
        if (current_word === car_models[0]) {
            document.getElementById("img").src = "./assets/images/wrx.jpg"
        }
        else if (current_word === car_models[1]) {
            document.getElementById("img").src = "./assets/images/gencee.jpg"
        }
        else if (current_word === car_models[2]) {
            document.getElementById("img").src = "./assets/images/911.jpg"
        }
        else if (current_word === car_models[3]) {
            document.getElementById("img").src = "./assets/images/gtr.jpg"
        }
        else if (current_word === car_models[4]) {
            document.getElementById("img").src = "./assets/images/McLaren.jpg"
        }
        else if (current_word === car_models[5]) {
            document.getElementById("img").src = "./assets/images/m4.jpg"
        }

        window.alert("Correct! Check it out!");
    }

    function check(letters) {
    var letterInWord = false;
    //if the generated randomword is equal to the letter entered... then variable is true
    for (var i = 0; i < blanks; i++) {
        if (current_word[i] == letters) {
                letterInWord = true;
            }
        }
    //if letterInWord (false)
    if (letterInWord) {
    //check each letter to see if it matches word
        for (var i = 0; i < blanks; i++) {
            if (current_word[i] == letters) {
                word[i] = letters;
            }
        }
    }
    //otherwise, push the incorrect guess in the wrong guesses section, and reduce remaining guesses
    else {
    wrong_guess.push(letters);
    guesses_remaining--;
    }
    console.log(word);
    }
    
    function result() {
        console.log("wins:" + wins + "| guesses left:" + guesses_remaining)
    
        //if WON...then alert, play audio, display image and reset new round
        if (split_word.toString() == word.toString()) {
            wins++;
            corect()
            new_game()
            //display wins on screen
            document.getElementById("win_counter").innerHTML = "Wins: " + wins;
    
            //if LOST...then alert and reset new round
        } else if (guesses_remaining === 0) {
            new_game()
            document.getElementById("img").src = "./assets/images/fail.jpg"
        }
        //display losses on screen && guesses remaining countdown
        document.getElementById("word_blanks").innerHTML = "  " + word.join(" ");
        document.getElementById("guess_counter").innerHTML = " " + guesses_remaining;
    }
  
    word_generate()

    document.onkeyup = function (event) {
        var guesses = String.fromCharCode(event.keyCode).toLowerCase();
        //check to see if guess entered matches value of random word
        check(guesses);
        //process wins/loss 
        result();
        //store player guess in console for reference 
        console.log(guesses);
    
        //display/store incorrect letters on screen
        document.getElementById("letter_display").innerHTML = "  " + wrong_guess.join(" ");
    }