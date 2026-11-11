
"use client"

import { ScrollingWaveform } from "@/components/ui/waveform"
import { Play, Heart, MoreHorizontal, Music2 } from "lucide-react"
import Image from "next/image"

const Page = () => {
  return (
    <div
      className="
        flex min-h-screen items-center justify-center
        bg-linear-to-b from-[#EAF6D2] via-[#F7FAF0] to-white
        px-4 py-10
        dark:from-[#4B7600] dark:via-[#1E2413] dark:to-[#0D0E0A]
        sm:px-8 sm:py-16
      "
    >
      <main className="w-full max-w-5xl">
        <section
          className="
            grid grid-cols-1 items-center gap-6
            overflow-hidden rounded-3xl
            border border-white/[0.08]
            bg-[#151519] p-5
            shadow-2xl shadow-black/30
            sm:p-7
            lg:grid-cols-2 lg:gap-10 lg:p-10
          "
        >
          {/* Album Cover */}
          <div className="relative mx-auto aspect-square w-full max-w-[320px] overflow-hidden rounded-2xl bg-[#202024] shadow-xl sm:max-w-[380px] lg:max-w-none">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pc0RyGyFThsT5Oo_NdtxU6KBzZNSEj3qNdpxGXkZaQ&s=10"
              alt="Album cover"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 380px, 40vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs text-white/90 backdrop-blur-md">
              <Music2 size={14} />
              <span>NOW PLAYING</span>
            </div>
          </div>

          {/* Player Content */}
          <div className="flex min-w-0 flex-col justify-center lg:py-4">
            {/* Song Info */}
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <p className="truncate text-xl font-semibold tracking-tight text-white sm:text-2xl lg:text-3xl">
                  Your Favorite Song
                </p>

                <p className="mt-2 text-sm text-white/45 sm:text-base">
                  Artist Name · Single
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  aria-label="Add to favorites"
                  className="rounded-full p-2.5 text-white/50 transition hover:bg-white/[0.06] hover:text-[#98EF00]"
                >
                  <Heart size={20} />
                </button>

                <button
                  type="button"
                  aria-label="More options"
                  className="rounded-full p-2.5 text-white/50 transition hover:bg-white/[0.06] hover:text-white"
                >
                  <MoreHorizontal size={22} />
                </button>
              </div>
            </div>

            {/* Waveform */}
            <div className="mt-8 lg:mt-10">
              <ScrollingWaveform
                className="w-full"
                height={64}
                barWidth={3}
                barGap={2}
                speed={30}
                fadeEdges={true}
                barColor="#98EF00"
              />

              <div className="mt-3 flex justify-between text-xs tabular-nums text-white/35">
                <span>01:24</span>
                <span>04:12</span>
              </div>
            </div>

            {/* Playback Controls */}
            <div className="mt-7 flex items-center justify-center">
              <button
                type="button"
                aria-label="Play"
                className="
                  flex size-14 items-center justify-center
                  rounded-full bg-[#98EF00] text-[#131316]
                  shadow-lg shadow-[#98EF00]/10
                  transition duration-200
                  hover:scale-105 hover:bg-[#adff32]
                  active:scale-95
                  sm:size-16
                "
              >
                <Play size={24} fill="currentColor" className="ml-1" />
              </button>
            </div>

            {/* Footer */}
            <div className="mt-7 flex items-center justify-center gap-2 text-xs text-white/25">
              <span className="size-1.5 rounded-full bg-[#98EF00]" />
              <span>Experience music differently</span>
            </div>
          </div>
        </section>

        <p className="mt-5 text-center text-xs tracking-[0.2em] text-black/35 dark:text-white/35">
          MELODIA · MUSIC PLAYER
        </p>
      </main>
    </div>
  )
}

export default Page
