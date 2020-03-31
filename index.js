// 1 Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта,
// необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
let burger = {
    name: "burger",
    ammount: 2,
    bought: false,
}
let pizza = {
    name: "pizza",
    ammount: 1,
    bought: true,
}
let coke = {
    name: "coca-cola",
    ammount: 2,
    bought: true,
}
let juice = {
    name: "orange juice",
    ammount: 1,
    bought: false,
}
let chocolate = {
    name: "chocolate",
    ammount: 2,
    bought: false,
}

let productList = [burger, pizza, coke, juice, chocolate]; // List of products 

let output = (ArrList) => { // output function
    for (let i = 0; i < ArrList.length; i++) {
        for (let keyValue in ArrList[i]) {
            if (ArrList[i][keyValue] == "no") ArrList[i][keyValue] = false;
            else if (ArrList[i][keyValue] == "yew") ArrList[i][keyValue] = true;
        }
    }
    productList.sort((a, b) => {
        return a.bought - b.bought;
    }) // Sort by not bought
    let keyOutput = "";
    for (let i = 0; i < ArrList.length; i++) {
        for (let keyValue in ArrList[i]) {
            if (ArrList[i][keyValue] === false) ArrList[i][keyValue] = "no"
            else if (ArrList[i][keyValue] === true) ArrList[i][keyValue] = "yes"
            keyOutput += `${ArrList[i][keyValue]} | `
        }
        keyOutput += `
` // every new product <br/>
    }
    return keyOutput;
}
let productAdder = (product) => {
    if (product === null) return `${alert("Nothing to add")}`
    else {
        let obj = {
            name: product,
            ammount: 1,
            bought: false,
        }
        for (let i = 0; i < productList.length; i++) { // obj.name checker. If exist ammount++, else new obj (push to arr)
            if (product == productList[i].name) return `${alert(product + " is already in list. +1 to ammount")} ${productList[i].ammount++}`
        }
        return `${alert(product + " has added to yout buy list")} ${productList.push(obj)}`;
    }
}
let buyFunc = (buyProduct) => {
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].name == buyProduct) return `${alert("You bought " + buyProduct)} ${productList[i].bought = true}`;
    }
    return `${alert("You don't have this thing in your buy list, try to add first")}`;
}
do {
    productAdder(prompt("Type the product you wish to add to your buy list"))
    let userChoice = confirm("Would you like to continue?");
    if (userChoice === false) break;
}
while (true);

alert(output(productList))
buyFunc(prompt("Type the product you want to buy"))
alert(output(productList))



//  2 Создать массив, описывающий чек в магазине. Каждый элемент массива 
// состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
let product0 = {
    name: "banana",
    ammount: 3,
    price: 3,
    overallPrice: function () {
        overallPrice = this.ammount * this.price;
        return overallPrice
    }
}
let product1 = {
    name: "orange",
    ammount: 5,
    price: 2,
    overallPrice: function () {
        overallPrice = this.ammount * this.price;
        return overallPrice
    }
}
let product2 = {
    name: "beer",
    ammount: 4,
    price: 5,
    overallPrice: function () {
        overallPrice = this.ammount * this.price;
        return overallPrice
    }
}

let checkList = [product0, product1, product2]
let checkOutput = (arr) => {
    let keyOutput = ""
    let overallPrice = 0;
    for (let i = 0; i < arr.length; i++) {

        keyOutput += `${arr[i].name}, ammount: ${arr[i].ammount}, price per piece ${arr[i].price}$, overall price: ${arr[i].overallPrice()}$
`
        overallPrice += arr[i].overallPrice();
    }
    return `${keyOutput}
Overall price is ${overallPrice}$`;
}
let mostExpenciveChecker = function (arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].overallPrice())
    }
    result.sort(function (a, b) {
        return b - a;
    })
    return result.shift();
}
let mostExpenciveItem = mostExpenciveChecker(checkList);
let averagePriceChecker = (arr) => {
    let overallPrice = 0;
    let overallAmmount = 0;
    for (let i = 0; i < arr.length; i++) {
        overallPrice += arr[i].overallPrice();
        overallAmmount += arr[i].ammount;
    }
    return overallPrice / overallAmmount;
}
let averagePrice = averagePriceChecker(checkList)
alert(`${checkOutput(checkList)}
Most expencive lot's cost - ${mostExpenciveItem}$
Average price per piece is ${averagePrice}$`);

let styleObj1 = {
    name: "red",
    style: "color: red"
}
let styleObj2 = {
    name: "font-size",
    style: "font-size: 36px"
}
let styleObj3 = {
    name: "align-center",
    style: "text-align: center"
}
let styleObj4 = {
    name: "underline",
    style: "text-decoration: underline"
}
let styles = [styleObj1, styleObj2, styleObj3, styleObj4]
let textCompiler = (arr, text) => {
    let stylesProperties = styles.map((index) => {
        return `
    ${index.style};`;
    })
    stylesProperties = stylesProperties.join("")
    document.write(`<p style="${stylesProperties}">${text}</p>`);
}
styleObj1.style = `color: ${prompt("Type your favorite color name")}`;
styleObj2.style = `font-size: ${prompt("Type size you wish to your text had (0-100)")}px`;
styleObj3.style = `text-align: ${prompt("Type an align (left,right,center,justify")}`;
let userText = prompt("Type your text to check my super CSS programm");
textCompiler(styles, userText)

