const grid = document.querySelector('#grid');

const square = document.createElement('div');
square.classList.add('sqr');




function add_squares () {

    grid.innerHTML = ''
    let square = document.createElement('div');
    square.classList.add('sqr');
    square.b

    


    for (let i =0; i < 256; i++){
        let a = document.createElement('div');
        a.classList.add('sqr');
        a.addEventListener('mousedown', function (){
            a.classList.add('sqr_hovered')
        })
        
        grid.appendChild(a);
    }

}


add_squares()

function remove_squares () {
    grid.innerHTML=''
    add_squares()


}

const btn_1 = document.querySelector('#new_grid');
btn_1.addEventListener('click', remove_squares)

const btn_2 = document.querySelector('#allow_draw');
btn_2.addEventListener('click', add_squares)