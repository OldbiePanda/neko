// App entry point for routes and navigation
import React, { useEffect, useState } from 'react';
import Presentation from './screens/Presentation/Presentation';
import TopBar from './components/TopBar';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState<'en' | 'ua'>('en');

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleToggleDark = () => setDarkMode((d) => !d);
  const handleToggleLang = () => setLanguage((l) => (l === 'en' ? 'ua' : 'en'));

  return (
    <div>
      <TopBar
        onToggleDark={handleToggleDark}
        darkMode={darkMode}
        language={language}
        onToggleLang={handleToggleLang}
      />
      <Presentation language={language} />
    </div>
  );
};

export default App; 