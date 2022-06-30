// let tippytap = document.getElementById('tippy-tap').children;
// for(var i = 0; i < tippytap.length; i++) {
//     // console.log(tippytap[i].outerText);
//     tippytap[i].addEventListener('click', function(e) {
//         console.log(this);
//         document.getElementById('')
//     })
// }

let tap = document.querySelectorAll('.card-input-element');
let tapped = document.querySelectorAll('.card-input-element')
let input = document.getElementById('manual-input');
let ini = document.getElementById('equi');
let equivalent = document.getElementById('equivalent');

console.log(tapped[0])
// let newinput = 1;
let global = 0;
// let usdVal;
async function getCoinPrice() {
    let response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=true');
    let data = await response.json();
    data = data['bitcoin']['usd'];
    return data

}
// let price = fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=true") //1
//   .then((response) => response.json()) //2
//   console.log(price);
for(i = 0; i < 4; i++){
    console.log(tapped[i])
}


for(var i = 0; i < tap.length; i++) {
    // console.log(tippytap[i].outerText);
    function focusOut(){
        if ($('input[name=product]:checked').length > 0) {
            $("input[name='product']:radio").prop('checked',false);
        }
    }
    tap[i].addEventListener('click', function(event) {
        const price = () => {
            getCoinPrice().then((a) => {
                const send = (d)=>{
                    return global=d;
                }
                send(a)
                console.log(a);
              return a;
            });
          };    
        price();
        input.value = ""
        input.value = event.target.value; 
        window.newinput = input.value;
        console.log(newinput);
        window.usdVal = newinput / global;
        equi.value = window.usdVal;
        console.log(usdVal);
        equivalent.innerHTML = usdVal.toLocaleString(undefined, { minimumFractionDigits: 2});
    })
}

input.addEventListener('input', function() {
    focusOut();
    const price = () => {
        getCoinPrice().then((a) => {
            const send = (d)=>{
                return global=d;
            }
            send(a)
            console.log(a);
          return a;
        });
      };    
    price();
    window.usdVal = input.value / global;
    equi.value = window.usdVal
    equivalent.innerHTML = usdVal.toLocaleString(undefined, { minimumFractionDigits: 2});
    console.log('Something happened')

});
