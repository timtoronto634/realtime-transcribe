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
    <select onChange={handleChange}>
      <option value={CHROME}>Chrome</option>
      <option value={OTHERS}>それ以外</option>
    </select>
  );
}
