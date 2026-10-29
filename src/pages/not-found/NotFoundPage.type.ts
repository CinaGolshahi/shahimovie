interface INotFoundPageProps {
  title?:
    | "Page not found!"
    | "Movie not found!"
    | "Show not found!"
    | "Artist not found!";
  description?: string;
  linkTo?: "/" | "/movies" | "/shows" | "/artists";
  linkLabel?:
    "Back to Home" | "Back to Movies" | "Back to Shows" | "Back to Artists";
}

export type { INotFoundPageProps };
