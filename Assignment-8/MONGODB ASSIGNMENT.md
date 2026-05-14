**Part A – Database \& Collection**





use CompanyDB



CompanyDB> db.employees.insertMany(\[{'empId': 1, 'name':'Deepak', 'department': 'hr', 'salary': 21500, 'city': 'jaipur', 'age': 23} ,  {'empId':'2','name':'Lakshay', 'department': 'finance', 'salary': 25600, 'city': 'pune', 'age': 25}, {'empId': 3, 'name': 'Ram', 'department': 'logistics', 'salary': 22000, 'city': 'mumbai', 'age': 28}, {'empId': 4, 'name': 'Yogesh', 'department': 'it', 'salary': 25650, 'city': 'gurugram', 'age': 26}, {'empId': 5, 'name': 'Atharv', 'department': 'security', 'salary': 26620, 'city': 'jaipur', 'age': 32}])

{

&#x20; acknowledged: true,

&#x20; insertedIds: {

&#x20;   '0': ObjectId('6a056053c6ed90e8ceabc115'),

&#x20;   '1': ObjectId('6a056053c6ed90e8ceabc116'),

&#x20;   '2': ObjectId('6a056053c6ed90e8ceabc117'),

&#x20;   '3': ObjectId('6a056053c6ed90e8ceabc118'),

&#x20;   '4': ObjectId('6a056053c6ed90e8ceabc119')

&#x20; }

}









**Part B – Insert Documents**







CompanyDB> db.employees.insterOne({'empId': 6, 'name': 'Sushant', 'department': 'management', 'salary': 35600, 'city': 'noida', 'age': 35})

TypeError: db.employees.insterOne is not a function

CompanyDB> db.employees.insertOne({'empId': 6, 'name': 'Sushant', 'department': 'management', 'salary': 35600, 'city': 'noida', 'age': 35})

{

&#x20; acknowledged: true,

&#x20; insertedId: ObjectId('6a0560fbc6ed90e8ceabc11a')

}

CompanyDB> db.find()

TypeError: db.find is not a function

CompanyDB> db.employees.find()

\[

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc115'),

&#x20;   empId: 1,

&#x20;   name: 'Deepak',

&#x20;   department: 'hr',

&#x20;   salary: 21500,

&#x20;   city: 'jaipur',

&#x20;   age: 23

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc116'),

&#x20;   empId: '2',

&#x20;   name: 'Lakshay',

&#x20;   department: 'finance',

&#x20;   salary: 25600,

&#x20;   city: 'pune',

&#x20;   age: 25

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc117'),

&#x20;   empId: 3,

&#x20;   name: 'Ram',

&#x20;   department: 'logistics',

&#x20;   salary: 22000,

&#x20;   city: 'mumbai',

&#x20;   age: 28

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc118'),

&#x20;   empId: 4,

&#x20;   name: 'Yogesh',

&#x20;   department: 'it',

&#x20;   salary: 25650,

&#x20;   city: 'gurugram',

&#x20;   age: 26

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc119'),

&#x20;   empId: 5,

&#x20;   name: 'Atharv',

&#x20;   department: 'security',

&#x20;   salary: 26620,

&#x20;   city: 'jaipur',

&#x20;   age: 32

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0560fbc6ed90e8ceabc11a'),

&#x20;   empId: 6,

&#x20;   name: 'Sushant',

&#x20;   department: 'management',

&#x20;   salary: 35600,

&#x20;   city: 'noida',

&#x20;   age: 35

&#x20; }

]

CompanyDB> db.employees.insertOne({'empId': 7, 'name': 'Abhinav', 'department': 'management', 'salary': 34500, 'city': 'delhi', 'age': 25})

{

&#x20; acknowledged: true,

&#x20; insertedId: ObjectId('6a0561a8c6ed90e8ceabc11b')

}









**Part C – CRUD Operations**

**Read Operations**







CompanyDB> db.employees.find()

