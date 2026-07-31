import { Brand } from '@/components/Brand';
import { ThemeToggle } from '@/components/ThemeToggle';
import { APP_URL } from '@/lib/site';
import { otherLang, pathFor, t, type Lang } from '@/lib/i18n';

/**
 * The language switch is a plain link to the counterpart route, not a client
 * toggle: both languages are real pages, and a link is what a crawler follows
 * and a reader can bookmark.
 */
function Tools({ lang, path }: { lang: Lang; path: string }) {
  const other = otherLang(lang);
  return (
    <div className="masthead-tools">
      <a className="lang-btn" href={pathFor(other, path)} hrefLang={other} aria-label={`Switch to ${other === 'vi' ? 'Tiếng Việt' : 'English'}`}>
        {other.toUpperCase()}
      </a>
      <ThemeToggle label={t(lang, 'nav.theme')} />
      <a className="btn btn-primary btn-sm" href={APP_URL}>
        {t(lang, 'nav.openApp')}
      </a>
    </div>
  );
}

/**
 * `lang` is set on the page landmarks, not just on `<html>`.
 *
 * The root layout owns the single `<html>` tag for both languages and has to
 * hardcode one of them, which left every English page declaring itself
 * Vietnamese. The nearest `lang` wins, so tagging the landmarks is what tells a
 * screen reader — and Bing, which reads the attribute where Google reads
 * `hreflang` — that these pages are English.
 */
export function Masthead({ lang, path = '', nav = true }: { lang: Lang; path?: string; nav?: boolean }) {
  return (
    <header className="masthead" lang={lang}>
      <div className="sheet masthead-inner">
        <Brand href={pathFor(lang)} />
        {nav ? (
          <nav className="masthead-nav">
            <a href="#day">{t(lang, 'nav.day')}</a>
            <a href="#features">{t(lang, 'nav.features')}</a>
            <a href="#faq">{t(lang, 'nav.faq')}</a>
            <a href="#pricing">{t(lang, 'nav.pricing')}</a>
          </nav>
        ) : (
          <span />
        )}
        <Tools lang={lang} path={path} />
      </div>
    </header>
  );
}

export function Colophon({ lang, home = false }: { lang: Lang; home?: boolean }) {
  return (
    <footer className="colophon" lang={lang}>
      <div className="sheet colophon-inner">
        <Brand href={pathFor(lang)} />
        <div className="colophon-links">
          {home ? <a href={APP_URL}>app.timetracker.io.vn</a> : <a href={pathFor(lang)}>{t(lang, 'foot.home')}</a>}
          <a href={pathFor(lang, '/privacy')}>{t(lang, 'foot.privacy')}</a>
          <a href={pathFor(lang, '/terms')}>{t(lang, 'foot.terms')}</a>
          <span>{t(lang, 'foot.madeIn')}</span>
        </div>
      </div>
    </footer>
  );
}
