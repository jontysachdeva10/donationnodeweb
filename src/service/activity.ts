import ActivityRepository from "../database/repository/activity";
import { ApiError, formatData } from "../utils/common";

const ActivityService = {
  requestPickup: async (props) => {
    const { name, address, city, state, item, quantity, phone, email } = props;
    try {
      let pickup = ActivityRepository.pickup({
        name,
        address,
        city,
        state,
        item,
        quantity,
        phone,
        email,
      });

      return formatData({
        pickup,
        message: "Your pickup has been registered with us.",
      });
    } catch (error) {
      console.error(error);
      throw ApiError("Not Found", "Error in submitting request.", error);
    }
  },

  donateMoney: async (props) => {
    const { name, address, city, state, amount, phone, email } = props;
    try {
      let donation = ActivityRepository.donate({
        name,
        address,
        city,
        state,
        amount,
        phone,
        email,
      });

      return formatData({ donation, message: "Thank You! for your donation" });
    } catch (error) {
      console.error(error);
      throw ApiError("Not Found", "Error in submitting request.", error);
    }
  },
};

export default ActivityService;
