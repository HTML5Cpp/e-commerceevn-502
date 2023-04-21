(function(){
    let carrito = localStorage.getItem('carrito');
    let carritoViejo = JSON.parse(localStorage.getItem('carrito'));
    let cursos = JSON.parse(localStorage.getItem('cursos'));

    let contenido;
    let Imagen, Precio,Nombre,Creador,Categoria,Modulos,Horas,Descripcionnn;
    let idProducto, cantidadP;

    let tamanio = Object.keys(carrito).length;
    let tamanio2 = carritoViejo.length;
    console.log('Tamaño Carrito: ' + carritoViejo);
    console.log('Tamaño Carrito: ' + tamanio2);

    for(let i = 0; i< tamanio; i++){
        idProducto = carritoViejo[i][0];
        cantidadP = carritoViejo[i][1];
        console.log(idProducto);
        console.log(cantidadP);

        for(let curso of cursos){
            if(curso.posicion == idProducto){
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
        elemento = document.createElement('div');
        elemento.setAttribute('id', 'productoCA'+idProducto);
        elemento.setAttribute('class', 'tarjeta');

        contenido = `
            <figure class="contIMG">
                <img src="${Imagen}" id="laFoto${idProducto}" class="IMGEN">
            </figure>
            <div class="contINF">
                <h4 class="NombreCur" id="nombre${idProducto}">${Nombre}</h4>
                <h6 class="CreadorCur" id="creador${idProducto}">${Creador}</h6>
                <p class="PrecioCur" id="precio${idProducto}"> ${Precio}</p>
            </div>
            <div class="contINF2">
                <p class="ModulosCur" id="mod${idProducto}">${Modulos}</p>
                <p class="HorasCur" id="hor${idProducto}">${Horas}</p>
                <div class="Descripcion" id="des${idProducto}">${Descripcionnn}</div>
            </div>
            <div class="contINF3">
                <p class="CantidadCur" id="cantidad${idProducto}">Cantidad:${cantidadP}</p>
            
                <figure class="contEliminador" onclick="Eliminar(${idProducto})">
                    <img src="../RECURSOS/bin.png" id="laFoto${idProducto}" class="IMGEN2">
                </figure>
            </div>
        `;
        elemento.innerHTML = contenido;
        let productos = document.getElementById('Productos');
        productos.insertAdjacentElement('beforeend',  elemento); 
    }
    
    document.getElementById('Productos').innerHTML += contenido;

   Suma();
})();


function Suma(){
    let cantidades = document.querySelector('.CantidadCur');
    console.log(cantidades);

    let precios = document.getElementsByClassName('PrecioCur');
    console.log(precios);

    let b, resultados;
    b = cantidades.length;
    console.log(b);
    for(let a = 0; a < b; a++){
        precios[a].substring(0);
        precios[a] = parseInt(precios[a]);

        console.log(precios[a]);
        resultados = (cantidades[a] * precios[a]) + resultados;
        console.log(resultados);
    }

    document.getElementById('SubVal').innerText += resultados;

    document.getElementById('TolVal').innerText += resultados;
}


document.getElementsByClassName

let Eliminar = function(a){

    let TotalCursos = document.getElementById('Productos');
    let posicion = TotalCursos.querySelector('#productoCA'+ a);
    TotalCursos.removeChild(posicion);

    let carrito = localStorage.getItem('carrito');
    let carritoViejo = JSON.parse(localStorage.getItem('carrito'));

    carrito.slice(a,1);
    
    localStorage.setItem('carrito', JSON.stringify(carritoViejo));
}