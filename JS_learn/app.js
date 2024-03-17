
let todo = [];

let req = prompt('Enter your request ');

while(true){
    if(req == 'quit'){
        console.log('quitting app');
        break;
    }

    if(req == 'list'){
        console.log('-----------');
        for( i=0; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log('------------');
    }

    else if(req == 'add'){
        let newtask = prompt('Enter the task to be added');
        todo.push(newtask);
        console.log('task added');
    }

    

    else if( req == 'delete'){
        let idx = prompt('Enter the index of the task to be deleted');
        todo.splice(idx,1);
        console.log('task deleted');
    }

    else{
        console.log('invalid request')
    }

    req = prompt('Enter your request ');
}

