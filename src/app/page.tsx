import DashBoard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row ">
      <Sidebar />
      <DashBoard />
    </main>
  );
}
