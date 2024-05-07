import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="flex flex-col items-center max-w-4xl m-auto mt-10 md:mt-28 md:flex-row">
        <img src="../img/cats&coffeeLogo.svg" alt="coffee-logo" className="max-w-xs" />

        <div className="w-full p-10">
            <Outlet />
        </div>
    </main>
  )
}