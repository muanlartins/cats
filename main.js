function generateCat() {
  const cat = document.getElementById('cat');
  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => cat.src = data[0].url);
}