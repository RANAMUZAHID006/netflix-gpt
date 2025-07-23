import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 pr-4">
      <img src={IMG_CDN_URL + posterPath} alt="movie card" />
    </div>
  );
};

export default MovieCard;
