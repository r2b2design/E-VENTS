import { LOGIN_ROCKS } from "./rocksConstants";
import { rocksConfig } from "../../../app/config/rocks";
import Axios from "axios";

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
}

export const loginRocks = rocksConfig => {
  const access_token = window.open(
      "https://enlightened.rocks/oauth/authorize?response_type=token&client_id=J14MYaKpCENYjo9kGD11UjieesNEltIH.rocks&scope=profile&return_uri=http://localhost:3000/events&state=state1234"
    .then(getQueryVariable(access_token)))
    const res = function() {
      Axios.get({
        url: "https://enlightened.rocks/api/1.0/profile",
        headers: { Authorization: "bearer " + access_token }
      })
        .then(res => res.json().then(console.log(res)))
            
    return res
}

  return {
    type: LOGIN_ROCKS,
    payload: {
      res
    }
  };
};
