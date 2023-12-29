
import Nav from "@/components/Nav";
import SideBar from "@/components/Sidebar";
export default async function Home() {

  return (
    <main className="p-5 md:ml-20">
      <SideBar />
      <Nav />
    </main>
  );
}
