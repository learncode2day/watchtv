import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import MediaList from "@/components/MediaList";
import { TrendingMovie } from "@/utils/Fetcher";

export default async function Home() {
  const trendingPlaying = await TrendingMovie();
  return (
    <main className="p-5 md:ml-20">
      <SideBar />
      <Nav />
      <MediaList header="Trending Movies" results={trendingPlaying} />
    </main>
  );
}