const ToDoModel = require("../models/ToDoModel")

module.exports.getToDo = async(req,res)=>{
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async(req,res)=>{
    
    const { text } = req.body

    ToDoModel.create({ text })
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

module.exports.deleteToDo = async(req,res)=>{
    
    const {_id } = req.body

    ToDoModel.findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Successfull"))
    .catch((err)=> console.log(err))
}