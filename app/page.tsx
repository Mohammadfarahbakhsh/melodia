import Image from "next/image";

const Page = () => {
    return (
        <div className="bg-linear-to-b/srgb from-[#4B7600] to-[#131316] h-screen">
            <div className="flex justify-center">
            <Image src="/LabelMelodia.svg" width={50} height={50} alt="لوگوی ملودیا"></Image>
            <h1 className="text-4xl">
         ملودیا 
            </h1>
            </div>
            <div>
                <button>
                    بزن بریم
                </button>
            </div>
        </div>
    );
}

export default Page;
