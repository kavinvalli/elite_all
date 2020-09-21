var nameInput = document.querySelector("input#name");
var emailInput = document.querySelector("input#email");
var classSelect = document.querySelector("select#class");
var sectionSelect = document.querySelector("select#section");

function alphabetN(n) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet.slice(0, n);
}

var sectionMapping = {
    VI: 10,
    VII: 10,
    VII: 10,
    IX: 15,
    X: 15,
    XI: 24,
    XII: 24
}

classSelect.addEventListener("change", function(e) {
    if (e.target.value) {
        sectionSelect.disabled = false;
        sectionSelect.innerHTML = '<option value="" selected>Select a Section</option>' +
            alphabetN(sectionMapping[e.target.value]).map(function(section) {
                console.log('<option value="' + section + '">' + section.toUpperCase() + "</option>");
                return '<option value="' + section + '">' + section.toUpperCase() + "</option>";
            });
    } else {
        sectionSelect.disabled = true;
        sectionSelect.innerHTML = '<option value="" selected>Select a section</option>';
    }
});

var isNameValid = function isNameValid(name) {
    return name != "" ? true : "Name cannot be empty!";
}

var emailRegex = /^[evr]\d{4,8}\w+@dpsrkp.net$/
var isEmailValid = function isEmailValid(email) {
    return (emailRegex).test(email) ? true : "Please enter a valid DPS R.K. Puram Email (@dpsrkp.net)";
}

var isClassValid = function isClassValid(classValue) {
    return Object.keys(sectionMapping).includes(classValue) ? true : "Invalid class";
};

var isSectionValid = function isSectionValid(classValue, sectionValue) {
    return alphabetN(sectionMapping[classValue]).includes(sectionValue.toLowerCase()) ? true : "Invalid section";
};

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var validation = [
        isNameValid(nameInput.value),
        isEmailValid(emailInput.value),
        isClassValid(classSelect.value),
        isSectionValid(classSelect.value, sectionSelect.value),
    ]
    var fieldsValid = validation.every(
        function(validation) {
            return validation == true;
        });
    if (!fieldsValid) {
        alert(validation.find(function(m) {
            return typeof m === "string";
        }));
        return;
    }else{
        alert("Hello, " + nameInput.value + " <" + emailInput.value + "> from " + classSelect.value + "-" + sectionSelect.value.toUpperCase() + ".");
    }
})