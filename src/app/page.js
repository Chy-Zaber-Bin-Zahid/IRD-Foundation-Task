import Navbar from "@/components/Navbar";
import SubNavbar from "@/components/SubNavbar";

export default function Home() {
  return (
    <main className="m-0 p-0 box-border grid grid-cols-[100px_429px_auto_330px] p-6 pb-0 h-screen bg-gray-100 gap-8">
      <Navbar />
      <SubNavbar/>
    </main>
  );
}
