let addBtn = document.querySelector('#add');
let subBtn = document.querySelector('#sub');
let qty = document.querySelector('#qty-box');
let totalPrice = document.querySelector('#total');

let addBtn2 = document.querySelector('#add2');
let subBtn2 = document.querySelector('#sub2');
let qty2 = document.querySelector('#qty-box2');
let totalPrice2 = document.querySelector('#total2');

let t1 = document.querySelector('#t1');
let t2 = document.querySelector('#t2');

addBtn.addEventListener('click', () => {
  qty.value = parseInt(qty.value) + 1;
  totalPrice.innerHTML = parseInt(qty.value) * 12000;
});

subBtn.addEventListener('click', () => {
  if (qty.value > 1) {
    qty.value = parseInt(qty.value) - 1;
    totalPrice.innerHTML = parseInt(qty.value) * 12000;
  }
  else {
    qty.value = 1;
  }
});

addBtn2.addEventListener('click', () => {
  qty2.value = parseInt(qty2.value) + 1;
  totalPrice2.innerHTML = parseInt(qty2.value) * 10000;
});

subBtn2.addEventListener('click', () => {
  if (qty.value > 1) {
    qty2.value = parseInt(qty2.value) - 1;
    totalPrice2.innerHTML = parseInt(qty2.value) * 10000;
  }
  else {
    qty.value = 1;
  }
});


function updateTotals(){
  let total1= parseInt(totalPrice.innerHTML) || 0;
  let total2= parseInt(totalPrice2.innerHTML) || 0;

  let sumTotal = total1 + total2;
  t1.innerHTML = sumTotal;

  let couponTotal = sumTotal * 0.8636;
  t2.innerHTML = couponTotal;
}

addBtn.addEventListener('click', updateTotals);
subBtn.addEventListener('click', updateTotals);
addBtn2.addEventListener('click', updateTotals);
subBtn2.addEventListener('click', updateTotals);

