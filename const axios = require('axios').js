const axios = require('axios');



(async function main(){

    const result = await axios.post('https://www.raygansms.com/api/smsAPI/SendMessag',{
        Message:'hello',
        Mobiles:["09358999169"],
        SendDateInTimeStamp:new Date().getTime()
    },{headers:{'Authorization':'BasicbGF6eWNvZGVyczoyMjQ1MzcxMg=='}})
    
    
    console.log(result.code );
})()