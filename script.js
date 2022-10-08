
function makeRows(rows, cols) {
    const canvas = document.querySelector(".canvas");
    canvas.style.setProperty("--grid-rows", rows);
    canvas.style.setProperty("--grid-cols", cols);
    for (i = 0; i < rows * cols; ++i) {
        let cell = document.createElement('div');
        canvas.appendChild(cell).className = "grid-item";
        cell.id = i + 1;
    }
    console.log("lauda lasan");
}
function randomColorGen() {
    let maxVal = 0xffffff;
    let randomNumber = Math.random() * maxVal; //generated a random number b/w 0 to max value, it is a float though
    randomNumber = Math.floor(randomNumber); //rounds the number down to an integer value
    randomNumber = randomNumber.toString(16); //converts the value to a hex string again
    let randColor = randomNumber.padStart(6, 0); //add padding so that the string is always 6 char long and the char that gets added to the string is '0'
    return `#${randColor.toUpperCase()}`;
}

function myOnLoad(){
    makeRows(16,16);
    const cells = document.querySelectorAll('.grid-item');
        let flag = false;
        cells.forEach((cell) => {
            cell.addEventListener('mousedown', () => {
                if (cfFlag1)
                    cell.style.backgroundColor = randomColorGen();
                else
                    cell.style.backgroundColor = "black";
                flag = true;
            });
            cell.addEventListener('mousemove', () => {
                if (flag) {

                    if (cfFlag1){
                        cell.style.backgroundColor = randomColorGen();
                    }
                    else
                        cell.style.backgroundColor = "black";
                }
            });
            cell.addEventListener('mouseup', () => {
                flag = false;
            });
            cell.addEventListener('drag', () => {
                flag = false;
            })
        });
}


let rows = 16;
let cols = 16;
let cfFlag1 = false;
const options = document.querySelectorAll(".options");
window.onload=options.forEach((option) => {
    option.addEventListener('click', () => {
        let canvas = document.querySelector(".canvas");
        let e = canvas.lastElementChild;
       //clears the canvas each time
        while (e) {
            canvas.removeChild(e);
            e = canvas.lastElementChild;
        }

        if (option.dataset.size === "x1") {
            rows = 16;
            cols = 16;
        } else if (option.dataset.size === "x2") {
            rows = 32;
            cols = 32;
        } else if (option.dataset.size === "x3") {
            rows = 64;
            cols = 64;
        } else if (option.dataset.size === "x4") {
            rows = 128;
            cols = 128;
        } else if (option.dataset.size === "x5") {
            rows = 256;
            cols = 256;
        } else if (option.dataset.size === "random") {
            if (cfFlag1 == false)
                cfFlag1 = true;
            else if (cfFlag1 === true)
                cfFlag1 = false;
        }
        makeRows(rows, cols);
        const cells = document.querySelectorAll('.grid-item');
        let flag = false;
        cells.forEach((cell) => {
            cell.addEventListener('mousedown', () => {
                if (cfFlag1)
                    cell.style.backgroundColor = randomColorGen();
                else
                    cell.style.backgroundColor = "black";
                flag = true;
            });
            cell.addEventListener('mousemove', () => {
                if (flag) {

                    if (cfFlag1){
                        cell.style.backgroundColor = randomColorGen();
                    }
                    else
                        cell.style.backgroundColor = "black";
                }
            });
            cell.addEventListener('mouseup', () => {
                flag = false;
            });
            cell.addEventListener('drag', () => {
                flag = false;
            })
        });


    });
});
window.onload=myOnLoad();