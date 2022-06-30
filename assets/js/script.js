

//Master Search Tab Function
function tablc(e, t) {
  for (var n = document.getElementsByClassName("tabs-link"), l = 0; l < n.length; l++) n[l].style.display = "none";
  document.getElementById(t).style.display = "block";
}
//Tab Search Bar Button Focus
let allBtn = document.querySelectorAll('.switch-btn');
let Btn1 = document.querySelector('.switch-btn-1');

function initialstate() {
  Btn1.style.background = "#fff";
  Btn1.style.color = "#B3AEBF"
}

initialstate()

allBtn.forEach(btn => {
  btn.addEventListener('click', function(){
    allBtn.forEach(reset =>{
      reset.style.background = "transparent";
      reset.style.color = "#fff"
    })
    btn.style.color = "#B3AEBF"
    btn.style.backgroundColor = "#fff"
  })
  })
// console.log(allBtn);
const items = document.querySelectorAll(".item");

items.forEach((item) => {
	item.addEventListener("click", () => {
    items.forEach(closeall =>{
      closeall.classList.remove("open");
    }) 
		item.classList.toggle("open");
	});
});
