//Regular expressions are patterns used to match character combinations in strings
let pattern = 'pw'

//Creation of regular expresion
//1st way
let regExOne = new RegExp(pattern)

//2nd way
let flag = 'gi'
let regExTwo = new RegExp(pattern,flag)

//3rd way
let regExThree = /pw/gi  //we acn you // to give pattern.gi is flags it pass after slash
//i is case insensetive and g is global

const strToCheck = "pw is growing at a rapid speed and recently thye are work on pwskills to create skills based pwcontents"

//how to match
//in this we ask to regex
const result = regExThree.test(strToCheck)
console.log(result)

//in this we can ask to the string
const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult) //it can write matching data

const oneMoreResult = strToCheck.replace(regExThree, 'p-w')
console.log(oneMoreResult) // it can replace the data

const webURL = "https://pwskills.com/itesh%20chiudhary"
const useableURL = webURL.replace(/%20/, '-')
console.log(useableURL)

//but if want to match another number and dont want to write numbers every time 
//then we simply write "d" on the place of that number
 const webUrl = "https://pwskills.com/itesh%60chiudtary"
 const useableUrl = webUrl.replace(/%\d0/, '-')
 console.log(useableUrl)

 //regexr.com for more info

