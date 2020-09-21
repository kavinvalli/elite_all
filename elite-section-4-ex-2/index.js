require('es6-promise').polyfill();
require('isomorphic-fetch');
var args = process.argv.slice(2);
// console.log('myArgs: ', myArgs);

username = args[0]
console.log(username)

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => {
        if (response.status === 404) {
            throw new Error("Username Not Found")
        }
        if (response.status > 404) {
            throw new Error("Bad Response from Server")
        }
        return response.json();
    })
    .then(repos => {
        // console.log(repos)
        repos.forEach(repo => {
            console.log(repo.name)
        })
    })