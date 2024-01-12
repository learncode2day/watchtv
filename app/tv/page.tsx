import Footer from "@/components/Footer";
import MediaList from "@/components/MediaList";
import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import { AiringTvSeries, TopRatedTvSeries, TrendingTvSeries } from "@/utils/Fetcher";

export default async function TVPage(){
    const airingTv = await AiringTvSeries();
    const trendingTv = await TrendingTvSeries();
    const topratedTv = await TopRatedTvSeries()
    return(
        <main className="p-5 md:ml-20">
        <SideBar />
        <Nav />
       
        <MediaList
          header="Trending Tv Series"
          expand={"tv/trending"}
          results={trendingTv}
        />
        <MediaList
          header="Airing Tv Series"
          expand={"tv/airing"}
          results={airingTv}
          type={"tv"}
        />
        <MediaList
          header="Top-Rated Tv Series"
          expand={"tv/toprated"}
          results={topratedTv}
          type={"tv"}
        />
        <Footer/>
      </main>
    )
}