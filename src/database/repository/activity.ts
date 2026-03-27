import { ApiError } from "../../utils/common";
import { Donate } from "../models/Donate";
import { Pickup } from "../models/Pickup";

const ActivityRepository = {
  pickup: async function ({
    name,
    address,
    city,
    state,
    item,
    quantity,
    phone,
    email,
  }) {
    try {
      let pickup = new Pickup({
        name,
        address,
        city,
        state,
        item,
        quantity,
        phone,
        email,
      });
      return await pickup.save();
    } catch (error) {
      console.error(error);
      throw ApiError("Internal Error", "Pickup could not be registered.", error);
    }
  },

  donate: async function ({
    name,
    address,
    city,
    state,
    amount,
    phone,
    email,
  }) {
    try {
      let donation = new Donate({
        name,
        address,
        city,
        state,
        amount,
        phone,
        email,
      });

      return await donation.save();
    } catch (error) {
      console.error(error);
      throw ApiError("Internal Error", "Donation could not be made.", error);
    }
  },
};

export default ActivityRepository;
