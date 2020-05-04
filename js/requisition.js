function ajaxRequisition(value){
    let request = new XMLHttpRequest();
    url = 'https://api.hgbrasil.com/finance?array_limit=1&format=json-cors&fields=only_results,currencies&key=91ea10a9';
    request.open('GET', url );

    request.onreadystatechange = ()=>{
        if(request.readyState == 4 && request.status == 200) {
            jsonReturn = JSON.parse(request.responseText);
            if(value == "BTC")
                document.getElementById("brl-area").innerHTML = "R$ " + jsonReturn.currencies.BTC.sell;
            if(value == "USD")
                document.getElementById("brl-area").innerHTML = "R$ " + jsonReturn.currencies.USD.sell;
            if(value == "EUR")
                document.getElementById("brl-area").innerHTML = "R$ " + jsonReturn.currencies.EUR.sell;
            
        }
    }

    request.send();
}

