
document.querySelector('.Red').addEventListener('click', colorButton);
document.querySelector('.Yellow').addEventListener('click', colorButton);
document.querySelector('.Blue').addEventListener('click', colorButton);


function colorButton(buttonClicked) {

  let buttonFromHtml = buttonClicked.target;


  let buttonFromHtmlColor = buttonFromHtml.innerHTML;


  buttonFromHtml.style.backgroundColor = buttonFromHtmlColor;

  console.log('Work')
}


