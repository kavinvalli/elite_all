var input = document.querySelector('input#number')
var btn = document.querySelector('button')
var form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value=='') {
        alert("Please Enter a Number");
        return;
    }
    async function factFinder() {
        const response = await(
            await fetch('https://numbers-api.vercel.app/'+input.value)
        ).text();

        alert(response);
    }

    factFinder().then(function() {
        input.value = '';
    })
    factFinder().catch(function(e) {
        console.error(e)
        alert("An Error Occured. Please Try Again")
    }) 
    return;
})