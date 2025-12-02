const EventEmitter =require("events")
const event = new EventEmitter();

event.on("doorbell" ,(val)=>{            //listen
    if(val=="raj")
        {
            console.log("hii raj is coming")
        }  //event listen

        
})

event.on("doorbell",(val)=>{   //listen
    console.log("welcome")
})
event.on("doorbell",(val)=>{   //listen
    console.log("hello")
})

event.emit("doorbell","raj");  //event fire