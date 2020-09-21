var multiples = []

function formSubmit(e){
    e.preventDefault()
    number = document.getElementById('number').value
    upperLimit = document.getElementById('upperLimit').value
    multiplesFunction(number, upperLimit)
    return false;
}


function multiplesFunction(number, upperLimit) {
    for (i=1;;i++){
        multiple = i*number
        if (multiple>upperLimit){
            break;
        }else{
            multiples.push(multiple)
        };
    }
    multipleListDiv = document.getElementById('multiplelist')
    multipleListDiv.innerHTML = "The multiples are: "+multiples
}