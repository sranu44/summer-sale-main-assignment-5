let total = 0;

function handelClickBtn(target){
 const selectedItemContainer = document.getElementById('selected-item');   
const itemName = target.parentNode.childNodes[3].innerText;
const p = document.createElement('p');
p.innerHTML = itemName;
selectedItemContainer.appendChild(p);

const price = target.parentNode.childNodes[5].innerText.split(' ')[0];
total= parseInt(total) + parseInt(price);

 document.getElementById('total').innerText = total;

 const dicountPrice = document.getElementById('discount');
 dicountPrice = 20 - total;

}

