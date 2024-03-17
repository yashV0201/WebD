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

    alert(`You chose ${userMove}. Computer chose ${compMove}.${result}.`)

}