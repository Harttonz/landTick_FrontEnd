import axios from "axios";
import { BaseUrl} from "../config/headerToken";
export const typeTrain = () => {

  return {
    type: "GET_TYPE",
    payload: axios({
      method: "GET",
      url: `${BaseUrl}/gettypetrain`,
    })
  };
}
