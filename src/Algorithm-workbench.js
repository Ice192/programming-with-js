const readline = require("readline-sync");

function firstLoop (number) {
    let product = number * 10;
    return product
}

function secondLoop (isAgree) {
while(isAgree == "yes") {
  let num1 = readline.question("Masukkan Angka pertama: ");
  let num2 = readline.question("Masukkan Angka kedua: ");
  const sum = Number(num1) + Number(num2);
  console.log(`${num1} + ${num2} = ${sum}`);

  isAgree = readline.question("Apakah mau lanjut? (yes) ")
} 
    console.log("Thank You");
}

function thirdLoop () {
    let num = 0
    // while(num <= 1000){
    //     console.log(num)
    //     num += 10
    // }

    for (num; num <= 1000; num += 10){
        console.log(num);
    }
}

function fourthLoop () {
    let total = 0
    for (let i = 1; i <= 10; i++){
        let num = readline.question(`Masukkan Angka ke ${i}/10: `)
        total += Number(num)
    }

    return total
}

function fifthLoop () {
    let i;
    let result = [];
    // let loop = 1;
    let j = 30;
    for (i = 1; i <= 30;) {
            const hasil = i/j;
            result.push(hasil);
            console.log(`${i}/${j}`);
            i++;
            j--;
        
        // loop++
    }
    // console.log(loop)
    let index = 0
    let total = 0
    while(index < result.length) {
        total += result[index]
        index++
    }
    return total
}

function sixth(x) {
    x += 1
    x *= 2
    x /= 10
    x -= 100
    console.log(`jumlah menggunakan augmented operation adalah ${x}`)
}

function seventhLoop(){
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 15; j++) {
        process.stdout.write(`# `)
    }
    console.log()
}
}

function validationPrompt () {
    let valid = readline.question("Masukkan Angka ")
    const number = parseInt(valid)

    if (!isNaN(number)) {
        console.log(`this ${valid} is valid input`)
    } else {
        console.log(`Invalid Input`)
    }
} 

function secondValidation () {
    let valid = readline.question("Masukkan Angka ") 
    const number = parseInt(valid)
    console.log(number)
    if (number >= 1 && number <= 100) {
        console.log(`this ${valid} is valid input`)
    } else {
        console.log("Invalid Input")
    }
}

function bilanganPrima (num) {
    let isPrime = true
    if(num == 1){
        console.log("1 Bukan Bilangan Prima")
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false
                break
            }

        }
        if (isPrime) {
            // console.log(`${num} bilangan prima`)
            return num
        } else {

            return
        }
    }
    else {
        console.log("Input bukan bilangan prima")
    }
    
}

// console.log(fourthLoop())
module.exports = {
    firstLoop,
    secondLoop,
    thirdLoop,
    fourthLoop,
    fifthLoop,
    sixth,
    seventhLoop,
    validationPrompt,
    secondValidation
}

// let bil_prima = []
// for (let angka = 1;angka <= 100000;angka++) {
//     let prime = bilanganPrima(angka)
//     //    console.log(prime)
    
//     if(prime != undefined) {
//         bil_prima.push(angka)
//     }
// }
// let count = bil_prima.length
// console.log("Bilangan Prima tertinggi adalah ", bil_prima[count-1])
// console.log("Jumlah bilangan prima ", bil_prima.length)

// let luar = 0
// let dalam = 0

// for (i = 1; i <= 30; i++ ) {
//     console.log("loop luar")
//     luar++;
//   for (j = 1; j <= 1000; j++) {
//     console.log("loop dalam")
//     dalam++;
    
//   }
// }

// console.log(luar);
// console.log(dalam)

