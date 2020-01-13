function person(){
let name=process.argv[2]
console.log(`Hello, ${name}!`)
let lwr=name.toLowerCase()
console.log(`Your name lowercased is \"${lwr}\".`)
}
person();