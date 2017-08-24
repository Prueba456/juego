const render = (root) => {
    root.empty();
    const container = $('<div class=""></div>');
    if(state.page==0){
      container.append(Registro(_=>{render(root)}));
    }else if (state.page==1) {
      container.append(Header(_=>{render(root)}));
    }
    root.append(container);
};

const state = {
    page: 0,
    puntaje: 0,
    imag: null,
    user:null,
    email:null,
    imagen:null,
};

$(_ => {
  var config = {
    apiKey: "AIzaSyAWdYH38p0MOea3ureUgT1MVdySXI_-W90",
    authDomain: "juego-2ede8.firebaseapp.com",
    databaseURL: "https://juego-2ede8.firebaseio.com",
    projectId: "juego-2ede8",
    storageBucket: "",
    messagingSenderId: "458198961872"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
   database.ref().on("value", function(snap){

   state.user = snap.val();
   console.log(state.user);

   const root = $('#root');
   render(root);

  });
});
