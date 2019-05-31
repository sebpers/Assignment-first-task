// Import express server
const express = require('express');
// Put express.Router in router variable
const router = express.Router();
// Import student
const student = require('./student.js');


router.post('/student', student.post);
router.get('/student', student.get);
router.get('/student/:id', student.getById);
router.delete('/student/:id', student.deleteById);
router.put('/student/:id', student.put)

// Exports route access
module.exports = router;