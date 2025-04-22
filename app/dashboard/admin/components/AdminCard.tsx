import Image from "next/image";
import React from "react";

export default function AdminCard({ type }: { type: string }) {
  return (
    <div className="rounded-2xl odd:bg-gradient-to-r odd:from-purple-400 via-purple-500 odd:to-purple-700 even:bg-gradient-to-r even:from-orange-400 even:to-yellow-500 p-4 flex-1 min-w-[130px] text-white">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-white/80">{type}s</h2>
    </div>
  );
}
