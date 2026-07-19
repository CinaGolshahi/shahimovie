interface ISeasons {
  id: number;
  seasonNumber: number;
  episodeCount: number;
  firstEpisodeDate: number;
}

interface ITVShows {
  id: number;
  title: string;
  overview: string;
  status: "Returning Series" | "Ended" | "Canceled";
  seasons: ISeasons[];
  backdropSrc: string;
  posterSrc: string;
}

const mockTVShows: ITVShows[] = [
  {
    id: 1,
    title: "Silo",
    overview:
      "In a ruined and toxic future, thousands live in a giant silo deep underground. After its sheriff breaks a cardinal rule and residents die mysteriously, engineer Juliette starts to uncover shocking secrets and the truth about the silo.",
    status: "Returning Series",
    backdropSrc:
      "https://image.tmdb.org/t/p/original/wgkzj7qsPr3s5zYj31tTn45BTPq.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/gMYZZvnkVNTqSVnVCphWbPXwWwb.jpg",
    seasons: [
      { id: 1, seasonNumber: 1, episodeCount: 10, firstEpisodeDate: 2023 },
      { id: 2, seasonNumber: 2, episodeCount: 10, firstEpisodeDate: 2024 },
      { id: 3, seasonNumber: 3, episodeCount: 3, firstEpisodeDate: 2026 },
    ],
  },
  {
    id: 2,
    title: "From",
    overview:
      "Unravel the mystery of a nightmarish town in middle America that traps all those who enter. As the unwilling residents fight to keep a sense of normalcy and search for a way out, they must also survive the threats of the surrounding forest – including the terrifying creatures that come out when the sun goes down.",
    status: "Returning Series",
    backdropSrc:
      "https://image.tmdb.org/t/p/original/2d2tGCCAA1rjviw3HcvDKXserLD.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/pRtJagIxpfODzzb0T0NAvZSzErC.jpg",
    seasons: [
      { id: 1, seasonNumber: 1, episodeCount: 10, firstEpisodeDate: 2022 },
      { id: 2, seasonNumber: 2, episodeCount: 10, firstEpisodeDate: 2023 },
      { id: 3, seasonNumber: 3, episodeCount: 10, firstEpisodeDate: 2024 },
      { id: 4, seasonNumber: 4, episodeCount: 10, firstEpisodeDate: 2026 },
    ],
  },
  {
    id: 3,
    title: "Stranger things",
    overview:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
    status: "Ended",
    backdropSrc:
      "https://image.tmdb.org/t/p/original/mXvYhkv7kS8v14m7sEmWJwhzhED.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/cVxVGwHce6xnW8UaVUggaPXbmoE.jpg",
    seasons: [
      { id: 1, seasonNumber: 1, episodeCount: 8, firstEpisodeDate: 2016 },
      { id: 2, seasonNumber: 2, episodeCount: 9, firstEpisodeDate: 2017 },
      { id: 3, seasonNumber: 3, episodeCount: 8, firstEpisodeDate: 2019 },
      { id: 4, seasonNumber: 4, episodeCount: 9, firstEpisodeDate: 2022 },
      { id: 5, seasonNumber: 5, episodeCount: 8, firstEpisodeDate: 2025 },
    ],
  },
  {
    id: 4,
    title: "Lucky",
    overview:
      "When a multi-million-dollar heist goes sideways, con artist Lucky is forced to go on the run. Pursued by both the FBI and a ruthless crime boss, Lucky must fight for her life—and a way out.",
    status: "Returning Series",
    backdropSrc:
      "https://image.tmdb.org/t/p/original/uIvQj9839xErnqUHmSMmOEuo6AZ.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/hYVwPrrYytmWGFXlqw5VLpFPhGA.jpg",
    seasons: [
      { id: 1, seasonNumber: 1, episodeCount: 2, firstEpisodeDate: 2026 },
    ],
  },
  {
    id: 5,
    title: "Vikings",
    overview:
      "The adventures of Ragnar Lothbrok, the greatest hero of his age. The series tells the sagas of Ragnar's band of Viking brothers and his family, as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods. Legend has it that he was a direct descendant of Odin, the god of war and warriors.",
    status: "Ended",
    backdropSrc:
      "https://image.tmdb.org/t/p/original/gNIwh41v7Pe8hwF8XEu5JdH4s6B.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/ff1zhqvwfS5HvRNcA5UFrH0PA2q.jpg",
    seasons: [
      { id: 1, seasonNumber: 1, episodeCount: 9, firstEpisodeDate: 2013 },
      { id: 2, seasonNumber: 2, episodeCount: 10, firstEpisodeDate: 2014 },
      { id: 3, seasonNumber: 3, episodeCount: 10, firstEpisodeDate: 2015 },
      { id: 4, seasonNumber: 4, episodeCount: 20, firstEpisodeDate: 2016 },
      { id: 5, seasonNumber: 5, episodeCount: 20, firstEpisodeDate: 2017 },
      { id: 6, seasonNumber: 6, episodeCount: 20, firstEpisodeDate: 2019 },
    ],
  },
  {
    id: 6,
    title: "Chernobyl",
    overview:
      "The true story of one of the worst man-made catastrophes in history: the catastrophic nuclear accident at Chernobyl. A tale of the brave men and women who sacrificed to save Europe from unimaginable disaster.",
    status: "Ended",
    backdropSrc:
      "https://image.tmdb.org/t/p/original/xlGuefRzxzc9LyTBAljEcKY6MM9.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
    seasons: [
      { id: 1, seasonNumber: 1, episodeCount: 5, firstEpisodeDate: 2019 },
    ],
  },
  {
    id: 7,
    title: "Clarkson's Farm",
    overview:
      "Follow Jeremy Clarkson as he embarks on his latest adventure, farming. The man who on several occasions claims to be allergic to manual labour takes on the most manually labour intensive job there is. What could possibly go wrong?",
    status: "Returning Series",
    backdropSrc:
      "https://image.tmdb.org/t/p/original/w7rFOKuncDizmjb37hZcj2dyyrc.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/toVhyqMT3ICfahE7Ad8obJvZHpX.jpg",
    seasons: [
      { id: 1, seasonNumber: 1, episodeCount: 8, firstEpisodeDate: 2021 },
      { id: 2, seasonNumber: 2, episodeCount: 8, firstEpisodeDate: 2023 },
      { id: 3, seasonNumber: 3, episodeCount: 8, firstEpisodeDate: 2024 },
      { id: 4, seasonNumber: 4, episodeCount: 8, firstEpisodeDate: 2025 },
      { id: 5, seasonNumber: 5, episodeCount: 8, firstEpisodeDate: 2026 },
    ],
  },
  {
    id: 8,
    title: "Dark",
    overview:
      "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations.",
    status: "Ended",
    backdropSrc:
      "https://image.tmdb.org/t/p/original/msemb4PwnA8euYBwYyUynDFd1Mk.jpg",
    posterSrc:
      "https://image.tmdb.org/t/p/original/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg",
    seasons: [
      { id: 1, seasonNumber: 1, episodeCount: 10, firstEpisodeDate: 2017 },
      { id: 2, seasonNumber: 2, episodeCount: 8, firstEpisodeDate: 2019 },
      { id: 3, seasonNumber: 3, episodeCount: 8, firstEpisodeDate: 2020 },
    ],
  },
];
export { mockTVShows, type ITVShows, type ISeasons };
