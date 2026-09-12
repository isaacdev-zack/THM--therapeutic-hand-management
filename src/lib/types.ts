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

export type ContactMessageRecord = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};
