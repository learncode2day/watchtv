import MediaList from "@/components/MediaList";
import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
import { getSearchResults } from "@/utils/Fetcher";

export default async function SearchResult({ params }: { params: { slug: string } }) {
    const data = await getSearchResults(params.slug);
    
  return (
    <main className="p-5 md:ml-20">
      <SideBar />
      <Nav />
      <MediaList header={`Search Results For ${params.slug}`}  results={data} />
    </main>
  );
}
