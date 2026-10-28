import axios from "axios";

const getErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError(error)) {
    if (!error.response) return "Network error. Please check your connection.";
    if (error.response.status === 404) return "Not found.";
    if (error.response.status === 429)
      return "Too many requests. Try again later.";
    if (error.response.status === 401) return "Invalid API token.";
  }
  return "Something went wrong.";
};

export default getErrorMessage;
