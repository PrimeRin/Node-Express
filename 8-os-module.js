//inbuilt modules

const os=require('os')

//info about current user
const user=os.userInfo()
console.log(user)

//method returns system up time in sec
console.log(`The System UpTime is ${os.uptime()} seconds`)

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS)