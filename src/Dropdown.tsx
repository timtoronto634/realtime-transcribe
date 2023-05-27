import React from 'react';

interface DropdownProps {
  isChrome: boolean,
  setIsChrome: React.Dispatch<React.SetStateAction<boolean>>,
}

const CHROME = "chrome"
const OTHERS = "others"

export function Dropdown({ setIsChrome }: DropdownProps) {
  const handleChange = (event: any) => {
    switch (event.target.value) {
      case CHROME:
        setIsChrome(true)
        break
      case OTHERS:
        setIsChrome(false)
        break
      default:
        break
    }
  }

  return (
    <div className="relative inline-block text-left">
      <select onChange={handleChange}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <option value={CHROME} className="text-gray-600">Chrome</option>
        <option value={OTHERS} className="text-gray-600">それ以外</option>
      </select>
    </div>
  );
}
