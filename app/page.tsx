import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import MediaList from "@/components/MediaList";

import {
  TrendingTvSeries,
  NowPlayingMovie,
  TrendingMovie,
  AiringTvSeries,
} from "@/utils/Fetcher";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import HomeNav from "@/components/HomeNav";

export default async function Home() {
  const nowPlaying = await NowPlayingMovie(1);
  const trendingMovie = await TrendingMovie();
  const airingTv = await AiringTvSeries();
  const trendingTv = await TrendingTvSeries();


  return (
    <main>
      <SideBar />
      <HomeNav />
      <div className="flex justify-center mt-2">
        <SearchBar />
      </div>
      <div className="p-5 md:ml-20">
        <MediaList
          header="Now Playing Movies"
          expand={"movie/nowplaying"}
          results={nowPlaying}
          type={"movie"}
        />
        <MediaList
          header="Trending Movies"
          expand={"movie/trending"}
          results={trendingMovie}
          type="movie"
        />
        <MediaList
          header="Trending Tv Series"
          expand={"tv/trending"}
          results={trendingTv}
          type="tv"
        />
        <MediaList
          header="Airing Tv Series"
          expand={"tv/airing"}
          results={airingTv}
          type={"tv"}
        />

        <Footer />
      </div>
    </main>
  );
}
