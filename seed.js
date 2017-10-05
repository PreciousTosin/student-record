import Student from './models/students';

const data = [
  {
    name: 'Tosin Akinbobola',
    age: 15,
    course: 'sense engineering',
  },
  {
    name: 'Ayo Ayodele',
    age: 12,
    course: 'ijekuje engineering',
  },
  {
    name: 'Tunde Alo',
    age: 13,
    course: 'Woobe engineering',
  },
];

const seedDb = () => {
  // remove all student records
  Student.remove({}, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Removed all student records');
    // add some records
    data.forEach((seed) => {
      Student.create(seed, (error, student) => {
        if (err) {
          console.log(error);
        } else {
          console.log(`added this student: ${student}`);
        }
      });
    });
  });
};

export default seedDb;
