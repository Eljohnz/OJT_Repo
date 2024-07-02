import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z.string(),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  firstname: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastname: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
});

export const profileSchema = z.object({
  treatmentplan: z
    .string()
    .min(1, { message: "Treatment Plan is Required?" }),
  chronicDiseaseStage: z
    .string()
    .min(1, { message: "Chronic Disease Stage is Required" }),
  maintenanceHemodialysisPerWeek: z
    .string()
    .min(1, { message: "Patient Name must be at least 3 characters" }),
  suffixname: z
    .string()
    .min(3, { message: "Pantient Name must be at least 3 characters" }),
  age: z.coerce.number(),
  gender: z.string().min(1, { message: "Please select a category" }),
  email: z
    .string()
    .email({ message: "Product Name must be at least 3 characters" }),
  contactno: z.coerce.number(),
  country: z.string().min(1, { message: "Please select a category" }),
  city: z.string().min(1, { message: "Please select a category" }),
  
  
  
  // jobs array is for the dynamic fields
  jobs: z.array(
    z.object({
      jobcountry: z.string().min(1, { message: "Please select a category" }),
      jobcity: z.string().min(1, { message: "Please select a category" }),
      jobtitle: z
        .string()
        .min(3, { message: "Product Name must be at least 3 characters" }),
      employer: z
        .string()
        .min(3, { message: "Product Name must be at least 3 characters" }),
      startdate: z
        .string()
        .refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
          message: "Start date should be in the format YYYY-MM-DD",
        }),
      enddate: z.string().refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
        message: "End date should be in the format YYYY-MM-DD",
      }),
    })
  ),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
