function getColorXML() {
  console.log('Using XMLHttpRequest');
  let urlApi = 'http://thecolorapi.com';
  let idParam = document.getElementById('inColor').value.substr(1);

  let endpoint = urlApi + '/id?' + "hex=" + idParam;

  const req = new XMLHttpRequest();
  req.responseType = 'json';
  req.open('GET', endpoint);
  req.onload = () => {
    if(req.readyState === XMLHttpRequest.DONE){
      if(req.response.code != 400){
        console.log(req.response);
        document.getElementById('jsonResponse').innerHTML = "JSON response: " + JSON.stringify(req.response);
        document.getElementById('colorDisplay').style.color = req.response.hex.value;
      }
      else{
        document.getElementById('errorDisplay').innerHTML = "Error: " + req.response.message;
        console.log(req.response);
      }
    
    } 
   
  }
  req.send();
}

async function getColorFetch() {
  console.log('Using Fetch');
  let urlApi = 'http://thecolorapi.com';
  let idParam = document.getElementById('inColor').value.substr(1);

  let endpoint = urlApi + '/id?' + "hex=" + idParam;
 
  try {
    console.log('Sending request to API');
    const response = await fetch(endpoint);
    console.log('Request sent!');
    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      document.getElementById('jsonResponse').innerHTML = "JSON response: " + JSON.stringify(jsonResponse);
      document.getElementById('colorDisplay').style.color = jsonResponse.hex.value;
    }

  } catch (error) {
    console.log(error);
    document.getElementById('errorDisplay').innerHTML += error;
  }


}