import { Outlet } from "react-router-dom";
import Modal from 'react-modal';
import Sidebar from "../components/Sidebar";
import Summary  from "../components/Summary";
import useShop from "../hooks/useShop";
import ModalProduct from "../components/ModalProduct";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
    },
};

Modal.setAppElement("#root");

export default function Layout() {
    const { modal } = useShop();

    return (
        <>
            <div className="md:flex bg-gradient-to-r from-indigo-200 via-red-200 to-pink-100">
                <Sidebar />
                
                <main className="flex-1 h-screen p-3 overflow-y-scroll">
                    <Outlet />
                </main>

                <Summary />
            </div>
            <Modal isOpen={modal} style={customStyles}>
                <ModalProduct />
            </Modal>

            <ToastContainer />
        </>
    )
}
