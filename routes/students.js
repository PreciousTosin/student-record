import express from 'express';

const router = express.Router();

/* GET all students records */
router.get('/students', (req, res) => {
  res.send({ Tosin: "Tosin's record found" });
});

/* Retrieve information about a single student */
router.get('/students/:id', (req, res) => {});

/* Create new student record */
router.post('/students', (req, res) => {});

/* Update student record */
router.put('/students/:id', (req, res) => {});

/* delete a student record using it's id */
router.delete('/students/:id', (req, res) => {});

export default router;
