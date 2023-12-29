import EpisodeCard from "@/components/EpisodeCard";
import { SeasonDetails, findTV } from "@/utils/Fetcher";
import {Pagination} from "@nextui-org/react";
async function Season({ params }: { params: { slug: string } }) {
  const tv = await findTV(params.slug);
  const seasons = tv.number_of_seasons
  let episodes = await SeasonDetails(params.slug, 1);



  return (
    <div className="w-full">
         <Pagination total={seasons} initialPage={1} className="p-5"  />
      <div className="grid grid-cols-2">
        {episodes.map((e: any) => (
          <EpisodeCard result={e} />
        ))}
      </div>
    </div>
  );
}

export default Season;
