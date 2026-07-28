import Link from "next/link";
import Button from "./base/buttons/button";

export default function NotFound() {
  return (
    <div className="flex w-auto  h-44 shadow-lg place-self-center flex-col rounded-lg  text-[#98EF00]">
      <div className="pt-40">
        <div className="border flex items-center flex-col border-[#98EF00] min-w-3xl min-h-[60vh]">

        <h1 className="pt-7 text-5xl">ارور ۴۰۴</h1>
    <div>
              <p>صفحه مورد نظر یافت نشد</p>
        <Button className="p-2" variant="outline">
          صفحه اصلی
        </Button>
    </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <Link className='place-self-center' href="/">صفحه اصلی</Link> */
}
