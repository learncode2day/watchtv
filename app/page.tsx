import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import MediaList from "@/components/MediaList";
import { FaDiscord, FaHouse } from "react-icons/fa6";

import {
  TrendingTvSeries,
  NowPlayingMovie,
  TrendingMovie,
  AiringTvSeries,
  TopRatedTvSeries,
} from "@/utils/Fetcher";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import HomeNav from "@/components/HomeNav";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

export default async function Home() {
  const nowPlaying = await NowPlayingMovie(1);
  const trendingMovie = await TrendingMovie();
  const airingTv = await AiringTvSeries();
  const trendingTv = await TrendingTvSeries();
  const topratedTv = await TopRatedTvSeries();
  return (
    <main>
      <SideBar />
      <HomeNav />
      <div className="flex justify-center mt-2">
        <SearchBar />

      </div>
      <div className="p-5 md:ml-20">
        <HeroSlider results={trendingMovie} type={"movie"}/>
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
          header="Top Rated Tv Series"
          expand={"tv/toprated"}
          results={topratedTv}
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
