import React, { useState, useEffect, useRef } from 'react';
import { 
  Settings, Type, Sun, Eye, RotateCcw, X, 
  MousePointer2, Link as LinkIcon, CaseUpper, 
  AlignJustify, PauseCircle, MoveVertical
} from 'lucide-react';
import { UniversalAccessIcon } from './ui/UniversalAccessIcon';

export function AccessibilityWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState({
    fontSize: 100,
    grayscale: false,
    highContrast: false,
    dyslexiaFont: false,
    bigCursor: false,
    linkHighlight: false,
    textSpacing: false,
    stopAnimations: false,
    readingGuide: false,
  });

  const guideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Font Size
    document.documentElement.style.fontSize = `${settings.fontSize}%`;

    // Class Toggles
    const toggleClass = (className: string, active: boolean) => {
      if (active) document.body.classList.add(className);
      else document.body.classList.remove(className);
    };

    toggleClass('grayscale-mode', settings.grayscale);
    toggleClass('high-contrast-mode', settings.highContrast);
    toggleClass('dyslexia-font-mode', settings.dyslexiaFont);
    toggleClass('big-cursor-mode', settings.bigCursor);
    toggleClass('link-highlight-mode', settings.linkHighlight);
    toggleClass('text-spacing-mode', settings.textSpacing);
    toggleClass('stop-animations-mode', settings.stopAnimations);
    toggleClass('reading-guide-mode', settings.readingGuide);

  }, [settings]);

  // Reading Guide Mouse Follow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (settings.readingGuide && guideRef.current) {
        guideRef.current.style.top = `${e.clientY}px`;
      }
    };

    if (settings.readingGuide) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [settings.readingGuide]);

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const resetSettings = () => {
    setSettings({
      fontSize: 100,
      grayscale: false,
      highContrast: false,
      dyslexiaFont: false,
      bigCursor: false,
      linkHighlight: false,
      textSpacing: false,
      stopAnimations: false,
      readingGuide: false,
    });
  };

  return (
    <>
      {/* Reading Guide Overlay Element */}
      <div id="reading-guide-overlay" ref={guideRef}></div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden">
        {/* Menu Panel */}
        {isOpen && (
          <div className="mb-4 bg-white rounded-2xl shadow-2xl border border-gray-200 p-0 w-80 md:w-96 animate-in slide-in-from-bottom-5 fade-in duration-200 overflow-hidden max-h-[80vh] flex flex-col">
            {/* Header */}
            <div className="bg-[#2d1b69] text-white p-4 flex justify-between items-center">
              <h3 className="font-bold flex items-center text-lg">
                <UniversalAccessIcon size={20} className="mr-2" />
                Herramientas de Accesibilidad
              </h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                aria-label="Cerrar menú de accesibilidad"
              >
                <X size={20} />
              </button>
            </div>

            <div className="overflow-y-auto p-4 space-y-6 custom-scrollbar">
              {/* Font Size Section */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-gray-700 uppercase tracking-wider flex items-center">
                  <Type size={16} className="mr-2 text-[#e91e8c]" />
                  Tamaño de Texto
                </label>
                <div className="flex items-center space-x-2 bg-gray-100 rounded-xl p-1.5">
                  <button
                    onClick={() => setSettings(p => ({ ...p, fontSize: Math.max(80, p.fontSize - 10) }))}
                    className="flex-1 py-2 text-sm font-bold text-gray-600 hover:bg-white hover:shadow-sm rounded-lg transition-all"
                    aria-label="Disminuir texto"
                  >
                    A-
                  </button>
                  <span className="text-sm font-mono text-[#2d1b69] font-bold w-12 text-center">{settings.fontSize}%</span>
                  <button
                    onClick={() => setSettings(p => ({ ...p, fontSize: Math.min(150, p.fontSize + 10) }))}
                    className="flex-1 py-2 text-sm font-bold text-gray-600 hover:bg-white hover:shadow-sm rounded-lg transition-all"
                    aria-label="Aumentar texto"
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* Visual Toggles Grid */}
              <div className="grid grid-cols-2 gap-3">
                <MenuButton 
                  icon={Eye} 
                  label="Escala de Grises" 
                  active={settings.grayscale} 
                  onClick={() => toggleSetting('grayscale')} 
                />
                <MenuButton 
                  icon={Sun} 
                  label="Alto Contraste" 
                  active={settings.highContrast} 
                  onClick={() => toggleSetting('highContrast')} 
                />
                <MenuButton 
                  icon={LinkIcon} 
                  label="Resaltar Enlaces" 
                  active={settings.linkHighlight} 
                  onClick={() => toggleSetting('linkHighlight')} 
                />
                <MenuButton 
                  icon={MousePointer2} 
                  label="Cursor Grande" 
                  active={settings.bigCursor} 
                  onClick={() => toggleSetting('bigCursor')} 
                />
                <MenuButton 
                  icon={CaseUpper} 
                  label="Fuente Dislexia" 
                  active={settings.dyslexiaFont} 
                  onClick={() => toggleSetting('dyslexiaFont')} 
                />
                 <MenuButton 
                  icon={AlignJustify} 
                  label="Espaciado Texto" 
                  active={settings.textSpacing} 
                  onClick={() => toggleSetting('textSpacing')} 
                />
                <MenuButton 
                  icon={PauseCircle} 
                  label="Parar Animación" 
                  active={settings.stopAnimations} 
                  onClick={() => toggleSetting('stopAnimations')} 
                />
                <MenuButton 
                  icon={MoveVertical} 
                  label="Guía de Lectura" 
                  active={settings.readingGuide} 
                  onClick={() => toggleSetting('readingGuide')} 
                />
              </div>
            </div>

            {/* Footer / Reset */}
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <button
                onClick={resetSettings}
                className="w-full py-2.5 flex items-center justify-center text-sm font-semibold text-gray-600 hover:text-[#e91e8c] hover:bg-white hover:shadow-sm rounded-xl transition-all border border-gray-200"
              >
                <RotateCcw size={16} className="mr-2" />
                Restablecer todo
              </button>
            </div>
          </div>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#00d4ff]/30 border-2 border-white ${
            isOpen 
              ? 'bg-gray-800 text-white rotate-90' 
              : 'bg-[#2d1b69] text-white hover:bg-[#e91e8c]'
          }`}
          aria-label="Opciones de accesibilidad"
          title="Herramientas de Accesibilidad"
        >
          {isOpen ? <X size={28} /> : <UniversalAccessIcon size={32} className="animate-pulse" />}
        </button>
      </div>
    </>
  );
}

// Helper Component for consistent buttons
function MenuButton({ icon: Icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`p-3 rounded-xl flex flex-col items-center justify-center space-y-2 transition-all border-2 ${
        active 
          ? 'bg-[#e91e8c]/10 border-[#e91e8c] text-[#e91e8c]' 
          : 'bg-white text-gray-600 border-gray-100 hover:border-[#00d4ff] hover:text-[#00d4ff]'
      }`}
    >
      <Icon size={24} strokeWidth={active ? 2.5 : 2} />
      <span className="text-xs font-bold text-center leading-tight">{label}</span>
    </button>
  );
}
