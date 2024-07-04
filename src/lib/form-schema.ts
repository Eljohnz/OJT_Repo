import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }).optional(),
  password: z.string(),
});

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }).optional(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }).optional(),
  firstname: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }).optional(),
  lastname: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }).optional(),
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
  conductivity: z.string().min(1, { message: "Please select a category" }),
  selfTest: z.string().min(1, { message: "Please select a category" }),
  airDetector: z.string().min(1, { message: "Please select a category" }),
  bloodLeak: z.string().min(1, { message: "Please select a category" }),
  heparin: z.string().min(1, { message: "Please select a category" }),
  lmwh: z.string().min(1, { message: "Please select a category" }),
  nss: z.string().min(1, { message: "Please select a category" }),
  dialyzerSize: z.string().min(1, { message: "Please select a category" }),
  numberOfUse: z.coerce.number().min(1, { message: "Please select a category" }),
  machineNumber: z.coerce.number().min(1, { message: "Please select a category" }),
  hemoStart: z.string().min(1, { message: "Please select a category" }),
  hemoEnd: z.string().min(1, { message: "Please select a category" }),
  dhduration: z.coerce.number().min(1, { message: "Please select a category" }),
  hdmodality: z.string().min(1, { message: "Please select a category" }),
  dialysateflow: z.string().min(1, { message: "Please select a category" }),
  hco3: z.string().min(1, { message: "Please select a category" }),
  bathmeqs: z.string().min(1, { message: "Please select a category" }),
  prehd: z.coerce.number().min(1, { message: "Please select a category" }),
  dryweight: z.coerce.number().min(1, { message: "Please select a category" }),
  weightgain: z.coerce.number().min(1, { message: "Please select a category" }),
  reinfusionml: z.string().min(1, { message: "Please select a category" }),
  othersml: z.string().min(1, { message: "Please select a category" }),
  totalufgoal: z.string().min(1, { message: "Please select a category" }),
  fistula: z.string().min(1, { message: "Please select a category" }),
  graft: z.string().min(1, { message: "Please select a category" }),
  position1: z.string().min(1, { message: "Please select a category" }),
  cannulationAttempt: z.string().min(1, { message: "Please select a category" }),
  ij: z.string().min(1, { message: "Please select a category" }),
  subclavian: z.string().min(1, { message: "Please select a category" }),
  femora: z.string().min(1, { message: "Please select a category" }),
  permcath: z.string().min(1, { message: "Please select a category" }),
  position2: z.string().min(1, { message: "Please select a category" }),
  bruit: z.string().min(1, { message: "Please select a category" }),
  thrill: z.string().min(1, { message: "Please select a category" }),
  bruise: z.string().min(1, { message: "Please select a category" }),
  bruit1: z.string().min(1, { message: "Please select a category" }),
  thrill1: z.string().min(1, { message: "Please select a category" }),
  bruise1: z.string().min(1, { message: "Please select a category" }),
  normal: z.string().min(1, { message: "Please select a category" }),
  tender: z.string().min(1, { message: "Please select a category" }),
  discharges: z.string().min(1, { message: "Please select a category" }),
  redness: z.string().min(1, { message: "Please select a category" }),
  goodFlow: z.string().min(1, { message: "Please select a category" }),
  clotted: z.string().min(1, { message: "Please select a category" }),
  resistance: z.string().min(1, { message: "Please select a category" }),
  numberOfOutput: z.coerce.number().min(1, { message: "Please select a category" }),
  wt1: z.string().min(1, { message: "Please select a category" }),
  bpmmhg1: z.string().min(1, { message: "Please select a category" }),
  rrbpm1: z.string().min(1, { message: "Please select a category" }),
  hrbpm1: z.string().min(1, { message: "Please select a category" }),
  tc1: z.string().min(1, { message: "Please select a category" }),
  wt2: z.string().min(1, { message: "Please select a category" }),
  bpmmhg2: z.string().min(1, { message: "Please select a category" }),
  rrbpm2: z.string().min(1, { message: "Please select a category" }),
  hrbpm2: z.string().min(1, { message: "Please select a category" }),
  tc2: z.string().min(1, { message: "Please select a category" }),
  medication: z.string().min(1, { message: "Please select a category" }),
  dosage: z.string().min(1, { message: "Please select a category" }),
  route: z.string().min(1, { message: "Please select a category" }),
  time: z.string().min(1, { message: "Please select a category" }),
  signature: z.string().min(1, { message: "Please select a category" }),
  progressnotes: z.string().min(1, { message: "Please select a category" }),
  doctorsorder: z.string().min(1, { message: "Please select a category" }),
  attendingphysician: z.string().min(1, { message: "Please select a category" }),
  primed: z.string().min(1, { message: "Please select a category" }),
  safetychecked: z.string().min(1, { message: "Please select a category" }),
  initiated: z.string().min(1, { message: "Please select a category" }),
  monitored: z.string().min(1, { message: "Please select a category" }),
  terminated: z.string().min(1, { message: "Please select a category" }),
  nursesupervisor: z.string().min(1, { message: "Please select a category" }),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
