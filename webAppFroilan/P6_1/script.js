//https://webmasters.stackexchange.com/questions/127482/on-what-specific-grounds-were-html-imports-rejected-deprecated-and-removed

//Obtaining object/iframe with class 'html-import-helper', the object that imports the other html file
let htmlImportHelpers = document.querySelectorAll('.html-import-helper');

//Function that, using e, the event object, adds the content of other HTML file before the tag, and then removes the object itself
function importHTML(e) {
  e.target.before(e.target.contentDocument.body.children[0]);
  e.target.remove();
}

//Calling importHTML when the page loads on each object in the array
htmlImportHelpers.forEach(
    (htmlImportHelper) => {htmlImportHelper.addEventListener('load', importHTML);}
);




//Adding stylesheet to component
let link = document.createElement('link'); 
  
link.rel = 'stylesheet';  
link.type = 'text/css'; 
link.href = 'wc_textbox/wc_textbox.css';  

document.getElementsByTagName('HEAD')[0].appendChild(link);
