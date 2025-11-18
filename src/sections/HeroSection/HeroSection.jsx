import React from 'react';
import Logo from '../../components/Logo/Logo';
import Icons from '../../components/Icons/Icons';
import { heroContent, KEY_MOMENT_IZWM_2026 } from '../../config/izwm2026Content';
import styles from './HeroSection.module.css';

function HeroSection() {
  const handleExploreEvents = () => {
    window.location.href = `/festival/events?keyMoment=${KEY_MOMENT_IZWM_2026}`;
  };

  const handleRegisterEvent = () => {
    window.location.href = `/festival/register?keyMoment=${KEY_MOMENT_IZWM_2026}`;
  };

  return (
    <section id="home" className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroLogo}>
              <Logo size="large" />
            </div>
            
            <p className={styles.heroSubtitle}>
              {heroContent.subtitle}
            </p>

            <div className={styles.heroMetadata}>
              <span className={styles.metaItem}>
                <Icons.Calendar size={18} />
                November 2026
              </span>
              <span className={styles.metaSeparator}>·</span>
              <span className={styles.metaItem}>
                <Icons.Globe size={18} />
                Global
              </span>
              <span className={styles.metaSeparator}>·</span>
              <span className={styles.metaItem}>
                <Icons.Users size={18} />
                Online & In-Person
              </span>
            </div>

            <div className={styles.heroCta}>
              <button onClick={handleExploreEvents} className="btn btn-primary btn-large">
                <Icons.Calendar size={20} />
                Explore Events
              </button>
              <button onClick={handleRegisterEvent} className="btn btn-outline-white btn-large">
                <Icons.Plus size={20} />
                Register Your Event
              </button>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <h3 className={styles.panelTitle}>IZWM at a Glance</h3>
            <div className={styles.stats}>
              {heroContent.stats.map((stat, index) => (
                <div key={index} className={styles.stat}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
            <p className={styles.panelNote}>
              <em>Expected participation for IZWM 2026</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

