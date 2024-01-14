import { Sequelize } from "sequelize";
import { sequelize } from "../database/index.js";

const Employee = sequelize.define("employee", {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
  dob: {
    type: Sequelize.STRING,
  },
  company: {
    type: Sequelize.STRING,
  },
  address: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  salary: {
    type: Sequelize.STRING,
  },
  about: {
    type: Sequelize.STRING,
  },
  role: {
    type: Sequelize.STRING,
  },
  managedBy: {
    type: Sequelize.STRING,
    references: {
      model: "employees",
      key: "id",
    },
  },
  createdAt: {
    type: Sequelize.STRING,
  },
  updatedAt: {
    type: Sequelize.STRING,
  },
  avatar: {
    type: Sequelize.STRING,
  },
});

export default Employee;
