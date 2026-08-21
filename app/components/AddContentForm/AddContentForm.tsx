// components/AddContentForm.tsx
"use client";

import Image from "next/image";
import { Music, ImagePlus, Mic2 } from "lucide-react";
import { AddContentFormProps } from "@/app/utils/upload-zone";
import Button from "../base/buttons/button";
import FileUploadZone from "../FileUploadZone/FileUploadZone";
import { useRouter } from "next/navigation";

const AddContentForm = ({
  eyebrow,
  title,
  fileLabel,
  fileHint,
  fileIcon = Music,
  descriptionPlaceholder,
}: AddContentFormProps) => {
  const router = useRouter();

  return (
    <form
      dir="rtl"
      className="
        relative
        flex
        min-h-screen
        w-full
        flex-col
        items-center
        overflow-hidden
        bg-zinc-50
        px-6
        pt-7
        text-zinc-900
        transition-colors
        duration-300

        dark:bg-black
        dark:text-white
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -top-40
          left-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-[#98EF00]/15
          blur-[120px]

          dark:bg-[#98EF00]/20
        "
        aria-hidden="true"
      />

      <div className="relative z-10 flex justify-center pb-12">
        <Image
          src="/LabelMelodia.svg"
          width={130}
          height={54}
          alt="melodia logo"
        />
      </div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-lg
          rounded-2xl
          border
          border-[#65a300]/25
          bg-white
          p-10
          shadow-[0_0_60px_-25px_rgba(101,163,0,0.25)]
          transition-colors
          duration-300

          dark:border-[#98EF00]/25
          dark:bg-gradient-to-b
          dark:from-[#0d1200]
          dark:to-black
          dark:shadow-[0_0_80px_-20px_rgba(152,239,0,0.35)]
        "
      >
        <div
          className="
            mb-3
            flex
            items-center
            justify-center
            gap-2
            text-[11px]
            font-medium
            tracking-[0.25em]
            text-[#65a300]/70

            dark:text-[#98EF00]/50
          "
        >
          <Mic2 size={12} />
          {eyebrow}
        </div>

        <h1
          className="
            text-center
            text-xl
            font-medium
            leading-relaxed
            text-zinc-800

            dark:text-white
          "
        >
          لطفا{" "}
          <span className="font-bold text-[#65a300] dark:text-[#98EF00]">
            {title}
          </span>{" "}
          مورد علاقه خود را اضافه فرمایید
        </h1>

        <div
          className="my-8 flex items-center justify-center gap-[3px]"
          aria-hidden="true"
        >
          {[6, 12, 18, 10, 22, 14, 8, 16, 11, 20, 7, 13].map((h, i) => (
            <span
              key={i}
              className="
                w-[3px]
                rounded-full
                bg-[#65a300]/40

                dark:bg-[#98EF00]/40
              "
              style={{ height: `${h}px` }}
            />
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <FileUploadZone
            id="content-upload"
            icon={fileIcon}
            label={fileLabel}
            hint={fileHint}
            accept="audio/*"
          />

          <FileUploadZone
            id="cover-upload"
            icon={ImagePlus}
            label="عکس کاور"
            hint="JPG, PNG — نسبت ۱:۱ پیشنهاد می‌شود"
            accept="image/*"
          />

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="description"
              className="
                px-1
                text-xs
                text-zinc-500
              "
            >
              توضیحات
            </label>

            <textarea
              id="description"
              placeholder={descriptionPlaceholder}
              dir="rtl"
              rows={4}
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-zinc-300
                bg-zinc-50
                p-3
                text-right
                text-sm
                text-zinc-900
                placeholder:text-zinc-400
                outline-none
                transition-colors

                focus:border-[#65a300]

                dark:border-[#98EF00]/20
                dark:bg-white/[0.02]
                dark:text-white
                dark:placeholder:text-zinc-600
                dark:focus:border-[#98EF00]/60
              "
            />
          </div>
        </div>

        <div className="flex gap-3 pt-8">
          <Button
            type="submit"
            className="flex-1 rounded-xl py-2.5 font-medium"
            variant="contained"
          >
            ثبت
          </Button>

          <Button
            type="button"
            onClick={router.back}
            className="flex-1 rounded-xl py-2.5 font-medium"
            variant="cancel"
          >
            انصراف
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AddContentForm;