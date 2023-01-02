
document.querySelector('.btn-light-1').addEventListener('click', colorButton);
document.querySelector('.btn-light-2').addEventListener('click', colorButton);
document.querySelector('.btn-light-3').addEventListener('click', colorButton);
document.querySelector('.btn-light-4').addEventListener('click', colorButton);

function colorButton(buttonClicked) {

  let buttonFromHtml = buttonClicked.target;


  let buttonFromHtmlColor = buttonFromHtml.innerHTML;


  buttonFromHtml.style.backgroundColor = buttonFromHtmlColor;


  console.log('function work: change color');

}

function onClickReset() {

  document.getElementById("btn-one").reset = document.querySelector('.btn-light-1').style.backgroundColor = "white";

  document.getElementById("btn-two").reset = document.querySelector('.btn-light-2').style.backgroundColor = "white";

  document.getElementById("btn-three").reset = document.querySelector('.btn-light-3').style.backgroundColor = "white";

  document.getElementById("btn-four").reset = document.querySelector('.btn-light-4').style.backgroundColor = "white"

  console.log('colors of buttons/button are reset');

}


