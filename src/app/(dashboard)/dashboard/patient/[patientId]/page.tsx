import BreadCrumb from "@/components/breadcrumb";
import { PatientForm } from "@/components/forms/patient-form";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

export default function Page() {
  return (
    <ScrollArea className="h-full">
      <div className="flex-1 space-y-4 p-5">
        <BreadCrumb />
        <PatientForm
          categories={[
            { _id: "A+", name: "A+" },
            { _id: "AB+", name: "AB+" },
            { _id: "B+", name: "B+" },
            { _id: "O+", name: "O+" },
          ]}
          suffixcategories={[
            { _id: "jr", name: "JR" },
            { _id: "sr", name: "SR" },
            { _id: "ii", name: "II" },
            { _id: "iii", name: "III" },
          ]}
          initialData={null}
          key={null}
        />

      </div>
    </ScrollArea>
  );
}
