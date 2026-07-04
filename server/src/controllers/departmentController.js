const Department = require("../models/Department");

// Create Department
const createDepartment = async (req, res) => {
  try {
    const department = await Department.create(req.body);

    res.status(201).json({
      message: "Department created successfully",
      department,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Departments
const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find()
      .populate("hospitalId", "name");

    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Department By Id
const getDepartmentById = async (req, res) => {
  try {
    const department = await Department.findById(req.params.id)
      .populate("hospitalId", "name");

    if (!department) {
      return res.status(404).json({
        message: "Department not found",
      });
    }

    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createDepartment,
  getDepartments,
  getDepartmentById,
};
