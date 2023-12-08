class poster {
    constructor(idsObras, containerId) {
      this.idsObras = idsObras;
      this.container = document.getElementById(containerId);
    }
  
    async cargarObras() {
      for (const idObra of this.idsObras) {
        try {
          const response = await axios.get(`http://localhost:3001/info-obras/${idObra}`);
          const obra = response.data;
  
          const posterDiv = document.createElement('div');
          posterDiv.className = 'show-poster';
          posterDiv.innerHTML = `
            <div class="show-poster__image">
                <img src="${obra.images[0]}" alt="Póster de ${obra.name}" class="poster__img">
            </div>
            <div class="show-poster__details">
                <h3 class="show-poster__title">${obra.name}</h3>
                <button class="show-poster__button"><a href="${obra.infoUrl}">Comprar e información</a></button>
            </div>
          `;
  
          this.container.appendChild(posterDiv);
        } catch (error) {
          console.error('Error en la petición:', error);
        }
      }
    }
  }
  
  export default poster;
  