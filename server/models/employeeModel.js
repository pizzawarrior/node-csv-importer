import { Sequelize, STRING } from "sequelize";
import { sequelize } from "../database/index.js";

const Employee = sequelize.define("employee", {
  id: {
    type: STRING,
    primaryKey: true,
  },
  name: {
    type: STRING,
  },
  email: {
    type: STRING,
  },
  username: {
    type: STRING,
  },
  dob: {
    type: STRING,
  },
  company: {
    type: STRING,
  },
  address: {
    type: STRING,
  },
  location: {
    type: STRING,
  },
  salary: {
    type: STRING,
  },
  about: {
    type: STRING,
  },
  role: {
    type: STRING,
  },
  managedBy: {
    type: STRING,
    references: {
      model: "employees",
      key: "id",
    },
  },
  createdAt: {
    type: STRING,
  },
  updatedAt: {
    type: STRING,
  },
  avatar: {
    type: STRING,
  },
});

Employee.hasMany(Employee, {
  as: "children",
  foreignKey: "managedBy",
  sourceKey: "id",
  useJunctionTable: false,
});
Employee.belongsTo(Employee, {
  foreignKey: "managedBy",
  targetKey: "id",
});

export default Employee;
