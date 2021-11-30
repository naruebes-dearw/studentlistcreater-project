let mongoose = require('mongoose'),
express = require('express'),
router = express.Router();

// Student model
let studentSchema = require('../models/Student');

// Create Student
router.route('/create-student').post((req, res, next) => {
  studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  })
});

// Read student
router.route('/').get((req, res, next) => {
  studentSchema.find((error, data) => {
    if (error) return next(error);
    res.json(data);
  })
  
});

// Get single student
router.route('/edit-student/:id').get((req, res, next) => {
  studentSchema.findById(req.params.id, (err, data) => {
    if (err) return next(err);
    res.json(data);
  })
})

// Update student
router.route('/update-student/:id').put((req, res, next) => {
  console.log(req.body)
  studentSchema.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (err, data) => {
    if (err) return next(err);
    res.json(data);
    console.log('Student updated successfully');
  })
})

// Delete student
router.route('/delete-student/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) return next(err);
    res.status(200).json({ msg: data });
  })
})

module.exports = router;