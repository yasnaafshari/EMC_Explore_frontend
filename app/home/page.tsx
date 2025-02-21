"use client";

import { useState } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import SidebarItems from "@/components/Sidebar";

const drawerWidth = 240;

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleDrawerToggle = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top Bar (AppBar) */}
      <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: "#207B6E" }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Home
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar (Either open or closed) */}
      <Drawer
        variant="temporary"
        open={sidebarOpen}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          position: "relative", // Make drawer relative to the AppBar
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: "64px", // Aligns the drawer just below the app bar
          },
        }}
      >
        <SidebarItems />
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          transition: "margin-left 0.3s ease", // Smooth transition when the sidebar toggles
          marginLeft: sidebarOpen ? `${drawerWidth}px` : 0, // Adjust content based on sidebar state
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography variant="h4" gutterBottom>
          Welcome to the Home
        </Typography>
        <Typography variant="body1">
          This is where you&apos;ll see quick stats, datasets, and shortcuts.
        </Typography>
      </Box>
    </Box>
  );
}