let auditorium1 = {
    name: 201,
    roominess: 20,
    faculty: "Marketing"
}
let auditorium2 = {
    name: 202,
    roominess: 14,
    faculty: "Marketing"
}
let auditorium3 = {
    name: 203,
    roominess: 12,
    faculty: "Marketing"
}
let auditorium4 = {
    name: 303,
    roominess: 12,
    faculty: "Desktop software"
}
let auditorium5 = {
    name: 305,
    roominess: 17,
    faculty: "Desktop software"
}
let auditorium6 = {
    name: 306,
    roominess: 19,
    faculty: "Mobile software"
}
let auditorium7 = {
    name: 307,
    roominess: 19,
    faculty: "Mobile software"
}
let auditorium8 = {
    name: 309,
    roominess: 19,
    faculty: "Mobile software"
}
let auditorium9 = {
    name: 102,
    roominess: 13,
    faculty: "Cybersecurity"
}
let auditorium10 = {
    name: 109,
    roominess: 19,
    faculty: "Cybersecurity"
}
let auditorium11 = {
    name: 105,
    roominess: 16,
    faculty: "Cybersecurity"
}
let group1 = {
    name: "Бурячки",
    ammount: 15,
    faculty: "Cybersecurity"
}


let tneu = [auditorium1, auditorium2, auditorium3, auditorium4, auditorium5, auditorium6, auditorium7, auditorium8, auditorium9, auditorium10, auditorium11]

let auditoriumOutput = function (universityName) {
    let result = "";
    for (rooms of universityName) {
        for (keyValue in rooms) {
            if (keyValue == "name") result += `Auditorium №${rooms[keyValue]} `
            else result += `| ${keyValue}: ${rooms[keyValue]} `
        }
        result += `
`
    }
    return result;
}

let facultySelector = function (universityName, facultyName) {
    let result = "";
    for (rooms of universityName) {
        for (keyValue in rooms) {
            if (rooms[keyValue] == facultyName) {
                for (keyValue1 in rooms) if (keyValue1 == "name") result += `Auditorium №${rooms[keyValue1]} `
                else result += `| ${keyValue1}: ${rooms[keyValue1]} `
                result += `
`
            }
            else continue;
        }
    }
    if (result == "") return `404 No faculty. Try again. Avalaible is:
    1. Marketing
    2. Desktop software
    3. Mobile software
    4. Cybersecurity`

    return result;
}



let groupOutput = function (group) {
    let result = "";
    for (keyValue in group) {
        if (keyValue == "name") result += `Group ${keyValue} - ${group[keyValue]} `
        else result += `| ${keyValue}: ${group[keyValue]} `
    }
    return result;
}

let auditoriumSelectorByGroup = (universityName, groupName) => {
    let result = "";
    for (rooms of universityName) {
        for (keyValue in rooms) {
            if (rooms[keyValue] == groupName.faculty) {
                for (keyValue1 in rooms)
                    if (rooms[keyValue1] < 20 && rooms[keyValue1] > 10) {
                        if (groupName.ammount < rooms[keyValue1])
                            for (keyValue2 in rooms)
                                if (keyValue2 == "name") result += `Auditorium №${rooms[keyValue2]} `
                                else result += `| ${keyValue2}: ${rooms[keyValue2]} `
                        result += `
`
                    }
            }
            else continue;
        }
    }
    return result;
}
let sortByCapacity = function () {
    tneu.sort((a, b) => {
        return a.roominess - b.roominess;
    })
}
let sortByAlphabet = function () {
    tneu.sort((a, b) => {
        facultyA = a.faculty.toLocaleLowerCase();
        facultyB = b.faculty.toLocaleLowerCase();
        if (facultyA < facultyB) return 1
        if (facultyA > facultyB) return -1
        return 0
    })
}
userSortChoice = prompt(`Type what kind of sort you want
1. By auditorium size
2. By faculty alphabet
   Any other key for no choice`)
if (userSortChoice == "1") sortByCapacity();
else if (userSortChoice == "2") sortByAlphabet();
alert(auditoriumOutput(tneu))
let userFaculty = prompt(`Type your faculty you need to find. Avalaible is:
1. Marketing
2. Desktop software
3. Mobile software
4. Cybersecurity`)
if (userFaculty == "1") userFaculty = "Marketing"
if (userFaculty == "2") userFaculty = "Desktop software"
if (userFaculty == "3") userFaculty = "Mobile software"
if (userFaculty == "4") userFaculty = "Cybersecurity"
alert(facultySelector(tneu, userFaculty))
alert(`${groupOutput(group1)} 
can be attached to this/these auditorium(s)
${auditoriumSelectorByGroup(tneu, group1)}`)

