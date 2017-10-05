import express from 'express';
import Student from '../models/students';

const router = express.Router();

/* GET all students records */
router.get('/', (req, res) => {
  Student.find({}, (err, students) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ students });
    }
  });
});

/* Retrieve information about a single student */
router.get('/:id', (req, res) => {
  Student.findById(req.params.id, (err, foundStudent) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ foundStudent });
    }
  });
});

/* Create new student record */
router.post('/', (req, res) => {
  console.log(req.body);
  Student.create(req.body, (err, newStudent) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ newStudent });
    }
  });
});

/* Update student record */
router.put('/:id', (req, res) => {
  Student.findByIdAndUpdate(req.params.id, req.body, (err, updatedStudent) => {
    if (err) {
      console.log(err);
    } else {
      res.send({ updatedStudent });
    }
  });
});

/* delete a student record using it's id */
router.delete('/:id', (req, res) => {
  Student.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('DELETED STUDENT RECORD');
      res.send('DELETED STUDENT RECORD');
    }
  });
});

export default router;
