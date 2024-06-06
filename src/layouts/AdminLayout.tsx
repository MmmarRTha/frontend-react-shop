import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function AdminLayout() {

    useAuth('admin', '/');
    
    return (
        <div className="md:flex bg-gradient-to-r from-indigo-200 via-red-200 to-pink-100">
            <AdminSidebar />
            
            <main className="flex-1 h-screen p-3 overflow-y-scroll">
                <Outlet />
            </main>
        </div>
    )
}
