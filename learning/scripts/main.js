var myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
myHeading.textTitle = 'Hello!';

function mult(num1, num2){
 let m = num1 * num2;
 return m;
}

//alert( mult(2,3) );

document.querySelector('h1').onclick = function() {
    //alert('Ouch! Stop poking me!');
    document.querySelector('h1').textContent =
     prompt('Enter new header', document.querySelector('h1').textContent);

}

const para = document.querySelector('.ppp');
para.addEventListener('click', updateName);
function updateName() {
 let name = prompt('Enter a new name', para.textContent);
  para.textContent = 'Player 1: ' + name;
}


document.addEventListener("DOMContentLoaded", function() {
  function createParagraph() {
    let para = document.createElement('p');
    para.textContent = 'You clicked the button! ' + buttons.length;
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll('.add_p');

  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }
});
const img1 = document.querySelector('img');

img1.onclick = function(){
 let src1 = img1.getAttribute('src')
  if (src1 === './assets/favorite-1_th.jpg') {
        img1.setAttribute('src',"./assets/favorite-2_th.jpg");
        } else {
        img1.setAttribute('src','./assets/favorite-1_th.jpg');
        }
}

const but_ch_user = document.getElementById('ch_user');
var myHead = document.querySelector('h1');

function setUserName(){
    let usrName = prompt("Set user name:");
    localStorage.setItem('name', usrName);
    myHead.textContent = "Mozzila say hello - " + usrName;
}

but_ch_user.onclick = function(){
        setUserName();
}

if (localStorage.getItem('name')){
    let usrName = localStorage.getItem('name');
    myHead.textContent = "Mozzila say hello - " + usrName
} else {
    setUserName();
}