\[

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc115'),

&#x20;   empId: 1,

&#x20;   name: 'Deepak',

&#x20;   department: 'hr',

&#x20;   salary: 21500,

&#x20;   city: 'jaipur',

&#x20;   age: 23

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc116'),

&#x20;   empId: '2',

&#x20;   name: 'Lakshay',

&#x20;   department: 'finance',

&#x20;   salary: 25600,

&#x20;   city: 'pune',

&#x20;   age: 25

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc117'),

&#x20;   empId: 3,

&#x20;   name: 'Ram',

&#x20;   department: 'logistics',

&#x20;   salary: 22000,

&#x20;   city: 'mumbai',

&#x20;   age: 28

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc118'),

&#x20;   empId: 4,

&#x20;   name: 'Yogesh',

&#x20;   department: 'it',

&#x20;   salary: 25650,

&#x20;   city: 'gurugram',

&#x20;   age: 26

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc119'),

&#x20;   empId: 5,

&#x20;   name: 'Atharv',

&#x20;   department: 'security',

&#x20;   salary: 26620,

&#x20;   city: 'jaipur',

&#x20;   age: 32

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0560fbc6ed90e8ceabc11a'),

&#x20;   empId: 6,

&#x20;   name: 'Sushant',

&#x20;   department: 'management',

&#x20;   salary: 35600,

&#x20;   city: 'noida',

&#x20;   age: 35

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0561a8c6ed90e8ceabc11b'),

&#x20;   empId: 7,

&#x20;   name: 'Abhinav',

&#x20;   department: 'management',

&#x20;   salary: 34500,

&#x20;   city: 'delhi',

&#x20;   age: 25

&#x20; }

]

CompanyDB> db.employees.find({}, { name: 1, salary: 1, \_id: 0 });

\[

&#x20; { name: 'Deepak', salary: 21500 },

&#x20; { name: 'Lakshay', salary: 25600 },

&#x20; { name: 'Ram', salary: 22000 },

&#x20; { name: 'Yogesh', salary: 25650 },

&#x20; { name: 'Atharv', salary: 26620 },

&#x20; { name: 'Sushant', salary: 35600 },

&#x20; { name: 'Abhinav', salary: 34500 }

]



CompanyDB> db.employees.find({ city: "delhi" });

\[

&#x20; {

&#x20;   \_id: ObjectId('6a0561a8c6ed90e8ceabc11b'),

&#x20;   empId: 7,

&#x20;   name: 'Abhinav',

&#x20;   department: 'management',

&#x20;   salary: 34500,

&#x20;   city: 'delhi',

&#x20;   age: 25

&#x20; }

]

CompanyDB> db.employees.find({ salary: { $gt: 50000 } });



CompanyDB> db.employees.find({ department: "IT" });



CompanyDB> db.employees.find({ department: "it" });

\[

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc118'),

&#x20;   empId: 4,

&#x20;   name: 'Yogesh',

&#x20;   department: 'it',

&#x20;   salary: 25650,

&#x20;   city: 'gurugram',

&#x20;   age: 26

&#x20; }

]

CompanyDB> db.employees.find({ age: { $lt: 30 } });

\[

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc115'),

&#x20;   empId: 1,

&#x20;   name: 'Deepak',

&#x20;   department: 'hr',

&#x20;   salary: 21500,

&#x20;   city: 'jaipur',

&#x20;   age: 23

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc116'),

&#x20;   empId: '2',

&#x20;   name: 'Lakshay',

&#x20;   department: 'finance',

&#x20;   salary: 25600,

&#x20;   city: 'pune',

&#x20;   age: 25

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc117'),

&#x20;   empId: 3,

&#x20;   name: 'Ram',

&#x20;   department: 'logistics',

&#x20;   salary: 22000,

&#x20;   city: 'mumbai',

&#x20;   age: 28

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc118'),

&#x20;   empId: 4,

&#x20;   name: 'Yogesh',

&#x20;   department: 'it',

&#x20;   salary: 25650,

&#x20;   city: 'gurugram',

&#x20;   age: 26

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0561a8c6ed90e8ceabc11b'),

&#x20;   empId: 7,

&#x20;   name: 'Abhinav',

&#x20;   department: 'management',

&#x20;   salary: 34500,

&#x20;   city: 'delhi',

&#x20;   age: 25

&#x20; }

]









