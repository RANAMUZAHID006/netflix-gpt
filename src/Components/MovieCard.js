import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:48 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="movie card" />
    </div>
  );
};

export default MovieCard;
