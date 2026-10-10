"use client";



interface SortProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}
const CategorySort = ({ sortBy, setSortBy }: SortProps) => {



  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="w-full sm:w-auto max-w-full border border-gray-200 rounded-lg px-2 sm:px-3 py-2 text-sm outline-none bg-white"
    >
      <option value="default">ডিফল্ট</option>
      <option value="low-high">কম বেশি</option>
      <option value="high-low">বেশি কম</option>
    </select>
  );
};

export default CategorySort;
