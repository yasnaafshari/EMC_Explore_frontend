'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Drawer, AppBar, Toolbar, List, ListItemButton, ListItemText, IconButton, Grid, Typography, Box } from '@mui/material';
import { Home, Search, BarChart2, Activity, Settings, LogOut, List as ListIcon, Layout } from 'lucide-react';

const drawerWidth = 240;

export default function DashboardPage() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const toggleDrawer = () => setOpen(!open);

  const handleLogout = () => {
    // Handle logout logic here
    router.push('/login');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'white',
            color: '#207B6E',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List sx={{ '& .MuiListItemButton-root': { my: 1 } }}>
          <ListItemButton onClick={() => router.push('/dashboard')} sx={{ gap: 2 }}>
            <Home size={24} />
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton onClick={() => router.push('/data-exploration')} sx={{ gap: 2 }}>
            <Search size={24} />
            <ListItemText primary="Data Exploration" />
          </ListItemButton>
          <ListItemButton onClick={() => router.push('/data-visualization')} sx={{ gap: 2 }}>
            <BarChart2 size={24} />
            <ListItemText primary="Data Visualization" />
          </ListItemButton>
          <ListItemButton onClick={() => router.push('/statistical-analysis')} sx={{ gap: 2 }}>
            <Activity size={24} />
            <ListItemText primary="Statistical Analysis" />
          </ListItemButton>
          <ListItemButton onClick={() => router.push('/admin-panel')} sx={{ gap: 2 }}>
            <Settings size={24} />
            <ListItemText primary="Admin Panel" />
          </ListItemButton>
          <ListItemButton onClick={handleLogout} sx={{ gap: 2 }}>
            <LogOut size={24} style={{ color: 'red' }} />
            <ListItemText primary="Logout" sx={{ color: 'red' }} />
          </ListItemButton>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#f4f4f4',
          p: 0,
          ml: 0
        }}
      >
        <AppBar position="sticky" sx={{ backgroundColor: '#207B6E', width: '100%', m: 0, p: 0 }}>
          <Toolbar sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', p: 0 }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ ml: 3 }}
            >
              <Layout size={24} />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            
              <Typography variant="h6" noWrap>
                Dashboard
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>

        <Box sx={{ p: 3 }}>
          <Grid container spacing={3} sx={{ mt: 3, flexDirection: 'column' }}>
            {/* Quick Summary Section */}
            <Grid item xs={12}>
              <Box sx={{ 
                backgroundColor: 'white', 
                padding: 3, 
                borderRadius: 2, 
                boxShadow: 2,
                width: '100%'
              }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  <ListIcon size={20} /> Recent Datasets
                </Typography>
                {/* Content goes here */}
              </Box>
            </Grid>

            {/* Key Statistics Section */}
            <Grid item xs={12}>
              <Box sx={{ 
                backgroundColor: 'white', 
                padding: 3, 
                borderRadius: 2, 
                boxShadow: 2,
                width: '100%'
              }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  <BarChart2 size={20} /> Key Statistics
                </Typography>
                {/* Content goes here */}
              </Box>
            </Grid>

            {/* Available Datasets Section */}
            <Grid item xs={12}>
              <Box sx={{ 
                backgroundColor: 'white', 
                padding: 3, 
                borderRadius: 2, 
                boxShadow: 2,
                width: '100%'
              }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  <ListIcon size={20} /> Available Datasets
                </Typography>
                {/* Content goes here */}
              </Box>
            </Grid>

            {/* Common Tasks Section */}
            <Grid item xs={12}>
              <Box sx={{ 
                backgroundColor: 'white', 
                padding: 3, 
                borderRadius: 2, 
                boxShadow: 2,
                width: '100%'
              }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  <ListIcon size={20} /> Common Tasks
                </Typography>
                {/* Content goes here */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
