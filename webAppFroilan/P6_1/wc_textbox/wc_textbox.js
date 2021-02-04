console.log('textbox working!');
let textbox = document.querySelector('.textboxComponent');

textbox.innerHTML += "<p> Written by " + textbox.dataset.author +"</p>";