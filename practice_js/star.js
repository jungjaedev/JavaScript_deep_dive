'use strict';

// const $americano = document.querySelector('.americano');
// const $latte = document.querySelector('.latte');
// const $menu1 = document.querySelector('.menu1');

// $americano.addEventListener('click', event => {
//   $americano.classList.add('blue');
//   $latte.classList.remove('blue');
// });

// $latte.addEventListener('click', event => {
//   $americano.classList.remove('blue');
//   $latte.classList.add('blue');
// });

// $latte.onclick = handleClick;

// $americano.onclick = handleClick;

let menus = document.querySelectorAll('button'); //모든 버튼을 가져옵니다.

let btnAmericano = menus[0];
let btnCaffelatte = menus[1];

btnAmericano.onclick = handleClick;
btnCaffelatte.onclick = handleClick; // 이상으로 for 문으로 충분히 구현할 수 있는 내용입니다.

function handleClick() {
  // 아래의 빈 칸(____)을 채우세요.
  let currentMenu = ____; // TODO
  console.log(currentMenu + '를 클릭하셨습니다.');
}

function handleClick() {
  console.log();
}
