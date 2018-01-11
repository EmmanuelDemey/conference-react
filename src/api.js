import axios from "axios";

export default axios.create({
  baseURL: "https://api.spotify.com/v1/",
  headers: {
    Authorization:
      "Bearer BQCnSVIxcQL8ghJjP5cbzdmM4PSpxMdnk7ZkEdjjKsUmrM-s-aSyMRYANSwDjkDQW3fk4E54jDN67HhXT5Q"
  }
});
