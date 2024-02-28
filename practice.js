let a="07:05:45PM" // 19:05:45
let b="12:00:00AM" // 00:00:00
let c="12:45:54PM" // 12:45:54
let d="09:30:16AM" // 09:30:16
let e="11:59:59PM" // 23:59:59


function  result(time){
let hour=0
let minutes=0
let seconds=0
if(time.includes("AM")){
    if(time==="12:00:00AM"){
        console.log("00 : 00 : 00")
    }
    else {
    finalhour=[time[0]+time[1]]
    finalminutes=[time[3]+time[4]]
    finalseconds=[time[6]+time[7]]
    console.log(finalhour.toString(),":",finalminutes.toString(),":",finalseconds.toString())
    }
    
}
  

else if(time.includes("PM")){
    if(time[0]+time[1]==="12"){
        if(time[3]+time[4]!=="0"){
            finalhour=[time[0]+time[1]]
            finalminutes=[time[3]+time[4]]
            finalseconds=[time[6]+time[7]]
            console.log(finalhour.toString(),":",finalminutes.toString(),":",finalseconds.toString())
        }
    }
    else{
        hour+=12
        x=[time[0]+time[1]]
        finalhour=parseInt(hour)+parseInt(x)
        finalminutes=[time[3]+time[4]]
        finalseconds=[time[6]+time[7]]
        console.log(finalhour.toString(),":",finalminutes.toString(),":",finalseconds.toString())
    }
    
}
}

result(a)
result(b)
result(c)
result(d)
result(e)

