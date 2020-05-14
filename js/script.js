function ajaxRequisition(){
    let request = new XMLHttpRequest();
    let url = 'https://api.hgbrasil.com/finance?array_limit=1&format=json-cors&fields=only_results,currencies&key=91ea10a9';
    request.open('GET', url );

    request.onreadystatechange = ()=>{
        if(request.readyState == 4 && request.status == 200) {
            let jsonReturn = JSON.parse(request.responseText);

            let currencyName = document.querySelector("#currency").value;
            let value = document.querySelector("#value-input").value;

            const currency = jsonReturn.currencies[currencyName].buy;

            let result = calculateResult(currency, value);
            result = format(result);
            show(result);
            
        }
    }

    request.send();
}

function calculateResult(currency, input){
    return verifyInput(input) * currency;
}

function format(result){
    let formated = parseFloat(result.toFixed(2));
    return formated;
}

function show(info ){
    document.querySelector("#display").innerHTML = "R$ " + info;
}

function verifyInput(input){
    if(input == "")
        return 1;
    else
        return input;
}