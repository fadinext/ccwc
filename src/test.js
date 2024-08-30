const { on } = require("events");
const fs = require("fs");

class Main{
    execute(){
        // process.stdin.toArray().then(buff => console.log(buff.toString()))

        process.stdin.on("connect", ()=> console.log("connect"))
        process.stdin.on("ready", ()=> console.log("reay"))

        let finished = false

        let input = ""
        // process.stdin.on("data", (buff) => input += buff.toString())

        process.stdin.pipe(new WritableStream({write: (chunk) => input += chunk, on: () => {}}))

        


        while(!finished){
           const res = process.stdin.setEncoding('utf-8').read()
           console.log("------")
           
           if(!res){
               process.stdin.end()
               finished = true
            }
        }
        
        console.log(input)
    }
}

const x = new Main();

x.execute()

module.exports = Main