"use client";

import { useState } from "react";
import { Box, Button, Typography, Paper, Alert } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

export default function DatasetList() {
  const [datasets, setDatasets] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const isCSV = file.name.toLowerCase().endsWith(".csv") && file.type === "text/csv";

    if (!isCSV) {
      setError("Please upload a valid CSV file.");
      event.target.value = ""; // Reset file input
      return;
    }

    setUploading(true);
    setError(null);

    try {
      // For now, just add the filename to the list
      setDatasets((prev) => [...prev, file.name]);
    } catch (error) {
      console.error("Upload failed", error);
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
      event.target.value = ""; // Reset file input
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Your Datasets
      </Typography>

      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUpload />}
        sx={{ backgroundColor: "#207B6E", mb: 2 }}
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Upload Dataset"}
        <input
          type="file"
          hidden
          accept=".csv,text/csv"
          onChange={handleFileUpload}
        />
      </Button>

      {error ? (
        <Alert severity="error">{error}</Alert>
      ) : datasets.length === 0 ? (
        <Typography color="textSecondary">No databases are available.</Typography>
      ) : (
        datasets.map((dataset, index) => (
          <Paper key={index} sx={{ p: 2, mb: 1, boxShadow: 3 }}>
            {dataset}
          </Paper>
        ))
      )}
    </Box>
  );
}
