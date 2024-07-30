let bagItemObjects = [];

onload();

function onload() {
  loadBagItemsObjets();
  displayBagItems();
  removeItem()
}

function loadBagItemsObjets() {
  bagItemObjects = countClick.map((item) => {
    
    for (let i = 0; i < itemMens.length; i++) {
      // console.log(i)
      // console.log("welcome")
      // console.log(` ${i} ${item}`)
      if (item == itemMens[i].id) {
        return itemMens[i];
      }
    }
  });
}

function displayBagItems() {
  let cartLeft = document.querySelector(".cartLeft");

  let innerHTML = "";
  bagItemObjects.forEach((bagItem) => {
    innerHTML += generateItemHTML(bagItem);
  });
  cartLeft.innerHTML = innerHTML;
}
function removeItem(itemId){
  bagItems = bagItem.filter(bagItemObjects => bagItemObjects != itemId);
  loadBagItemsObjets()
  displayBagItems()
}
function generateItemHTML(item) {
  return `
   <div class="cartContent">
            <figure><img src="..//${item.img}" alt="image"></figure>
            <div class="cartText">
              <div class="itemName">${item.itemName}</div>
              <div class="itemDesc">${item.itemDesc}</div>
              <div class="itemPrice">Rs.${item.itemPrice}
            </div>
          </div>
          <div class='closeBtn' onclick="removeItem(${item.id})">x</div>
          
          </div>
        `;
}


