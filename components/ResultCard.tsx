import { LuckyResult } from "@/types/lucky";
import NumberBadge from "./NumberBadge";
import ShareImageButton from "./ShareImageButton";

type Props = {
  data: LuckyResult;
};

export default function ResultCard({ data }: Props) {
  return (
    <div className="mt-10 max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-6">
      {/* Summary */}
      <div>
        <h2 className="font-bold text-lg mb-2">🔍 วิเคราะห์</h2>
        <p className="text-gray-700">{data.summary}</p>
      </div>

      {/* Keywords */}
      <div>
        <h3 className="font-semibold mb-2">📌 คำสำคัญ</h3>
        <div className="flex flex-wrap gap-2">
          {data.keywords.map((k, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-gray-100 rounded-full text-sm"
            >
              {k}
            </span>
          ))}
        </div>
      </div>

      {/* Main 2D */}
      <div>
        <h3 className="font-semibold mb-2">🔥 เลขเด่น 2 ตัว</h3>
        <div className="flex gap-2 flex-wrap">
          {data.mainNumbers2D.map((n, i) => (
            <NumberBadge key={i} value={n} />
          ))}
        </div>
      </div>

      {/* Main 3D */}
      <div>
        <h3 className="font-semibold mb-2">🚀 เลขเด่น 3 ตัว</h3>
        <div className="flex gap-2 flex-wrap">
          {data.mainNumbers3D.map((n, i) => (
            <NumberBadge key={i} value={n} />
          ))}
        </div>
      </div>

      {/* Secondary */}
      <div>
        <h3 className="font-semibold mb-2">✨ เลขรอง</h3>
        <div className="flex gap-2 flex-wrap">
          {data.secondaryNumbers.map((n, i) => (
            <NumberBadge key={i} value={n} variant="secondary" />
          ))}
        </div>
      </div>

      {/* Lucky Level */}
      <div>
        <h3 className="font-semibold mb-2">🍀 ระดับความโชคดี</h3>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-green-400 h-3 rounded-full"
            style={{ width: `${data.luckyLevel}%` }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-1">{data.luckyLevel}/100</p>
      </div>

      {/* Caption */}
      <div className="text-center pt-4 border-t">
        <p className="text-lg font-medium">{data.caption}</p>
      </div>

      <ShareImageButton data={data} />
    </div>
  );
}