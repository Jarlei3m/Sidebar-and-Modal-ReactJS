import React, { useState, useContext } from 'react'
import { FaSdCard } from 'react-icons/fa';

const AppContext = React.createContext();

// This is the Main components, we gonna wrap the whole app inside this component
const AppProvider = ({children}) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <AppContext.Provider value={{ 
            isModalOpen, 
            isSidebarOpen, 
            openModal, 
            openSidebar, 
            closeModal, 
            closeSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
};

// custom hook - must start with 'use' on the name e.g 'useSomething' 
export const useGlobalContext = () => {
    return useContext(AppContext);
} 

export { AppContext, AppProvider };