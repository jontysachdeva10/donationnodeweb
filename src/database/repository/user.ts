import { ApiError, STATUS_CODES } from "../../utils/common";
import { User } from "../models/User";

const UserRepository = {
  findUser: async function ({ phone }) {
    try {
      let user = await User.findOne({ phone });
      return user;
    } catch (error) {
      console.error(error);
      throw ApiError("Internal Error", "User could not be found.", error);
    }
  },

  findAllUsers: async function () {
    try {
      let users = await User.find({});
      return users;
    } catch (error) {
      console.error(error);
      throw ApiError("Internal Error", "User could not be found.", error);
    }
  },

  addUser: async function ({ name, address, city, state, email, phone }) {
    try {
      let user = new User({
        name,
        address,
        city,
        state,
        email,
        phone,
      });
      return await user.save();
    } catch (error) {
      console.error(error);
      throw ApiError("Internal Error", "User could not be saved.", error);
    }
  },
};

export default UserRepository;
