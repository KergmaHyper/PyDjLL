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

  const buttons = document.querySelectorAll('button');

  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }
});
