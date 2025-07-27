import React, { useState } from 'react';
import './TopBar.css';

const TopBar: React.FC<{ onToggleDark: () => void; darkMode: boolean; language: string; onToggleLang: () => void }> = ({ onToggleDark, darkMode, language, onToggleLang }) => {
  return (
    <div className="topbar">
      <button className="topbar-btn" onClick={onToggleDark} title="Toggle dark mode">
        {darkMode ? '🌙' : '☀️'}
      </button>
      <button className="topbar-btn" onClick={onToggleLang} title="Switch language">
        {language === 'en' ? 'EN' : 'UA'}
      </button>
    </div>
  );
};

export default TopBar; 