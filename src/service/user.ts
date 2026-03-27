import { ApiError, formatData } from "../utils/common";
import UserRepository from "../database/repository/user";

const UserService = {
  registerUser: async function (props) {
    const { name, address, city, state, email, phone } = props;
    try {
      let existingVolunteer = await UserRepository.findUser({ phone });

      if (existingVolunteer) {
        return formatData({ message: "User already exists." });
      }

      let newVolunteer = UserRepository.addUser({
        name,
        address,
        city,
        state,
        email,
        phone,
      });

      return formatData({ newVolunteer, message: "User added to DB." });
    } catch (error) {
      console.error(error);
      throw ApiError("Not Found", "Error in submitting data.", error);
    }
  },

  getAllUsers: async () => {
    try {
      let allUsers = await UserRepository.findAllUsers();
      return formatData(allUsers);
    } catch (error) {
      console.error(error);
      throw ApiError("Not Found", "Error in fetching data.", error);
    }
  }
};

export default UserService;
