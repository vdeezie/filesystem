const fs = require ('fs')
const path = require ('node-fetch')


const fetch = (`http://jsonplaceholder.typicode.com/posts`)
.then(res => res.json())
.then((json) => {
        fs.writeFile('./result/posts.json', JSON.stringify(json), () => {
            console.log('File has been written')
        })
    });