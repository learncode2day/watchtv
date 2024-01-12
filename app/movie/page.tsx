import Footer from "@/components/Footer";
import MediaList from "@/components/MediaList";
import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import { NowPlayingMovie, TopRatedMovie, TrendingMovie, UpcomingMovie } from "@/utils/Fetcher";

export default async function MoviePage(){
    const nowPlaying = await NowPlayingMovie(1);
    const trendingMovie = await TrendingMovie();
    const popularMovie = await TopRatedMovie();
    const upcomingMovie = await UpcomingMovie();
    return(
        <main className="p-5 md:ml-20">
      <SideBar />
      <Nav />
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
      />
      <MediaList
        header="Top-Rated Movies"
        expand={"movie/toprated"}
        results={popularMovie}
      />
      <MediaList
        header="UpComing Movies"
        expand={"movie/upcoming"}
        results={upcomingMovie}
      />
     
      <Footer/>
    </main>
    )
}