import { axiosWithAuth } from "./axiosWithAuth";

export default function getStrains() {
  axiosWithAuth()
    .post("https://bestbudapp.herokuapp.com/api/strains", {
      limit: 100,
      offset: 1
    })
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(err => console.log(err));
}
