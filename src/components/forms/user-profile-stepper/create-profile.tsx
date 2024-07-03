"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { profileSchema, type ProfileFormValues } from "@/lib/form-schema";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertTriangleIcon, Trash, Trash2Icon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

interface ProfileFormType {
  initialData: any | null;
  categories: any;
}

export const CreateProfileOne: React.FC<ProfileFormType> = ({
  initialData,
  categories,
}) => {
  const params = useParams();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const title = initialData ? "Edit product" : "Dialysis Session";
  const description = initialData
    ? "Edit a Patient."
    : "Follow the Dialysis Session Steps";
  const toastMessage = initialData ? "Profile updated." : "Profile created.";
  const action = initialData ? "Save changes" : "Create";
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState({});
  const delta = currentStep - previousStep;

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
  });

  const {
    control,
    formState: { errors },
  } = form;

  const onSubmit = async (data: ProfileFormValues) => {
    try {
      setLoading(true);
      if (initialData) {
        // await axios.post(`/api/products/edit-product/${initialData._id}`, data);
      } else {
        // const res = await axios.post(`/api/products/create-product`, data);
        // console.log("product", res);
      }
      router.refresh();
      router.push(`/dashboard/products`);
    } catch (error: any) {
    } finally {
      setLoading(false);
    }
  };

  const onDelete = async () => {
    try {
      setLoading(true);
      //   await axios.delete(`/api/${params.storeId}/products/${params.productId}`);
      router.refresh();
      router.push(`/${params.storeId}/products`);
    } catch (error: any) {
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };

  const processForm: SubmitHandler<ProfileFormValues> = (data) => {
    console.log("data ==>", data);
    setData(data);
    // api call and reset
    // form.reset();
  };

  type FieldName = keyof ProfileFormValues;

  const steps = [
    {
      id: "Step 1",
      name: "Patient Diagnosis",
      fields: [
        "treatmentplan",
        "chronicDiseaseStage",
        "maintenanceHemodialysisPerWeek",
      ],
    },
    {
      id: "Step 2",
      name: "Safety Checks",
      fields: ["conductivity", "selfTest", "airDetector", "bloodLeak"],
    },
    {
      id: "Step 3",
      name: "Anticoagulations",
      fields: ["heparin", "lmwh", "nss"],
    },
    {
      id: "Step 4",
      name: "Prescription Verification",
      fields: [
        "dialyzerSize",
        "numberOfUse",
        "machineNumber",
        "residualTestDone",
        "hemoStart",
        "hemoEnd",
      ],
    },
    {
      id: "Step 5",
      name: "Ultrafiltration",
      fields: [
        "prehd",
        "dryweight",
        "gainkg",
        "reinfusionml",
        "othersml",
        "totalufgoal",
      ],
    },
    {
      id: "Step 6",
      name: "Hemodialysis Access",
      fields: [
        "fistula",
        "graft",
        "position1",
        "cannulationAttempt",
        "ij",
        "subclavian",
        "femora",
        "permcath",
        "position2",
      ],
    },
    {
      id: "Step 7",
      name: "CONDITION OF ACCESS",
      fields: ["bruit",
      "thrill",
      "bruise",
      "normal",
      "tender",
      "discharges",
      "redness",
      "goodFlow",
      "clotted",
      "resistance",
      "numberOfOutput"
    ],
    },
    {
      id: "Step 8",
      name: "PRE AND POST HEMODIALYSIS WEIGHT AND VITAL SIGNS",
      fields: ["wt1",
        "bpmmhg1",
        "rrbpm1",
        "hrbpm1",
        "tc1",
        "wt2",
        "bpmmhg2",
        "rrbpm2",
        "hrbpm2",
        "tc2"
      ],
    },
    {
      id: "Step 9",
      name: "Medication Administration",
      fields: ["medication",
        "dosage",
        "route",
        "time",
        "signature"
      ],
    },
    { id: "Step 10", 
      name: "Additional Information",
    fields: [
      "progressnotes",
      "doctorsorder",
      "attendingphysician",
      "primed",
      "safetychecked",
      "initiated",
      "monitored",
      "terminated",
      "nursesupervisor"
    ] },
  ];

  const next = async () => {
    const fields = steps[currentStep].fields;

    const output = await form.trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await form.handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
      console.log(currentStep);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
    console.log(currentStep);
  };

  const safetyChoices = [
    { id: "wow", name: "Failed" },
    { id: "wows", name: "Passed" },
  ];
  const genders = [
    { id: "wower", name: "Male" },
    { id: "wowes", name: "Female" },
  ];
  const cities = [{ id: "2", name: "kerala" }];

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="sm"
            onClick={() => setOpen(true)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        )}
      </div>
      <Separator />
      <div>
        <ul className="flex gap-4">
          {steps.map((step, index) => (
            <li key={step.name} className="md:flex-1">
              {currentStep > index ? (
                <div className="group flex w-full flex-col border-l-4 border-green-500 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-green-600 transition-colors ">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : currentStep === index ? (
                <div
                  className="flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4"
                  aria-current="step"
                >
                  <span className="text-sm font-medium text-sky-600">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              ) : (
                <div className="group flex h-full w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4">
                  <span className="text-sm font-medium text-gray-500 transition-colors">
                    {step.id}
                  </span>
                  <span className="text-sm font-medium">{step.name}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(processForm)}
          className="w-full space-y-8"
        >
          <div
            className={cn(
              currentStep > 0
                ? "w-full md:inline-block"
                : "gap-8 md:grid md:grid-cols-3"
            )}
          >
            {/* step 1 */}
            {currentStep === 0 && (
              <>
                <FormField
                  control={form.control}
                  name="treatmentplan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Treatment Plan</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Enter Treatment Plan"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="chronicDiseaseStage"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Chronic Disease Stage</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Enter Chronic Disease Stage"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="maintenanceHemodialysisPerWeek"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Maintenance Hemodialysis Per Week</FormLabel>
                      <FormControl>
                        <Input
                          disabled={loading}
                          placeholder="Enter Maintenance Hemodialysis Per Week"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* step 2 */}
            {currentStep === 1 && (
              <>
                <FormField
                  control={form.control}
                  name="conductivity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>CONDUCTIVITY</FormLabel>
                      <Select
                        disabled={loading}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select one" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {/* @ts-ignore  */}
                          {safetyChoices.map((choice) => (
                            <SelectItem key={choice.id} value={choice.id}>
                              {choice.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="selfTest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>SELF TEST</FormLabel>
                      <Select
                        disabled={loading}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select one" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {/* @ts-ignore  */}
                          {safetyChoices.map((choice) => (
                            <SelectItem key={choice.id} value={choice.id}>
                              {choice.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="airDetector"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>AIR DETECTOR</FormLabel>
                      <Select
                        disabled={loading}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select one" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {/* @ts-ignore  */}
                          {safetyChoices.map((choice) => (
                            <SelectItem key={choice.id} value={choice.id}>
                              {choice.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="bloodLeak"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>BLOOD LEAK</FormLabel>
                      <Select
                        disabled={loading}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select one" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {/* @ts-ignore  */}
                          {safetyChoices.map((choice) => (
                            <SelectItem key={choice.id} value={choice.id}>
                              {choice.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* step 3 */}
            {currentStep === 2 && (
              <>
                <FormField
                  control={form.control}
                  name="heparin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ANTICOAGULATIONS</FormLabel>
                      <Select
                        disabled={loading}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select one" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {/* @ts-ignore  */}
                          {safetyChoices.map((choice) => (
                            <SelectItem key={choice.id} value={choice.id}>
                              {choice.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="lmwh"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LMWH</FormLabel>
                      <Select
                        disabled={loading}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select one" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {/* @ts-ignore  */}
                          {safetyChoices.map((choice) => (
                            <SelectItem key={choice.id} value={choice.id}>
                              {choice.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="nss"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>NSS</FormLabel>
                      <Select
                        disabled={loading}
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select one" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {/* @ts-ignore  */}
                          {safetyChoices.map((choice) => (
                            <SelectItem key={choice.id} value={choice.id}>
                              {choice.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </>
            )}

            {/* step 4 */}
            {currentStep === 3 && (
              <>
                <div
                  className={cn(
                    "relative mb-4 gap-8 rounded-md border p-4 md:grid md:grid-cols-4"
                  )}
                >
                  <>
                    <FormField
                      control={form.control}
                      name="dialyzerSize"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dialyzer Size</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Size"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="numberOfUse"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Use</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="machineNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Machine Number</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Machine Number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>

                  <FormField
                    control={form.control}
                    name="hemoStart"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hemodialysis Start</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"></div>
                            <Input
                              disabled={loading}
                              placeholder="Enter Machine Number"
                              {...field}
                              type="time"
                              id="start-time"
                              min="09:00"
                              max="18:00"
                              value="00:00"
                              required
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="hemoEnd"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hemodialysis End</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"></div>
                            <Input
                              disabled={loading}
                              placeholder="Enter Machine Number"
                              {...field}
                              type="time"
                              id="start-time"
                              min="09:00"
                              max="18:00"
                              value="00:00"
                              required
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dhduration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>DH DURATION</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="Enter DH Duration"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hdmodality"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>HD MODALITY</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="Enter HD Modality"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dialysateflow"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>DIALYSATE FLOW</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="Enter Dialysate flow"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hco3"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>HCO3 ML/MIN</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="Enter HCO3_ML/MIN"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bathmeqs"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>K+ BATH MEQS</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="Enter Bath Meqs"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </>
            )}

            {/* step 5 */}
            {currentStep === 4 && (
              <>
                <div
                  className={cn(
                    "relative mb-4 gap-8 rounded-md border p-4 md:grid md:grid-cols-3"
                  )}
                >
                  <>
                    <FormField
                      control={form.control}
                      name="prehd"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>PRE-HD WT KG</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Pre-Hemodialysis Weight"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="dryweight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>DRY WT. KG</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Weight"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="weightgain"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WT. GAIN KG</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Weight Gain"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                  <FormField
                    control={form.control}
                    name="reinfusionml"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>REINFUSION ML</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="Enter Reinfusion"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="othersml"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OTHERS ML</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="Enter Other Info"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="totalufgoal"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>TOTAL UF GOAL ML</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="Enter Total UF Goal"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </>
            )}

            {/* step 6 */}
            {currentStep === 5 && (
              <>
                <div
                  className={cn(
                    "relative mb-5 gap-8 rounded-md border p-4 md:grid md:grid-cols-2"
                  )}
                >
                <div className="flex flex-col gap-y-10">
                  <h1>Permanent Arteriovenus </h1>
                    <FormField 
                      control={form.control}
                      name="fistula"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>PRE-HD WT KG</FormLabel> 
                          <FormControl >
                            <Input className="py-3"
                              disabled={loading}
                              placeholder="Enter Pre-Hemodialysis Weight"
                              {...field}  
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="graft"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>DRY WT. KG</FormLabel>
                          <FormControl>
                            <Input 
                              disabled={loading}
                              placeholder="Enter Weight"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="position1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WT. GAIN KG</FormLabel>
                          <FormControl>
                            <Input 
                              disabled={loading}
                              placeholder="Enter Weight Gain"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                    control={form.control}
                    name="cannulationAttempt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>REINFUSION ML</FormLabel>
                        <FormControl>
                          <Input 
                            disabled={loading}
                            placeholder="Enter Reinfusion"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  </div>
                  <div className="flex flex-col gap-y-10">   
                  <h1>TEMPORARY (CATHETER)</h1>
                  <FormField
                    control={form.control}
                    name="ij"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>OTHERS ML</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="Enter Other Info"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subclavian"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>TOTAL UF GOAL ML</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="Enter Total UF Goal"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="femora"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>TOTAL UF GOAL ML</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="Enter Total UF Goal"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="permcath"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>TOTAL UF GOAL ML</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="Enter Total UF Goal"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="position2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>TOTAL UF GOAL ML</FormLabel>
                        <FormControl>
                          <Input
                            disabled={loading}
                            placeholder="Enter Total UF Goal"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  </div>
                </div>
              </>
            )}

            {/* step 7 */}
            {currentStep === 6 && (
              <div
              className={cn(
                "relative mb-4 gap-8 rounded-md border p-4 md:grid md:grid-cols-2"
              )}>
                <div className="flex flex-col gap-y-6">
                <h1>PRE HD</h1>
                {/* <pre className="whitespace-pre-wrap">
                  {JSON.stringify(data)}
                </pre> */}

                <FormField
                      control={form.control}
                      name="bruit"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bruit</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Bruit"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                <FormField
                      control={form.control}
                      name="thrill"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Thrill</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Thrill"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="bruise"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bruise</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Bruise"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>
                <div className="flex flex-col gap-y-6">
                <h1>POST HD</h1>
                
                <FormField
                      control={form.control}
                      name="bruit1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bruit</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Bruit"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                <FormField
                      control={form.control}
                      name="thrill1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Thrill</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Thrill"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="bruise1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bruise</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Bruise"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>
              </div>
            )}
            
            {/* step 8 */}
            {currentStep === 7 && (
              <div
              className={cn(
                "relative mb-4 gap-8 rounded-md border p-4 md:grid md:grid-cols-2"
              )}>
                <div className="flex flex-col gap-y-6">
                <h1>PRE HD</h1>
                {/* <pre className="whitespace-pre-wrap">
                  {JSON.stringify(data)}
                </pre> */}

                <FormField
                      control={form.control}
                      name="wt1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WEIGHT</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Weight"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                <FormField
                      control={form.control}
                      name="bpmmhg1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>BP. mmHg</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Blood Pressure mmhg"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="rrbpm1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>RR. bpm</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Respiratory bpm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="hrbpm1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>HR. bpm</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Heart Rate bpm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="tc1"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>T. C</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter temperature (Celsius)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>
                <div className="flex flex-col gap-y-6">
                <h1>POST HD</h1>
                
                <FormField
                      control={form.control}
                      name="wt2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>WEIGHT</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Weight"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                <FormField
                      control={form.control}
                      name="bpmmhg2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>BP. mmHg</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Blood Pressure mmhg"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="rrbpm2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>RR. bpm</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Respiratory bpm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="hrbpm2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>HR. bpm</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Heart Rate bpm"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="tc2"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>T. C</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter temperature (Celsius)"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>
              </div>
            )}

             {/* step 9 */}
             {currentStep === 8 && (
              <div
              className={cn(
                "relative mb-4 gap-8 rounded-md border p-4 md:grid md:grid-cols-2"
              )}>

                <FormField
                    control={form.control}
                    name="medication"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>MEDICATION</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Medication"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="dosage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Dosage</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Dosage"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="route"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ROUTE</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Route"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>TIME</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Time"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="signature"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>SIGNATURE</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Signature"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>
            )}

             {/* step 10 */}
             {currentStep === 9 && (
              <div
              className={cn(
                "relative mb-4 gap-8 rounded-md border p-4 md:grid md:grid-cols-2"
              )}>

                <FormField
                    control={form.control}
                    name="progressnotes"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>PROGRESS NOTES</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Progress Notes"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="doctorsorder"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>DOCTORS ORDER</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Doctors Order"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="attendingphysician"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>ATTENDING PHYSICIAN</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Attending Physician"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="primed"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>PRIMED</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Primed"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="safetychecked"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>SAFETY CHECKED</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Safety Checked"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="initiated"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>INITIATED</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Initiated"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="monitored"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>MONITORED</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Monitored"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="terminated"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>TERMINATED</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Terminated"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="nursesupervisor"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>NURSE SUPERVISOR ON DUTY</FormLabel>
                          <FormControl>
                            <Input
                              disabled={loading}
                              placeholder="Enter Nurse Supervisor On Duty"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>

                
            )}
          </div>

          {/* <Button disabled={loading} className="ml-auto" type="submit">
            {action}
          </Button> */}
        </form>
      </Form>
      {/* Navigation */}
      <div className="mt-8 pt-5">
        <div className="flex justify-between">
          <button
            type="button"
            onClick={prev}
            disabled={currentStep === 0}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={next}
            disabled={currentStep === steps.length - 1}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
