let menuBtn = document.querySelector("#menuBtn");
let ul = document.querySelector("ul");
let mensContent = document.querySelector(".mensContent");
let addCount = document.querySelector("#addCount");
let btn = document.querySelector(".btn");

menuBtn.addEventListener("click", () => {
  ul.classList.toggle("ulToggle");
  menuBtn.classList.toggle("fa-xmark");
});

function mensDisplay() {
  if(!mensContent){
    return
  }
  let innerHTML = "";
  itemMens.forEach((e) => {
    innerHTML += `
    <div class="itemContent">
               <figure>
                 <img
                   src="public/${e.img}"
                   alt="mitra items image"
                 />
               </figure>
               <div class="itemNames">
                 <div>
                   <div class="itemName">${e.itemName}</div>
                   <div class="itemDesc">${e.itemDesc}</div>
                   <div class="itemPrice">Rs.${e.itemPrice}
                     <div class="itemHover">
                       <div class="itemName">${e.itemName}</div>
                       <button onclick="addCart(${e.id})" class="btn"><i class="fa-regular fa-heart"></i> &nbsp; WISHLIST</button>
                       <div class="itemSize">Size ${e.itemSize}</div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
   
   `;
  });
  mensContent.innerHTML = innerHTML;
}




mensDisplay();

let countClick


let bagStr=localStorage.getItem('MensItem');

countClick= bagStr ? JSON.parse(bagStr):[];




function addCart(e) {
  countClick.push(e);

  meomo()

  localStorage.setItem("MensItem",  JSON.stringify(countClick));



 
}


function meomo(){
  if (countClick.length > 0) {
    addCount.style.visibility = "visible";
    addCount.innerHTML = countClick.length;
  }else{
    addCount.style.visibility = "hidden";
    addCount.innerHTML = countClick.length;
  }
}
meomo()

