import { Colophon, Masthead } from '@/components/Chrome';
import { LiveMeter } from '@/components/LiveMeter';
import { Caption, Shot } from '@/components/Shot';
import { APP_URL } from '@/lib/site';
import { t, type Key, type Lang } from '@/lib/i18n';

/** Each section is one beat of a working day, and the rail says which. */
function Row({
  at,
  note,
  children,
  id,
}: {
  at: string;
  note: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section className="row" id={id}>
      <div className="row-gutter">
        <span className="gutter-time">{at}</span>
        <span className="gutter-note">{note}</span>
      </div>
      <div>{children}</div>
    </section>
  );
}

const FEATURES: { key: Key; title: Key; body: Key }[] = [
  { key: 'feat.offlineKey', title: 'feat.offlineTitle', body: 'feat.offlineBody' },
  { key: 'feat.syncKey', title: 'feat.syncTitle', body: 'feat.syncBody' },
  { key: 'feat.pwaKey', title: 'feat.pwaTitle', body: 'feat.pwaBody' },
  { key: 'feat.currencyKey', title: 'feat.currencyTitle', body: 'feat.currencyBody' },
  { key: 'feat.roundKey', title: 'feat.roundTitle', body: 'feat.roundBody' },
  { key: 'feat.langKey', title: 'feat.langTitle', body: 'feat.langBody' },
];

const SHORTCUTS: { keys: string[]; action: Key }[] = [
  { keys: ['S'], action: 'keys.start' },
  { keys: ['N'], action: 'keys.manual' },
  { keys: ['⌘', 'K'], action: 'keys.palette' },
  { keys: ['D'], action: 'keys.theme' },
];

export function LandingPage({ lang }: { lang: Lang }) {
  return (
    <>
      <Masthead lang={lang} />

      <main>
        <div className="sheet">
          {/* The fold carries the product twice: a meter that is genuinely
              running, and the app itself bleeding off the right edge. */}
          <Row at={t(lang, 'hero.at')} note={t(lang, 'hero.note')} id="day">
            <div className="hero">
              <div>
                <span className="eyebrow">{t(lang, 'hero.eyebrow')}</span>
                <h1 style={{ marginTop: 16 }}>
                  {t(lang, 'hero.titleA')}
                  <br />
                  {t(lang, 'hero.titleB')}
                </h1>
                <p className="lede">{t(lang, 'hero.lede')}</p>

                <LiveMeter lang={lang} />

                <div className="actions">
                  <a className="btn btn-primary" href={APP_URL}>
                    {t(lang, 'hero.cta')}
                  </a>
                  <a className="btn btn-ghost" href="#features">
                    {t(lang, 'hero.ctaSecondary')}
                  </a>
                </div>
                <p className="fineprint">{t(lang, 'hero.fineprint')}</p>
              </div>

              <Shot
                name="timer"
                lang={lang}
                alt={t(lang, 'hero.shotAlt')}
                width={1200}
                height={820}
                className="panel hero-shot"
              />
            </div>
          </Row>

          <Row at={t(lang, 'dash.at')} note={t(lang, 'dash.note')}>
            <h2>{t(lang, 'dash.title')}</h2>
            <p className="lede">{t(lang, 'dash.lede')}</p>
            <div className="panel-stack">
              <Shot name="stats" lang={lang} alt={t(lang, 'dash.statsAlt')} width={928} height={137} />
              <Shot name="chart" lang={lang} alt={t(lang, 'dash.chartAlt')} width={928} height={316} />
            </div>
            <Caption items={[t(lang, 'dash.cap1'), t(lang, 'dash.cap2'), t(lang, 'dash.cap3')]} />
          </Row>

          <Row at={t(lang, 'log.at')} note={t(lang, 'log.note')}>
            <h2>{t(lang, 'log.title')}</h2>
            <p className="lede">{t(lang, 'log.lede')}</p>
            <div className="panel-pair">
              <div>
                <Shot name="entries" lang={lang} alt={t(lang, 'log.tableAlt')} width={928} height={549} />
                <Caption items={[t(lang, 'log.cap1'), t(lang, 'log.cap2')]} />
              </div>
              <div>
                <Shot name="donut" lang={lang} alt={t(lang, 'log.donutAlt')} width={456} height={432} />
                <Caption items={[t(lang, 'log.cap3'), t(lang, 'log.cap4')]} />
              </div>
            </div>
          </Row>
        </div>

        <div className="slab">
          <div className="sheet">
            <Row at={t(lang, 'inv.at')} note={t(lang, 'inv.note')}>
              <div className="invoice-layout">
                <div>
                  <h2>{t(lang, 'inv.title')}</h2>
                  <p className="lede">{t(lang, 'inv.lede')}</p>
                  <Caption items={[t(lang, 'inv.cap1'), t(lang, 'inv.cap2'), t(lang, 'inv.cap3')]} />
                </div>
                <Shot name="invoice" lang={lang} alt={t(lang, 'inv.alt')} width={748} height={663} paper />
              </div>
            </Row>
          </div>
        </div>

        <div className="sheet">
          <Row at={t(lang, 'rep.at')} note={t(lang, 'rep.note')}>
            <h2>{t(lang, 'rep.title')}</h2>
            <p className="lede">{t(lang, 'rep.lede')}</p>
            <div className="panel-stack">
              <Shot name="repstats" lang={lang} alt={t(lang, 'rep.statsAlt')} width={928} height={214} />
              <Shot name="reptable" lang={lang} alt={t(lang, 'rep.tableAlt')} width={928} height={427} />
            </div>
            <Caption items={[t(lang, 'rep.cap1'), t(lang, 'rep.cap2'), t(lang, 'rep.cap3')]} />
          </Row>

          <Row at={t(lang, 'feat.at')} note={t(lang, 'feat.note')} id="features">
            <h2>{t(lang, 'feat.title')}</h2>
            <div className="features">
              {FEATURES.map((feature) => (
                <div className="feature" key={feature.key}>
                  <span className="feature-key">{t(lang, feature.key)}</span>
                  <h3>{t(lang, feature.title)}</h3>
                  <p>{t(lang, feature.body)}</p>
                </div>
              ))}
            </div>

            <ul className="shortcuts">
              {SHORTCUTS.map((shortcut) => (
                <li key={shortcut.action}>
                  <b>
                    {shortcut.keys.map((key) => (
                      <kbd key={key}>{key}</kbd>
                    ))}
                  </b>
                  {t(lang, shortcut.action)}
                </li>
              ))}
            </ul>
          </Row>
        </div>

        {/* The page bills itself, in the shape of the invoice footer the product
            prints — and the amount is the pricing. */}
        <div className="sheet total" id="pricing">
          <div className="total-rule" />
          <div className="total-line">
            <span className="total-label">{t(lang, 'price.total')}</span>
            <span className="total-amount">0 ₫</span>
          </div>
          <h2 style={{ marginTop: 32 }}>{t(lang, 'price.title')}</h2>
          <p className="lede">{t(lang, 'price.lede')}</p>
          <div className="actions">
            <a className="btn btn-primary" href={APP_URL}>
              {t(lang, 'price.cta')}
            </a>
          </div>
        </div>
      </main>

      <Colophon lang={lang} home />
    </>
  );
}
