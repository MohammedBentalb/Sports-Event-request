'use Client';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';

export default function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('using theme context outside the context');
  return context;
}
