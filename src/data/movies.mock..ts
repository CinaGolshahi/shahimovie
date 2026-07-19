interface Movie {
  id: number;
  title: string;
  releaseYear: number;
  backdropSrc: string;
  posterSrc: string;
}

const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Obsession",
    releaseYear: 2026,
    backdropSrc:
      "https://image.tmdb.org/t/p/original/e1qJyp8AE5ejXAaQjxWPTsWeTb.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/bRwnj8WEKBCvmfeUNOukJPwB43K.jpg",
  },
  {
    id: 2,
    title: "Apex",
    releaseYear: 2026,
    backdropSrc:
      "https://image.tmdb.org/t/p/original/91er8S2vFCZZz3Wp1YorZH9e256.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/eTp7gSPkSF3Aw79mNx1NkBP1PZT.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    releaseYear: 2014,
    backdropSrc:
      "https://image.tmdb.org/t/p/original/Ys8UIGWJpd2TMuQk8fU77W3mBz.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/nrSaXF39nDfAAeLKksRCyvSzI2a.jpg",
  },
  {
    id: 4,
    title: "The Housemaid",
    releaseYear: 2025,
    backdropSrc:
      "https://image.tmdb.org/t/p/original/xP6AGo53wymWp1shXu0X7zDZBqZ.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/cWsBscZzwu5brg9YjNkGewRUvJX.jpg",
  },
  {
    id: 5,
    title: "War Machine",
    releaseYear: 2026,
    backdropSrc:
      "https://image.tmdb.org/t/p/original/nSK1cQXskN6UPNXZfGFhlnbaadt.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/rFhKkXhk7ClU03jQ5rHIApJDwev.jpg",
  },
  {
    id: 6,
    title: "Oppenheimer",
    releaseYear: 2023,
    backdropSrc:
      "https://image.tmdb.org/t/p/original/cUIqZd6jJCbO94Txt1CkTs7MSeP.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    id: 7,
    title: "F1",
    releaseYear: 2025,
    backdropSrc:
      "https://image.tmdb.org/t/p/original/9m1ua4lJrS27WCEdMeJLAkkLitl.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/nR6KKQPc5iu0D0bRV1c1b4CKAiO.jpg",
  },
  {
    id: 8,
    title: "Blade Runner 2049",
    releaseYear: 2017,
    backdropSrc:
      "https://image.tmdb.org/t/p/original/dZuTTYM86A4ggtrbdvfKOzxigp7.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
  },
];
export default mockMovies;
