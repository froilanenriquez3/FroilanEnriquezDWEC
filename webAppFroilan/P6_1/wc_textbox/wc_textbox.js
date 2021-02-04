console.log('textbox working!');
let myTextBox = document.querySelector('.textboxComponent');
let textbox = document.querySelector('.author');
let story = document.querySelector('.story');

function writeStory(callback){
    story.innerHTML = 'Once upon a time...'+ '<br>'+ '<br>' ;
    callback();
}

function writeComedy(){
    story.innerHTML += 'A man walked into a bar. It hurt.' + '<br>'+ '<br>';
}

function writeRomance(){
    story.innerHTML += 'Roses are red' + '<br>' + 'Violets are blue,'+ '<br>' + 
    'I think I am falling'+ '<br>' +  'In love with you'+ '<br>' + '<br>' ;
}


textbox.innerHTML += "<p> Written by " + myTextBox.dataset.author +"</p>";
