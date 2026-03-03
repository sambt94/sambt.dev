// ABOUTME: Dark/light theme toggle button with sun/moon icon.
// ABOUTME: Shows label on hover, positioned top-right with fade-in entrance.

import { useTheme } from './theme-provider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const icon = theme === 'dark' ? '☀' : '☽';
  const label = theme === 'dark' ? 'prefer light?' : 'prefer dark?';

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-sm left-1/2 -translate-x-1/2 z-[101] flex items-center gap-2 text-xs text-muted cursor-pointer select-none group opacity-0 animate-fade-in"
      style={{ animationDelay: '1.2s' }}
      aria-label={label}
    >
      <span className="text-lg grayscale transition-transform duration-400 ease-smooth group-hover:scale-[1.2]">
        {icon}
      </span>
      <span className="font-sans tracking-wide sm:opacity-0 sm:translate-x-1 sm:transition-all sm:duration-300 sm:ease-smooth sm:group-hover:opacity-100 sm:group-hover:translate-x-0">
        {label}
      </span>
    </button>
  );
}
