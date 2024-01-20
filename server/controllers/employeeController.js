import Employee from "../models/employeeModel.js";

const getEmployees = (_req, res) => {
  Employee.findAll({
    include: [
      {
        model: Employee,
        as: "children",
        attributes: ["id", "name", "email", "username", "avatar"],
        required: true,
      },
    ],
    attributes: {
      exclude: ["managedBy"],
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Error occurred while retrieving records from the database",
      });
    });
};

export default getEmployees;
