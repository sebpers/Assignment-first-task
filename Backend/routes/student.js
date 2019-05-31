// Find for all students
get = (req, res, next) => {
  req.models.Student.find().then((students) => {
    // return all students to the students
    return res.send(students);
  }).catch((error) => {
    // Makes Express handle the error
    next(error);
  });
};

// Get user by query (for example: localhost:5000/student?name=mick)
get = (req, res, next) => {
  let query;

  if (req.query.name) {
    query = req.models.Student.findOne({name: req.query.name});
  } else {
    query = req.models.Student.find();
  }

  // Executes query (load and execute a list of commands in query), then return student
  query.exec().then((student) => {
    return res.send(student);
  }).catch((error) => {
    next(error);
  });
};


// create a student
const post = (req, res, next) => {
  req.models.Student.create({
    name: req.body.name,
    email: req.body.email,
    address: {
      street: req.body.address.street,
      suite: req.body.address.suite,
      city: req.body.address.city
    }
  }).then((student) => {
    return res.status(201).send(student)
  }).catch((error) => {
    next(error);
  });
};

// Get a user through it's ID
const getById = (req, res, next) => {
  // Look through the models of Student after a matching ID with the parameter in the URL and send it back to the user
  req.models.Student.findById(req.params.id).then((student) => {
    return res.send(student);
  });
};

// Delete student by id
const deleteById = (req, res, next) => {
  // Search for a student with a matching ID to the req.params.id and delete the student
  req.models.Student.findByIdAndDelete(req.params.id).then((deleted) => {
    if(deleted) {
      // If found, send back what's deleted and a status code
      return res.send(deleted).status(200);
    } else {
      // If deleted not found, send a status code
      res.sendStatus(204);
    }
  }).catch((error) => {
    next(error);
  });
};

// Replace properties in a student object
const put = (req, res, next) => {
  req.models.Student.updateOne({_id: req.params.id}, {
    name: req.body.name,
    email: req.body.email,
    address: {
      street: req.body.address.street,
      suite: req.body.address.suite,
      city: req.body.address.city,
    }
  },
  {
    //  When true, returns the modified document rather than the original.
    new: true,
    // If set to true, the update operation will either update the document/documents matched by the specified query or if no documents match, insert a new document
    upsert: true,
    // Run validation
    runvalidators: true
  }).then((status) => {
    console.log("status: ", status.upserted)
    // If something doesn't exist and get upserted (created), send status 120
    if(status.upserted) {
      // If created
      res.status(201);
    } else if (status.nModified){
      // If change(s) is made, send status 200
      res.status(200);
    } else {
      // If not changed
      res.status(204);
    }
    // Send response (make the change in the document)
    res.send();
  }).catch((error) => {
    next(error);
  });
};

module.exports = {
  get,
  post,
  getById,
  deleteById,
  put
}