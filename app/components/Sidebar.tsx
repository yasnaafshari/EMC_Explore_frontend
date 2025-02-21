'use client';

import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box } from '@mui/material';
import { Home, Search, BarChart, Timeline, Settings, Logout } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname(); // Highlight active page

  const menuItems = [
    { name: 'Home', href: '/dashboard', icon: <Home /> },
    { name: 'Data Exploration', href: '/dashboard/data-exploration', icon: <Search /> },
    { name: 'Visualization', href: '/dashboard/visualization', icon: <BarChart /> },
    { name: 'Statistical Analysis', href: '/dashboard/statistical-analysis', icon: <Timeline /> },
    { name: 'Admin Panel', href: '/dashboard/admin', icon: <Settings /> },
  ];

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
      <Box sx={{ p: 2, fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center', color: '#207B6E' }}>
        Dashboard
      </Box>
      <List>
        {menuItems.map((item) => (
          <Link key={item.name} href={item.href} passHref>
            <ListItemButton
              selected={pathname === item.href}
              sx={{
                '&.Mui-selected': { backgroundColor: '#E1F5E1' }, // Light green when selected
                '&:hover': { backgroundColor: '#f0f0f0' }, // Slightly gray on hover
              }}
            >
              <ListItemIcon sx={{ color: '#207B6E', minWidth: '40px' }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.name}
                sx={{
                  color: '#207B6E', // Green text
                  '& .MuiTypography-root': { paddingLeft: '10px' }, // Spacing between icon and text
                }}
              />
            </ListItemButton>
          </Link>
        ))}
      </List>
      <Box sx={{ mt: 'auto', p: 2 }}>
        <Link href="/logout" passHref>
          <ListItemButton
            sx={{
              backgroundColor: 'red',
              color: 'white',
              '&:hover': { backgroundColor: 'darkred' },
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ color: 'white' }} />
          </ListItemButton>
        </Link>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
