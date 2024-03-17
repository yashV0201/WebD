

function resetScore(){
    score.wins = 0;
    score.losses =0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
}

let score =JSON.parse(localStorage.getItem('score')) ||{
    wins:0,
    losses:0,
    ties:0
} ;
/* if(!score){
    score ={
        wins:0,
        losses:0,
        ties:0
    }
}  */

function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}

updateScoreElement();

function playGame(userMove){
    function computerMove(){
        const num = Math.random();
        if(num>=0 && num < 1/3){
            return 'stone';
        }else if(num>=1/3 && num <2/3){
            return 'paper';
        }
        
        return 'scissors';
        
    }
    let compMove = computerMove();

    //comparing user's move and computer's move to update the result
    let result ='';
    if(userMove === 'stone'){
        if(compMove==='stone'){
            result = 'Tie'
        }
        else if(compMove === 'paper'){
            result = 'You Lose';
        }
        else{
            result = 'You Win'
        }
    }
    else if(userMove === 'paper'){
        if(compMove==='stone'){
            result = 'You Win'
        }
        else if(compMove === 'paper'){
            result = 'Tie';
        }
        else{
            result = 'You Lose'
        }
    }
    else if(userMove === 'scissors'){
        if(compMove==='stone'){
            result = 'You Lose'
        }
        else if(compMove === 'paper'){
            result = 'You Win';
        }
        else{
            result = 'Tie'
        }
    }

    //score updation
    if(result === 'You Win') score.wins++;
    else if(result === 'You Lose') score.losses++;
    else if(result === 'Tie') score.ties++;


    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-move').innerHTML = `You ${userMove} - ${compMove} Computer`

    updateScoreElement();

    /* alert(`You chose ${userMove}. Computer chose ${compMove}.${result}.
    Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`)
 */
}


