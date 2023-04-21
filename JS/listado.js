
(function(){
    let cursos = JSON.parse(localStorage.getItem('cursos'));
    try {
        let ID = localStorage.getItem('contador');
        let contenido = '';

        for(let curso of cursos){
            contenido += `<div id="curso${curso.posicion}" class="tarjeta">`;
            contenido += `
            <p class="eliminador" onclick="Eliminar(${curso.posicion})" >X</p>
            <figure class="containerIMG">
                <img src="${curso.imagen}" alt="" id="img${curso.posicion}" class="imgCurso">
            </figure>
            <hr>
            <p class="PrecioCur" id="precio${curso.posicion}">${curso.precio}</p>
            <h4 class="NombreCur" id="nombre${curso.posicion}">${curso.nombre}</h4>
            <p class="CreadorCur" id="creador${curso.posicion}">${curso.creador}</p>
            <div id="categorias">
                <div class="adaptable" id="calores${curso.posicion}">
                    ${curso.categoria}
                </div>
            </div>
            <p class="ModulosCur" id="modulo${curso.posicion}">${curso.Nomodulo}</p>
            <p class="HorasCur" id="hora${curso.posicion}">${curso.Nohoras}</p>
            <div class="Descripcion" id="descripcion${curso.posicion}">${curso.descripcion}</div>
            `;
            contenido += '</div>';
        }

        document.getElementById('tarjetas').innerHTML += contenido;
    }
    catch(e) {
        console.log('ERROR, Nada en localStorage: ' + e);
    }

})();


/* ----------------------------------------  */

document.getElementById('boton1').addEventListener('click', function(){generarTarjetaCurso()});

let contenido = document.getElementById('tarjetas').innerHTML;
let iddd = localStorage.getItem('contador');
var i = 0;
if(iddd){
    var i = iddd;
}

let generarTarjetaCurso = function(){
    console.log('Inicio:' + i);
    contenido = document.getElementById('tarjetas').innerHTML;
    let imagenIMG = document.getElementById('imagen').value;
    let precio = document.getElementById('precio').value;
    precio = parseInt(precio);
    let nombre = document.getElementById('nombre').value;    
    let creador = document.getElementById('creador').value;
    let modulo = document.getElementById('modulo').value;
    modulo = parseInt(modulo);
    let hora = document.getElementById('hora').value;
    hora = parseFloat(hora);
    let descripcion = document.getElementById('Descripcionn').value;
    
    console.log('ID:' + i);

    let categoria = document.getElementById('Elecategorias').value;
    let calores = '';
    if(categoria == 'programacion'){
        calores = 'Programación';
    }
    else if(categoria == 'marketing'){
        calores = 'Marketing Digital';
    }
    else if(categoria == 'diseno'){
        calores = 'Diseño';
    }
    else if(categoria == 'software'){
        calores = 'Softwares';
    }
    else{
        let validador = 0;
        calores = 'Sin Categoria';
    }
    
    i = i + 1;
    Contador(i);
    elemento = document.createElement('div');
    elemento.setAttribute('id', 'curso'+i);
    elemento.setAttribute('class', 'tarjeta');
    
    contenido = `
    <p class="eliminador" onclick="Eliminar(${i})" onclick="EnvioLocalStorage()" >X</p>
    <figure class="containerIMG">
    <img src="${imagenIMG}" alt="" id="img${i}" class="imgCurso">
    </figure>
    <hr>
    <p class="PrecioCur" id="precio${i}">$${precio}</p>
    <h4 class="NombreCur" id="nombre${i}">${nombre}</h4>
    <p class="CreadorCur" id="creador${i}">Craedo por ${creador}</p>
    <div id="categorias">
    <div class="adaptable" id="calores${i}">
    ${calores}
    </div>
    </div>
    <p class="ModulosCur" id="modulo${i}">Modulos:${modulo}</p>
    <p class="HorasCur" id="hora${i}">Horas:${hora}</p>
    <div class="Descripcion" id="descripcion${i}">Descripción: ${descripcion}</div>
    `;
    elemento.innerHTML = contenido;

    let tarjetas = document.getElementById('tarjetas');
    tarjetas.insertAdjacentElement('beforeend',  elemento); 

    console.log('Return:' + i);

    let entradas = document.getElementsByTagName('input')
    for(let entrada of entradas){
        entrada.value='';
    }
    
    return i;
}

/* ----------------------------------------  */

let Eliminar = function(a){

    let TotalCursos = document.getElementById('tarjetas');
    let posicion = TotalCursos.querySelector('#curso'+ a);
    TotalCursos.removeChild(posicion);
    EnvioLocalStorage();
}

/* ----------------------------------------  */

document.getElementById('boton1').addEventListener('click', function(){EnvioLocalStorage()});

let EnvioLocalStorage = function(){   
    let NoCursos = document.getElementsByClassName('tarjeta');
    console.log('LocalStorage:'+NoCursos.length);
    let cursos = [];

    let imagens = document.getElementsByClassName('imgCurso');
    let precios = document.getElementsByClassName('PrecioCur');
    let nombres = document.getElementsByClassName('NombreCur');
    let creadores = document.getElementsByClassName('CreadorCur');
    let categorias = document.getElementsByClassName('adaptable');
    let Nomodulos = document.getElementsByClassName('ModulosCur');
    let Nohorass = document.getElementsByClassName('HorasCur');
    let descripciones = document.getElementsByClassName('Descripcion');
            
    for( let i = 0; i < NoCursos.length; i++){
        console.log('Entro a  Ciclo LocalStorage:'+NoCursos.length);
        cursos[i] = {
            posicion: i,
            
            imagen: imagens[i].src,
            precio: precios[i].innerHTML,
            nombre: nombres[i].innerHTML,
            creador: creadores[i].innerHTML,
            categoria: categorias[i].innerHTML,
            Nomodulo: Nomodulos[i].innerHTML,
            Nohoras: Nohorass[i].innerHTML,
            descripcion: descripciones[i].innerHTML
        };
    }
    console.table(cursos);
    localStorage.setItem('cursos', JSON.stringify(cursos));
}

/* ----------------------------------------  */

let Contador =  function(identificador){
    let numero = identificador;

    localStorage.setItem('contador', numero);
}

/* ----------------------------------------  */
