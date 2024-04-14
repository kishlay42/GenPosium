import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DashSidebar from './DashSidebar';
import DashProfile from './DashProfile';
import DashPosts from '../DashPosts/DashPosts';
import DashUsers from './DashUsers';
import DashComments from './DashComments';
import DashboardComp from './DashboardComp';



export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState('');
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return ( <div className="min-h-screen flex flex-col md:flex-row">
  <div className='md:w-56 bg-slate-400 rounded-lg'>
    {/* Sidebar */}
    <DashSidebar />
  </div>
  {/* profile... */}
  {tab === 'profile' && <DashProfile />}
  {/* posts... */}
  {tab === 'posts' && <DashPosts />}
  {/* users */}
  {tab === 'users' && <DashUsers />}
   {/* comments  */}
   {tab === 'comments' && <DashComments />}
    {/* dashboard comp */}
    {tab === 'dash' && <DashboardComp />}
</div>
);
}