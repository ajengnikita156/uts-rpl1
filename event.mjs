import {EventEmitter} from "events"

const emitter = new EventEmitter();

emitter.addListener("hello",(name) =>{
    console.info(`hello ${name}`);
})

emitter.addListener("hello",(name) =>{
    console.info(`haiii ${name}`);
})
emitter.emit("hello","ajeng");