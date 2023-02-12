const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns system uptime in seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

// methods return info about the OS
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)