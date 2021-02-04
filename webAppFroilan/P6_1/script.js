//Adding stylesheet to component
console.log('index html working!');

//https://webmasters.stackexchange.com/questions/127482/on-what-specific-grounds-were-html-imports-rejected-deprecated-and-removed
//code originates from last answer at bottom of page

//Obtaining object/iframe with class 'html-import-helper', the object that imports the other html file
let htmlImportHelpers = document.querySelectorAll('.html-import-helper');


//Function that, using e, the event object, adds the content of other HTML file before the tag, and then removes the object itself
function importHTML(e) {

    //add stylesheet
    let myStyle = document.createElement('link');
    myStyle.href = e.target.dataset.css;
    myStyle.rel = 'stylesheet';
    document.head.append(myStyle);

    //add script
    let myScript = document.createElement('script');
    myScript.src = e.target.dataset.js;
    document.body.append(myScript)

    e.target.before(e.target.contentDocument.body.children[0]);
    e.target.remove();
    console.log('component added!')
}

// Calling importHTML when each object in the array loads
htmlImportHelpers.forEach(
    (htmlImportHelper) => {
        htmlImportHelper.addEventListener('load', importHTML);
    }
);


