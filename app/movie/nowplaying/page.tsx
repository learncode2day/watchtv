import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import MediaList from "@/components/MediaList";
import { NowPlayingMovie } from "@/utils/Fetcher";

export default async function Home() {
  const nowPlaying = await NowPlayingMovie();
  return (
    <main className="p-5 md:ml-20">
      <SideBar />
      <Nav />
      <MediaList header="Now Playing Movies" results={nowPlaying} />
    </main>
  );
}
