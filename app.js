const render = (root) => {
    root.empty();
    const container = $('<div class=""></div>');
    container.append(Header(_=>{render(root)}));
    root.append(container);
}

const state = {
    puntaje: null,
    imag: null,
    page: 0
};

$(_ => {
    const root = $('.root');
    render(root);
    var cont = 0;
    $('#rand_pos').click(function() {
      const randPosX = Math.floor((Math.random()*300));
      const randPosY = Math.floor((Math.random()*300));
      $('#rand_pos').css('left', randPosX);
      $('#rand_pos').css('top', randPosY);
      cont = cont +1;
      state.puntaje=cont;
      console.log(cont);
    });
    setTimeout(function(){
      // alert("conejos capturados: "+cont);
      root.empty();
      root.append(Puntaje());
      // state.page=1;
    }, 5000);
});
