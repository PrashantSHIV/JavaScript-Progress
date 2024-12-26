const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/";
const dropdowns = document.querySelectorAll('select');
let msg = document.querySelector('#msg');
const btn = document.querySelector('button');
const fromCurr = document.querySelector('.from')
const toCurr = document.querySelector('.to')

for(let select of dropdowns){
    for (let currCode in countryList){
        let newOption = document.createElement('option');
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === 'from' && currCode === 'USD'){
            newOption.selected = 'selected';
        }
        else if (select.name === 'to' && currCode === 'INR'){
            newOption.selected = 'selected';
        }
        select.append(newOption);
    }
    select.addEventListener('change',(evt) => {
        updateFlag(evt.target);
    })   
}

const updateFlag = (element) => {
    let contCode = element.value;
    let newSrc = `https://flagsapi.com/${countryList[contCode]}/flat/64.png`;
    let Img = element.parentElement.querySelector('img');
    Img.src = newSrc;
}


btn.addEventListener('click', async (evt) => {
    evt.preventDefault(); // to stop automatic work like page refreshing
    let amount = document.querySelector('input');
    let amountVal = amount.value;
    if (amountVal === '' || amountVal < 1){
        amountVal = 1;
        amount.value = '1';
    }
    fromCurrV = fromCurr.value.toLowerCase();
    const url = `${BASE_URL}/${fromCurrV}.json`;
    toCurrV = toCurr.value.toLowerCase();
    let response = await fetch(url)
    let data = await response.json().then((res) => {
        return res[fromCurrV];
    });
    let money = data[toCurrV]
    msg.innerText = `${amountVal} ${fromCurr.value} = ${amountVal * money} ${toCurr.value}`;
})

