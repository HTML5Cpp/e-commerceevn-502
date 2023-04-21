let date = new Date().toDateString();
console.log(date);
let fecha = 'Fecha: '+ date;
document.getElementById('fecha').innerText = fecha;

/* ----------------------------------------  */
var zooom;
var z;
(function(){
    let idCurso = localStorage.getItem('cursosDetalle');
    let cursoss = JSON.parse(localStorage.getItem('cursos'));
    let Imagen, Precio,Nombre,Creador,Categoria,Modulos,Horas,Descripcionnn;
    for(let curso of cursoss){
        
        if(curso.posicion == idCurso){
            Imagen = curso.imagen;
            Precio = curso.precio;
            Nombre = curso.nombre;
            Creador = curso.creador;
            Categoria = curso.categoria;
            Modulos = curso.Nomodulo;
            Horas = curso.Nohoras;
            Descripcionnn = curso.descripcion;
        }
        
    }

    zooom = Imagen;
    z = "url(" + zooom + ")";
    document.getElementById('laFoto').src = Imagen;
    document.getElementById('zomzoom').style.backgroundImage=z;
    document.getElementById('precio').innerText = Precio;
    document.getElementById('preco2').innerText = Precio;
    document.getElementById('nombre').innerText = Nombre;
    document.getElementById('creador').innerText = Creador;
    document.getElementById('cate').innerText = Categoria;
    document.getElementById('mod').innerText = Modulos;
    document.getElementById('hor').innerText = Horas;
    document.getElementById('des').innerText = Descripcionnn;
})();

/* ----------------------------------------  */

document.getElementById('boton1').addEventListener('click', function(){AgregadoCarrito()});

let AgregadoCarrito = function(){

    alert("¡Producto Agregado Al Carrito!");
    //let cursos = JSON.parse(localStorage.getItem('cursos'));
    let idCurso = localStorage.getItem('cursosDetalle');
    let NoProductos = parseInt(document.getElementById('catidad').value);

    let InfoProducto = [idCurso, NoProductos];    
    
    if(localStorage.getItem('carrito') == null){
        localStorage.setItem('carrito', '[]');
    }
    
    let carritoViejo = JSON.parse(localStorage.getItem('carrito'));
    
    let tamanio = Object.keys(carritoViejo).length;
    let j= 0; 
   
   for(let i = 0; i< tamanio; i++){
        if(carritoViejo[i][0] == idCurso){
            carritoViejo[i][1] = NoProductos;
            j++;
        }
    }
    if(j == 0){
        InfoProducto = [idCurso, NoProductos]

        carritoViejo.push(InfoProducto);
    }
    NoProductos = 0;
    localStorage.setItem('carrito', JSON.stringify(carritoViejo));
}

function zoom(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

document.getElementById('boton2').addEventListener('click', function(){CarroRUN()});

document.getElementById('contBolsa').addEventListener('click', function(){CarroRUN()});

let CarroRUN = function(){
    window.location.replace('carrito.html');
}

function verMensaje(){
    document.getElementById('modalCa').classList.add('mostrarMensaje');
    document.getElementById('modalCa').classList.remove('NomostrarMensaje');
}

function ocultarMensaje(){
    document.getElementById('modalCa').classList.remove('mostrarMensaje');
    document.getElementById('modalCa').classList.add('NomostrarMensaje');
}
