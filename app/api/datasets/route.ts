import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const uploadsDir = path.join(process.cwd(), "public/uploads");
  
  // Create uploads directory if it doesn't exist
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }

  // Read all files in the uploads directory
  const files = fs.readdirSync(uploadsDir);
  
  return NextResponse.json({ datasets: files });
} 