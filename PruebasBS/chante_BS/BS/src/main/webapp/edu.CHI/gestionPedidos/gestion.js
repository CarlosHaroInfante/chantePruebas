/**
 * 
 */

document.addEventListener("DOMContentLoaded", function () { //Lee cuando esta todo cargado
    
    const form = document.querySelector("form");//Selecciona el formulario del documento

   
    form.addEventListener("submit", function (event) { //Espera para añadir un producto
        
        event.preventDefault(); //Hace que no sea predeterminado el formulario

        // Obtener los valores de los campos del formulario
        const usuario = document.getElementById("usuario").value;
        const producto = document.getElementById("producto").value;
        const ciudad = document.getElementById("ciudad").value;
        const fecha = document.getElementById("fecha").value;

        // Crear una nuevo pedido
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${usuario}</td>
            <td>${producto}</td>
            <td>${ciudad}</td>
            <td>${fecha}</td>
            <td>
                <button class="btn btn-danger delete-btn">Eliminar</button>
            </td>
        `;

        // Agregar la nueva fila a la tabla de pedidos
        const tbody = document.querySelector("#lista-pedidos tbody");
        tbody.appendChild(newRow);

        // Limpiar los campos del formulario
        form.reset();
    });

    // Eliminar producto

    const table = document.querySelector("#lista-pedidos"); 
    table.addEventListener("click", function (event) {
        // Verificar el click en el boton de eliminar
        if (event.target.classList.contains("delete-btn")) {
            // Obtiene la fila que contiene el botón de eliminar
            const row = event.target.closest("tr");

            
            row.remove();
        }
    });
});

