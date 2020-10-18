setTimeout(() =>{
    let time = 0;
    console.log(`Cześć po raz ${time}`);
    if(time <= 15) {
        time+=1;
        clearInterval(interval);
    }
},250)

//TODO
