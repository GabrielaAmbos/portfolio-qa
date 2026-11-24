const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const isPortuguese = root.lang.toLowerCase().startsWith('pt');

try {
  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') root.setAttribute('data-theme', stored);
} catch {
  // The system preference remains available if browser storage is disabled.
}

const updateThemeLabel = () => {
  if (!themeToggle) return;
  const current = root.getAttribute('data-theme');
  const isDark = current ? current === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  themeToggle.setAttribute('aria-label', isPortuguese
    ? (isDark ? 'Ativar tema claro' : 'Ativar tema escuro')
    : (isDark ? 'Switch to light theme' : 'Switch to dark theme'));
};

updateThemeLabel();

themeToggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const isDark = current ? current === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  const next = isDark ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  updateThemeLabel();

  try {
    localStorage.setItem('theme', next);
  } catch {
    // The selected theme still applies for the current page view.
  }
});
