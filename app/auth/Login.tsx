"use client";
import Image from "next/image";
import Button from "../base/buttons/button";
import { Link } from "lucide-react";
import { Github } from "@/public/icons/github";
import Google from "@/public/icons/google";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const handelLogin = () => {
    const Login = true;
    if (!Login) {
      console.log("error");
    } else {
      router.push("/home");
    }
  };
  return (
    <div className="min-h-screen  pt-16 bg-linear-to-1 from-[#4B7600] to-[#131316]">
      <div className="justify-between flex items-center flex-col">
        <div className="flex gap-7  flex-col items-center">
          <Image
            src="/LabelMelodia.svg"
            height={88}
            width={88}
            alt="لوگوی ملودیا"
          />
          <h1 className="text-3xl">! خوش آمدید</h1>
          <h2 className="font-bold whitespace-nowrap">
            : جهت ورود یا ثبت نام در ملودیا، شماره موبایل یا ایمیل خود را وارد
            کنید
          </h2>
          <input
            className="p-2 border-[#98EF00] rounded-xl border pr-24     focus:outline-none
    focus:ring-2
    focus:ring-[#98EF00]
    focus:border-[#98EF00]"
            type="tel"
            placeholder="09xxxxxxxxx"
            required
            maxLength={11}
            inputMode="numeric"
            pattern="09[0-9]{9}"
          ></input>
          <h3>
            . با ثبت‌نام در ملودیا،{" "}
            <span className="text-[#98EF00]">شرایط و قوانین</span> را قبول
            می‌کنم
          </h3>
        </div>
        <div className="flex flex-col gap-2 pt-52 ">
          <Button
            className="pr-24 pl-24 pt-3 pb-3 "
            onClick={handelLogin}
            variant="contained"
          >
            ورود/ثبت‌ نام
          </Button>
          <div className="bg-[#98EF00] mt-14 w-52 place-self-center h-px " />
          <div className="place-self-center flex gap-7 pt-6">
            <Google />
            <Github />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
