const { getSearchBoxHandler } = require("../services");

const getSearchBoxController = (req, res) => getSearchBoxHandler(req, res);

module.exports = { getSearchBoxController };
