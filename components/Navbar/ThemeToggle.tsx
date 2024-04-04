'use client';
import useThemeContext from '@/hooks/useThemeContext';
import { moon, sun } from '@/public';
import Image from 'next/image';

function ThemeToggle() {
  const { mode, setMode } = useThemeContext();
  const ToggleMode = () => {
    if (mode === 'light') setMode('dark');
    if (mode === 'dark') setMode('light');
  };
  return (
    <div className="relative">
      <Image
        role="button"
        alt="moon Icon"
        src={mode === 'dark' ? sun : moon}
        width={24}
        height={24}
        onClick={ToggleMode}
      />
    </div>
  );
}

export default ThemeToggle;
