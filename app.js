const render = (root) => {
    root.empty();
    const container = $('<div class=""></div>');
    container.append(Header(_=>{render(root)}));
    root.append(container);
}

const state = {
    puntaje: 0,
    imag: null,
    page: 0
};

$(_ => {
    const root = $('.root');
    render(root);
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
      root.empty();
      root.append(Puntaje());
    }, 6000000);
});
