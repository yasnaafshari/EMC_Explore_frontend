"use client";

import { Box, Card, CardActionArea, CardContent, Typography } from "@mui/material";

interface DataListProps {
  title: string;
  items: string[];
  onItemClick?: (item: string) => void;
}

export default function DataList({ title, items, onItemClick }: DataListProps) {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: "#207B6E", fontWeight: "bold" }}>
        {title}
      </Typography>

      {/* List of Items */}
      <Box sx={{ display: "grid", gap: 2 }}>
        {items.map((item, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
              transition: "transform 0.2s ease-in-out",
              "&:hover": { transform: "scale(1.03)", boxShadow: "0px 6px 14px rgba(0, 0, 0, 0.2)" },
            }}
          >
            <CardActionArea onClick={() => onItemClick && onItemClick(item)}>
              <CardContent>
                <Typography variant="h6" sx={{ color: "#207B6E", fontWeight: "500" }}>
                  {item}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
