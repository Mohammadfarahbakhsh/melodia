
"use client";

import { useMemo, useState } from "react";
import {
  Search,
  Music2,
  Headphones,
  Heart,
  Play,
  Pause,
  MoreHorizontal,
  ListMusic,
  Clock3,
  Plus,
  Disc3,
} from "lucide-react";

const tabs = [
  { id: "all", label: "همه" },
  { id: "music", label: "آهنگ‌ها" },
  { id: "podcast", label: "پادکست‌ها" },
  { id: "favorites", label: "علاقه‌مندی‌ها" },
] as const;

type Tab = (typeof tabs)[number]["id"];

const initialItems = [
  {
    id: 1,
    title: "مرا ببوس",
    artist: "حسن گل‌نراقی",
    type: "music" as const,
    duration: "03:42",
    color: "from-amber-700/80 to-orange-950",
    favorite: true,
  },
  {
    id: 2,
    title: "سوغاتی",
    artist: "هایده",
    type: "music" as const,
    duration: "04:18",
    color: "from-rose-800 to-zinc-950",
    favorite: true,
  },
  {
    id: 3,
    title: "شب‌های تهران",
    artist: "ملودیا پادکست",
    type: "podcast" as const,
    duration: "28:15",
    color: "from-violet-800 to-indigo-950",
    favorite: false,
  },
  {
    id: 4,
    title: "گل سنگم",
    artist: "داریوش",
    type: "music" as const,
    duration: "04:05",
    color: "from-emerald-800 to-teal-950",
    favorite: false,
  },
  {
    id: 5,
    title: "یک فنجان آرامش",
    artist: "ملودیا پادکست",
    type: "podcast" as const,
    duration: "19:36",
    color: "from-blue-800 to-slate-950",
    favorite: true,
  },
  {
    id: 6,
    title: "بهار بهار",
    artist: "شهرام ناظری",
    type: "music" as const,
    duration: "05:12",
    color: "from-yellow-800 to-stone-950",
    favorite: false,
  },
];

