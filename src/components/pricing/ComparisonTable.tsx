import React from "react";
import type { ServiceComparison } from "@/lib/pricingData";

interface ComparisonTableProps {
  comparison: ServiceComparison;
}

export function ComparisonTable({ comparison }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-300 bg-white">
      <table className="w-full text-left text-xs sm:text-sm border-collapse">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-300 text-gray-900 font-bold">
            {comparison.columns.map((col, idx) => (
              <th key={idx} className="py-3.5 px-4 whitespace-nowrap">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {comparison.rows.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50/70 transition-colors">
              <td className="py-3.5 px-4 font-semibold text-gray-700 whitespace-nowrap">
                {row.feature}
              </td>
              {row.values.map((val, vIdx) => (
                <td key={vIdx} className="py-3.5 px-4 text-gray-700">
                  {val}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
