const { validationResult } = require("express-validator");
import NgoRepository from "../database/repository/ngo";
import { ApiError, formatData } from "../utils/common";

const NgoService = {
  addNgo: async function (props) {
    const { name, address, city, type, email, phone } = props;
    try {
      let existingNgo = await NgoRepository.findNgo({ email });
      if (existingNgo) {
        return formatData({ message: "NGO already exists." });
      }

      let newNgo = NgoRepository.addNgo({
        name,
        address,
        city,
        type,
        email,
        phone,
      });
      return formatData({ newNgo, message: "NGO added to DB." });
    } catch (error) {
      console.error(error);
      throw ApiError("Not Found", "Error in submitting data.", error);
    }
  },

  getNgo: async (props) => {
    const { type } = props.params;
    const { city } = props.query;
    try {
      let ngo;
      if (city) {
        ngo = await NgoRepository.getNgoByCity({ type, city });
      } else {
        ngo = await NgoRepository.getNgoByType({ type });
      }

      if (!ngo) {
        return formatData({ message: "NGO not found" });
      }

      return formatData(ngo);
    } catch (error) {
      console.error(error);
      throw ApiError("Not Found", "Error in fetching data.", error);
    }
  },
};

export default NgoService;
