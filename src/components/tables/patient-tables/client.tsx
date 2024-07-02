"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import { Patient } from "@prisma/client";
import { addPatient } from "@/actions/patients";

interface ProductsClientProps {
  data: Patient[];
}

export const PatientClient: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Patients (${data.length})`}
          description="Manage patients"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/patient/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="lastname" columns={columns} data={data} />
    </>
  );
};
