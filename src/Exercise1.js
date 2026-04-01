//Exercise 1 - Personal Information
function nama(nama){
    return console.log(`My name is ${nama}`)
}
function address(address, city, state, zip){
    return console.log(`I live in ${address}, ${city}, ${state}, ${zip}`)
}
function telp(telp) {
    return console.log(`My phone number ${telp}`)
}
function major(major) {
    return console.log(`My Major is ${major}`)
}

module.exports = {
  nama,
  address,
  telp,
  major,
};