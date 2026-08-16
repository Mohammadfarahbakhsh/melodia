import { LucideIcon } from "lucide-react";

export type AddContentFormProps = {
  eyebrow: string;       
  title: string;        
  fileLabel: string;     
  fileHint: string;      
  fileIcon?: LucideIcon;  
  descriptionPlaceholder: string;
};
export type FileUploadZoneProps = {
  id: string;
  icon: LucideIcon;
  label: string;
  hint: string;
  accept?: string;
};