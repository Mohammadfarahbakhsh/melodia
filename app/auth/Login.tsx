import Image from "next/image";
import Button from "../base/buttons/button";

const Login = () => {
  return (
    <div className="min-h-screen bg-linear-to-1 from-[#4B7600] to-[#131316]">
      <div className="flex flex-col items-center">
        <Image
          src="/LabelMelodia.svg"
          height={88}
          width={88}
          alt="لوگوی ملودیا"
        />
        <h1 className="text-3xl">! خوش امدید</h1>
        <h2 className="font-bold">
          : جهت ورود یا ثبت نام در ملودیا، شماره موبایل یا ایمیل خود را وارد
          کنید
        </h2>
        <input
          className="p-2"
          type="tel"
          placeholder="09xxxxxxxxx"
          required
          maxLength={11}
          inputMode="numeric"
          pattern="09[0-9]{9}"
        ></input>
        <h3>
          . با ثبت‌نام در ملودیا،{" "}
          <span className="text-[#98EF00]">شرایط و قوانین</span> را قبول می‌کنم
        </h3>
        <Button className="p-3" variant="contained">ورود/ثبت‌ نام</Button>
      </div>
    </div>
  );
};

export default Login;
