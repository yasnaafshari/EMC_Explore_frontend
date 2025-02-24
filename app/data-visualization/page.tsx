'use client';

import Layout from "@/components/Layout";
import DataList from "@/components/DatasetList";
import { useRouter } from "next/navigation";

export default function Visualization() {
  const router = useRouter();

  return (
    <Layout title="Data Visualization">
    <DataList
      title="Data Visualization"
      items={["Graph 1", "Graph 2"]}
      onItemClick={(item) => router.push(`/visualization/${item.toLowerCase().replace(" ", "-")}`)}
    />
    </Layout>
  );
}
