const mybox = document.getElementById("mybox");

const move_amount = 20;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    mybox.style.backgroundColor = "tomato";
    mybox.textContent = "😡";
    event.preventDefault();

    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp" :
                y -= move_amount;
                break;
                case "ArrowDown" :
                    y +=move_amount;
                    break;
                    case "ArrowLeft" :
                        x -= move_amount;
                        break;
                        case "ArrowRight" :
                            x += move_amount;
                            break;
        }
    }
    mybox.style.top = `${y}px`;
    mybox.style.left = `${x}px`;
});

document.addEventListener("keyup", event =>{
    mybox.style.backgroundColor = "yellow";
    mybox.textContent = "😁";
});

