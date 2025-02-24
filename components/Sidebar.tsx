'use client';

import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Search, BarChart, Timeline, Settings, Logout } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname(); // Highlight active page

  // Menu items including the Logout item
  const menuItems = [
    { name: 'Home', href: '/home', icon: <Home /> },
    { name: 'Data Exploration', href: '/data-exploration', icon: <Search /> },
    { name: 'Visualization', href: '/data-visualization', icon: <BarChart /> },
    { name: 'Statistical Analysis', href: '/statistical-analysis', icon: <Timeline /> },
    { name: 'Admin Panel', href: '/admin', icon: <Settings /> },
    { name: 'Logout', href: '/logout', icon: <Logout />, isLogout: true }, // Added Logout item here
  ];

  // Reusable SidebarItem Component
  const SidebarItem = ({ name, href, icon, isLogout }: { name: string; href: string; icon: React.ReactNode; isLogout?: boolean }) => {
    return (
      <Link key={name} href={href} passHref>
        <ListItemButton
          selected={pathname === href}
          sx={{
            '&.Mui-selected': { backgroundColor: '#E1F5E1' }, // Light green when selected
            '&:hover': { backgroundColor: '#f0f0f0' }, // Slightly gray on hover
            ...(isLogout && { 
              backgroundColor: 'white', 
              '&:hover': { 
                backgroundColor: '#ffcccc', // Lighter red shade on hover
                transition: 'background-color 0.3s ease', // Smooth transition for hover
              } 
            }), // Logout specific styles
          }}
        >
          <ListItemIcon sx={{ color: isLogout ? 'red' : '#207B6E', minWidth: '40px' }}>{icon}</ListItemIcon>
          <ListItemText
            primary={name}
            sx={{
              color: isLogout ? 'red' : '#207B6E', // Logout text color red
              '& .MuiTypography-root': { paddingLeft: '10px' }, // Spacing between icon and text
            }}
          />
        </ListItemButton>
      </Link>
    );
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          backgroundColor: 'white',
          color: '#207B6E', // Green text color
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <SidebarItem
            key={item.name}
            name={item.name}
            href={item.href}
            icon={item.icon}
            isLogout={item.isLogout} // Pass isLogout flag to customize styling
          />
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
