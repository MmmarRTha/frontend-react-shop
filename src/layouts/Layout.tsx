import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Summary  from "../components/Summary";

export default function Layout() {
  return (
    <div className="md:flex bg-gradient-to-r from-indigo-200 via-red-200 to-pink-100">
        <Sidebar />
        
        <main className="flex-1 h-screen p-3 overflow-y-scroll">
            <Outlet />
        </main>

        <Summary />
    </div>
  )
}
