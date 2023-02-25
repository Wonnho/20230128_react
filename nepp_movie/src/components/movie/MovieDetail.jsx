import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tmdbAxios } from "../../api/tmdb";

function MovieDetail() {
  const { id } = useParams();
  // console.log(id);

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    tmdbAxios.get("/movie/" + id).then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return <div>loading....</div>;
  //return <div>영화상세보기</div>;
  return <div>{movie.title}</div>;
}

export default MovieDetail;
