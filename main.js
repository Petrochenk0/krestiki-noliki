let area = document.getElementById('area')
let cell = document.getElementsByClassName('cell')
let currentPlayerJs = document.querySelector(".currentPlayerInSpan")

let player_x_o = "x"

let winPosition = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]

for(let i = 1; i<=9 ; i++){
    area.innerHTML += "<div class='cell' pos="+ i + "></div>";
}
for (var i = 0; i< cell.length; i++) {
    cell[i].addEventListener('click', cellClick, false);
}

function cellClick() {

    let data = []
    
    if(!this.innerHTML){// если при клике ячейка не пустая , то она заполняется
        this.innerHTML = player_x_o;
    }else{
        alert("Ячейка занятап, попробуйте другую ")
    }

    for(let i in cell){
        if(cell[i].innerHTML == player_x_o){
            data.push( parseInt(cell[i].getAttribute('pos')))
        }
    }

    

    if(winPositionFunction(data)){
        restart("Выйграл игрок: " + player_x_o)
    }else{
        let draw = true;
        for(let index in cell){
            if(cell[index].innerHTML == "") draw = false;
        }
        if(draw){
            restart("Ничья , победила дружба :)")
        }
    }

    player_x_o = player_x_o == "x" ? "o" : "x";//ход по очереди
    currentPlayerJs.innerHTML = player_x_o.toUpperCase();
}
function winPositionFunction(data){// функция которая определяет победу игрока
    for(let index in winPosition){
        let win = true;
        for(let j in winPosition[index]){
            let id = winPosition[index][j];

            let indexOf = data.indexOf(id)

            if(indexOf == -1){
                win = false
            }
        }
        if(win) return true;
    }
    return false;
}
function restart(text){
    alert(text);
    for(let i = 0;i<cell.length;i++){
        cell[i].innerHTML = "";
    }
}