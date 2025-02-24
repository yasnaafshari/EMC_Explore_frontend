'use client';
import Layout from "@/components/Layout";
import DataList from "@/components/DataList";
import { useRouter } from "next/navigation";

export default function DataExploration() {
  const router = useRouter();

  return (
    <Layout title="Data Exploration">
      <DataList
        title="Available Datasets"
        items={["UK Biobank", "Dataset 2"]}
        onItemClick={(item) => router.push(`/dataExploration/${item.toLowerCase().replace(" ", "-")}`)}
      />
    </Layout>
  );
}
