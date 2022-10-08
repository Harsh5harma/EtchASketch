
function makeRows(rows,cols){
    const canvas=document.querySelector(".canvas");
    canvas.style.setProperty("--grid-rows",rows);
    canvas.style.setProperty("--grid-cols",cols);
    for (i=0;i<rows*cols;++i){
        let cell = document.createElement('div');
        canvas.appendChild(cell).className="grid-item";
    }
}

let rows=0;
let cols=0;
const options=document.querySelectorAll(".options");
options.forEach((option)=>{
    option.addEventListener('click',()=>{
        let canvas=document.querySelector(".canvas");
        let e=canvas.lastElementChild;
        while (e){
            canvas.removeChild(e);
            e=canvas.lastElementChild;
        }
        if (option.dataset.size==="x1"){
            rows=16;
            cols=16;
        }else if(option.dataset.size==="x2"){
            rows=32;
            cols=32;
        }else if (option.dataset.size==="x3"){
            rows=64;
            cols=64;
        }else if (option.dataset.size==="x4"){
            rows=128;
            cols=128;
        }
        makeRows(rows,cols);
    })
})

