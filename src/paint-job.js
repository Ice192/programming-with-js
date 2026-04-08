function paint (wall_space, harga_galon) {
    const total_galon = wall_space / 112
    const hours = total_galon * 8
    const paint_cost = total_galon * harga_galon
    const biaya_tenaga = hours * 35
    const total_biaya = paint_cost + biaya_tenaga

    console.log(`Jumlah Galon yang digunakan: ${total_galon.toFixed(2)}`)
    console.log(`Jumlah jam yang diperlukan: ${hours.toFixed(2)}`)
    console.log(`Jumlah biaya Galon: $${paint_cost.toFixed(2)}`)
    console.log(`Biaya tenaga kerja: $${biaya_tenaga.toFixed(2)}`)
    console.log(`---------------------------------------`)
    console.log(`Total Biaya pengecatan seluas ${wall_space} sqrt: $${total_biaya.toFixed(2)}`)

}

// paint(224, 5)
module.exports = {
    paint
}