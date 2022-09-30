const promoArray = [
  { name: "csmoney", coupon: "csmoney" },
  { name: "skinbaron", coupon: "skinbaron" },
  { name: "dmarket", coupon: "dmarket" },
  { name: "tradeit", coupon: "tradeit" },
  { name: "hellcase", coupon: "hellcase" },
  { name: "counterStrike", coupon: "counterStrike" },
]

let promo1 = document.getElementById('promo-btn_1');
let promo2 = document.getElementById('promo-btn_2');
let promo3 = document.getElementById('promo-btn_3');
let promo4 = document.getElementById('promo-btn_4');
let promo5 = document.getElementById('promo-btn_5');
let promo6 = document.getElementById('promo-btn_6');



const promoBtns = [promo1, promo2, promo3, promo4, promo5, promo6]


for (let index = 0; index < promoBtns.length; index++) {
  // promoBtns[index].onclick = function(){
  //   // document.execCommand(promoArray[index].coupon)
  //   // navigator.clipboard.writeText(promoArray[index].coupon)
  //   // navigator.clipboard.writeText('This text is now in the clipboard');
  //   document.execCommand("copy");
  // }

  promoBtns[index].addEventListener('click', function () {
    navigator.clipboard
      .writeText(`${promoArray[index].coupon}`)
      .then(() => {
        // Успех!
        console.log('all Rigth')
      })
      .catch(() => {
        // Неудача :(
        console.log('notall Rigth')
      });
  });
}



