(function(){
    let cursos = JSON.parse(localStorage.getItem('cursos'));
    let contenido = '';

    for(let curso of cursos){
        contenido += `<div id="curso${curso.posicion}" class="tarjeta">`;
        contenido += `
        <img src="../RECURSOS/mas.png" alt="Ver más" class="selector" onclick="Detalle(${curso.posicion})">
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

    document.getElementById('contenedorCursos').innerHTML = contenido;

})();

let Detalle = function(id){

    let identi = id;
   
    localStorage.setItem('cursosDetalle', identi);
    
    window.location.replace('detalle.html');
}



