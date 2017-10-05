import express from 'express';

const router = express.Router();

/* GET all students records */
router.get('/', (req, res) => {
  res.send('GET all students route working');
});

/* Retrieve information about a single student */
router.get('/:id', (req, res) => {
  res.send('GET one student route working');
});

/* Create new student record */
router.post('/', (req, res) => {
  res.send('POST-Create new student route working');
});

/* Update student record */
router.put('/:id', (req, res) => {
  res.send('PUT - Update existing student route working');
});

/* delete a student record using it's id */
router.delete('/:id', (req, res) => {
  res.send('DELETE - Delete existing student route working');
});

export default router;
