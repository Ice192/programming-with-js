function Restourant (vegetarian, vegan, gluten) {
    if (vegetarian == "yes" && vegan == "yes" && gluten == "yes") {
        console.log("Corner Cafe")
        console.log("The Chef's Kitchen")
    } else if (vegetarian == "no" && vegan == "no" && gluten == "no") {
        console.log("Joe's Gourmet Burgers")
    } else if (vegetarian == "yes" && vegan == "no" && gluten == "yes") {
        console.log("Main Street Pizza Company")
    } else if (vegetarian == "yes" && vegan == "no" && gluten == "no") {
        console.log("Mama's fine italian")
    } else (
        console.log("None")
    )
} //Seperti permainan Akinator yang menebak isi pikiran


module.exports = {
    Restourant
}
