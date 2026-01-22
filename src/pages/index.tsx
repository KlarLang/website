// src/pages/index.tsx
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';

import styles from './index.module.css';

function HeroHeader() {
  const { siteConfig } = useDocusaurusContext();
  const logoUrl = useBaseUrl('/img/logo.svg');

  return (
    <header className={styles.hero}>
      <div className={clsx('container', styles.heroContainer)}>
        {/* Left */}
        <div>
          <div className={styles.brandRow}>
            <img className={styles.logo} src={logoUrl} alt="Klar logo" />
            <Heading as="h1" className={styles.title}>
              {siteConfig.title}
            </Heading>
          </div>

          <p className={styles.tagline}>{siteConfig.tagline}</p>

          <p className={styles.pitch}>
            Klar is an experimental language focused on <strong>explicitness</strong>, <strong>rigor</strong>,
            and <strong>deterministic compilation</strong>. It treats diagnostics as a stable API — not a side effect.
          </p>

          <div className={styles.ctas}>
            <Link className="button button--primary button--lg" to="/docs/get-started">
              Get Started
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/diagnostics">
              Diagnostics
            </Link>
            <Link className={styles.textLink} to="/docs/language">
              Language Spec →
            </Link>
          </div>

          <div className={styles.metaRow}>
            <span className={styles.pill}>Strict by default</span>
            <span className={styles.pill}>No implicit behavior</span>
            <span className={styles.pill}>Polyglot orchestration</span>
          </div>
        </div>

        {/* Right: Klar Snapshot */}
        <div className={clsx('klarCardDark', styles.heroRight)}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: '1rem' }}>
            <div>
              <div style={{ fontWeight: 800, letterSpacing: '0.2px' }}>Klar Snapshot</div>
              <div className="muted" style={{ marginTop: '.25rem' }}>
                What you get — at a glance.
              </div>
            </div>

            <span
              className="klarBadgeError"
              style={{
                background: 'rgba(255,255,255,0.10)',
                border: '1px solid rgba(255,255,255,0.10)',
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              EXPERIMENTAL
            </span>
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.10)', margin: '0.9rem 0 1rem' }} />

          <div style={{ display: 'grid', gap: '.6rem', fontSize: '0.98rem', lineHeight: 1.5 }}>
            <div>
              <span style={{ color: 'rgba(255,255,255,0.72)', fontWeight: 700 }}>Core:</span>{' '}
              <span>Explicitness • Determinism • Diagnostics</span>
            </div>

            <div>
              <span style={{ color: 'rgba(255,255,255,0.72)', fontWeight: 700 }}>Guarantee:</span>{' '}
              <span>No silent fallbacks</span>
            </div>

            <div>
              <span style={{ color: 'rgba(255,255,255,0.72)', fontWeight: 700 }}>Diagnostics:</span>{' '}
              <span>Stable codes + actionable fixes</span>
            </div>

            <div>
              <span style={{ color: 'rgba(255,255,255,0.72)', fontWeight: 700 }}>Target:</span>{' '}
              <span>JVM / Java integration (today)</span>
            </div>
          </div>

          <div style={{ marginTop: '1rem', display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
            <Link className={styles.textLinkOnDark} to="/docs/intro">
              Read the intro →
            </Link>
            <Link className={styles.textLinkOnDark} to="/docs/diagnostics">
              See diagnostics →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function QuickStart() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>Quickstart</Heading>
          <p className={styles.sectionSubtitle}>
            Minimal steps. No marketing. Just a working path.
          </p>
        </div>

        <div className={styles.grid2}>
          <div className={clsx('card', styles.cardDark)}>
            <Heading as="h3" className={styles.cardTitle}>Install</Heading>
            <p className={styles.cardText}>
              Install tooling and verify the CLI. Keep it explicit.
            </p>

            <CodeBlock language="bash">
              {`# example
git clone https://github.com/KlarLang/loom
cd loom
./install.sh   # install.bat on Windows
loom install`}
            </CodeBlock>

            <div style={{ marginTop: '0.75rem' }}>
              <Link className={styles.textLink} to="/docs/get-started/install">
                Installation guide →
              </Link>
            </div>
          </div>

          <div className={clsx('klarCardDark', styles.cardDark)}>
            <div className={styles.cardDarkHeader}>Example</div>

            <CodeBlock language="klar">
              {`@Use("java")
public integer calculateSum(integer a, integer b) {
    return a + b;
}`}
            </CodeBlock>

            <div style={{ marginTop: '0.75rem' }}>
              <Link className={styles.textLinkOnDark} to="/docs/get-started/hello-world">
                Hello World →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>Principles</Heading>
          <p className={styles.sectionSubtitle}>
            Klar is strict by default because defaults shape behavior.
          </p>
        </div>

        <div className={styles.grid3}>
          <div className={clsx('card', styles.card)}>
            <Heading as="h3" className={styles.cardTitle}>Explicitness</Heading>
            <p className={styles.cardText}>If something matters, it must be written down.</p>
            <Link className={styles.textLink} to="/docs/language/rigor">Rigor & intent →</Link>
          </div>

          <div className={clsx('card', styles.card)}>
            <Heading as="h3" className={styles.cardTitle}>Determinism</Heading>
            <p className={styles.cardText}>No silent fallbacks. No guessed intent.</p>
            <Link className={styles.textLink} to="/docs/language/semantics">Semantics →</Link>
          </div>

          <div className={clsx('card', styles.card)}>
            <Heading as="h3" className={styles.cardTitle}>Diagnostics</Heading>
            <p className={styles.cardText}>Errors must explain what failed, why, and how to fix.</p>
            <Link className={styles.textLink} to="/docs/diagnostics">Diagnostics API →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterCTA() {
  return (
    <section className={styles.section}>
      <div className={clsx('container', styles.finalCta)}>
        <div>
          <Heading as="h2" className={styles.sectionTitle}>Ready to explore Klar?</Heading>
          <p className={styles.sectionSubtitle}>
            Start with the minimal path. Then go deep on rigor and diagnostics.
          </p>
        </div>

        <div className={styles.finalRight}>
          <Link className="button button--primary button--lg" to="/docs/get-started">
            Start Now
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/intro">
            Read Intro
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Klar is an experimental language focused on explicitness, rigor, deterministic compilation, and stable diagnostics.">
      <main>
        <HeroHeader />
        <QuickStart />
        <Principles />
        <FooterCTA />
      </main>
    </Layout>
  );
}
