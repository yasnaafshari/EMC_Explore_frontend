import Sidebar from "../components/Sidebar";
import { Box } from "@mui/material";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3, backgroundColor: "#f5f5f5" }}>{children}</Box>
    </Box>
  );
}
