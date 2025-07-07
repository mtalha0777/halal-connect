import Sidebar from './SideBar';
import Topbar from './TopBar';
import { useSidebar } from '@/app/context/SidebarContext';
const AdminLayout = ({ children }) => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div className="flex min-h-screen font-sans bg-[#f8f8f8]">
      <Sidebar />
      
      <main className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'md:ml-[260px]' : ''}`}>
        <Topbar />
        
        <div className="p-6 mt-16">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;