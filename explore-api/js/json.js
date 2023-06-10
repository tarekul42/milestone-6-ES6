const user = {id:1, name:'Gorib Amir', job:'actor'};
// JavaScript Object Notation(JSON)
const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);

const shop = {
    owner:'Alia',
    address:{
        street:'kochukhet voot er goli',
        city:'ranbir',
        country:'BD'
    },
    products:['laptop', 'mic', 'monitor', 'keyboard'],
    revenue:45000,
    isOpen: true,
    inNew: false
}
// console.log(shop);
const shopJSON = JSON.stringify(shop);
// console.log(shopJSON);
const shopOnj = JSON.parse(shopJSON);
console.log(shopOnj);