import { getPatients } from "@/actions/patients";
import BreadCrumb from "@/components/breadcrumb";
import { PatientClient } from "@/components/tables/patient-tables/client";

export default async function page() {
  const data = await getPatients();

  return (
    <>
      <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
        <BreadCrumb />
        <PatientClient data={data} />
      </div>
    </>
  );
}
