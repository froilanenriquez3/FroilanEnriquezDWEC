console.log('textbox working!');
let textbox = document.querySelector('.author');

textbox.innerHTML += "<p> Written by " + document.querySelector('.textboxComponent').dataset.author +"</p>";