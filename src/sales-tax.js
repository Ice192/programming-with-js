function salesTax (total_sales) {
    const county_rate = 0.05
    const state_rate = 0.025

    const county_tax = total_sales * county_rate
    const state_tax = total_sales * state_rate
    const total_tax = county_tax + state_tax

    console.log(`County sales tax = $${county_tax}`)
    console.log(`State sales tax = $${state_tax}`)

    return total_tax
}

// console.log(salesTax(100))

module.exports = {
    salesTax
}