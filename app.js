/**
 * @type {string[]}
 */
const nombres = [];

function agregarAmigo() {
  /**
   * @type {HTMLInputElement}
   */
  const input = document.getElementById('amigo');

  if (!input.value) {
    alert('Por favor, inserte un nombre.');
    return;
  }

  nombres.push(input.value);

  // Limpiar el campo
  input.value = '';

  actualizarAmigos();
}

function sortearAmigo() {
  if (nombres.length === 0) {
    alert('No puede sortear un nombre si la lista está vacía.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const nombreAleatorio = nombres[indiceAleatorio];

  /**
   * @type {HTMLUListElement}
   */
  const lista = document.getElementById('resultado');

  lista.innerHTML = nombreAleatorio;
}

function actualizarAmigos() {
  /**
   * @type {HTMLUListElement}
   */
  const lista = document.getElementById('listaAmigos');

  // Limpiar la lista antes de actualiarla
  lista.innerHTML = '';

  const elementosLista = nombres.map((nombre) => {
    const li = document.createElement('li');
    li.textContent = nombre;
    return li;
  });

  lista.append(...elementosLista);
}
