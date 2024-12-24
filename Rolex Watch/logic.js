let hr = document.querySelector("#hr");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let date = document.querySelector("#date");
let dates = document.querySelector(".scroll");


// Watch functioning 
function watch(){
    let nextDate = document.createElement("div");
    nextDate.setAttribute("id","date");
    dates.appendChild(nextDate);
    setInterval(() => {
        let time = new Date();
    
        hours = time.getHours()
        minutes = time.getMinutes()
        seconds = time.getSeconds()
        currentDate = time.getDate();
    
        hr.style.rotate = `calc(30deg * ${hours} + 0.5deg * ${minutes})`;
        min.style.rotate = `calc(6deg * ${minutes})`;
        sec.style.rotate = `calc(6deg * ${seconds})`;
        date.innerText = currentDate;
        if(currentDate + 1 == 31){
            nextDate.innerText = 0;
        }
        else nextDate.innerText = currentDate + 1;
        dates.style.transform = `translateY(calc(-0.9px * ${hours}))`;

    }, 1000);
}
watch();