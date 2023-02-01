const Repair = require('../models/repair.model');

exports.findAllRepairs = async (req, res) => {
  try {
    const repairs = await Repair.findAll({
      where: {
        status: 'pending',
      },
    });
    res.status(200).json({
      status: 'success',
      messagge: 'The repairs were found successfully',
      repairs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.findRepairById = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({
      where: {
        id,
        status: 'pending',
      },
    });

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'The user was not found',
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'The repair was found successfully',
      repair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.createRepair = async (req, res) => {
  try {
    const { date, userId } = req.body;

    const newRepair = await Repair.create({
      date,
      userId,
    });

    res.status(201).json({
      status: 'success',
      messagge: 'The repair was created successfully',
      newRepair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.updateRepairById = async (req, res) => {
  try {
    const { id } = req.params;

    const { date, userId } = req.body;

    const repair = await Repair.findOne({
      where: {
        id,
        status: 'pending',
      },
    });

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'The repair was not found',
      });
    }

    const updatedRepair = await repair.update({
      date,
      userId,
    });

    res.status(200).json({
      status: 'success',
      messagge: 'The repair has been updated successfully',
      updatedRepair,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};

exports.desableRepairById = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await Repair.findOne({
      where: {
        id,
        status: 'pending',
      },
    });

    if (!repair) {
      return res.status(404).json({
        status: 'error',
        message: 'The repair was not fount',
      });
    }

    await repair.update({ status: 'cancelled' });

    res.status(200).json({
      status: 'success',
      messagge: 'The repair has been cancelled',
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 'fail',
      message: 'Internal server error',
    });
  }
};
