

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







