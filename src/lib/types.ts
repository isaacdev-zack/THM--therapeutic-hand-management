import type { AdmissionFormData } from "@/types/admission";

export type ApplicationRecord = {
  id: string;
  createdAt: string;
  campus: string;
  fullName: string;
  email: string;
  phone: string;
  data: AdmissionFormData;
};

export type ApplicationPayload = {
  data: AdmissionFormData;
};
