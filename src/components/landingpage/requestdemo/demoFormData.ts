export interface DemoFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  countryCode: string;
}

export const initialFormData: DemoFormData = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
  countryCode: "+962",
};