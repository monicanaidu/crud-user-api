const { StatusCodes } = require("http-status-codes");

let userController = {
  readAll: async (req, res) => {
    try {
      res.json({ res: "read all" });
    } catch {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: false, msg: err });
    }
  },
  readSingle: async (req, res) => {
    try {
      res.json({ res: "read single" });
    } catch {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: false, msg: err });
    }
  },
  createUser: async (req, res) => {
    try {
      res.json({ res: "create user" });
    } catch {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: false, msg: err });
    }
  },
  updateUser: async (req, res) => {
    try {
      res.json({ res: "update user" });
    } catch {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: false, msg: err });
    }
  },
  deleteUser: async (req, res) => {
    try {
      res.json({ res: "delete user" });
    } catch {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: false, msg: err });
    }
  },
};

module.exports = userController;
