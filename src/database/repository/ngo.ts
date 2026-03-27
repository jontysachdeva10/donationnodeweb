import { ApiError } from "../../utils/common";
import { NGO } from "../models/NGO";

const NgoRepository = {
  findNgo: async ({ email }) => {
    try {
      let ngo = await NGO.findOne({ email });
      return ngo;
    } catch (error) {
      console.error(error);
      throw ApiError("Internal Error", "NGO could not found.", error);
    }
  },

  addNgo: async ({ name, address, city, type, email, phone }) => {
    try {
      let ngo = new NGO({
        name,
        address,
        city,
        type,
        email,
        phone,
      });
      return await ngo.save();
    } catch (error) {
      console.error(error);
      throw ApiError("Internal Error", "NGO could not be saved.", error);

    }
  },

  getNgoByCity: async ({ type, city }) => {
    try {
      let ngo = await NGO.find({ type, city });
      return ngo;
    } catch (error) {
      console.error(error);
      throw ApiError("Internal Error", "NGO could not be found.", error);
    }
  },

  getNgoByType: async ({ type }) => {
    try {
      let ngo = await NGO.find({ type });
      return ngo;
    } catch (error) {
      console.error(error);
      throw ApiError("Internal Error", "NGO could not be found.", error);
    }
  }
};

export default NgoRepository;