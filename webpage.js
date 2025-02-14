// Card Work Is Here 

var itemsData = [
    {
        id: 1,
        Name: " Mobile One plus",
        size: " 16GB 256GB , 8GB 128GB",
        color: " Black ,  Green , Gold",
        image: "https://karachicomputers.pk/wp-content/uploads/2024/03/11green-1.jpg",
        price: " Rs. 100,000"
    },
    {
        id: 2,
        Name: " Xiaomi 14T",
        size: " 16GB 256GB , 8GB 128GB",
        color: " Black , gold , white",
        image: "https://mymart.pk/cdn/shop/files/Xiaomi_14T_4_276fa85c-fe87-497a-81bd-0a870da8cae1_540x.png?v=1727435567",
        price: " Rs. 168,999"
    }
    ,
    {
        id: 3,
        Name: " EASE EGM110 Gaming Mouse",
        size: " Single",
        color: " Black",
        image: "https://easetec.com.pk/wp-content/uploads/2023/01/4-20.jpg",
        price: " Rs. 2,875"
    }
    ,
    {
        id: 4,
        Name: " HP Victus", //16-r0073cl Gaming & Entertainment Laptop
        size: " All",
        color: " Black",
        image: "https://gamingxperts.pk/1203-large_default/hp-victus-16-r0073cl-gaming-entertainment-laptop.jpg",
        price: " Rs. 390,000"
    }
    ,
    {
        id: 5,
        Name: " Logitech M185 Wireless Mouse",
        size: " Single",
        color: " Swift Grey",
        image: "https://pcfanatics.pk/cdn/shop/products/LogitechM185GreyWirelessOpticalMou_454x390.png?v=1597063100",
        price: " Rs. 2,999"
    }
    ,
    {
        id: 6,
        Name: " Redmi Note 13",
        size: " 8GB 256GB",
        color: "Black , Blue , White",
        image: "https://mymart.pk/cdn/shop/files/Note13Image2_540x.jpg?v=1707894769",
        price: " Rs. 45,699"
    }
    ,
    {
        id: 7,
        Name: " Acefast H2 noise canceling Bluetooth headphones",
        size: " Single",
        color: " White",
        image: "https://allmytech.pk/wp-content/uploads/2024/02/acefast-h2-headphones-white-768x768.webp",
        price: " Rs. 11,990"
    }
    ,
    {
        id: 8,
        Name: " Xiaomi Pad 6",
        size: " 8GB- 256GB",
        color: " grey ,  Black , blue",
        image: "https://mymart.pk/cdn/shop/files/Xiaomi-Pad-6-Blue_1_2048x2048.png?v=1713858140",
        price: " Rs. 104,999"
    }
    ,
    {
        id: 9,
        Name: " Xiaomi MIX Flip",
        size: " 12GB- 512GB",
        color: " Black , Pink",
        image: "https://mymart.pk/cdn/shop/files/XiaomiMixFlipcopy2_540x.png?v=1729771412",
        price: " Rs. 399,999"
    }
    ,
    {
        id: 10,
        Name: " Redmi Note 13 Pro",
        size: " 8GB- 256GB",
        color: " Black , Sky Blue , white",
        image: "https://mymart.pk/cdn/shop/files/Note13ProImage3_540x.jpg?v=1707896977",
        price: " Rs. 60,499"
    }
    ,
    {
        id: 11,
        Name: " Redmi A3x",
        size: " 3GB- 64GB",
        color: " Black , Gold , white",
        image: "https://mymart.pk/cdn/shop/files/A3xblack_540x.png?v=1716551082",
        price: " Rs. 17,699"
    }
    ,
    {
        id: 12,
        Name: " Redmi A3",
        size: " 4GB- 64GB",
        color: " Black , Blue , white",
        image: "https://mymart.pk/cdn/shop/files/A3product_2048x2048.jpg?v=1709126566",
        price: " Rs. 19,999"
    }
]




