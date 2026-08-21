export type FeePayer = "father" | "mother" | "self" | "other";

export type ReferralSource =
  | "tv"
  | "radio"
  | "friend"
  | "relative"
  | "student"
  | "tent"
  | "flier"
  | "billboard"
  | "walk-in"
  | "website"
  | "social-media";

export type EducationLevel = "primary" | "secondary" | "college";

export type AdmissionFormData = {
  firstName: string;
  secondName: string;
  surname: string;
  idNumber: string;
  dateOfBirth: string;
  gender: string;
  religion: string;
  nationality: string;
  countyOfOrigin: string;
  currentResidence: string;
  phone: string;
  email: string;
  preferredCampus: "nairobi" | "kisumu";
  hasMedicalCondition: "yes" | "no" | "";
  medicalConditionDetails: string;
  fatherName: string;
  fatherPhone: string;
  fatherEmail: string;
  motherName: string;
  motherPhone: string;
  motherEmail: string;
  otherNokName: string;
  otherNokPhone: string;
  otherNokEmail: string;
  feePayer: FeePayer | "";
  feePayerOtherName: string;
  feePayerOtherRelationship: string;
  feePayerOtherPhone: string;
  educationLevel: EducationLevel | "";
  gradeAttained: string;
  schoolName: string;
  yearCompleted: string;
  referralSource: ReferralSource | "";
  declarationAccepted: boolean;
  signature: string;
};

export const initialAdmissionForm: AdmissionFormData = {
  firstName: "",
  secondName: "",
  surname: "",
  idNumber: "",
  dateOfBirth: "",
  gender: "",
  religion: "",
  nationality: "Kenyan",
  countyOfOrigin: "",
  currentResidence: "",
  phone: "",
  email: "",
  preferredCampus: "nairobi",
  hasMedicalCondition: "",
  medicalConditionDetails: "",
  fatherName: "",
  fatherPhone: "",
  fatherEmail: "",
  motherName: "",
  motherPhone: "",
  motherEmail: "",
  otherNokName: "",
  otherNokPhone: "",
  otherNokEmail: "",
  feePayer: "",
  feePayerOtherName: "",
  feePayerOtherRelationship: "",
  feePayerOtherPhone: "",
  educationLevel: "",
  gradeAttained: "",
  schoolName: "",
  yearCompleted: "",
  referralSource: "",
  declarationAccepted: false,
  signature: "",
};

export const requiredDocuments = [
  "Copy of Form Four certificate or result slip",
  "Copy of ID or passport",
  "Two passport photos",
] as const;

export const referralOptions: { value: ReferralSource; label: string }[] = [
  { value: "tv", label: "TV" },
  { value: "radio", label: "Radio" },
  { value: "friend", label: "Friend" },
  { value: "relative", label: "Relative" },
  { value: "student", label: "Student" },
  { value: "tent", label: "Tent" },
  { value: "flier", label: "Flier" },
  { value: "billboard", label: "Billboard" },
  { value: "walk-in", label: "Walk in" },
  { value: "website", label: "Website" },
  { value: "social-media", label: "Social media" },
];