const angka = [1100, 1101, 1110, 1130, 1132, 1133, 1134, 1136, 1141, 1146, 1149, 1178, 1211, 1214, 1221, 1228, 1242, 1249, 1264, 1266, 1273, 1276, 1294, 1296, 1303, 1306, 1308, 1310, 1312, 1326, 1332, 1369, 1377, 1390, 1395, 1410, 1422, 1424, 1429, 1438, 1441, 1446, 1448, 1453, 1471, 1480, 1484, 1485, 1493, 1505, 1508, 1528, 1533, 1534, 1571, 1576, 1581, 1607, 1608, 1609, 1612, 1613, 1624, 1629, 1632, 1648, 1653, 1662, 1665, 1679, 1689, 1698, 1701, 1705, 1710, 1740, 1742, 1758, 1770, 1779, 1795, 1804, 1811, 1815, 1817, 1831, 1838, 1842, 1872, 1874, 1882, 1886, 1892, 1917, 1922, 1943, 1952, 1953, 1958, 1960, 1961, 1972, 1983, 1991, 2001, 2012, 2023, 2033, 2038, 2044, 2051, 2053, 2054, 2083, 2090, 2098, 2127, 2145, 2149, 2150, 2151, 2152, 2157, 2167, 2177, 2178, 2180, 2193, 2216, 2218, 2220, 2227, 2235, 2239, 2243, 2256, 2267, 2269, 2276, 2283, 2303, 2305, 2324, 2327, 2333, 2339, 2349, 2356, 2362, 2373, 2380, 2397, 2408, 2410, 2422, 2430, 2431, 2432, 2440, 2445, 2448, 2450, 2456, 2472, 2479, 2480, 2487, 2490, 2492, 2511, 2533, 2536, 2542, 2548, 2563, 2566, 2586, 2596, 2606, 2612, 2628, 2633, 2638, 2644, 2668, 2688, 2692, 2702, 2703, 2713, 2716, 2737, 2741, 2742, 2747, 2761, 2765, 2766, 2770, 2776, 2780, 2789, 2791, 2800, 2807, 2830, 2835, 2836, 2837, 2842, 2854, 2859, 2860, 2871, 2872, 2877, 2883, 2885, 2906, 2931, 2941, 2946, 2952, 2957, 2958, 2959, 2963, 2967, 2972, 2973, 2974, 2982, 2984, 2987, 3001, 3004, 3006, 3009, 3012, 3023, 3038, 3041, 3051, 3057, 3070, 3071, 3093, 3096, 3106, 3123, 3125, 3137, 3140, 3147, 3156, 3157, 3162, 3163, 3165, 3166, 3169, 3185, 3186, 3211, 3222, 3226, 3227, 3228, 3229, 3234, 3235, 3240, 3247, 3267, 3275, 3277, 3287, 3294, 3318, 3335, 3351, 3354, 3370, 3375, 3380, 3389, 3390, 3391, 3396, 3397, 3398, 3401, 3417, 3420, 3424, 3446, 3449, 3452, 3454, 3463, 3469, 3470, 3474, 3489, 3494, 3500, 3503, 3510, 3513, 3536, 3541, 3546, 3554, 3561, 3575, 3577, 3579, 3586, 3589, 3598, 3599, 3604, 3611, 3612, 3616, 3629, 3630, 3643, 3651, 3656, 3661, 3663, 3667, 3670, 3672, 3674, 3682, 3698, 3710, 3711, 3714, 3721, 3722, 3730, 3736, 3738, 3757, 3759, 3774, 3781, 3787, 3794, 3820, 3835, 3861, 3866, 3872, 3881, 3883, 3896, 3899, 3914, 3935, 3937, 3945, 3949, 3950, 3955, 3964, 3973, 3974, 3977, 3983, 3991, 4005, 4009, 4024, 4053, 4080, 4086, 4093, 4104, 4110, 4120, 4131, 4134, 4137, 4152, 4157, 4158, 4161, 4162, 4165, 4167, 4179, 4184, 4186, 4196, 4208, 4233, 4261, 4268, 4275, 4276, 4277, 4307, 4308, 4311, 4314, 4322, 4346, 4351, 4357, 4358, 4381, 4384, 4402, 4407, 4415, 4428, 4433, 4437, 4461, 4470, 4471, 4475, 4484, 4487, 4498, 4501, 4506, 4519, 4520, 4521, 4536, 4549, 4554, 4565, 4569, 4573, 4588, 4590, 4601, 4611, 4614, 4617, 4619, 4623, 4633, 4636, 4638, 4646, 4648, 4653, 4665, 4667, 4668, 4671, 4675, 4685, 4693, 4712, 4723, 4733, 4735, 4747, 4768, 4774, 4784, 4793, 4795, 4798, 4799, 4803, 4805, 4810, 4812, 4820, 4822, 4824, 4827, 4833, 4841, 4852, 4869, 4885, 4886, 4896, 4900, 4908, 4916, 4917, 4922, 4932, 4944, 4955, 4971, 4973, 4990, 4995]
function cekValue (value){
    let cekValue = false
    for(let i = 0; i < angka.length; i++){
        if (angka[i] == value) {
            cekValue = true
        }
    }

    if(cekValue) {
        console.log(`${value} ada dalam array`)
    } else {
        console.log(`${value} tidak ada dalam array`)
    }
    
}

cekValue(1654)