const Lead = require("../models/Lead");

exports.createLead = async (req, res) => {
  const { nome, email } = req.body;
  const lead = await Lead.create({ nome, email });
  res.status(201).json(lead);
};
