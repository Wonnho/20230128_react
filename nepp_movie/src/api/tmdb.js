import axios from "axios";
export const tmdbAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
   // api_key: "3aad8aaf513a9fc4cde034d9a4944177",
   api_key:process.env.REACT_APP_TMDB_API_KEY,
  },
});

//tmdbAxios.get("trending/tv/week")=>"https://api.themoviedb.org/3/treding/tv/week?api_key?"
