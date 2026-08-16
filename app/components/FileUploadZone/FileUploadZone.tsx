"use client";

import { FileUploadZoneProps } from "@/app/utils/upload-zone";

const FileUploadZone = ({
  id,
  icon: Icon,
  label,
  hint,
  accept,
}: FileUploadZoneProps) => {
  return (
    <label
      htmlFor={id}
      className="group flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-[#98EF00]/30 bg-[#98EF00]/[0.03] p-4 transition-colors hover:border-[#98EF00]/60 hover:bg-[#98EF00]/[0.06]"
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#98EF00]/10 text-[#98EF00] transition-colors group-hover:bg-[#98EF00]/20">
        <Icon size={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-white">{label}</span>
        <span className="text-xs text-zinc-500">{hint}</span>
      </div>
      <input
        id={id}
        className="hidden"
        type="file"
        accept={accept}
      />
    </label>
  );
};

export default FileUploadZone;