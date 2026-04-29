import type { CSSProperties } from "react";

export default function LoadingLucky() {
  const orbitNumbers = ["09", "24", "56", "78", "123", "789"];
  const jackpotReels = ["7", "9", "5"];
  const confetti = Array.from({ length: 18 }, (_, index) => index);
  const sparkles = Array.from({ length: 10 }, (_, index) => index);

  return (
    <div
      className="relative mx-auto mt-8 w-full max-w-2xl overflow-hidden rounded-2xl border border-yellow-200 bg-white/90 px-4 py-5 text-center shadow-2xl shadow-yellow-200/70 sm:px-8 sm:py-7"
      role="status"
      aria-live="polite"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.38),transparent_30%),radial-gradient(circle_at_80%_25%,rgba(34,197,94,0.27),transparent_28%),radial-gradient(circle_at_50%_95%,rgba(56,189,248,0.24),transparent_32%)] lucky-loading-glow"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-300 via-green-400 to-sky-400 lucky-loading-beam"
        aria-hidden="true"
      />
      <div className="absolute inset-0 lucky-stage-shimmer" aria-hidden="true" />
      <div className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-yellow-200/35 blur-3xl lucky-stage-pulse sm:h-96 sm:w-96" aria-hidden="true" />
      <div className="absolute -left-10 top-0 h-full w-36 origin-top rotate-12 bg-gradient-to-b from-yellow-200/60 via-yellow-100/15 to-transparent lucky-spotlight-left sm:w-48" aria-hidden="true" />
      <div className="absolute -right-10 top-0 h-full w-36 origin-top -rotate-12 bg-gradient-to-b from-sky-200/55 via-green-100/15 to-transparent lucky-spotlight-right sm:w-48" aria-hidden="true" />

      {confetti.map((item) => (
        <span
          key={item}
          className="lucky-confetti absolute top-0 rounded-sm"
          style={
            {
              "--x": `${(item * 37) % 100}%`,
              "--delay": `${item * 0.08}s`,
              "--duration": `${1.7 + (item % 5) * 0.18}s`,
              "--tilt": `${item % 2 === 0 ? 18 : -18}deg`,
              "--confetti-color":
                item % 4 === 0
                  ? "#facc15"
                  : item % 4 === 1
                    ? "#22c55e"
                    : item % 4 === 2
                      ? "#38bdf8"
                      : "#f97316",
            } as CSSProperties
          }
          aria-hidden="true"
        />
      ))}

      {sparkles.map((item) => (
        <span
          key={item}
          className="lucky-sparkle absolute text-lg font-black text-yellow-300"
          style={
            {
              "--x": `${8 + ((item * 23) % 84)}%`,
              "--y": `${10 + ((item * 29) % 68)}%`,
              "--delay": `${item * 0.17}s`,
            } as CSSProperties
          }
          aria-hidden="true"
        >
          ✦
        </span>
      ))}

      <div className="relative mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-black px-3 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-yellow-200 shadow-lg shadow-yellow-300/30 sm:text-sm">
        <span className="h-2 w-2 rounded-full bg-red-500 lucky-live-dot" />
        Jackpot AI
      </div>

      <div className="relative mx-auto grid min-h-[14rem] w-full max-w-md place-items-center sm:min-h-[16rem]">
        <div
          className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-yellow-300 lucky-orbit sm:h-60 sm:w-60"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 h-[9.5rem] w-[9.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-green-300/80 lucky-orbit-reverse sm:h-48 sm:w-48"
          aria-hidden="true"
        />

        {orbitNumbers.map((number, index) => (
          <span
            key={number}
            className="lucky-floating-number absolute rounded-full bg-black px-2.5 py-1 text-sm font-black text-yellow-200 shadow-lg shadow-yellow-300/30 sm:text-base"
            style={
              {
                "--angle": `${index * 60}deg`,
                "--counter-angle": `${index * -60}deg`,
                "--pop-angle": `${index * 60 + 18}deg`,
                "--pop-counter-angle": `${(index * 60 + 18) * -1}deg`,
                "--delay": `${index * 0.14}s`,
              } as CSSProperties
            }
          >
            {number}
          </span>
        ))}

        <div className="relative z-10 grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-green-400 text-5xl shadow-2xl shadow-yellow-300/70 sm:h-32 sm:w-32 sm:text-6xl lucky-crystal-ball">
          <span className="lucky-crystal-icon">🔮</span>
          <span className="absolute inset-4 rounded-full border border-white/45 lucky-crystal-ring" aria-hidden="true" />
        </div>
      </div>

      <div className="relative mx-auto -mt-12 flex w-full max-w-sm justify-center gap-2 sm:-mt-14">
        {jackpotReels.map((number, index) => (
          <div
            key={`${number}-${index}`}
            className="lucky-jackpot-reel grid h-14 flex-1 max-w-[5.25rem] place-items-center rounded-2xl border border-yellow-300 bg-black text-3xl font-black text-yellow-200 shadow-xl shadow-yellow-300/30 sm:h-16 sm:text-4xl"
            style={{ animationDelay: `${index * 0.16}s` }}
            aria-hidden="true"
          >
            {number}
          </div>
        ))}
      </div>

      <div className="relative mt-5">
        <p className="text-2xl font-black text-gray-950 sm:text-3xl">
          กำลังปลุกพลังเลขนำโชค...
        </p>
        <p className="mt-2 text-sm font-bold text-green-700 sm:text-base">
          หมุนวงล้อ เปิดดวง สาดแสงทองให้สุด 😆
        </p>
        <div className="mx-auto mt-5 flex w-full max-w-xs justify-center gap-2">
          {[0, 1, 2, 3, 4].map((item) => (
            <span
              key={item}
              className="h-2.5 flex-1 rounded-full bg-yellow-300 lucky-meter"
              style={{ animationDelay: `${item * 0.12}s` }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
