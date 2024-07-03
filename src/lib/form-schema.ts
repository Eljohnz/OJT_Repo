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
    .min(1, { message: "Treatment Plan is Required?" }).optional(),
  chronicDiseaseStage: z
    .string()
    .min(1, { message: "Chronic Disease Stage is Required" }).optional(),
  maintenanceHemodialysisPerWeek: z
    .string()
    .min(1, { message: "Patient Name must be at least 3 characters" }).optional(),
  conductivity: z.string().min(1, { message: "Please select a category" }).optional(),
  selfTest: z.string().min(1, { message: "Please select a category" }).optional(),
  airDetector: z.string().min(1, { message: "Please select a category" }).optional(),
  bloodLeak: z.string().min(1, { message: "Please select a category" }).optional(),
  heparin: z.string().min(1, { message: "Please select a category" }).optional(),
  lmwh: z.string().min(1, { message: "Please select a category" }).optional(),
  nss: z.string().min(1, { message: "Please select a category" }).optional(),
  dialyzerSize: z.string().min(1, { message: "Please select a category" }).optional(),
  numberOfUse: z.string().min(1, { message: "Please select a category" }).optional(),
  machineNumber: z.string().min(1, { message: "Please select a category" }).optional(),
  hemoStart: z.string().min(1, { message: "Please select a category" }).optional(),
  hemoEnd: z.string().min(1, { message: "Please select a category" }).optional(),
  dhduration: z.string().min(1, { message: "Please select a category" }).optional(),
  hdmodality: z.string().min(1, { message: "Please select a category" }).optional(),
  dialysateflow: z.string().min(1, { message: "Please select a category" }).optional(),
  hco3: z.string().min(1, { message: "Please select a category" }).optional(),
  bathmeqs: z.string().min(1, { message: "Please select a category" }).optional(),
  prehd: z.string().min(1, { message: "Please select a category" }).optional(),
  dryweight: z.string().min(1, { message: "Please select a category" }).optional(),
  weightgain: z.string().min(1, { message: "Please select a category" }).optional(),
  reinfusionml: z.string().min(1, { message: "Please select a category" }).optional(),
  othersml: z.string().min(1, { message: "Please select a category" }).optional(),
  totalufgoal: z.string().min(1, { message: "Please select a category" }).optional(),
  fistula: z.string().min(1, { message: "Please select a category" }).optional(),
  graft: z.string().min(1, { message: "Please select a category" }).optional(),
  position1: z.string().min(1, { message: "Please select a category" }).optional(),
  cannulationAttempt: z.string().min(1, { message: "Please select a category" }).optional(),
  ij: z.string().min(1, { message: "Please select a category" }).optional(),
  subclavian: z.string().min(1, { message: "Please select a category" }).optional(),
  femora: z.string().min(1, { message: "Please select a category" }).optional(),
  permcath: z.string().min(1, { message: "Please select a category" }).optional(),
  position2: z.string().min(1, { message: "Please select a category" }).optional(),
  bruit: z.string().min(1, { message: "Please select a category" }).optional(),
  thrill: z.string().min(1, { message: "Please select a category" }).optional(),
  bruise: z.string().min(1, { message: "Please select a category" }).optional(),
  bruit1: z.string().min(1, { message: "Please select a category" }).optional(),
  thrill1: z.string().min(1, { message: "Please select a category" }).optional(),
  bruise1: z.string().min(1, { message: "Please select a category" }).optional(),
  normal: z.string().min(1, { message: "Please select a category" }).optional(),
  tender: z.string().min(1, { message: "Please select a category" }).optional(),
  discharges: z.string().min(1, { message: "Please select a category" }).optional(),
  redness: z.string().min(1, { message: "Please select a category" }).optional(),
  goodFlow: z.string().min(1, { message: "Please select a category" }).optional(),
  clotted: z.string().min(1, { message: "Please select a category" }).optional(),
  resistance: z.string().min(1, { message: "Please select a category" }).optional(),
  numberOfOutput: z.string().min(1, { message: "Please select a category" }).optional(),
  wt1: z.string().min(1, { message: "Please select a category" }).optional(),
  bpmmhg1: z.string().min(1, { message: "Please select a category" }).optional(),
  rrbpm1: z.string().min(1, { message: "Please select a category" }).optional(),
  hrbpm1: z.string().min(1, { message: "Please select a category" }).optional(),
  tc1: z.string().min(1, { message: "Please select a category" }).optional(),
  wt2: z.string().min(1, { message: "Please select a category" }).optional(),
  bpmmhg2: z.string().min(1, { message: "Please select a category" }).optional(),
  rrbpm2: z.string().min(1, { message: "Please select a category" }).optional(),
  hrbpm2: z.string().min(1, { message: "Please select a category" }).optional(),
  tc2: z.string().min(1, { message: "Please select a category" }).optional(),
  medication: z.string().min(1, { message: "Please select a category" }).optional(),
  dosage: z.string().min(1, { message: "Please select a category" }).optional(),
  route: z.string().min(1, { message: "Please select a category" }).optional(),
  time: z.string().min(1, { message: "Please select a category" }).optional(),
  signature: z.string().min(1, { message: "Please select a category" }).optional(),
  progressnotes: z.string().min(1, { message: "Please select a category" }).optional(),
  doctorsorder: z.string().min(1, { message: "Please select a category" }).optional(),
  attendingphysician: z.string().min(1, { message: "Please select a category" }).optional(),
  primed: z.string().min(1, { message: "Please select a category" }).optional(),
  safetychecked: z.string().min(1, { message: "Please select a category" }).optional(),
  initiated: z.string().min(1, { message: "Please select a category" }).optional(),
  monitored: z.string().min(1, { message: "Please select a category" }).optional(),
  terminated: z.string().min(1, { message: "Please select a category" }).optional(),
  nursesupervisor: z.string().min(1, { message: "Please select a category" }).optional(),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
