import { useParams } from "react-router-dom";
import MovieCard from "../../components/shared/movie-card";
import useSearch from "../../hooks/useSearch";

const SearchResultsPage = () => {
  const { search } = useParams<{ search: string }>();
  const { searchResults } = useSearch(search);

  return (
    <div className="container mx-auto grid grid-cols-5 gap-4 px-4">
      {searchResults.map((item, index) => (
        <MovieCard key={index} movie={item} />
      ))}
    </div>
  );
};

export default SearchResultsPage;
