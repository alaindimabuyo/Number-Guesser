let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
    guessesLeft = 3

//ui varialbles

const   game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'),
        message = document.querySelector('.message')

// Assign
minNum.textContent = min;
maxNum.textContent = max;

// EventLister


guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    // winning number
    
    if (isNaN(guess) || guess < 1 || guess > 10){
        setMessage(`Please enter a number between ${min} and ${max}`)
        colors('red')
        
    }else{
        if(guess === winningNum){
            colors('green');
            guessInput.disabled = true;
            setMessage(`Number ${winningNum} is correct`)
            playAgain()
        }else{
            guessesLeft -= 1;
            if(guessesLeft === 0){
                //colorRed
                guessInput.disabled = true;
                guessBtn.disabled = true;
                setMessage(`Game Over, the correct number was ${winningNum}.`);
                playAgain()
                
            }else{
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left.`);
                colors('red')
            }
        }
    }

    
})

function playAgain(){
    guessBtn.value = 'Play-Again';
    guessBtn.className += 'play-again';

    game.addEventListener('mousedown', function(e){
        if(e.target.className === 'play-again'){
            window.location.reload();
        }
    })
    guessBtn.disabled = false;
}
function getRandomNumber(min, max){
    return (Math.floor(Math.random()*(max - min + 1)+min))
}

function colors(colors){
    guessInput.style.borderColor = colors;
    message.style.color = colors;
}

function setMessage(msg){
    message.textContent = msg
}