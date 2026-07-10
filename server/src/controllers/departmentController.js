const Department = require("../models/Department");

// Create Department
const createDepartment = async (req, res) => {
  try {
    const {
      hospitalId,
      name,
      description,
      location,
    } = req.body;

    const department =
      await Department.create({
        hospitalId,
        name,
        description,
        location,
      });

    res.status(201).json({
      message:
        "Department created successfully",
      department,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Departments
const getDepartments = async (
  req,
  res
) => {
  try {
    const departments =
      await Department.find();

    res.status(200).json(
      departments
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createDepartment,
  getDepartments,
};