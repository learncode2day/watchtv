import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import MediaList from "@/components/MediaList";

import {
  TrendingTvSeries,
  NowPlayingMovie,
  TrendingMovie,
  AiringTvSeries,
} from "@/utils/Fetcher";

export default async function Home() {
  const nowPlaying = await NowPlayingMovie(1);
  const trendingMovie = await TrendingMovie();
  const airingTv = await AiringTvSeries();
  const trendingTv = await TrendingTvSeries();

  return (
    <main className="p-5 md:ml-20">
      <SideBar />
      <Nav />
      <MediaList header="Now Playing Movies" expand={"movie/nowplaying"} results={nowPlaying} type={"movie"} />
      <MediaList header="Trending Movies" expand={"movie/trending"} results={trendingMovie} />
      <MediaList header="Airing Tv Series" expand={"tv/airing"} results={airingTv} type={"tv"} />
      <MediaList header="Trending Tv Series" expand={"tv/trending"} results={trendingTv} />
    </main>
  );
}
