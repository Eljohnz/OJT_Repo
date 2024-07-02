"use client";
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";
import { Checkbox } from "@/components/ui/checkbox";
import { Patient } from "@prisma/client";

export const columns: ColumnDef<Patient>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "lastName",
    header: "LAST NAME",
  },
  {
    accessorKey: "firstName",
    header: "FIRST NAME",
  },
  {
    accessorKey: "middleName",
    header: "MIDDLE NAME",
  },
  {
    accessorKey: "extensionName.extensionName",
    header: "SUFFIX",
  },
  {
    accessorKey: "bloodType.bloodType",
    header: "BLOOD TYPE",
  },
  {
    accessorKey: "patientAge",
    header: "AGE",
  },
  {
    accessorKey: "gender",
    header: "GENDER",
  },
  {
    accessorKey: "birthdate",
    header: "BIRTHDATE",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
