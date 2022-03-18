
const fs = require("fs");
const DATA = JSON.parse(fs.readFileSync(`${__dirname}/data.json`));


const getactiveaccounts = () => DATA.filter(a => a.isactive);

const gethighestbalance = () => {
    const numberx = string => parseFloat(string.replace(/[$,]+/g,""));
    return DATA.reduce((last, present) => {
        if (numberx(present.balance) > numberx(prev)) return present.balance;
        return last;
    }, "0");
}
const getallfriends = () => DATA.flatMap(b => b.friends.map(f => f.name));





const getaccountholdernames = () => DATA.map(a => a.name.split(` `)[0]).join(`, `);



console.log(" friends of all accounts=");
console.log(getallfriends());
console.log("account holders names=");
console.log(getaccountholdernames());
console.log("active accounts=");
console.log(getactiveaccounts());
console.log("highest balance=");
console.log(gethighestbalance());
