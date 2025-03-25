'use client';

import { useState } from "react";

import { Button } from './Button'

type TableProps = {
  headings: string[];
  data: { id: number, title: string, content: string | number }[]
}

export function Table({ headings, data }: TableProps) {
  const [allChecked, setAllChecked] = useState<boolean>(false);
  const [checkedOnes, setCheckedOnes] = useState<Set<number>>(new Set());

  const handleCheckAll = () => {
    const state = !allChecked

    setAllChecked(state);
    setCheckedOnes(
      new Set(
        state ?
          data.map(item => item.id) :
          []
      )
    )
  }

  const handleCheck = (id: number) => {
    setCheckedOnes((state) => {
      const data = new Set(state);
      data.add(id)

      return data;
    })
  }

  const handleUncheck = (id: number) => {
    setCheckedOnes(state => {
      const data = new Set(state);
      data.delete(id)

      return data;
    })
  }

  const handleRemove = () => {
  }

  return (
    <div className="flex flex-col items-end">
      <div className="mb-3">
        <Button onClick={handleRemove}>Apagar</Button>
      </div>
      <table className="w-full border-collapse border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-primary text-white">
            <th className="px-6 py-3 text-left text-sm font-semibold">
              <input type="checkbox" checked={allChecked} onChange={handleCheckAll} />
            </th>
            {headings.map((heading, index) => <th key={index} className="px-6 py-3 text-left text-sm font-semibold">{heading}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={item.id}
              className={`${index % 2 === 0 ? "bg-primary-lighten" : "bg-white"} hover:bg-primary-lighten transition-all`}
            >
              <td className="px-6 py-4 text-gray-900 text-sm">
                <input
                  type="checkbox"
                  checked={checkedOnes.has(item.id)}
                  onChange={e => e.target.checked ? handleCheck(item.id) : handleUncheck(item.id)}
                />
              </td>
              <td className="px-6 py-4 text-gray-700 text-sm">
                {item.title}
              </td>
              <td className="px-6 py-4 text-gray-700 text-sm">
                {item.content}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}