let review = document.querySelector(".review");
let navi = document.querySelector('.navi');
let cards = document.querySelectorAll('.card');
let randomChoose = document.querySelector('#random');

let move = 0;
navi.addEventListener('click', (e) => {
    
    if(e.target.innerText === '>'){
        if(move == -400*(cards.length-1)){
            return
        }
        move += -400;
    }
    else if(e.target.innerText === '<'){
        if(move == 0){
            return
        }
        move += 400;
    }

    else if(e.target == randomChoose){
        move = (-400) * Math.floor(Math.random() * cards.length);
    }

    review.style.transform = `translateX(${move}px)`;
})
