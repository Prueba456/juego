const Registro = (update) =>{
  const formulario = $('<div class="cont-form"></div>');
  const form = $('<div class="form"></div>');
  const divLogo = $('<div class="logo margin-bottom"></div>');
  const logo = $('<img src="img/hplogo.png">');
  const nombre = $('<input ip="nombre" class="margin-bottom" type="text" placeholder="Nombre" name="" value="">');
  const email = $('<input ip="email" class="margin-bottom" type="text" placeholder="Email" name="" value="">');
  const jugarEnviar = $('<button id="btn" class="jugar" type="button" name="button">Jugar</button>');
  formulario.append(form);
  form.append(divLogo, nombre, email, jugarEnviar);
  divLogo.append(logo);

  //Accedemos a nuestra base de datos mediante la URL de tu app
 var ref = new Firebase("https://juego-2ede8.firebaseio.com");
 //Hacemos referencia a nuestro nodo del sensor Temp
 // var tempRef = ref.child("Temp");
 var tempRef = ref.child("person");


  jugarEnviar.on('click', function(){
    state.page=1;
    console.log(state.page);
    const inputnombre = nombre.val();
    console.log(inputnombre);
    const inputemail = email.val();
    //Agregamos un dato nuevo en la base de datos
		tempRef.push().set({
			//generamos un valor aleatorio
			nombre: inputnombre,
			//generamos un timestamp
			email: inputemail
		});
    update();
  });

  return formulario;
};

const Header = () =>{
  const contenedor = $('<div class="contenedor"></div>');
  const divImagen = $('<div id="rand_pos" class="rand"></div>');
  const imagen = $('<img src="img/conejo.png">');
  contenedor.append(divImagen);
  divImagen.append(imagen);

  $(_ => {

      var cont = 0;
      $('#rand_pos').click(function() {
        var bodyWidth = document.body.clientWidth
        var bodyHeight = document.body.clientHeight;
        const randPosX = Math.floor((Math.random()*(bodyWidth-90)));
        const randPosY = Math.floor((Math.random()*(bodyHeight-90)));
        $('#rand_pos').css('left', randPosX);
        $('#rand_pos').css('top', randPosY);
        cont = cont +1;
        state.puntaje=cont;
        console.log(cont);
      });
      setTimeout(function(){
        const root = $('#root');
        root.empty();
        root.append(Puntaje());
      }, 7000);
  });
  return contenedor;
};

const Puntaje = () =>{
  const contienePuntaje = $('<div class="puntaje"></div>');
  const texto = $('<h1>Puntaje: '+state.puntaje+'</h1>');
  contienePuntaje.append(texto);
  return contienePuntaje;
};
