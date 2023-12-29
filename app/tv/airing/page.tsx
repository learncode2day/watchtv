import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import MediaList from "@/components/MediaList";
import { AiringTvSeries } from "@/utils/Fetcher";

export default async function Home() {
  const airingTv = await AiringTvSeries();
  return (
    <main className="p-5 md:ml-20">
      <SideBar />
      <Nav />
      <MediaList header="Airing Tv Shows" results={airingTv} />
    </main>
  );
}
