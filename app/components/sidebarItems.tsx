import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Divider,
    Box,
  } from "@mui/material";
  import { Home, Search, BarChart, Timeline, Settings, Logout } from "@mui/icons-material";
  import { useRouter } from "next/navigation";
  
  const SidebarItems = () => {
    const router = useRouter();
  
    const menuItems = [
      { text: "Home", icon: <Home />, path: "/home" },
      { text: "Data Exploration", icon: <Search />, path: "/data-exploration" },
      { text: "Visualization", icon: <BarChart />, path: "/visualization" },
      { text: "Statistical Analysis", icon: <Timeline />, path: "/analysis" },
    ];
  
    return (
      <Box sx={{ pt: 8 }}> {/* This adds padding-top to space the items from the top */}
        <List>
          {menuItems.map(({ text, icon, path }) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => router.push(path)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push("/admin")}>
              <ListItemIcon><Settings /></ListItemIcon>
              <ListItemText primary="Admin Panel" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => router.push("/logout")}>
              <ListItemIcon><Logout /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  };
  
  export default SidebarItems;
  