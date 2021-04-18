const fs = require ('fs')
const path = require ('node-fetch')
const http = require ('https')

const postsData = fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res )