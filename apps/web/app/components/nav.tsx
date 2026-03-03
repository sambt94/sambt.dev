// ABOUTME: Frosted glass navigation bar with sliding pill indicator.
// ABOUTME: Fixed at top-center, highlights active route with animated background pill.

import { NavLink, useLocation } from '@remix-run/react';
import { useRef, useEffect, useState, useCallback } from 'react';

const links = [
  { to: '/', label: 'About' },
  { to: '/writing', label: 'Writing' },
  { to: '/projects', label: 'Projects' },
  { to: '/work', label: 'Work' },
];

export function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const [pillStyle, setPillStyle] = useState({
    transform: '',
    width: 0,
    height: 0,
    opacity: 0,
  });

  const updatePill = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;
    const active = nav.querySelector<HTMLAnchorElement>('a.active');
    if (!active) return;
    const navRect = nav.getBoundingClientRect();
    const linkRect = active.getBoundingClientRect();
    setPillStyle({
      transform: `translate(${linkRect.left - navRect.left}px, ${linkRect.top - navRect.top}px)`,
      width: linkRect.width,
      height: linkRect.height,
      opacity: 1,
    });
  }, []);

  useEffect(() => {
    updatePill();
    window.addEventListener('resize', updatePill);
    return () => window.removeEventListener('resize', updatePill);
  }, [location.pathname, updatePill]);

  return (
    <nav
      ref={navRef}
      className="fixed top-sm sm:top-md left-1/2 -translate-x-1/2 flex gap-0.5 p-1 sm:p-1.5 bg-nav-bg border border-nav-border rounded-full text-xs sm:text-sm backdrop-blur-[20px] backdrop-saturate-[180%] z-[100] opacity-0 animate-nav-entrance transition-colors duration-500 ease-smooth"
    >
      <div
        className="absolute top-0 left-0 bg-pill rounded-full z-[1] transition-all duration-400 ease-smooth"
        style={pillStyle}
      />
      {links.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === '/'}
          className={({ isActive }) =>
            `relative z-[2] px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-full no-underline whitespace-nowrap transition-colors duration-300 ${
              isActive ? 'text-copy font-normal active' : 'text-muted hover:text-copy'
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}
