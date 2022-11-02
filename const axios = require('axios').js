const axios = require('axios');



(async function main() {

    const result = await axios.post('https://ippanel.com/api/select', {
        "op": "send",
        "uname": "lazycoders",
        "pass": "22453712code",
        "message": "hello",
        "from": "5000",
        "to": ["09127374700"],
        "time": new Date().getTime()
    })


    console.log(result.data);
})()