"use client";

import { useRouter, useSearchParams } from "next/navigation";

const CategorySort = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort") || "default";

  const handleSort = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value === "default") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }

    const query = params.toString();

    router.push(query ? `?${query}` : window.location.pathname);
  };

  return (
    <select
      value={currentSort}
      onChange={(e) => handleSort(e.target.value)}
      className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none bg-white"
    >
      <option value="default">ডিফল্ট</option>
      <option value="low-high">কম বেশি</option>
      <option value="high-low">বেশি কম</option>
    </select>
  );
};

export default CategorySort;