interface IMovie {
  id: number;
  title: string;
  releaseYear: number;
  overview: string;
  genre: string[];
  runtime: number;
  country: string[];
  backdropSrc: string;
  posterSrc: string;
}

const mockMovies: IMovie[] = [
  {
    id: 1,
    title: "Obsession",
    releaseYear: 2026,
    overview:
      "After breaking the mysterious 'One Wish Willow' to win his crush's heart, a hopeless romantic finds himself getting exactly what he asked for but soon discovers that some desires come at a dark, sinister price.",
    genre: ["Horror", "Mystery", "Thriller"],
    runtime: 108,
    country: ["United States"],
    backdropSrc:
      "https://image.tmdb.org/t/p/original/e1qJyp8AE5ejXAaQjxWPTsWeTb.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/bRwnj8WEKBCvmfeUNOukJPwB43K.jpg",
  },
  {
    id: 2,
    title: "Apex",
    releaseYear: 2026,
    overview:
      "A grieving woman pushing her limits on a solo adventure in the Australian wild is ensnared in a twisted game with a cunning killer who thinks she's prey.",
    genre: ["Action", "Thriller", "Mystery"],
    runtime: 95,
    country: ["United States", "United Kingdom", "Iceland"],
    backdropSrc:
      "https://image.tmdb.org/t/p/original/91er8S2vFCZZz3Wp1YorZH9e256.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/eTp7gSPkSF3Aw79mNx1NkBP1PZT.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    releaseYear: 2014,
    overview:
      "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    genre: ["Science Fiction", "Adventure", "Drama"],
    runtime: 169,
    country: ["United States", "United Kingdom"],
    backdropSrc:
      "https://image.tmdb.org/t/p/original/Ys8UIGWJpd2TMuQk8fU77W3mBz.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/nrSaXF39nDfAAeLKksRCyvSzI2a.jpg",
  },
  {
    id: 4,
    title: "The Housemaid",
    releaseYear: 2025,
    overview:
      "Trying to escape her past, Millie Calloway accepts a job as a live-in housemaid for the wealthy Nina and Andrew Winchester. But what begins as a dream job quickly unravels into something far more dangerous—a sexy, seductive game of secrets, scandal, and power.",
    genre: ["Thriller", "Mystery", "Drama"],
    runtime: 131,
    country: ["United States"],
    backdropSrc:
      "https://image.tmdb.org/t/p/original/xP6AGo53wymWp1shXu0X7zDZBqZ.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/cWsBscZzwu5brg9YjNkGewRUvJX.jpg",
  },
  {
    id: 5,
    title: "War Machine",
    releaseYear: 2026,
    overview:
      "On one last grueling mission during Army Ranger training, a combat engineer must lead his unit in a fight against a giant otherworldly killing machine.",
    genre: ["Action", "Science Fiction", "Thriller"],
    runtime: 107,
    country: ["United States", "Australia"],
    backdropSrc:
      "https://image.tmdb.org/t/p/original/nSK1cQXskN6UPNXZfGFhlnbaadt.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/rFhKkXhk7ClU03jQ5rHIApJDwev.jpg",
  },
  {
    id: 6,
    title: "Oppenheimer",
    releaseYear: 2023,
    overview:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    genre: ["Biography", "Drama", "History"],
    runtime: 180,
    country: ["United States", "United Kingdom"],
    backdropSrc:
      "https://image.tmdb.org/t/p/original/cUIqZd6jJCbO94Txt1CkTs7MSeP.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    id: 7,
    title: "F1",
    releaseYear: 2025,
    overview:
      "Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team—and mentor a young hotshot driver—while chasing one more chance at glory.",
    genre: ["Action", "Drama", "Sport"],
    runtime: 155,
    country: ["United States"],
    backdropSrc:
      "https://image.tmdb.org/t/p/original/9m1ua4lJrS27WCEdMeJLAkkLitl.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/nR6KKQPc5iu0D0bRV1c1b4CKAiO.jpg",
  },
  {
    id: 8,
    title: "Blade Runner 2049",
    releaseYear: 2017,
    overview:
      "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
    genre: ["Science Fiction", "Drama", "Thriller"],
    runtime: 164,
    country: ["United States"],
    backdropSrc:
      "https://image.tmdb.org/t/p/original/dZuTTYM86A4ggtrbdvfKOzxigp7.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
  },
];

export { mockMovies, type IMovie };
