import React from 'react';

interface LanguageBarProps {
  languages: Record<string, number>;
}

const LanguageBar: React.FC<LanguageBarProps> = ({ languages }) => {
  if (!languages || Object.keys(languages).length === 0) {
    return <div>No language data available</div>;
  }

  // alculate total bytes
  const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0);

  // Sort by byte size and get all languages
  const sortedLanguages = Object.entries(languages)
    .sort(([, bytesA], [, bytesB]) => bytesB - bytesA);

  // Languages color
  const languageColors: Record<string, string> = {
    'JavaScript': '#f1e05a',
    'TypeScript': '#3178c6',
    'Python': '#3572a5',
    'Java': '#b07219',
    'C': '#555555',
    'C++': '#f34b7d',
    'C#': '#178600',
    'PHP': '#4f5d95',
    'Ruby': '#701516',
    'Swift': '#fa73fa',
    'Go': '#00add8',
    'Rust': '#dea584',
    'Scala': '#c22d40',
    'Kotlin': '#f18e33',
    'Objective-C': '#438eff',
    'Shell': '#89e051',
    'HTML': '#e34c26',
    'CSS': '#563d7c',
    'Sass': '#c6538c',
    'Less': '#1d365d',
    'Stylus': '#332d2d',
    'Vue': '#41b883',
    'React': '#61dafb',
    'Angular': '#dd0031',
    'Dockerfile': '#0db7ed',
    'Dart': '#00b4ab',
    'SQL': '#e24173',
    'Lua': '#000080',
    'Assembly': '#6e4c13',
    'R': '#198ce7',
    'MATLAB': '#bb1616',
    'Perl': '#3945a3',
    'Haskell': '#5d4f85',
    'Clojure': '#50799b',
    'Elixir': '#4e2a97',
    'Erlang': '#a90533',
    'Julia': '#a270ba',
    'Vim script': '#199c4b',
    'Jupyter Notebook': '#da5b0b',
    'CoffeeScript': '#244776',
    'Common Lisp': '#3fb68b',
    'Crystal': '#000100',
    'D': '#ba595e',
    'Delphi/Pascal': '#b0ce4e',
    'Eiffel': '#4d6977',
    'F#': '#b845fc',
    'Fortran': '#4d41b1',
    'Groovy': '#4298b8',
    'Haxe': '#df7900',
    'JSONiq': '#40d47e',
    'Lasso': '#999999',
    'Logtalk': '#4400ff',
    'NewLisp': '#87aed7',
    'Nim': '#37775b',
    'OCaml': '#3be133',
    'Octave': '#079abc',
    'PureScript': '#1d222d',
    'Scheme': '#1e4aec',
    'Terra': '#00004c',
    'Verilog': '#b2b7f8',
    'VHDL': '#54395e',
    'WebAssembly': '#654ff0',
    'Markdown': '#083fa1',
    'MDX': '#fcb32c',
    'TeX': '#3D6117',
    'Batchfile': '#C1F12E',
    'PowerShell': '#012456',
    'Makefile': '#427819',
    'JSON': '#292929',
    'YAML': '#cb171e',
    'TOML': '#9c4221',
    'XML': '#0060ac',
    'GraphQL': '#e10098',
    'SCSS': '#c6538c',
    'Twig': '#c1d026',
    'Liquid': '#67b8de',
    'Handlebars': '#f7931e',
    'Pug': '#a86454',
    'Astro': '#ff5d01',
    'Svelte': '#ff3e00',
    'Racket': '#3c5caa',
    'Zig': '#ec915c',
    'Elm': '#60b5cc',
    'Reason': '#ff5847',
    'Ada': '#02f88c',
    'Awk': '#c30e9b',
    'Procfile': '#3B003B',
  };

  // 生成确定性颜色的辅助函数（基于语言名称）
  const getDeterministicColor = (name: string): string => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = (hash & 0x00FFFFFF).toString(16).toUpperCase();
    return '#' + '000000'.substring(0, 6 - color.length) + color;
  };

  // Get main language
  const dominantLanguage = sortedLanguages[0];
  const dominantPercentage = dominantLanguage ? (dominantLanguage[1] / totalBytes) * 100 : 0;
  const dominantColor = dominantLanguage ? (languageColors[dominantLanguage[0]] || getDeterministicColor(dominantLanguage[0])) : '#999';

  return (
    <div className="w-full">
      {/* Main language */}
      <div className="flex justify-center items-center mb-4">
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full inline-block"
            style={{ backgroundColor: dominantColor }}
            title={dominantLanguage?.[0]}
          ></span>
          <span className="text-sm font-medium">{dominantLanguage?.[0] || 'Unknown'}</span>
          <span className="text-xs text-muted-foreground">({dominantPercentage.toFixed(1)}%)</span>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="h-2.5 rounded-full flex">
          {sortedLanguages.map(([language, bytes], index) => {
            const percentage = (bytes / totalBytes) * 100;
            const color = languageColors[language] || getDeterministicColor(language);

            return (
              <div
                key={language}
                className="first:rounded-l-full last:rounded-r-full"
                style={{
                  width: `${percentage}%`,
                  backgroundColor: color,
                }}
                title={`${language}: ${percentage.toFixed(1)}%`}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {sortedLanguages.slice(0, 5).map(([language, bytes]) => { // 显示前5种语言
          const percentage = (bytes / totalBytes) * 100;
          const color = languageColors[language] || getDeterministicColor(language);

          return (
            <div key={language} className="flex items-center gap-1 text-xs">
              <span 
                className="w-3 h-3 rounded-full inline-block" 
                style={{ backgroundColor: color }}
                title={language}
              ></span>
              <span>{language} {percentage.toFixed(1)}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageBar;