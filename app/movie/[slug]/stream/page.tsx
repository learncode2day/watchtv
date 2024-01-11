import { Button } from "@nextui-org/react";
import Tips from "@/components/Tips";
import { FaAngleLeft } from "react-icons/fa6";
import Link from "next/link";
import Nav from "@/components/Nav";
import MoviePlayer from "@/components/MoviePlayer";
import { findMovie } from "@/utils/Fetcher";
export default async function StreamMovies({ params }: { params: { slug: string } }) {
  const result = await findMovie(params.slug);
  let title = result.title
  title = title.toLowerCase().replaceAll(" ","-")
  return (
    <div>
      <Nav />
      <div className="ml-6">
        <Link href={`/movie/${params.slug}`}>
          <Button size="sm" variant="flat">
            <FaAngleLeft size={16} /> Back
          </Button>
        </Link>
      </div>
     <MoviePlayer movieId={params.slug} movieName={title}/>
      <div className="flex justify-center m-2">
        <Tips />
      </div>
    </div>
  );
}
