const tabBody = document.getElementById('table-body')

let flights =[
    {
        time: "08:11",
        destination:"MUMBAI",
        flight:"0X 203",
        gate:"A 01",
        remarks:"ON TIME"
    },
    {
        time: "12:39",
        destination:"DELHI",
        flight:"CL 232",
        gate:"C 32",
        remarks:"CANCELLED"
    },
    {
        time: "13:31",
        destination:"DUBAI",
        flight:"DBX 201",
        gate:"A 19",
        remarks:"CANCELLED"
    },
    {
        time: "14:01",
        destination:"SEOUL",
        flight:"FR 402",
        gate:"A 01",
        remarks:"ON TIME"
    },
    {
        time: "15:22",
        destination:"TOKIYO",
        flight:"TK 211",
        gate:"A 32",
        remarks:"DELAYED"
    }
]

const dest = ["TOKIYO","MUMBAI","DUBAI","SEOUL","DELHI"]
const rem = ["ON TIME","DELAYED","CANCELLED"]
let hour = 15


function populateTable() {
for ( const flight of flights){
   const tabRow = document.createElement("tr")

     for(const flightDetails in flight){
        const tabCell = document.createElement("td")
       const word = Array.from(flight[flightDetails])

       for(const [index,letter] of word.entries()){
        const letterElem = document.createElement("div")
        
        setTimeout(()=>{
            letterElem.classList.add('flip')
            letterElem.textContent=letter
            tabCell.append(letterElem)
        },100 * index)
       }
        tabRow.append(tabCell)
     }
   tabBody.append(tabRow)
}
}
populateTable()


function genRandLetter(){
    const alpab ="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alpab.charAt(Math.floor(Math.random()*alpab.length))
}


function genRandNum(maxNum) {
    const num = "0123456789"
    if(maxNum){
        const newNum = num.slice(0,maxNum + 1)
        return newNum.charAt(Math.floor(Math.random()*newNum.length))
    }
    return num.charAt(Math.floor(Math.random()*num.length))
}

function generateTime(){
    let dispHour = hour
    if(hour<24){
        hour++
    }

    if(hour>=24){
        hour=1
        dispHour = hour
    }

    if(hour<10){
        dispHour = "0" +hour
    }
    return dispHour + ":" +genRandNum(5) + genRandNum()
}

function shuffleUP(){
    flights.shift()
    flights.push({
        time: generateTime(),
        destination:dest[Math.floor(Math.random()*dest.length)],
        flight: genRandLetter() + genRandLetter() +" "+genRandNum() + genRandNum()+genRandNum(),
        gate:genRandLetter() +" "+ genRandNum() + genRandNum(),
        remarks: rem[Math.floor(Math.random()*rem.length)]
    })

    tabBody.textContent="" 
    populateTable()
}

setInterval(shuffleUP,5000)