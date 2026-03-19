import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'dark' // Set dark as default
  );

  useEffect(() => {
    console.log('Theme changed to:', theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Add dark class to html for tailwind dark: modifiers
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    console.log('Toggling theme from:', theme);
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      console.log('Next theme will be:', next);
      return next;
    });
  };

  return { theme, toggleTheme };
};
