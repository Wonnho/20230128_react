import axios from "axios";
export const tmdbAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "3aad8aaf513a9fc4cde034d9a4944177",
  },
});

//tmdbAxios.get("trending/tv/week")=>"https://api.themoviedb.org/3/treding/tv/week?api_key?"
