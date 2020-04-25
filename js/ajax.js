function ajaxRequisition(){
    let url = "https://economia.awesomeapi.com.br/json/usd";

    let request = new XMLHttpRequest();

    request.open('GET', url );

    request.onreadystatechange = ()=>{
        if(request.readyState == 4 && request.status == 200) {
            jsonReturn = JSON.parse(request.responseText);
            addData(chart, jsonReturn[0].create_date ,jsonReturn[0].ask);
            
        }
    }
    chart = generateChart();

    request.send();
}
