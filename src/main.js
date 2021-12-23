import './test.loader'

const a = ()=>{
    console.log("main go")
}

const b = (fn)=>{
    fn()
}

a()
b(a)


