document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("informacionSeleccionada");
  
    // Cargar datos desde el archivo JSON
    fetch('/JSON/Datos1.JSON')
      .then(response => response.json())
      .then(data => {
        // Mostrar la información en el contenedor
        mostrarInformacion(data);
      })
      .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
        container.innerHTML = 'Error al cargar la información.';
      });
  
    function mostrarInformacion(data) {
      // Crear elementos HTML para mostrar la información
      const infoContainer = document.createElement('div');
  
      data.fechas.forEach(fecha => {
        const fechaElement = document.createElement('div');
        fechaElement.classList.add('fecha'); // Agrega la clase 'fecha'
        fechaElement.innerHTML = `<p><strong>Fecha:</strong> ${fecha.fecha}</p><p><strong>Horas:</strong> ${fecha.horas.join(', ')}</p>`;
  
        // Crear el botón de "Seleccionar" para cada fecha
        const botonSeleccionar = document.createElement('button');
        botonSeleccionar.textContent = data.boton.texto;
  
        // Agregar un manejador de eventos para redirigir a la página de destino al hacer clic
        botonSeleccionar.addEventListener('click', function() {
          // Redirigir a la página de destino especificada en el JSON (puede ser dinámica para cada fecha)
          window.location.href = data.boton.destino + '?fecha=' + encodeURIComponent(fecha.fecha);
        });
  
        // Agregar elementos al contenedor
        fechaElement.appendChild(botonSeleccionar);
        infoContainer.appendChild(fechaElement);
      });
  
      container.appendChild(infoContainer);
    }
  });

 // ------------------Programacion--------------------



 // Función para cargar el archivo JSON de manera asíncrona
async function cargarDatos() {
  try {
    const response = await fetch('/JSON/Datos.json');
    const datosJson = await response.json();
    return datosJson;
  } catch (error) {
    console.error('Error al cargar el archivo JSON:', error);
    return [];
  }
}

// Función para agregar posters a un contenedor específico
function agregarPosters(posters, containerId) {
  const container = document.getElementById(containerId);

  posters.forEach((poster) => {
    const posterDiv = document.createElement('div');
    posterDiv.classList.add('show-poster');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('show-poster__image');

    const imagen = document.createElement('img');
    imagen.src = poster.imagen;
    imagen.alt = 'Póster de la función';
    imagen.classList.add('poster__img');

    imageDiv.appendChild(imagen);

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('show-poster__details');

    const titulo = document.createElement('h3');
    titulo.classList.add('show-poster__title');
    titulo.textContent = poster.nombre;

    const boton = document.createElement('button');
    boton.classList.add('show-poster__button');
    boton.textContent = poster.boton.texto;
    boton.addEventListener('click', function () {
      window.location.href = poster.boton.enlace;
    });

    detailsDiv.appendChild(titulo);
    detailsDiv.appendChild(boton);

    posterDiv.appendChild(imageDiv);
    posterDiv.appendChild(detailsDiv);

    container.appendChild(posterDiv);
  });
}

// Función principal para cargar datos y crear bloques de posters
async function iniciar() {
  const datosJson = await cargarDatos();

  // Dividir los datos en bloques (por ejemplo, 3 bloques)
  const bloques = Array.from({ length: 3 }, (_, index) =>
    datosJson.slice(index * 3, (index + 1) * 3)
  );

  // Crear contenedores y agregar posters para cada bloque
  bloques.forEach((bloque, index) => {
    const containerId = `posterContainer${index + 1}`;

    // Agregar posters al contenedor del bloque
    agregarPosters(bloque, containerId);
  });
}

// Llamar a la función principal al cargar la página
document.addEventListener('DOMContentLoaded', iniciar);




////------------------Compra de Entradas-----------------------------




document.addEventListener("DOMContentLoaded", function () {
  const seatingArea = document.getElementById("seating-area");
  const buyButton = document.getElementById("buy-btn");
  const selectedSeatsInfo = document.getElementById("selected-seats-info");
  const totalCostInfo = document.getElementById("total-cost")
  

  const rows = 7;
  const seatsPerRow = 18;
  const seatPrice = {
    1: 10,
    2: 8,  
    3: 6,  
    4: 5,  
    5: 4,  
    6: 3,
    7: 2,
  };

  // Crear asientos
  const seatingTable = document.createElement("table");
  seatingTable.id = "seating-table";
  for (let i = 1; i <= rows; i++) {
    const row = document.createElement("tr");
    for (let j = 1; j <= seatsPerRow; j++) {
      const seat = document.createElement("td");
      seat.classList.add("seat");
      seat.dataset.row = i;
      seat.dataset.seat = j;
      row.appendChild(seat);
    }
    seatingTable.appendChild(row);
  }
  seatingArea.appendChild(seatingTable);

  // Manejar clic en los asientos
  seatingTable.addEventListener("click", function (event) {
    if (event.target.classList.contains("seat")) {
      event.target.classList.toggle("selected");
      updateSelectedSeatsInfo();
      updateTotalCost();
    }
  });

  
  // Manejar clic en el botón de compra
  buyButton.addEventListener("click", function () {
    const selectedSeats = document.querySelectorAll(".seat.selected");
    const totalSeats = selectedSeats.length;
    const totalCost = calculateTotalCost(selectedSeats);

    if (totalSeats > 0) {
      alert(`Has seleccionado ${totalSeats} asientos. ¡Compra exitosa! Total: $${totalCost}`);
      // Aquí podrías enviar la información al servidor para procesar la compra.
    } else {
      alert("Selecciona al menos un asiento antes de comprar.");
    }
  });

  // Función para actualizar la información de los asientos seleccionados
  function updateSelectedSeatsInfo() {
    const selectedSeats = document.querySelectorAll(".seat.selected");
    const selectedSeatsArray = Array.from(selectedSeats).map(seat => {
      return `[Fila ${seat.dataset.row}, Asiento ${seat.dataset.seat}]`;
    });
    selectedSeatsInfo.textContent = `Asientos seleccionados: ${selectedSeatsArray.join(', ')}`;
  }


  // Función para actualizar la información del costo total
  function updateTotalCost() {
    const selectedSeats = document.querySelectorAll(".seat.selected");
    const totalCost = calculateTotalCost(selectedSeats);
    const totalSeats = selectedSeats.length;
  
    // Actualizar el contenido del div con la información seleccionada
    totalCostInfo.textContent = `Asientos seleccionados: ${totalSeats} | Costo total: $${totalCost}`;
  }


  // Función para calcular el costo total
  function calculateTotalCost(selectedSeats) {
    let totalCost = 0;
    selectedSeats.forEach(seat => {
      const row = parseInt(seat.dataset.row);
      totalCost += seatPrice[row];
    });
    return totalCost;
  }
});
