
export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar?: string;
  phone?: string;
  role: string;
  password: string;
  created_at: string;
  addresses: {
    id: string;
    title: string;
    fullName: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    isDefault: boolean;
  }[];
  preferences?: {
    preferredScreenSize?: number;
    preferredResolution?: string;
    mustHaveFeatures?: string[];
    notificationFrequency?: "daily" | "weekly" | "monthly" | "none";
  };
}
