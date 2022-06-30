if($('#totalwithdrawn').val() < 0 || $('#totaldeposited').val() || $('#totalearned').val()){
    $("#stats").css({"display":"none"})
    if($('#totaldeposited').val() > 0 ){
        $("#stats").css({"display":"initial"});
        $("#earnings-chart").css({"display":"none"});
        if($('#totalearned').val() > 0){
            $("#stats").css({"display":"initial"})
            $("#earnings-chart").css({"display":"flex"});
        }
    }
}

$(function(){
    console.log($('#totaldeposited').val())
    console.log($('#totalearned').val())
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [$('#totaldeposited').val(), $('#totalearned').val()],
            backgroundColor: [
                'rgba(74, 112, 156, 1)',
                'rgba(114, 156, 205, 1)'
            ],
            hoverOffset: 4
        }]
    },
});

const ctx2 = document.getElementById('withdrawalChart');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [$('#totalwithdrawn').val(), $('#totaldeposited').val()],
            backgroundColor: [
                'rgba(86, 149, 126, 1)',
                'rgba(114, 205, 172, 1)'
            ],
            hoverOffset: 4
        }]
    },
});

const ctx3 = document.getElementById('earningsChart');
const myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [$('#totalearned').val(), $('#totalwithdrawn').val()],
            backgroundColor: [
                'rgba(102, 86, 149, 1)',
                'rgba(176, 114, 205, 1)'
            ],
            hoverOffset: 4
        }]
    },
});    
})


// const prices = document.getElementById('price-input').value;
// const splitter = prices.split(",")
// // console.log(splitter)
// var x = 0;
// var len = splitter.length;
// console.log(len)

// var parseresult = splitter.map(function (x) { 
//   return parseInt(x, 10); 
// });
// console.log(parseresult)

// var options = {
//     series: [{
//         data: [674, 675, 674, 674, 673]
//     }],
//     chart: {
//         height: 350,
//         type: 'area',
//         toolbar: {
//             show: false
//         }
//     },
//     dataLabels: {
//         enabled: false
//     },
//     stroke: {
//         curve: 'smooth'
//     },
//     xaxis: {
//         type: 'datetime',
//         lines: {
//             show: false,
//         },
//         categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
//     },
//     yaxis: {
//         lines: {
//             show: false ,
//         }
//     },

//     legend: {
//         show: false
//     },
//     tooltip: {
//         x: {
//             format: 'dd/MM/yy HH:mm'
//         },
//     },
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();