**Update Operations**







CompanyDB> db.employees.updateOne({ empId: 4 },{ $set: { salary: 38600 }});

{

&#x20; acknowledged: true,

&#x20; insertedId: null,

&#x20; matchedCount: 1,

&#x20; modifiedCount: 1,

&#x20; upsertedCount: 0

}

CompanyDB> db.employees.updateOne({ city: "mumbai" }, { $set: { city: "bangalore" }});

{

&#x20; acknowledged: true,

&#x20; insertedId: null,

&#x20; matchedCount: 1,

&#x20; modifiedCount: 1,

&#x20; upsertedCount: 0

}

CompanyDB> db.employees.updateMany({ department: "it" }, { $inc: { salary: 5000 }});

{

&#x20; acknowledged: true,

&#x20; insertedId: null,

&#x20; matchedCount: 1,

&#x20; modifiedCount: 1,

&#x20; upsertedCount: 0

}

CompanyDB> db.employees.updateMany({},{ $set: { bonus: 0 }});

{

&#x20; acknowledged: true,

&#x20; insertedId: null,

&#x20; matchedCount: 7,

&#x20; modifiedCount: 7,

&#x20; upsertedCount: 0

}







**Delete Operations**







CompanyDB> db.employees.deleteOne({ empId: 3 });

{ acknowledged: true, deletedCount: 1 }

CompanyDB> db.employees.deleteMany({ department: "hr" });

{ acknowledged: true, deletedCount: 1 }

CompanyDB> db.employees.deleteMany({ salary: { $lt: 25000 } });

{ acknowledged: true, deletedCount: 0 }











**Part D – Operators Practice**

**Comparison Operators**









CompanyDB> db.employees.find({ salary: { $gte: 30000 } });

\[

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc118'),

&#x20;   empId: 4,

&#x20;   name: 'Yogesh',

&#x20;   department: 'it',

&#x20;   salary: 43600,

&#x20;   city: 'gurugram',

&#x20;   age: 26,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0560fbc6ed90e8ceabc11a'),

&#x20;   empId: 6,

&#x20;   name: 'Sushant',

&#x20;   department: 'management',

&#x20;   salary: 35600,

&#x20;   city: 'noida',

&#x20;   age: 35,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0561a8c6ed90e8ceabc11b'),

&#x20;   empId: 7,

&#x20;   name: 'Abhinav',

&#x20;   department: 'management',

&#x20;   salary: 34500,

&#x20;   city: 'delhi',

&#x20;   age: 25,

&#x20;   bonus: 0

&#x20; }

]

CompanyDB> db.employees.find({ age: { $gte: 25, $lte: 30 } });

\[

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc116'),

&#x20;   empId: '2',

&#x20;   name: 'Lakshay',

&#x20;   department: 'finance',

&#x20;   salary: 25600,

&#x20;   city: 'pune',

&#x20;   age: 25,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc118'),

&#x20;   empId: 4,

&#x20;   name: 'Yogesh',

&#x20;   department: 'it',

&#x20;   salary: 43600,

&#x20;   city: 'gurugram',

&#x20;   age: 26,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0561a8c6ed90e8ceabc11b'),

&#x20;   empId: 7,

&#x20;   name: 'Abhinav',

&#x20;   department: 'management',

&#x20;   salary: 34500,

&#x20;   city: 'delhi',

&#x20;   age: 25,

&#x20;   bonus: 0

&#x20; }

]

CompanyDB> db.employees.find({ salary: { $ne: 34500 } });

