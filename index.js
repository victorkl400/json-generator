const dummyjson = require('dummy-json');
const fs = require('fs');
const amount = 200;
const template = (amount) => `{
    "data":[
        {{#repeat ${amount}}}
        {
            "name": "{{lorem 3}}",
            "image": "https://source.unsplash.com/user/erondu/2{{int 10 99}}x3{{int 10 99}}",
            "hair": "{{color}}",
            "skin": "{{color}}"
        }
        {{/repeat}}
    ]
}
`;
fs.writeFile(`Dummy-${amount}.json`,dummyjson.parse(template(amount)), () => {
    console.log('Dummy file created');
})