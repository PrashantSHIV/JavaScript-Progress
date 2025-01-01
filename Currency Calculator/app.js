let dropdowns = document.querySelectorAll("select");

dropdowns.forEach((select) => {
    for(let currCode in countryList){
        let newOp = document.createElement("option");
        newOp.innerText = currCode;
        newOp.value = currCode;

        if (select.name === "from" && newOp.value === "USD"){
            newOp.selected = "selected";
        }
        else if (select.name === "to" && newOp.value === "INR"){
            newOp.selected = "selected";
        }
        select.appendChild(newOp)
    }

    select.addEventListener("change", (evt) => {
        updateFlag( evt.target);

    })
})


let updateFlag = (element) => {
    let contCode = element.value;
    let newSrc = `https://flagsapi.com/${countryList[contCode]}/flat/64.png`;
    let Img = element.parentElement.querySelector('img');
    console.log(Img)
    Img.src = newSrc;
}


const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies";

document.querySelector("button").onclick = async (e) => {
    e.preventDefault();

    fCurr = document.querySelector("#f_curr").value.toLowerCase();
    toCurr = document.querySelector("#to_curr").value.toLowerCase();

    url = `${BASE_URL}/${fCurr}.json`;
    let response = await fetch(url);
    let data = await response.json().then((result) => {
        return result;
    })
    document.querySelector("#from").innerText = 1;
    document.querySelector("#to").innerText = data[fCurr][toCurr];
}
