import BreadCrumb from "@/components/breadcrumb";
import { PatientClient } from "@/components/tables/patient-tables/client";
import { users } from "@/constants/data";

export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb />
        <PatientClient data={users} />
      </div>
    </>
  );
}
