const Header = (update) =>{
  const contenedor = $('<div class="contenedor"></div>');
  const divImagen = $('<div id="rand_pos" class="rand"></div>');
  const imagen = $('<img src="img/conejo.png">');
  contenedor.append(divImagen);
  divImagen.append(imagen);
  return contenedor;
}
const Puntaje = () =>{
  const contienePuntaje = $('<div class="puntaje"></div>');
  const texto = $('<h1>Puntaje: '+state.puntaje+'</h1>');
  contienePuntaje.append(texto);
  return contienePuntaje;
}
