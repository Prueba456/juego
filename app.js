const render = (root) => {
    root.empty();
    const container = $('<div class=""></div>');
    if(state.page==0){
      container.append(Registro(_=>{render(root)}));
    }else if (state.page==1) {
      container.append(Header(_=>{render(root)}));
    }
    root.append(container);
}

const state = {
    puntaje: 0,
    imag: null,
    page: 0,
};

$(_ => {
    const root = $('.root');
    render(root);
});
