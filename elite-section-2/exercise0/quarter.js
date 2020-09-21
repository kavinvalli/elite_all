function quarterFormSubmit(e){
    e.preventDefault();
    monthSelect = document.getElementById('month').value;
    if (monthSelect==0){
        alert("You've not chosen a month")
        return false;
    }else{
        quarterCalculator(monthSelect);
        return false;
    }
}

function quarterCalculator(month){
    var quarter
    if (month>0 && month<=3){
        console.log(1)
        quarter=1;
    }else if(month>3 && month<=6){
        console.log(2)
        quarter=2;
    }else if(month>6 && month<=9){
        console.log(3)
        quarter=3;
    }else if(month>9 && month<=12){
        console.log(4)
        quarter=4;
    }
    quarterAnswerDiv = document.getElementById('quarterAnswer')
    quarterAnswerDiv.innerHTML = "The month you've chosen is in quarter "+quarter
}