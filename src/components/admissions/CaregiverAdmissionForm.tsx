"use client";

import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Send,
} from "lucide-react";
import {
  FieldLabel,
  FormField,
  FormGrid,
  FormSection,
  RadioOption,
  SelectInput,
  TextArea,
  TextInput,
} from "./FormUi";
import {
  initialAdmissionForm,
  referralOptions,
  type AdmissionFormData,
} from "@/types/admission";

const steps = [
  { id: 1, title: "Personal details" },
  { id: 2, title: "Medical & next of kin" },
  { id: 3, title: "Fees & education" },
  { id: 4, title: "Declaration" },
] as const;

export function CaregiverAdmissionForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<AdmissionFormData>(initialAdmissionForm);
  const [documentsReady, setDocumentsReady] = useState(false);

  const update = <K extends keyof AdmissionFormData>(
    key: K,
    value: AdmissionFormData[K],
  ) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const progress = useMemo(
    () => Math.round((step / steps.length) * 100),
    [step],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < steps.length) {
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border-2 border-thm-gold bg-white px-6 py-12 text-center sm:px-10">
        <CheckCircle2 className="mx-auto h-14 w-14 text-thm-purple" />
        <h3 className="mt-5 font-poppins text-2xl font-bold text-thm-purple">
          Application received
        </h3>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-thm-muted">
          Thank you, {form.firstName} {form.surname}. Our admissions team will
          contact you at {form.phone} to confirm your Caregiver II application
          and document submission.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setStep(1);
            setForm(initialAdmissionForm);
            setDocumentsReady(false);
          }}
          className="mt-8 h-11 rounded-full bg-thm-purple px-7 text-sm font-semibold text-white transition-colors hover:bg-thm-purple-dark"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border-2 border-thm-gold bg-white p-5 sm:p-6">
        <div className="mb-2 flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-thm-muted">
          <span>
            Step {step} of {steps.length}
          </span>
          <span>{steps[step - 1].title}</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-thm-gold transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {steps.map((s) => (
            <span
              key={s.id}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                s.id === step
                  ? "bg-thm-purple text-white"
                  : s.id < step
                    ? "bg-thm-purple/15 text-thm-purple"
                    : "bg-slate-100 text-thm-muted"
              }`}
            >
              {s.title}
            </span>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 ? (
          <FormSection
            step={1}
            title="Applicant's personal details"
            description="Enter your details as they appear on your ID or passport."
          >
            <FormGrid>
              <FormField span={4}>
                <FieldLabel required>First name</FieldLabel>
                <TextInput
                  required
                  uppercase
                  value={form.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  placeholder="Jane"
                />
              </FormField>
              <FormField span={4}>
                <FieldLabel>Second name</FieldLabel>
                <TextInput
                  uppercase
                  value={form.secondName}
                  onChange={(e) => update("secondName", e.target.value)}
                  placeholder="Wanjiku"
                />
              </FormField>
              <FormField span={4}>
                <FieldLabel required>Surname</FieldLabel>
                <TextInput
                  required
                  uppercase
                  value={form.surname}
                  onChange={(e) => update("surname", e.target.value)}
                  placeholder="Otieno"
                />
              </FormField>

              <FormField span={6}>
                <FieldLabel required>ID / passport number</FieldLabel>
                <TextInput
                  required
                  uppercase
                  value={form.idNumber}
                  onChange={(e) => update("idNumber", e.target.value)}
                  placeholder="12345678"
                />
              </FormField>
              <FormField span={6}>
                <FieldLabel required>Date of birth</FieldLabel>
                <TextInput
                  required
                  type="date"
                  value={form.dateOfBirth}
                  onChange={(e) => update("dateOfBirth", e.target.value)}
                />
              </FormField>

              <FormField span={3}>
                <FieldLabel required>Gender</FieldLabel>
                <SelectInput
                  required
                  value={form.gender}
                  onChange={(e) => update("gender", e.target.value)}
                >
                  <option value="">Select gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </SelectInput>
              </FormField>
              <FormField span={3}>
                <FieldLabel required>Religion</FieldLabel>
                <TextInput
                  required
                  uppercase
                  value={form.religion}
                  onChange={(e) => update("religion", e.target.value)}
                  placeholder="Christian"
                />
              </FormField>
              <FormField span={3}>
                <FieldLabel required>Nationality</FieldLabel>
                <TextInput
                  required
                  uppercase
                  value={form.nationality}
                  onChange={(e) => update("nationality", e.target.value)}
                />
              </FormField>
              <FormField span={3}>
                <FieldLabel required>Preferred campus</FieldLabel>
                <SelectInput
                  required
                  value={form.preferredCampus}
                  onChange={(e) =>
                    update(
                      "preferredCampus",
                      e.target.value as AdmissionFormData["preferredCampus"],
                    )
                  }
                >
                  <option value="nairobi">Nairobi</option>
                  <option value="kisumu">Kisumu</option>
                </SelectInput>
              </FormField>

              <FormField span={6}>
                <FieldLabel required>County of origin</FieldLabel>
                <TextInput
                  required
                  uppercase
                  value={form.countyOfOrigin}
                  onChange={(e) => update("countyOfOrigin", e.target.value)}
                  placeholder="Nairobi"
                />
              </FormField>
              <FormField span={6}>
                <FieldLabel required>Current residence</FieldLabel>
                <TextInput
                  required
                  uppercase
                  value={form.currentResidence}
                  onChange={(e) => update("currentResidence", e.target.value)}
                  placeholder="Westlands, Nairobi"
                />
              </FormField>

              <FormField span={6}>
                <FieldLabel required>Active phone number</FieldLabel>
                <TextInput
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="07XX XXX XXX"
                />
              </FormField>
              <FormField span={6}>
                <FieldLabel required>Active email</FieldLabel>
                <TextInput
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@email.com"
                />
              </FormField>
            </FormGrid>
          </FormSection>
        ) : null}

        {step === 2 ? (
          <>
            <FormSection
              step={2}
              title="Applicant's medical history"
              description="Help us support you safely during training."
            >
              <FieldLabel required>
                Pre-existing or chronic medical condition?
              </FieldLabel>
              <div className="grid gap-3 sm:grid-cols-2">
                <RadioOption
                  name="medical"
                  value="yes"
                  checked={form.hasMedicalCondition === "yes"}
                  onChange={() => update("hasMedicalCondition", "yes")}
                  label="Yes"
                />
                <RadioOption
                  name="medical"
                  value="no"
                  checked={form.hasMedicalCondition === "no"}
                  onChange={() => {
                    update("hasMedicalCondition", "no");
                    update("medicalConditionDetails", "");
                  }}
                  label="No"
                />
              </div>
              {form.hasMedicalCondition === "yes" ? (
                <div>
                  <FieldLabel required>If yes, specify the condition</FieldLabel>
                  <TextArea
                    required
                    value={form.medicalConditionDetails}
                    onChange={(e) =>
                      update("medicalConditionDetails", e.target.value)
                    }
                    placeholder="Describe the condition..."
                  />
                </div>
              ) : null}
            </FormSection>

            <FormSection
              step={3}
              title="Parent / next of kin details"
              description="Provide at least one contact we can reach in case of emergency."
            >
              <div className="rounded-xl bg-thm-cream/80 p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-thm-purple">
                  Father
                </p>
                <div className="mt-3">
                  <FormGrid>
                    <FormField span={12}>
                      <FieldLabel>Full name</FieldLabel>
                      <TextInput
                        uppercase
                        value={form.fatherName}
                        onChange={(e) => update("fatherName", e.target.value)}
                      />
                    </FormField>
                    <FormField span={5}>
                      <FieldLabel>Phone</FieldLabel>
                      <TextInput
                        type="tel"
                        value={form.fatherPhone}
                        onChange={(e) => update("fatherPhone", e.target.value)}
                      />
                    </FormField>
                    <FormField span={7}>
                      <FieldLabel>Email</FieldLabel>
                      <TextInput
                        type="email"
                        value={form.fatherEmail}
                        onChange={(e) => update("fatherEmail", e.target.value)}
                      />
                    </FormField>
                  </FormGrid>
                </div>
              </div>

              <div className="rounded-xl bg-thm-cream/80 p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-thm-purple">
                  Mother
                </p>
                <div className="mt-3">
                  <FormGrid>
                    <FormField span={12}>
                      <FieldLabel>Full name</FieldLabel>
                      <TextInput
                        uppercase
                        value={form.motherName}
                        onChange={(e) => update("motherName", e.target.value)}
                      />
                    </FormField>
                    <FormField span={5}>
                      <FieldLabel>Phone</FieldLabel>
                      <TextInput
                        type="tel"
                        value={form.motherPhone}
                        onChange={(e) => update("motherPhone", e.target.value)}
                      />
                    </FormField>
                    <FormField span={7}>
                      <FieldLabel>Email</FieldLabel>
                      <TextInput
                        type="email"
                        value={form.motherEmail}
                        onChange={(e) => update("motherEmail", e.target.value)}
                      />
                    </FormField>
                  </FormGrid>
                </div>
              </div>

              <div className="rounded-xl bg-thm-cream/80 p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-thm-purple">
                  Other next of kin
                </p>
                <div className="mt-3">
                  <FormGrid>
                    <FormField span={12}>
                      <FieldLabel>Full name</FieldLabel>
                      <TextInput
                        uppercase
                        value={form.otherNokName}
                        onChange={(e) => update("otherNokName", e.target.value)}
                      />
                    </FormField>
                    <FormField span={5}>
                      <FieldLabel>Phone</FieldLabel>
                      <TextInput
                        type="tel"
                        value={form.otherNokPhone}
                        onChange={(e) => update("otherNokPhone", e.target.value)}
                      />
                    </FormField>
                    <FormField span={7}>
                      <FieldLabel>Email</FieldLabel>
                      <TextInput
                        type="email"
                        value={form.otherNokEmail}
                        onChange={(e) => update("otherNokEmail", e.target.value)}
                      />
                    </FormField>
                  </FormGrid>
                </div>
              </div>
            </FormSection>
          </>
        ) : null}

        {step === 3 ? (
          <>
            <FormSection
              step={4}
              title="Fee payment details"
              description="Who will be responsible for your training fees?"
            >
              <FieldLabel required>Who will be paying your fees?</FieldLabel>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {(
                  [
                    ["father", "Father"],
                    ["mother", "Mother"],
                    ["self", "Self"],
                    ["other", "Other"],
                  ] as const
                ).map(([value, label]) => (
                  <RadioOption
                    key={value}
                    name="feePayer"
                    value={value}
                    checked={form.feePayer === value}
                    onChange={() => update("feePayer", value)}
                    label={label}
                  />
                ))}
              </div>
              {form.feePayer === "other" ? (
                <FormGrid>
                  <FormField span={4}>
                    <FieldLabel required>Full name</FieldLabel>
                    <TextInput
                      required
                      uppercase
                      value={form.feePayerOtherName}
                      onChange={(e) =>
                        update("feePayerOtherName", e.target.value)
                      }
                    />
                  </FormField>
                  <FormField span={4}>
                    <FieldLabel required>Relationship</FieldLabel>
                    <TextInput
                      required
                      uppercase
                      value={form.feePayerOtherRelationship}
                      onChange={(e) =>
                        update("feePayerOtherRelationship", e.target.value)
                      }
                    />
                  </FormField>
                  <FormField span={4}>
                    <FieldLabel required>Active phone</FieldLabel>
                    <TextInput
                      required
                      type="tel"
                      value={form.feePayerOtherPhone}
                      onChange={(e) =>
                        update("feePayerOtherPhone", e.target.value)
                      }
                    />
                  </FormField>
                </FormGrid>
              ) : null}
            </FormSection>

            <FormSection
              step={5}
              title="Education background"
              description="Tell us about your most recent schooling."
            >
              <FormGrid>
                <FormField span={6}>
                  <FieldLabel required>Last education level attained</FieldLabel>
                  <SelectInput
                    required
                    value={form.educationLevel}
                    onChange={(e) =>
                      update(
                        "educationLevel",
                        e.target.value as AdmissionFormData["educationLevel"],
                      )
                    }
                  >
                    <option value="">Select level</option>
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                    <option value="college">College</option>
                  </SelectInput>
                </FormField>
                <FormField span={6}>
                  <FieldLabel required>Grade attained</FieldLabel>
                  <TextInput
                    required
                    value={form.gradeAttained}
                    onChange={(e) => update("gradeAttained", e.target.value)}
                    placeholder="C+"
                  />
                </FormField>
                <FormField span={6}>
                  <FieldLabel required>Name of school attended</FieldLabel>
                  <TextInput
                    required
                    uppercase
                    value={form.schoolName}
                    onChange={(e) => update("schoolName", e.target.value)}
                  />
                </FormField>
                <FormField span={6}>
                  <FieldLabel required>Year completed</FieldLabel>
                  <TextInput
                    required
                    type="number"
                    min={1980}
                    max={2030}
                    value={form.yearCompleted}
                    onChange={(e) => update("yearCompleted", e.target.value)}
                    placeholder="2020"
                  />
                </FormField>
                <FormField span={12}>
                  <FieldLabel required>How did you know about THM?</FieldLabel>
                  <SelectInput
                    required
                    value={form.referralSource}
                    onChange={(e) =>
                      update(
                        "referralSource",
                        e.target.value as AdmissionFormData["referralSource"],
                      )
                    }
                  >
                    <option value="">Select one</option>
                    {referralOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </SelectInput>
                </FormField>
              </FormGrid>
            </FormSection>
          </>
        ) : null}

        {step === 4 ? (
          <FormSection
            step={6}
            title="Applicant declaration"
            description="Please read carefully before submitting."
          >
            <div className="rounded-xl border border-thm-purple/15 bg-thm-cream/60 p-5 text-sm leading-relaxed text-thm-ink">
              I,{" "}
              <span className="font-semibold uppercase">
                {form.firstName || "—"} {form.surname || "—"}
              </span>{" "}
              of ID/PP number{" "}
              <span className="font-semibold uppercase">
                {form.idNumber || "—"}
              </span>
              , hereby declare that the information I have provided above is
              correct and accurate. I have understood all the requirements for
              my studies and accept to abide by all rules and regulations
              governing the students of this college throughout the course of my
              study.
            </div>

            <p className="rounded-xl bg-thm-purple/8 px-4 py-3 text-sm font-medium text-thm-purple">
              Please note: Ksh. 3,000 admission fee is non-refundable.
            </p>

            <label className="flex cursor-pointer items-start gap-3 rounded-xl border-2 border-slate-200 p-4 has-[:checked]:border-thm-purple has-[:checked]:bg-thm-purple/5">
              <input
                type="checkbox"
                required
                checked={form.declarationAccepted}
                onChange={(e) => update("declarationAccepted", e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-thm-purple"
              />
              <span className="text-sm leading-relaxed text-thm-ink">
                I confirm that I have read and accept the declaration above, and
                that I will provide the required documents.
              </span>
            </label>

            <label className="flex cursor-pointer items-start gap-3 rounded-xl border-2 border-slate-200 p-4 has-[:checked]:border-thm-gold has-[:checked]:bg-thm-gold/10">
              <input
                type="checkbox"
                required
                checked={documentsReady}
                onChange={(e) => setDocumentsReady(e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-thm-purple"
              />
              <span className="text-sm leading-relaxed text-thm-ink">
                I understand the three required documents listed above and will
                submit them as instructed by admissions.
              </span>
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <FieldLabel required hint="Type your full name as signature">
                  Signature
                </FieldLabel>
                <TextInput
                  required
                  uppercase
                  value={form.signature}
                  onChange={(e) => update("signature", e.target.value)}
                  placeholder={`${form.firstName} ${form.surname}`.trim()}
                />
              </div>
              <div>
                <FieldLabel required>Date</FieldLabel>
                <TextInput
                  required
                  type="date"
                  defaultValue={new Date().toISOString().split("T")[0]}
                  className="normal-case tracking-normal"
                  readOnly
                />
              </div>
            </div>
          </FormSection>
        ) : null}

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
          <button
            type="button"
            onClick={() => {
              setStep((s) => Math.max(1, s - 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={step === 1}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border-2 border-thm-purple/25 px-6 font-poppins text-sm font-semibold text-thm-purple transition-colors enabled:hover:border-thm-purple enabled:hover:bg-thm-purple/5 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </button>
          <button
            type="submit"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-thm-gold px-8 font-poppins text-sm font-bold text-thm-ink transition-colors hover:bg-thm-gold-hover"
          >
            {step === steps.length ? (
              <>
                Submit application
                <Send className="h-4 w-4" />
              </>
            ) : (
              <>
                Continue
                <ChevronRight className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
