import type { CSSProperties } from "react";

export default function LoadingLucky() {
  const orbitNumbers = ["09", "24", "56", "78", "123", "789", "19", "88"];
  const runes = ["✦", "✧", "☾", "✺", "✷", "✹", "✦", "☽", "✧", "✺"];
  const cards = ["โชค", "ฝัน", "ดวง"];
  const mist = Array.from({ length: 7 }, (_, index) => index);
  const sparks = Array.from({ length: 18 }, (_, index) => index);

  return (
    <div
      className="fortune-overlay fixed inset-0 z-50 grid min-h-dvh place-items-center overflow-hidden px-4 py-6 text-center text-yellow-50"
      role="status"
      aria-live="polite"
      aria-label="กำลังทำนายเลขนำโชค"
    >
      <div className="fortune-backdrop" aria-hidden="true" />
      <div className="fortune-moon" aria-hidden="true" />
      <div className="fortune-veil fortune-veil-left" aria-hidden="true" />
      <div className="fortune-veil fortune-veil-right" aria-hidden="true" />

      {mist.map((item) => (
        <span
          key={item}
          className="fortune-mist"
          style={
            {
              "--x": `${-18 + item * 18}%`,
              "--y": `${62 + (item % 3) * 8}%`,
              "--delay": `${item * 0.35}s`,
              "--size": `${9 + (item % 4) * 2}rem`,
            } as CSSProperties
          }
          aria-hidden="true"
        />
      ))}

      {sparks.map((item) => (
        <span
          key={item}
          className="fortune-spark"
          style={
            {
              "--x": `${4 + ((item * 31) % 92)}%`,
              "--y": `${7 + ((item * 23) % 78)}%`,
              "--delay": `${item * 0.13}s`,
              "--scale": `${0.65 + (item % 4) * 0.18}`,
            } as CSSProperties
          }
          aria-hidden="true"
        >
          {runes[item % runes.length]}
        </span>
      ))}

      <div className="fortune-stage relative z-10 w-full max-w-5xl">
        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-300/50 bg-black/55 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.28em] text-yellow-200 shadow-2xl shadow-yellow-300/20 backdrop-blur sm:text-xs">
          <span className="fortune-live-dot h-2.5 w-2.5 rounded-full bg-red-500" />
          Fortune Teller Mode
        </div>

        <div className="fortune-table relative mx-auto grid min-h-[min(78dvh,46rem)] w-full place-items-center overflow-hidden rounded-[2rem] border border-yellow-300/35 bg-black/45 px-4 py-5 shadow-2xl shadow-black/60 backdrop-blur-md sm:px-8 sm:py-7">
          <div className="fortune-curtain fortune-curtain-left" aria-hidden="true" />
          <div className="fortune-curtain fortune-curtain-right" aria-hidden="true" />
          <div className="fortune-table-glow" aria-hidden="true" />

          {cards.map((card, index) => (
            <div
              key={card}
              className="fortune-card absolute hidden h-28 w-20 place-items-center rounded-2xl border border-yellow-300/60 bg-gradient-to-br from-zinc-950 via-emerald-950 to-black text-sm font-black text-yellow-200 shadow-2xl shadow-black/45 sm:grid"
              style={
                {
                  "--card-x": `${index === 0 ? -230 : index === 1 ? 230 : 0}px`,
                  "--card-y": `${index === 2 ? -190 : -112}px`,
                  "--card-rotate": `${index === 0 ? -16 : index === 1 ? 16 : 0}deg`,
                  "--delay": `${index * 0.28}s`,
                } as CSSProperties
              }
              aria-hidden="true"
            >
              <span className="text-2xl">☾</span>
              <span>{card}</span>
              <span className="text-lg">✦</span>
            </div>
          ))}

          <div className="fortune-oracle relative grid w-full max-w-3xl place-items-center">
            <div className="fortune-halo" aria-hidden="true" />
            <div className="fortune-rune-ring fortune-rune-ring-outer" aria-hidden="true" />
            <div className="fortune-rune-ring fortune-rune-ring-inner" aria-hidden="true" />

            {orbitNumbers.map((number, index) => (
              <span
                key={number}
                className="fortune-orbit-number absolute rounded-full border border-yellow-300/40 bg-black/75 px-3 py-1 text-sm font-black text-yellow-200 shadow-xl shadow-yellow-300/20 sm:text-base"
                style={
                  {
                    "--angle": `${index * 45}deg`,
                    "--counter-angle": `${index * -45}deg`,
                    "--delay": `${index * 0.09}s`,
                  } as CSSProperties
                }
              >
                {number}
              </span>
            ))}

            <div className="fortune-witch relative z-10" aria-hidden="true">
              <div className="fortune-hat" />
              <div className="fortune-face">🧙‍♀️</div>
              <div className="fortune-hands">
                <span />
                <span />
              </div>
            </div>

            <div className="fortune-crystal relative z-20 grid place-items-center">
              <div className="fortune-crystal-shine" aria-hidden="true" />
              <div className="fortune-crystal-core">🔮</div>
              <div className="fortune-crystal-numbers" aria-hidden="true">
                <span>7</span>
                <span>9</span>
                <span>5</span>
              </div>
            </div>
          </div>

          <div className="relative z-20 mt-3 max-w-2xl">
            <p className="text-[clamp(1.7rem,5vw,3.5rem)] font-black leading-tight text-yellow-100 drop-shadow-[0_0_18px_rgba(250,204,21,0.45)]">
              แม่มดกำลังเปิดคำทำนาย...
            </p>
            <p className="mx-auto mt-3 max-w-xl text-sm font-semibold text-emerald-100/90 sm:text-base">
              ส่องลูกแก้ว อ่านไพ่ และเรียกเลขนำโชคจากความฝันของคุณ
            </p>
            <div className="fortune-progress mx-auto mt-5 flex w-full max-w-sm gap-2">
              {[0, 1, 2, 3, 4, 5].map((item) => (
                <span
                  key={item}
                  className="h-2.5 flex-1 rounded-full bg-yellow-300"
                  style={{ animationDelay: `${item * 0.09}s` }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
