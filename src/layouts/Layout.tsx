import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Summary  from "../components/Summary";

export default function Layout() {
  return (
    <div className="md:flex bg-slate-100">
        <Sidebar />
        
        <main className="flex-1 h-screen p-3 overflow-y-scroll">
            <Outlet />
        </main>

        <Summary />
    </div>
  )
}
