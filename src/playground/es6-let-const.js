var nameVar = 'Andrew';
var nameVar  = 'Mike';
console.log('nameVar',nameVar);

let nameLet = 'Jan';
nameLet = 'Julie';
console.log('nameLet',nameLet);

const nameConst = 'Franck';
console.log('nameConst',nameConst);

// function getPetName() {
//     let petName = 'hal';
//     return petName;
// }

// const petName = getPetName();
// console, log(petName);

let fullName = 'Valentin Vuk';

if(fullName){
    let firstName = fullName.split(' ')[0];
    console.log (firstName);
}
