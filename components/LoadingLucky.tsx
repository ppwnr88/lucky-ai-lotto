import type { CSSProperties } from "react";

export default function LoadingLucky() {
  const orbitNumbers = ["09", "24", "56", "78", "123", "789"];

  return (
    <div
      className="relative mx-auto mt-8 w-full max-w-xl overflow-hidden rounded-2xl border border-yellow-200 bg-white/85 px-4 py-7 text-center shadow-2xl shadow-yellow-200/60 sm:px-8 sm:py-10"
      role="status"
      aria-live="polite"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.35),transparent_30%),radial-gradient(circle_at_80%_25%,rgba(34,197,94,0.25),transparent_28%),radial-gradient(circle_at_50%_95%,rgba(56,189,248,0.22),transparent_32%)] lucky-loading-glow"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-yellow-300 via-green-400 to-sky-400 lucky-loading-beam"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid h-48 w-48 place-items-center sm:h-60 sm:w-60">
        <div
          className="absolute inset-3 rounded-full border border-dashed border-yellow-300 lucky-orbit"
          aria-hidden="true"
        />
        <div
          className="absolute inset-8 rounded-full border border-green-300/80 lucky-orbit-reverse"
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

        <div className="relative grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-yellow-300 via-amber-400 to-green-400 text-5xl shadow-2xl shadow-yellow-300/70 sm:h-36 sm:w-36 sm:text-6xl lucky-crystal-ball">
          🔮
        </div>
      </div>

      <div className="relative mt-2">
        <p className="text-xl font-black text-gray-950 sm:text-2xl">
          กำลังเขย่าโถ AI...
        </p>
        <p className="mt-2 text-sm font-medium text-gray-600 sm:text-base">
          รอสักครู่ เดี๋ยวเลขจะมาเอง 😆
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
