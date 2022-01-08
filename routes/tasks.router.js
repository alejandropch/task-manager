const express = require('express')
const router = express.Router()
const {getTask, getAllTask, createTask, updateTask, deleteTask}= require('../services/tasks.services')

router.route('/').get(getAllTask).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports=router