'use client';
import { usePathname, useRouter } from 'next/navigation';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Home,
  Search,
  BarChart,
  Timeline,
  Settings,
  Logout,
} from '@mui/icons-material';

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Home", href: "/home", icon: <Home /> },
    { name: "Data Exploration", href: "data-exploration", icon: <Search /> },
    { name: "Visualization", href: "/data-visualization", icon: <BarChart /> },
    { name: "Statistical Analysis", href: "/statistical-analysis", icon: <Timeline /> },
    { name: "Admin Panel", href: "/home/admin", icon: <Settings /> },
    { name: "Logout", href: "/logout", icon: <Logout />, isLogout: true },
  ];

  return (
    <List>
      {menuItems.map(({ name, href, icon, isLogout }) => (
        <ListItemButton
          key={name}
          selected={pathname === href}
          onClick={() => router.push(href)}
          sx={{
            "&.Mui-selected": { backgroundColor: "#E1F5E1" },
            "&:hover": { backgroundColor: "#f0f0f0" },
            ...(isLogout && {
              backgroundColor: "white",
              "&:hover": {
                backgroundColor: "#ffcccc",
                transition: "background-color 0.3s ease",
              },
            }),
          }}
        >
          <ListItemIcon sx={{ color: isLogout ? "red" : "#207B6E" }}>{icon}</ListItemIcon>
          <ListItemText primary={name} sx={{ color: isLogout ? "red" : "#207B6E" }} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default Sidebar;
