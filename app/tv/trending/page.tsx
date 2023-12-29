import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import MediaList from "@/components/MediaList";
import { TrendingTvSeries } from "@/utils/Fetcher";

export default async function Home() {
  const trendingTv = await TrendingTvSeries();
  return (
    <main className="p-5 md:ml-20">
      <SideBar />
      <Nav />
      <MediaList header="Trending Tv Shows" results={trendingTv} />
    </main>
  );
}
