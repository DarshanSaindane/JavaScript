const btn = document.getElementById("button");
const randomColor = () => {
    let val = "123456789ABCDEF";
    let cons = "#";
    for(let i=0; i<6; i++){
        cons = cons +  val[Math.floor(Math.random() * 16)];    // if we write val[i] then it give only NO. upto 6th indix 
                                                           // but we want randon Index so we can use [Math.random] Function is  gis random values
                                                // but that functionhas a problem it gives highest valus upto 0.99 to fix it we can multiply it by 16
                                                // Math.floor function use to round Off the number bez our number in decimal 
    }
    return cons;
};


function changeRandomColor(){
    document.body.style.backgroundColor = randomColor();
}

btn.addEventListener("click", changeRandomColor);
