// function smallImg() {
//     if (document.getElementsByClassName('image-handler')[0].children.length >= 2) {
//       let image_rm = document.getElementsByTagName('img')[0];
//       image_rm.parentNode.removeChild(image_rm);
//       let img = document.createElement('img');
//       img.src = './images/small_banner_red.png';
//       img.classList.add('small');
//       document.getElementsByClassName('image-handler')[0].appendChild(img);

//     } else {
//       let img = document.createElement('img');
//       img.src = './images/small_banner_red.png';
//       img.classList.add('small');
//       document.getElementsByClassName('image-handler')[0].appendChild(img);
//     }
// }

// function midImg() {
//   if (document.getElementsByClassName('image-handler')[0].children.length >= 2) {
//       let image_rm = document.getElementsByTagName('img')[0];
//       image_rm.parentNode.removeChild(image_rm);
//       let img = document.createElement('img');
//       img.src = './images/square_banner.png';
//       document.getElementsByClassName('image-handler')[0].appendChild(img);
//     } else {
//       let img = document.createElement('img');
//       img.src = './images/square_banner.png';
//       document.getElementsByClassName('image-handler')[0].appendChild(img);
//     }
// }

// function hugeImg() {
//   if (document.getElementsByClassName('image-handler')[0].children.length >= 2) {
//       let image_rm = document.getElementsByTagName('img')[0];
//       image_rm.parentNode.removeChild(image_rm);
//       let img = document.createElement('img');
//       img.src = './images/huge_banner.png';
//       document.getElementsByClassName('image-handler')[0].appendChild(img);
//     } else {
//       let img = document.createElement('img');
//       img.src = './images/huge_banner.png';
//       document.getElementsByClassName('image-handler')[0].appendChild(img);
//     }
// }

// function colGreen() {
//   let textArea = document.getElementsByTagName('textarea')[0];
//   textArea.className = 'green';
// }

// function colRed() {
//   let textArea = document.getElementsByTagName('textarea')[0];
//   textArea.className = 'red';
// }

// function colBlue() {
//   let textArea = document.getElementsByTagName('textarea')[0];
//   textArea.className = 'blue';
// }

// function makeSize(value) {
//   return function() {
//     document.getElementsByClassName('image-handler')[0].style.fontSize = value + 'px'
//   };
// };
// let size24 = makeSize(24);
// let size36 = makeSize(36);
// let size48 = makeSize(48);

// document.getElementById('size-24').onclick = size24;
// document.getElementById('size-36').onclick = size36;
// document.getElementById('size-48').onclick = size48;

// function peddanaFont() {
//   document.getElementsByClassName('image-handler')[0].style.fontFamily = 'Peddana, serif'
// }

// function oswaldFont() {
//   document.getElementsByClassName('image-handler')[0].style.fontFamily = 'Oswald, sans-serif'
// }

// function antonFont() {
//   document.getElementsByClassName('image-handler')[0].style.fontFamily = 'Anton, sans-serif'
// }