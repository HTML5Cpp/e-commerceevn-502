document.getElementById('contBolsa').addEventListener('click', function(){CarroRUN()});

let CarroRUN = function(){
    window.location.replace('carrito.html');
}

document.getElementById('contBolsa2').addEventListener('click', function(){CarroRUNn()});

let CarroRUNn = function(){
    window.location.replace('HTML/carrito.html');
}

function verMensaje(){
    document.getElementById('modalCa').classList.add('mostrarMensaje');
    document.getElementById('modalCa').classList.remove('NomostrarMensaje');
}

function ocultarMensaje(){
    document.getElementById('modalCa').classList.remove('mostrarMensaje');
    document.getElementById('modalCa').classList.add('NomostrarMensaje');
}