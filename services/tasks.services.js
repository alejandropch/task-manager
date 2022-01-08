const Task = require('../models/tasks.model')
const asyncWrapper = require('../middlewares/asyncWrapper.middleware')
const { createCustomError } = require('../errors/customError')

const getTask = asyncWrapper( async(req,res, next)=>{

    const { id: taskID }=req.params
    const task = await Task.findOne({ _id: taskID })
    if(!task){
        return next(createCustomError(404, `not found the task with the id provided: ${taskID}`))
    }
    res.status(200).json(task)
})
const getAllTask = asyncWrapper( async (req,res) => {
    const tasks = await Task.find({})
    res.status(200).json({tasks})
})
const createTask = asyncWrapper(async (req,res) => {
    const body = req.body
    const task = await Task.create(body)
    res.status(201).json(task)
})
const updateTask = asyncWrapper(async(req,res) => {
    const {id: taskID} = req.params
    const body = req.body
    const task = await Task.findOneAndUpdate({_id: taskID}, body, {new : true, runValidators:true})
    if(!task){
        return next(createCustomError(404, `not found the task with the id provided: ${taskID}`))
    }
    res.json({
        message:'update',
        task
    })
})

const deleteTask = asyncWrapper(async(req,res) => {
    const { id: taskID }=req.params
    const task= await Task.findOneAndDelete({ _id: taskID })
        
    if(!task){
        return next(createCustomError(404, `not found the task with the id provided: ${taskID}`))
    }
    res.send({
        message: `deleted item with the id: ${taskID}`,
        task
    })
})
module.exports={getTask, getAllTask, createTask, updateTask, deleteTask}