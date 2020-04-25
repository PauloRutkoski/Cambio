let dataLine = {
    labels: [],
    datasets: [{
    label:'USD / BRL',
    backgroundColor: 'rgba(255,99,132,0.1)',
    borderWidth:1,
    borderColor: 'rgb(255,99,132)',
    data:[]
    }]
}

function generateChart(){
    let context = document.getElementById("chart").getContext("2d");
    let chart = new Chart( context , {
        type: 'line',

        data: dataLine,

        options:{
            responsive:true
        }
    });

    return chart;
}
function addData(chart,label,data){
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update;

}
