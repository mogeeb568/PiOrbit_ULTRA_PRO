Pi.init({ version: "2.0" });

async function login(){

try{

const scopes = ['username','payments'];

const auth = await Pi.authenticate(scopes, onIncompletePaymentFound);

document.getElementById("user").innerHTML =
"Welcome " + auth.user.username;

}catch(e){

console.log(e);

}

}

function onIncompletePaymentFound(payment){

console.log(payment);

}