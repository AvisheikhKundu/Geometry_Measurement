

// Area of triangle 
document.getElementById('triangle-btn').addEventListener('click',() => {

    let height = parseFloat(inputValue("triangle-input-height"));
    let base = parseFloat(inputValue("triangle-input-base"));

    if((!isNaN(height) && !isNaN(base)) && (height>0 && base>0)){
        let area = (0.5*height*base).toFixed(2);
        setInnerText("Triangle",area)
    }else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please input valid number!',
            // footer: '<a href="">Why do I have this issue?</a>'
          })
    }

});


// Area of Rectangle


document.getElementById('rectangular-btn').addEventListener('click',() => {

    let width = parseFloat(inputValue("rectangular-input-width"));
    let length = parseFloat(inputValue("rectangular-input-length"));

    if((!isNaN(width) && !isNaN(length)) && (width>0 && length>0)){
        let area = (width*length).toFixed(2);
        setInnerText("Rectangular",area)
    }else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please input valid number!',
            // footer: '<a href="">Why do I have this issue?</a>'
          });
    }

});

// Area of parallelogram 

document.getElementById("parallelogram-btn").addEventListener("click",() => {
    let base = getInnerText("parallelogram-base");
    let height = getInnerText("parallelogram-height");
    let area = (base*height).toFixed(2);
    setInnerText("Parallelogram",area);
});


// Area pf Rhombus 

document.getElementById("rhombus-btn").addEventListener("click",() => {
    let diagonal1 = getInnerText("rhombusD1");
    let diagonal2 = getInnerText("rhombusD2");
    let area = (0.5*diagonal1*diagonal2).toFixed(2);
    setInnerText("Rhombus",area);
});


// Area of Pentagon 
document.getElementById("pentagon-btn").addEventListener("click",() => {
    let base = getInnerText("pentagon-base");
    let height = getInnerText("pentagon-height");
    let area = (0.5*base*height).toFixed(2);
    setInnerText("Pentagon",area);
});



// Area of Ellipse 
document.getElementById("ellipse-btn").addEventListener("click",() => {

    let base = getInnerText("ellipse-base");
    let height = getInnerText("ellipse-height");
    let area = (3.1416*base*height).toFixed(2);
    setInnerText("Ellipse",area);
});




// function for getting input value 
function inputValue(id) {
    const value = document.getElementById(id).value;
    return value;
}






