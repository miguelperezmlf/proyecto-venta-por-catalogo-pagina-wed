// Función para buscar productos
async function buscarProductos(termino) {
    const url = `https://api.tuservidor.com/busqueda?termino=${encodeURIComponent(termino)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.length > 0) {
            // Limpia los resultados anteriores
            document.getElementById("search-results").innerHTML = "";

            // Muestra los resultados
            data.forEach((producto) => {
                const productoHTML = `
                    <div class="producto">
                        <h3>${producto.nombre}</h3>
                        <p>${producto.descripcion}</p>
                        <p>Precio: $${producto.precio}</p>
                        <img src="${producto.imagen}" alt="${producto.nombre}">
                    </div>
                `;
                document.getElementById("search-results").innerHTML += productoHTML;
            });
        } else {
            document.getElementById("search-results").innerHTML = "No se encontraron resultados.";
        }
    } catch (error) {
        console.error("Error al buscar productos:", error);
    }
}

// Manejar el envío del formulario
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const searchTerm = document.getElementById("search-input").value;
    buscarProductos(searchTerm);
});
