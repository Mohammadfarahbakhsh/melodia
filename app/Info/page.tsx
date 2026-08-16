
//  const data=await fetch("https://jsonplaceholder.typicode.com/posts/1",{
    //     cache:"force-cache"
    //  })
    //  console.log(data);
    
    // const json=await data.json()
"use client";

import { Github } from "@/public/icons/github";
import {
  Headphones,
  Music2,
  Mic2,
  Code2,
  Database,
  Sparkles,
  Layers3,
  ArrowLeft,
} from "lucide-react";

const Info = () => {
  return (
    <main
      dir="rtl"
      className="
        min-h-screen
        bg-zinc-50
        px-5
        py-16
        text-zinc-900
        transition-colors
        duration-300

        dark:bg-[#070708]
        dark:text-white
      "
    >
      <div className="mx-auto max-w-6xl">

        {/* Hero */}
        <section
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-zinc-200
            bg-white
            px-6
            py-16
            text-center
            shadow-sm
            transition-colors
            duration-300

            dark:border-white/10
            dark:bg-[#0d0d10]
            dark:shadow-none
          "
        >
          <div
            className="
              absolute
              left-1/2
              top-0
              h-72
              w-72
              -translate-x-1/2
              rounded-full
              bg-[#98EF00]/10
              blur-[120px]
            "
          />

          <div className="relative">
            <div
              className="
                mx-auto
                mb-6
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-2xl
                border
                border-[#98EF00]/30
                bg-[#98EF00]/10
              "
            >
              <Music2
                size={42}
                className="text-[#65a300] dark:text-[#98EF00]"
              />
            </div>

            <h1 className="text-4xl font-bold md:text-6xl">
              ملودیا
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              موسیقی رو جور دیگه‌ای تجربه کن.
              <br />
              یک تجربه مدرن برای کشف، شنیدن و لذت بردن از موسیقی و پادکست.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="mt-8 grid gap-6 md:grid-cols-2">

          <InfoCard
            icon={<Headphones />}
            title="ملودیا چیست؟"
          >
            <p>
              ملودیا یک پلتفرم موسیقی است که با هدف ساخت یک تجربه
              ساده، سریع و زیبا برای گوش دادن به موسیقی و پادکست
              ساخته شده است.
            </p>

            <p className="mt-4">
              تمرکز ملودیا فقط روی پخش موسیقی نیست؛ هدف این است که
              پیدا کردن محتوای صوتی مورد علاقه، ساخت کتابخانه شخصی
              و تجربه شنیدن، تا جای ممکن ساده و لذت‌بخش باشد.
            </p>
          </InfoCard>

          <InfoCard
            icon={<Sparkles />}
            title="هدف ملودیا"
          >
            <p>
              هدف این پروژه ساخت یک محصول واقعی و قابل توسعه است؛
              محصولی که از سمت رابط کاربری تا Backend و زیرساخت،
              با معماری مناسب یک پروژه واقعی ساخته شود.
            </p>

            <p className="mt-4">
              ملودیا به عنوان یک پروژه در حال توسعه ساخته می‌شود
              و قابلیت‌های جدید به مرور به آن اضافه خواهند شد.
            </p>
          </InfoCard>

        </section>

        {/* Features */}
        <section className="mt-8">
          <div className="mb-6">
            <span className="text-sm text-[#65a300] dark:text-[#98EF00]">
              FEATURES
            </span>

            <h2 className="mt-2 text-3xl font-bold">
              چیزهایی که در ملودیا می‌سازیم
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <Feature
              icon={<Music2 />}
              title="موسیقی"
              description="کشف و گوش دادن به موسیقی در یک محیط ساده و مدرن."
            />

            <Feature
              icon={<Mic2 />}
              title="پادکست"
              description="یک فضای اختصاصی برای محتوای صوتی و پادکست."
            />

            <Feature
              icon={<Headphones />}
              title="کتابخانه"
              description="مدیریت و دسترسی راحت‌تر به محتوای مورد علاقه."
            />

            <Feature
              icon={<Sparkles />}
              title="هوشمند"
              description="آمادگی برای اضافه شدن قابلیت‌های هوش مصنوعی."
            />

          </div>
        </section>

        {/* Technology */}
        <section
          className="
            mt-12
            rounded-3xl
            border
            border-zinc-200
            bg-white
            p-7
            shadow-sm
            transition-colors
            duration-300

            dark:border-white/10
            dark:bg-[#0d0d10]
            dark:shadow-none

            md:p-10
          "
        >
          <div className="mb-8">
            <span className="text-sm text-[#65a300] dark:text-[#98EF00]">
              TECHNOLOGY
            </span>

            <h2 className="mt-2 text-3xl font-bold">
              تکنولوژی پشت ملودیا
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-zinc-600 dark:text-zinc-400">
              ملودیا به عنوان یک پروژه Full-Stack ساخته می‌شود و
              هدف آن استفاده از تکنولوژی‌های مدرن وب است.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">

            <Tech
              icon={<Code2 />}
              title="Frontend"
              items={[
                "Next.js",
                "React",
                "TypeScript",
                "Tailwind CSS",
              ]}
            />

            <Tech
              icon={<Database />}
              title="Database"
              items={[
                "PostgreSQL",
                "Prisma",
              ]}
            />

            <Tech
              icon={<Layers3 />}
              title="Data & API"
              items={[
                "REST API",
                "TanStack Query",
                "Axios",
              ]}
            />

            <Tech
              icon={<Code2 />}
              title="Infrastructure"
              items={[
                "Docker",
                "Git",
                "GitHub",
                "Vercel",
              ]}
            />

          </div>
        </section>

        {/* Stats */}
        <section className="mt-8 grid gap-4 md:grid-cols-3">

          <Stat
            number="01"
            title="در حال توسعه"
            description="ملودیا هنوز در حال توسعه و اضافه شدن قابلیت‌های جدید است."
          />

          <Stat
            number="∞"
            title="قابل توسعه"
            description="معماری پروژه با هدف اضافه کردن قابلیت‌های بیشتر طراحی می‌شود."
          />

          <Stat
            number="AI"
            title="آینده هوشمند"
            description="قابلیت‌های مبتنی بر هوش مصنوعی می‌توانند بخشی از آینده ملودیا باشند."
          />

        </section>

        {/* CTA */}
        <section
          className="
            mt-12
            rounded-3xl
            border
            border-[#98EF00]/20
            bg-[#98EF00]/5
            p-8
            text-center
          "
        >
          <h2 className="text-2xl font-bold">
            ملودیا هنوز اول راهه.
          </h2>

          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            این پروژه با هدف ساختن یک تجربه متفاوت برای موسیقی
            در حال توسعه است.
          </p>

          <a
            href="https://github.com/Mohammadfarahbakhsh/melodia"
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-[#98EF00]
              px-6
              py-3
              font-semibold
              text-black
              transition
              hover:scale-105
            "
          >
            <Github  />
            مشاهده پروژه در GitHub
            <ArrowLeft size={18} />
          </a>
        </section>

      </div>
    </main>
  );
};

const InfoCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-zinc-200
        bg-white
        p-7
        shadow-sm
        transition-colors
        duration-300

        dark:border-white/10
        dark:bg-[#0d0d10]
        dark:shadow-none
      "
    >
      <div
        className="
          mb-5
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-xl
          bg-[#98EF00]/10
          text-[#65a300]

          dark:text-[#98EF00]
        "
      >
        {icon}
      </div>

      <h2 className="mb-4 text-2xl font-bold">
        {title}
      </h2>

      <div className="leading-8 text-zinc-600 dark:text-zinc-400">
        {children}
      </div>
    </div>
  );
};

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => {
  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-zinc-200
        bg-white
        p-6
        shadow-sm
        transition
        duration-300

        hover:-translate-y-1
        hover:border-[#98EF00]/40

        dark:border-white/10
        dark:bg-[#0d0d10]
        dark:shadow-none
      "
    >
      <div
        className="
          mb-5
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-[#98EF00]/10
          text-[#65a300]
          transition

          group-hover:bg-[#98EF00]
          group-hover:text-black

          dark:text-[#98EF00]
        "
      >
        {icon}
      </div>

      <h3 className="text-lg font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-500">
        {description}
      </p>
    </div>
  );
};

const Tech = ({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-zinc-200
        bg-zinc-50
        p-5
        transition-colors

        dark:border-white/10
        dark:bg-black/20
      "
    >
      <div className="flex items-center gap-3">
        <div className="text-[#65a300] dark:text-[#98EF00]">
          {icon}
        </div>

        <h3 className="font-bold">
          {title}
        </h3>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="
              rounded-full
              bg-zinc-200
              px-3
              py-1
              text-xs
              text-zinc-600

              dark:bg-white/5
              dark:text-zinc-400
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Stat = ({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-zinc-200
        bg-white
        p-6
        shadow-sm
        transition-colors

        dark:border-white/10
        dark:bg-[#0d0d10]
        dark:shadow-none
      "
    >
      <div className="text-3xl font-bold text-[#65a300] dark:text-[#98EF00]">
        {number}
      </div>

      <h3 className="mt-4 font-bold">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-zinc-500">
        {description}
      </p>
    </div>
  );
};

export default Info;