\[

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc116'),

&#x20;   empId: '2',

&#x20;   name: 'Lakshay',

&#x20;   department: 'finance',

&#x20;   salary: 25600,

&#x20;   city: 'pune',

&#x20;   age: 25,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc118'),

&#x20;   empId: 4,

&#x20;   name: 'Yogesh',

&#x20;   department: 'it',

&#x20;   salary: 43600,

&#x20;   city: 'gurugram',

&#x20;   age: 26,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc119'),

&#x20;   empId: 5,

&#x20;   name: 'Atharv',

&#x20;   department: 'security',

&#x20;   salary: 26620,

&#x20;   city: 'jaipur',

&#x20;   age: 32,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0560fbc6ed90e8ceabc11a'),

&#x20;   empId: 6,

&#x20;   name: 'Sushant',

&#x20;   department: 'management',

&#x20;   salary: 35600,

&#x20;   city: 'noida',

&#x20;   age: 35,

&#x20;   bonus: 0

&#x20; }

]









**Logical Operators**







CompanyDB> db.employees.find({ city: "Delhi", salary: { $gt: 50000 } });



CompanyDB> db.employees.find({ city: { $in: \["noida", "mumbai"] } });

\[

&#x20; {

&#x20;   \_id: ObjectId('6a0560fbc6ed90e8ceabc11a'),

&#x20;   empId: 6,

&#x20;   name: 'Sushant',

&#x20;   department: 'management',

&#x20;   salary: 35600,

&#x20;   city: 'noida',

&#x20;   age: 35,

&#x20;   bonus: 0

&#x20; }

]

CompanyDB> db.employees.find({ department: { $ne: "logistics" } });

\[

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc116'),

&#x20;   empId: '2',

&#x20;   name: 'Lakshay',

&#x20;   department: 'finance',

&#x20;   salary: 25600,

&#x20;   city: 'pune',

&#x20;   age: 25,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc118'),

&#x20;   empId: 4,

&#x20;   name: 'Yogesh',

&#x20;   department: 'it',

&#x20;   salary: 43600,

&#x20;   city: 'gurugram',

&#x20;   age: 26,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc119'),

&#x20;   empId: 5,

&#x20;   name: 'Atharv',

&#x20;   department: 'security',

&#x20;   salary: 26620,

&#x20;   city: 'jaipur',

&#x20;   age: 32,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0560fbc6ed90e8ceabc11a'),

&#x20;   empId: 6,

&#x20;   name: 'Sushant',

&#x20;   department: 'management',

&#x20;   salary: 35600,

&#x20;   city: 'noida',

&#x20;   age: 35,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0561a8c6ed90e8ceabc11b'),

&#x20;   empId: 7,

&#x20;   name: 'Abhinav',

&#x20;   department: 'management',

&#x20;   salary: 34500,

&#x20;   city: 'delhi',

&#x20;   age: 25,

&#x20;   bonus: 0

&#x20; }

]







**Array \& Regex Practice**





CompanyDB> db.employees.find({name: /^A/})

\[

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc119'),

&#x20;   empId: 5,

&#x20;   name: 'Atharv',

&#x20;   department: 'security',

&#x20;   salary: 26620,

&#x20;   city: 'jaipur',

&#x20;   age: 32,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0561a8c6ed90e8ceabc11b'),

&#x20;   empId: 7,

&#x20;   name: 'Abhinav',

&#x20;   department: 'management',

&#x20;   salary: 34500,

&#x20;   city: 'delhi',

&#x20;   age: 25,

&#x20;   bonus: 0

&#x20; }

]

CompanyDB> db.employees.find({name: { $regex: /n$/ }});



CompanyDB> db.employees.find({ department: { $regex: /IT/i } });

\[

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc118'),

&#x20;   empId: 4,

&#x20;   name: 'Yogesh',

&#x20;   department: 'it',

&#x20;   salary: 43600,

&#x20;   city: 'gurugram',

&#x20;   age: 26,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc119'),

&#x20;   empId: 5,

&#x20;   name: 'Atharv',

&#x20;   department: 'security',

&#x20;   salary: 26620,

&#x20;   city: 'jaipur',

&#x20;   age: 32,

&#x20;   bonus: 0

&#x20; }

]











