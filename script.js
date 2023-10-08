
// Obtén todos los elementos con la clase "block"
const blocks = document.querySelectorAll('.block');
const modal = document.getElementById('myModal');
const closeModal = document.querySelector('.close');
const modalContent = document.querySelector('.modal-content');
const modalVideo = document.getElementById('modalVideo');
const modalContents = [
    {
        title: 'Impacto del cambio climático',
        content: '¿Sabias que? El aumento del nivel del mar es causado principalmente por dos factores relacionados con el calentamiento global: el agua agregada por el derretimiento de las capas de hielo y los glaciares, y la expansión del agua de mar a medida que se calienta. El primer gráfico sigue el cambio en el nivel global del mar desde 1993, observado por satélites.',
        namevideo: "./videos/nasa 2023-10-08 01-58-06.mp4"
    },
    {
        title: 'Impactando los recursos de agua dulce y el cambio climático.',
        content: '¿Sabias que? El 70% de la superficie de la tierra es agua, pero pese que suena bastante, de ese volumen constante, sobre 1.386.000 metros cúbicos , el 95% es agua de mar no apta para el consumo humano. ',
        namevideo: "./videos/IMPACTO.mp4"
    },
    {
        title: 'Ciclo global del agua',
        content: '¿Sabias que? Consumimos agua no solo cuando bebemos o nos duchamos, sino también a través de la producción de alimentos y bienes. Se llama "agua virtual" al agua utilizada en la producción de productos que consumimos.',
        namevideo: "./videos/NASA 2023-10-07 23-02-01.mp4"
    }
];

// Agrega un controlador de clic para cada bloque
blocks.forEach((block, index) => {
    block.addEventListener('click', () => {
        // Muestra el modal
        modal.style.display = 'block';
        // Actualiza el contenido del modal
        modalContent.querySelector('h2').textContent = `${modalContents[index].title}`;
        modalContent.querySelector('p').textContent = `${modalContents[index].content}.`;
        modalVideo.innerHTML = `
            <video class="video-block" controls width="400" height="300" >
                <source src="${modalContents[index].namevideo}" width type="video/mp4">
                Tu navegador no admite el elemento de video.
            </video>
        `;
    });
});

// Agrega un controlador de clic para cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cierra el modal si se hace clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});




/*
const blocks = document.querySelectorAll('.block');
const modal = document.getElementById('myModal');
const closeModal = document.querySelector('.close');
const modalText = document.getElementById('modalText');

// Array de contenidos para los modales (uno para cada bloque)
const modalContents = [
    {
        title: 'Bloque 1',
        content: 'Contenido del bloque 1.'
    },
    {
        title: 'Bloque 2',
        content: 'Contenido del bloque 2.'
    },
    {
        title: 'Bloque 3',
        content: 'Contenido del bloque 3.'
    }
];

// Agrega un controlador de clic para cada bloque
blocks.forEach((block, index) => {
    block.addEventListener('click', () => {
        // Muestra el modal
        modal.style.display = 'block';
        // Actualiza el contenido del modal según el bloque clicado
        modalText.innerHTML = `<h2>${modalContents[index].title}</h2><p>${modalContents[index].content}</p>`;
    });
});

// Agrega un controlador de clic para cerrar el modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cierra el modal si se hace clic fuera de él
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
*/