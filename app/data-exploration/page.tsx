"use client";

import { useRouter } from "next/navigation";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";

const datasets = [
  { id: "cohort-1", name: "UK Biobank - Sample Dataset" }, // Example dataset
];

export default function DataExplorationPage() {
  const router = useRouter();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Data Exploration
      </Typography>

      {datasets.map((dataset) => (
        <Card key={dataset.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="h6">{dataset.name}</Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 1 }}
              onClick={() => router.push(`/data-exploration/${dataset.id}`)}
            >
              View Dataset
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
