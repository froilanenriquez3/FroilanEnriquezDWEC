function getColor(){
  let urlApi = 'http://thecolorapi.com';
  let idParam = document.getElementById('inColor').value.substr(1);
  let endpoint = urlApi + '/id?' + "hex=" + idParam;
  axios
    .get(endpoint)
    .then((response)=> {
      const jsonResponse = response.data;
      console.log(jsonResponse);
      document.getElementById('colorDisplay').style.color = jsonResponse.hex.value;
      document.getElementById('jsonResponse').innerHTML = "JSON response: " + JSON.stringify(jsonResponse);})
    .catch(error => { 
      console.log(error);
      document.getElementById('errorDisplay').innerHTML += error;})
  
}