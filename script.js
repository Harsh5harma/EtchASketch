
function makeRows(rows, cols) {
    const canvas = document.querySelector(".canvas");
    canvas.style.setProperty("--grid-rows", rows);
    canvas.style.setProperty("--grid-cols", cols);
    for (i = 0; i < rows * cols; ++i) {
        let cell = document.createElement('div');
        canvas.appendChild(cell).className = "grid-item";
        cell.id = i + 1;
    }
}

let rows = 0;
let cols = 0;
const options = document.querySelectorAll(".options");
options.forEach((option) => {
    option.addEventListener('click', () => {
        let canvas = document.querySelector(".canvas");
        let e = canvas.lastElementChild;
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
        }
        makeRows(rows, cols);

        const cells = document.querySelectorAll('.grid-item');
        let flag = false;
        cells.forEach((cell) => {
            cell.addEventListener('mousedown', () => {
                cell.style.backgroundColor = "black";
                flag = true;
                console.log(flag);
                console.log(cell.id);
            });
            cell.addEventListener('mousemove', () => {
                if (flag) {
                    cell.style.backgroundColor = "black";
                    console.log(flag);
                    console.log(cell.id);
                }
            });
            cell.addEventListener('mouseup', () => {
                flag = false;
                console.log(cell.id);
                console.log(flag);
            });
            cell.addEventListener('drag', () => {
                flag = false;
                cell.style.backgroundColor = "black";
            })
        });


    });
});

