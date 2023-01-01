
document.querySelector('.Btn-one').addEventListener('click', colorButton);
document.querySelector('.Btn-two').addEventListener('click', colorButton);
document.querySelector('.Btn-three').addEventListener('click', colorButton);
document.querySelector('.Btn-four').addEventListener('click', colorButton);

function colorButton(buttonClicked) {

  let buttonFromHtml = buttonClicked.target;


  let buttonFromHtmlColor = buttonFromHtml.innerHTML;


  buttonFromHtml.style.backgroundColor = buttonFromHtmlColor;


  console.log('function work');

}

function onClickReset() {

  document.getElementById("btn-one").reset = document.querySelector('.Btn-one').style.backgroundColor = "white";

  document.getElementById("btn-two").reset = document.querySelector('.Btn-two').style.backgroundColor = "white";

  document.getElementById("btn-three").reset = document.querySelector('.Btn-three').style.backgroundColor = "white";

  document.getElementById("btn-four").reset = document.querySelector('.Btn-four').style.backgroundColor = "white"

  console.log('buttons are reset');

}


