// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");
const inputAmigo = document.getElementById("amigo");

function agregarAmigo() {
    const amigoIngresado = inputAmigo.value.trim().toUpperCase();

    if (!amigoIngresado) {
        return alert("Por favor, inserte un nombre");
    }

    if (amigos.includes(amigoIngresado)) {
        alert("El nombre ya fue ingresado");
    } else {
        amigos.push(amigoIngresado);
        mostrarAmigos();
    }

    limpiarCaja();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        return alert("La lista está vacía");
    }

    resultado.innerHTML = ""; // Limpiar resultados previos
    const amigoSecreto = amigos[generarNumero()];
    const li = document.createElement("li");
    li.textContent = `El amigo secreto sorteado es: ${amigoSecreto}`;
    resultado.appendChild(li);
    //limpiar la lista de amigos
    lista.innerHTML = "";
}

//***************************funciones auxiliares*************************************************************

function mostrarAmigos() {
    lista.innerHTML = ""; // Limpiar lista existente
    //el siguente loop podria ser mas eficiente con un forEach
    for(let i = 0; i < amigos.length; i++){                    
        let li = document.createElement("li"); // Crea un nuevo <li>
        li.textContent = amigos[i];
        //Agregar el elemento <li> a la lista
        lista.appendChild(li);
    }
}

const limpiarCaja = () => (inputAmigo.value = "");

const generarNumero = () => Math.floor(Math.random() * amigos.length);