**Part E – Sorting \& Limiting**







CompanyDB> db.employees.find().sort({ salary: 1 });

\[

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc116'),

&#x20;   empId: '2',

&#x20;   name: 'Lakshay',

&#x20;   department: 'finance',

&#x20;   salary: 25600,

&#x20;   city: 'pune',

&#x20;   age: 25,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc119'),

&#x20;   empId: 5,

&#x20;   name: 'Atharv',

&#x20;   department: 'security',

&#x20;   salary: 26620,

&#x20;   city: 'jaipur',

&#x20;   age: 32,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0561a8c6ed90e8ceabc11b'),

&#x20;   empId: 7,

&#x20;   name: 'Abhinav',

&#x20;   department: 'management',

&#x20;   salary: 34500,

&#x20;   city: 'delhi',

&#x20;   age: 25,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0560fbc6ed90e8ceabc11a'),

&#x20;   empId: 6,

&#x20;   name: 'Sushant',

&#x20;   department: 'management',

&#x20;   salary: 35600,

&#x20;   city: 'noida',

&#x20;   age: 35,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc118'),

&#x20;   empId: 4,

&#x20;   name: 'Yogesh',

&#x20;   department: 'it',

&#x20;   salary: 43600,

&#x20;   city: 'gurugram',

&#x20;   age: 26,

&#x20;   bonus: 0

&#x20; }

]

CompanyDB> db.employees.find().sort({ salary: -1 });

\[

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc118'),

&#x20;   empId: 4,

&#x20;   name: 'Yogesh',

&#x20;   department: 'it',

&#x20;   salary: 43600,

&#x20;   city: 'gurugram',

&#x20;   age: 26,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0560fbc6ed90e8ceabc11a'),

&#x20;   empId: 6,

&#x20;   name: 'Sushant',

&#x20;   department: 'management',

&#x20;   salary: 35600,

&#x20;   city: 'noida',

&#x20;   age: 35,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0561a8c6ed90e8ceabc11b'),

&#x20;   empId: 7,

&#x20;   name: 'Abhinav',

&#x20;   department: 'management',

&#x20;   salary: 34500,

&#x20;   city: 'delhi',

&#x20;   age: 25,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc119'),

&#x20;   empId: 5,

&#x20;   name: 'Atharv',

&#x20;   department: 'security',

&#x20;   salary: 26620,

&#x20;   city: 'jaipur',

&#x20;   age: 32,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc116'),

&#x20;   empId: '2',

&#x20;   name: 'Lakshay',

&#x20;   department: 'finance',

&#x20;   salary: 25600,

&#x20;   city: 'pune',

&#x20;   age: 25,

&#x20;   bonus: 0

&#x20; }

]

CompanyDB> db.employees.find().sort({ salary: -1 }).limit(3);

\[

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc118'),

&#x20;   empId: 4,

&#x20;   name: 'Yogesh',

&#x20;   department: 'it',

&#x20;   salary: 43600,

&#x20;   city: 'gurugram',

&#x20;   age: 26,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0560fbc6ed90e8ceabc11a'),

&#x20;   empId: 6,

&#x20;   name: 'Sushant',

&#x20;   department: 'management',

&#x20;   salary: 35600,

&#x20;   city: 'noida',

&#x20;   age: 35,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0561a8c6ed90e8ceabc11b'),

&#x20;   empId: 7,

&#x20;   name: 'Abhinav',

&#x20;   department: 'management',

&#x20;   salary: 34500,

&#x20;   city: 'delhi',

&#x20;   age: 25,

&#x20;   bonus: 0

&#x20; }

]

CompanyDB> db.employees.find().skip(2);

