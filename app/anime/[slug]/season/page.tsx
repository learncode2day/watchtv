import EpisodeCard from "@/components/EpisodeCard";
import Pagination from "@/components/Pagination";
import Nav from "@/components/Nav";
import { SeasonDetails, findTV, getAnimeInfo } from "@/utils/Fetcher";
import AnimeEpisodeCard from "@/components/AnimeEpCard";

export default async function Season({
  params,
}: {
  params: { slug: string};
}) {
  const result = await getAnimeInfo(params.slug);
  let episodes = result.episodes;


  return (
    <div className="w-full overflow-hidden">
      <Nav />
      <div className="grid grid-cols-2">
        {episodes.map((e: any,index:number) => (
          <AnimeEpisodeCard
            key={e.id}
            result={e}
            idx={params.slug}
            
          />
        ))}
      </div>
    </div>
  );
}
