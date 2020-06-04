// basic types
const myName = 'typescript'
const myVersion = 2020

const myNameString: string = "11"

const myVersionString: string = '2020'



const myArray: Array<number> = [1, 2, 3, 4]
const myStringArray: Array<string> = ['2', '1']

const anyArray: any = [1, "2", true]

// tuples - a good hack
const ourTuple: [string, number, boolean] = ["hello", 2020, false]
const [str, num] = ourTuple

console.log(ourTuple[0], ourTuple[1], ourTuple[2])
console.log(str, num)



// enums 
// by default they are all 0
// you can set them
// A helpful addition to the standard set of datatypes from JavaScript
enum colour {RED = 1, GREEN, BLUE}
const myFavColour: colour = colour.RED
console.log(myFavColour)


// any
let soJs: any = "stringVal"

soJs = 11
soJs = true


// functions
// unlike js, function needs to be called with the param!
function thisIsFun(age: number): string {
    return `You are ${age} years old!`
}

function thisIsAmazing(age: number, address: string = "random"): string {
    return `You are ${age} years old and you live at ${address} street`
}

// address is an optional param here
function howAboutNow(age: number, address?: string): string {
    return `You are ${age} years old and you live at ${address || 'nope'} street`
}

// this can be called with or without the second param
console.log(howAboutNow(2, "random str"))

// can also define stuff like this
const lookAtMe = (age: number, address: string): string => {
    return `You are ${age} years old and you live at ${address} street`
}


// void, never

// void is like void in c++
function soLazy() : void {
    console.log('hey')
}

// never is when a function never returns
function nope(): never {
    throw new Error('wow')
}

// object - object in js

const king: object = { value: 11}

// type asserts - type casts, only to be done when we are sure!

const whoAmAI: any = "look here"
const riskyBusiness: number = (whoAmAI as string).length
console.log('riskyBusiness>', riskyBusiness)


// interfaces - a good way to define schemas!

const person1: object = {
    name: 'hey',
    age: 255,
    address: 'nope street'
}

// ?: denotes optional property

interface address {
    streetName: string
    city: string
    pincode?: number
}

interface person {
    name: string
    age: number
    address: address
}


const me:person  = {
    name: "11",
    age: 11,
    address: {
        streetName: "noe str",
        city: "berlin",
    }
}

// it's still an object for js, interfaces are just on the ts layer, they do not appear in the compiled code
console.log('me>', typeof(me))

interface newPerson {
    readonly name: string
    readonly dob : Date
}


const newMe: newPerson = {
    name: 'fddf',
    dob: new Date('2020-06-04')
}

me.name = 'new Name'

// not a permitted op, as name is readonly, will give compilation error
newMe.name = 'fdfd'

interface comparisonFunc {
    (num1: number, num2: number): boolean
}

// all of these functions adhere to the signature defined in comparisonFunc
const isGreater: comparisonFunc = (no1, no2) => {
    return no1 > no2
}

const isLesser: comparisonFunc = (no1, no2) => {
    return no1 < no2
}

const isEqual: comparisonFunc = (val1, val2) => {
    return val1 === val2
}


// generics, just like in scala!
function suchCopied<T, J> (val1: T, val2: J): T {
    return val1
}

suchCopied(1, "2")
suchCopied("2", false)