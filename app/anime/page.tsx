import AniSearchBar from "@/components/AniSearchBar";
import Footer from "@/components/Footer";
import HomeNav from "@/components/HomeNav";
import MediaList from "@/components/MediaList";
import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import { getAnimeTrending } from "@/utils/Fetcher";

export default async function MoviePage() {
  const trendingAnime = await getAnimeTrending();
  return (
    <main>
      <SideBar />
      <HomeNav />
      <div className="flex justify-center mt-2">
        <AniSearchBar />
      </div>
      <div className="p-5 md:ml-20">
        <MediaList
          header="Trending Anime"
          expand={"#"}
          results={trendingAnime}
          type={"anime"}
        />
        
        <Footer />
      </div>
    </main>
  );
}
