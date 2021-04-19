const fs = require ('fs')
const fetch = require ('node-fetch')
const path = require ('path')


let url ="http://jsonplaceholder.typicode.com/posts"

let settings = {method:"Get"};

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        fs.writeFile('./result/posts.json', JSON.stringify(json), () => {
            console.log('File has been written')
        })
    });