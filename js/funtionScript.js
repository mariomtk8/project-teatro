function mostrarObra(obra, contenedor) {
    const container = document.createElement("div");
    container.classList.add("obra-container");
  
    // Crear bloque con imagen y horarios
    const imagenContainer = document.createElement("div");
    imagenContainer.classList.add("imagen-container");
  
    const imagen = document.createElement("img");
    imagen.src = obra.imagen2;
    imagen.alt = obra.nombre;
  
    const horarios = document.createElement("ul");
    obra.fechas.forEach(function (fecha) {
      const horario = document.createElement("li");
      horario.textContent = fecha;
      horarios.appendChild(horario);
    });
  
    imagenContainer.appendChild(imagen);
    imagenContainer.appendChild(horarios);
  
    // Crear bloque con imagen y botón
    const botonContainer = document.createElement("div");
    botonContainer.classList.add("boton-container");
  
    const imagen2 = document.createElement("img");
    imagen2.src = obra.imagen2;
    imagen2.alt = obra.nombre;
  
    const boton = document.createElement("button");
    boton.textContent = "Click para comprar entradas";
    boton.addEventListener("click", function () {
      window.location.href = obra.boton.enlace;
    });
  
    botonContainer.appendChild(imagen2);
    botonContainer.appendChild(boton);
  
    // Crear bloque con información
    const informacionContainer = document.createElement("div");
    informacionContainer.classList.add("informacion-container");
  
    const informacion = document.createElement("p");
    informacion.textContent = obra.informacion;
  
    const reparto = document.createElement("p");
    reparto.textContent = obra.reparto;
  
    informacionContainer.appendChild(informacion);
    informacionContainer.appendChild(reparto);
  
    // Agregar bloques al contenedor principal
    container.appendChild(imagenContainer);
    container.appendChild(botonContainer);
    container.appendChild(informacionContainer);
  
    // Agregar el contenedor principal al contenedor especificado
    contenedor.appendChild(container);
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    // Ruta al archivo Datos.json
    const jsonFile = 'Datos.json';
  
    // Nombre de la obra que deseas mostrar
    const nombreObra = 'Esperando Godot';
  
    // Contenedor HTML donde se agregará la obra
    const contenedorHTML = document.getElementById('contenedor-obra');
  
    // Obtener datos del archivo JSON
    fetch('/JSON/Datos.json')
      .then(response => response.json())
      .then(datos => {
        // Filtrar datos por nombre de la obra
        const obraSeleccionada = datos.find(obra => obra.nombre === nombreObra);
  
        if (obraSeleccionada) {
          // Mostrar la obra en el contenedor especificado
          mostrarObra(obraSeleccionada, contenedorHTML);
        } else {
          console.error('La obra no fue encontrada en los datos.');
        }
      })
      .catch(error => console.error('Error al obtener datos:', error));
  });