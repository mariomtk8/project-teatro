const axios = require('axios');


axios.get(`http://localhost:3001/info-obras/${idObra}`)
  .then(response => {
    const obra = response.data;

    // Actualizar el título de la obra
    document.getElementById('showTitle').textContent = obra.titulo;

    // Actualizar la imagen del póster
    const posterImg = document.getElementById('posterImg');
    posterImg.src = obra.imagenUrl;
    posterImg.alt = 'Póster de ' + obra.titulo;

    // Actualizar el enlace para comprar e información
    document.getElementById('infoLink').href = obra.infoUrl;
  })
  .catch(error => {
    console.error('Error en la petición:', error);
  });