var cardArea = document.getElementById("cardArea") || ''
for (var i = 0; i < itemsData.length; i++) {
    cardArea.innerHTML += `
    <div class="card">
            <div class="image">
                <img src="${itemsData[i].image}" alt="">
            </div>
            <div class="cardText">

                <span class="bold">Product :</span><span>${itemsData[i].Name}</span><br>
                <span class="bold">Color :</span><span>${itemsData[i].color}</span><br>
                <span class="bold">Size/specs :</span><span>${itemsData[i].size}</span><br>
                <span class="bold">Price :</span><span>${itemsData[i].price}</span><br>
                <button onclick="add(this)">Add to Cart</button>           
            </div>
        </div>
    `
}

// add to card work is here *************


var currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
var addToCard = JSON.parse(window.localStorage.getItem('addToCard')) || [];
var getData = window.localStorage.getItem("userdata");
var getParseData = JSON.parse(getData);
console.log(addToCard);


function add(e) {

    // Check user can signup or not 

   if(!currentUser){
    alert('SignIn First')
    window.location.href = './login.html'
   }
   else{
    
    var productName = e.parentNode.childNodes[2].textContent;
    // console.log(productName);

    // for (var j = 0; j < itemsData.length; j++) {
    //     if (idNode == itemsData[j].id) {
    //         console.log("hellow")
    //         for (var k = 0; k < getParseData.length; k++) {
    //             if (currentUser.email == getParseData[k].email) {
    //                 if (!getParseData[k].CardId) {
    //                     getParseData[k].CardId = [];
    //                 }
    //                 getParseData[k].CardId.push(itemsData[j]);
    //                 window.localStorage.setItem("userdata", JSON.stringify(getParseData));
    //             }
    //         }
    //     }
    // }

    itemsData.some((item) => {
       if(item.Name === productName){
        // console.log( 'Iff'  + item.Name);
        addToCard.push(item)
        window.localStorage.setItem('addToCard', JSON.stringify(addToCard))   // Push Kra rha Orders [] Ko localstorage ma
        return true;        /// Return true break kr rha 
    }
    else{
        // console.log( "Else" + item.Name);
        return false;
    }
})

    alert("✅Added to Cart")
}
}


// Card.html files ma Add To Card Items Print Krwa rha

if(window.location.href.indexOf('card.html') != -1){
    console.log('card fles');
   
   let addToCardArr = JSON.parse(window.localStorage.getItem('addToCard'))
   let itemDisplayDiv = document.querySelector('.item_display')
   
 addToCard.forEach(item => {
    // console.log(item);
    
    itemDisplayDiv.innerHTML += `
         <div class="itemsmain-flex">
            <img src=${item.image} alt="">
            <h3>${item.Name}</h3>
            <p>${item.price}</p>
            <p>${item.size}</p>
            <button onClick='AddToCardRemove(this)'>delete</button>
     </div>
    `
 });
  
}

function AddToCardRemove(e){
    let itemName = e.parentNode.childNodes[3].innerText;
    console.log(itemName);
    
    let addToCardArr = JSON.parse(window.localStorage.getItem('addToCard'));
 
    let filterAddToCardItem  = addToCardArr.filter((item) => {
      if(itemName !== item.Name.trim()){
       return item
      }
      else{
        e.parentNode.remove();   // delete item ui se remove kr rha
      }
        
   })
 
   window.localStorage.setItem('addToCard', JSON.stringify(filterAddToCardItem))
 
}

//  <----- Orders Donee Function ----->

function purchase() {
    alert('Order Done');
    var orders = JSON.parse(window.localStorage.getItem("Orders")) || [];
    var getProductsCistomer = JSON.parse(window.localStorage.getItem("addToCard"));
  
    
    for (var i = 0; i < getProductsCistomer.length; i++) {
      orders.push(getProductsCistomer[i]);
    }
   
    
    getProductsCistomer.length = 0;
    
    window.localStorage.setItem("addToCard",JSON.stringify(getProductsCistomer));
    window.localStorage.setItem("Orders", JSON.stringify(orders));
  
    var itemsHtml = document.querySelectorAll(".itemsmain-flex");
      
       itemsHtml.forEach((item) => {
          item.remove();
        })
    
}