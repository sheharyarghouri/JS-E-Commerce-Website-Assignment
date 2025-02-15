// Card Work Is Here 

var itemsData = [
    {
        id: 1,
        Name: " Mobile One plus",
        size: " 16GB 256GB , 8GB 128GB",
        color: " Black ,  Green , Gold",
        image: "data:image/jpeg;base64,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",
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
        Name: " EASE EGM110",
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
        image: "data:image/jpeg;base64,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",
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