\[

&#x20; {

&#x20;   \_id: ObjectId('6a056053c6ed90e8ceabc119'),

&#x20;   empId: 5,

&#x20;   name: 'Atharv',

&#x20;   department: 'security',

&#x20;   salary: 26620,

&#x20;   city: 'jaipur',

&#x20;   age: 32,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0560fbc6ed90e8ceabc11a'),

&#x20;   empId: 6,

&#x20;   name: 'Sushant',

&#x20;   department: 'management',

&#x20;   salary: 35600,

&#x20;   city: 'noida',

&#x20;   age: 35,

&#x20;   bonus: 0

&#x20; },

&#x20; {

&#x20;   \_id: ObjectId('6a0561a8c6ed90e8ceabc11b'),

&#x20;   empId: 7,

&#x20;   name: 'Abhinav',

&#x20;   department: 'management',

&#x20;   salary: 34500,

&#x20;   city: 'delhi',

&#x20;   age: 25,

&#x20;   bonus: 0

&#x20; }

]







**Part F – Aggregation** 





CompanyDB> db.employees.aggregate(\[ { $group: {\_id: null,averageSalary: { $avg: "$salary" } } } ]);

\[ { \_id: null, averageSalary: 33184 } ]

CompanyDB> db.employees.aggregate(\[{$group: {\_id: null,maxSalary: { $max: "$salary" },minSalary: { $min: "$salary" }}}]);

\[ { \_id: null, maxSalary: 43600, minSalary: 25600 } ]

CompanyDB> db.employees.aggregate(\[{$group: {\_id: "$department",totalSalary: { $sum: "$salary" }}}]);

\[

&#x20; { \_id: 'management', totalSalary: 70100 },

&#x20; { \_id: 'security', totalSalary: 26620 },

&#x20; { \_id: 'finance', totalSalary: 25600 },

&#x20; { \_id: 'it', totalSalary: 43600 }

]

CompanyDB> db.employees.aggregate(\[{$group: {\_id: "$department",employeeCount: { $sum: 1 }}}]);

\[

&#x20; { \_id: 'management', employeeCount: 2 },

&#x20; { \_id: 'it', employeeCount: 1 },

&#x20; { \_id: 'finance', employeeCount: 1 },

&#x20; { \_id: 'security', employeeCount: 1 }

]





**Part G – Indexing**







CompanyDB> db.employees.createIndex({ department: 1 })

department\_1

CompanyDB> db.employees.createIndex({ city: 1, salary: -1 })

city\_1\_salary\_-1

CompanyDB> db.employees.getIndexes()

\[

&#x20; { v: 2, key: { \_id: 1 }, name: '\_id\_' },

&#x20; { v: 2, key: { department: 1 }, name: 'department\_1' },

&#x20; { v: 2, key: { city: 1, salary: -1 }, name: 'city\_1\_salary\_-1' }

]









**Part H – Advanced Queries**







CompanyDB> db.employees.distinct("city")

\[ 'delhi', 'gurugram', 'jaipur', 'noida', 'pune' ]

CompanyDB> db.employees.countDocuments({});

5

CompanyDB> db.employees.find().sort({ salary: -1 }).skip(1).limit(1);

\[

&#x20; {

&#x20;   \_id: ObjectId('6a0560fbc6ed90e8ceabc11a'),

&#x20;   empId: 6,

&#x20;   name: 'Sushant',

&#x20;   department: 'management',

&#x20;   salary: 35600,

&#x20;   city: 'noida',

&#x20;   age: 35,

&#x20;   bonus: 0

&#x20; }

]

CompanyDB> db.employees.updateMany({}, { $rename: { "city": "location" } });

{

&#x20; acknowledged: true,

&#x20; insertedId: null,

&#x20; matchedCount: 5,

&#x20; modifiedCount: 5,

&#x20; upsertedCount: 0

}

CompanyDB> db.employees.updateMany({}, { $unset: { bonus: "" } });

{

&#x20; acknowledged: true,

&#x20; insertedId: null,

&#x20; matchedCount: 5,

&#x20; modifiedCount: 5,

&#x20; upsertedCount: 0

}

CompanyDB> db.employees.drop();

true

CompanyDB> db.dropDatabase();

{ ok: 1, dropped: 'CompanyDB' }