const Page = () => {
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(initialItems);
  const [playingId, setPlayingId] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const matchesTab =
        activeTab === "all" ||
        (activeTab === "favorites" && item.favorite) ||
        item.type === activeTab;

      const matchesSearch =
        item.title.includes(search.trim()) ||
        item.artist.includes(search.trim());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, search, items]);

  const toggleFavorite = (id: number) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, favorite: !item.favorite }
          : item,
      ),
    );
  };

  const togglePlay = (id: number) => {
    setPlayingId((current) => (current === id ? null : id));
  };

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#F8F9F6] px-4 py-7 text-zinc-900 dark:bg-[#131316] dark:text-white sm:px-6 lg:px-10 lg:py-10"
    >
      <div className="mx-auto max-w-7xl space-y-9">

        {/* Page heading */}
        <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-[#78B900]">
              <ListMusic size={17} />
              فضای شخصی تو
            </div>

            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              کتابخانه‌ی من
            </h1>

            <p className="mt-3 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
              تمام موسیقی‌ها و پادکست‌های موردعلاقه‌ات، یک‌جا.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setActiveTab("all");
              setSearch("");
            }}
            className="flex h-11 items-center justify-center gap-2 self-start rounded-xl bg-[#98EF00] px-5 text-sm font-semibold text-black transition hover:bg-[#89D900] active:scale-[0.98] sm:self-auto"
          >
            <Plus size={18} />
            مرور کتابخانه
          </button>
        </section>

        {/* Summary cards */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-center gap-4 rounded-2xl border border-zinc-200/70 bg-white p-5 dark:border-white/[0.07] dark:bg-[#19191D]">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#98EF00]/10 text-[#78B900] dark:text-[#98EF00]">
              <Music2 size={23} />
            </div>
            <div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                آهنگ‌ها
              </p>
              <p className="mt-1 text-xl font-bold">
                {items.filter((item) => item.type === "music").length}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-zinc-200/70 bg-white p-5 dark:border-white/[0.07] dark:bg-[#19191D]">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-500">
              <Headphones size={23} />
            </div>
            <div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                پادکست‌ها
              </p>
              <p className="mt-1 text-xl font-bold">
                {items.filter((item) => item.type === "podcast").length}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-zinc-200/70 bg-white p-5 dark:border-white/[0.07] dark:bg-[#19191D]">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-500">
              <Heart size={23} />
            </div>
            <div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                علاقه‌مندی‌ها
              </p>
              <p className="mt-1 text-xl font-bold">
                {items.filter((item) => item.favorite).length}
              </p>
            </div>
          </div>
        </section>

        {/* Filters and search */}
        <section className="space-y-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              {tabs.map((tab) => {
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border-[#98EF00] bg-[#98EF00] text-black shadow-[0_3px_14px_rgba(152,239,0,0.15)]"
                        : "border-zinc-200 bg-white text-zinc-600 hover:border-[#98EF00]/50 dark:border-white/[0.08] dark:bg-white/[0.03] dark:text-zinc-300"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <label className="relative block w-full lg:max-w-xs">
              <Search
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
              />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="جستجو در کتابخانه..."
                className="h-11 w-full rounded-xl border border-zinc-200 bg-white pr-11 pl-4 text-sm outline-none transition focus:border-[#98EF00]/70 focus:ring-4 focus:ring-[#98EF00]/10 dark:border-white/[0.08] dark:bg-[#19191D]"
              />
            </label>
          </div>

          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">
              {activeTab === "favorites"
                ? "علاقه‌مندی‌های من"
                : activeTab === "music"
                  ? "آهنگ‌های من"
                  : activeTab === "podcast"
                    ? "پادکست‌های من"
                    : "مجموعه‌ی من"}
            </h2>

            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              {filteredItems.length} مورد
            </span>
          </div>
        </section>

        {/* Music grid */}
        {filteredItems.length > 0 ? (
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredItems.map((item) => {
              const isPlaying = playingId === item.id;

              return (
                <article
                  key={item.id}
                  className="group flex min-w-0 items-center gap-4 rounded-2xl border border-zinc-200/70 bg-white p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#98EF00]/40 hover:shadow-lg hover:shadow-black/[0.03] dark:border-white/[0.07] dark:bg-[#19191D] dark:hover:bg-[#1D1D21]"
                >
                  {/* Cover */}
                  <div
                    className={`relative flex size-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${item.color}`}
                  >
                    <Disc3
                      size={43}
                      strokeWidth={1.2}
                      className="text-white/80 transition-transform duration-500 group-hover:rotate-12"
                    />

                    <button
                      type="button"
                      aria-label={isPlaying ? "توقف" : "پخش"}
                      onClick={() => togglePlay(item.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 text-white opacity-0 transition-opacity hover:bg-black/45 group-hover:opacity-100 focus-visible:opacity-100"
                    >
                      {isPlaying ? (
                        <Pause size={23} fill="currentColor" />
                      ) : (
                        <Play
                          size={23}
                          fill="currentColor"
                          className="translate-x-0.5"
                        />
                      )}
                    </button>
                  </div>

                  {/* Track info */}
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center gap-2">
                      <span
                        className={`rounded-md px-2 py-1 text-[10px] font-medium ${
                          item.type === "music"
                            ? "bg-[#98EF00]/10 text-[#78B900] dark:text-[#98EF00]"
                            : "bg-violet-500/10 text-violet-600 dark:text-violet-300"
                        }`}
                      >
                        {item.type === "music" ? "موسیقی" : "پادکست"}
                      </span>

                      {isPlaying && (
                        <span className="size-1.5 animate-pulse rounded-full bg-[#98EF00]" />
                      )}
                    </div>

                    <h3 className="truncate text-sm font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 truncate text-xs text-zinc-500 dark:text-zinc-400">
                      {item.artist}
                    </p>

                    <div className="mt-2 flex items-center gap-1 text-[11px] text-zinc-400">
                      <Clock3 size={12} />
                      {item.duration}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 flex-col items-center gap-2">
                    <button
                      type="button"
                      aria-label={
                        item.favorite
                          ? "حذف از علاقه‌مندی‌ها"
                          : "افزودن به علاقه‌مندی‌ها"
                      }
                      aria-pressed={item.favorite}
                      onClick={() => toggleFavorite(item.id)}
                      className={`flex size-9 items-center justify-center rounded-xl transition-colors ${
                        item.favorite
                          ? "text-rose-500 hover:bg-rose-500/10"
                          : "text-zinc-400 hover:bg-rose-500/10 hover:text-rose-500"
                      }`}
                    >
                      <Heart
                        size={18}
                        fill={item.favorite ? "currentColor" : "none"}
                      />
                    </button>

                    <button
                      type="button"
                      aria-label="گزینه‌های بیشتر"
                      className="flex size-9 items-center justify-center rounded-xl text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-white/[0.07] dark:hover:text-white"
                    >
                      <MoreHorizontal size={19} />
                    </button>
                  </div>
                </article>
              );
            })}
          </section>
        ) : (
          <div className="flex min-h-64 flex-col items-center justify-center rounded-3xl border border-dashed border-zinc-300 px-6 text-center dark:border-white/10">
            <div className="mb-4 flex size-16 items-center justify-center rounded-2xl bg-[#98EF00]/10 text-[#78B900] dark:text-[#98EF00]">
              <Music2 size={29} />
            </div>

            <h3 className="text-base font-bold">
              چیزی اینجا پیدا نشد!
            </h3>

            <p className="mt-2 max-w-sm text-sm leading-7 text-zinc-500 dark:text-zinc-400">
              عبارت جستجو یا دسته‌بندی رو تغییر بده تا موارد بیشتری ببینی.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveTab("all");
              }}
              className="mt-5 rounded-xl bg-[#98EF00] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#89D900]"
            >
              نمایش همه
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;
