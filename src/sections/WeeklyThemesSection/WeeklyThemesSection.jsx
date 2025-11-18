import React from 'react';
import { weeklyThemes } from '../../config/izwm2026Content';
import styles from './WeeklyThemesSection.module.css';

function WeeklyThemesSection() {
  return (
    <section id="weekly-themes" className={styles.weeklyThemesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            IZWM 2026 Weekly Themes
          </h2>
          <p className={styles.sectionSubtitle}>
            Join us throughout January as we explore different aspects of zero waste finance and action.
            Each week focuses on a key theme with dedicated events and campaigns.
          </p>
        </div>

        <div className={styles.timeline}>
          {weeklyThemes.map((week, index) => (
            <div key={week.id} className={styles.weekCard}>
              <div className={styles.weekBadge} style={{ backgroundColor: week.color }}>
                {week.week}
              </div>
              
              <div className={styles.weekContent}>
                <div className={styles.weekDates}>{week.dates}</div>
                <h3 className={styles.weekTitle}>{week.title}</h3>
                {week.subtitle && (
                  <p className={styles.weekSubtitle}>{week.subtitle}</p>
                )}
                <p className={styles.weekDescription}>{week.description}</p>
              </div>

              {index < weeklyThemes.length - 1 && (
                <div className={styles.connector}></div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.callToAction}>
          <p className={styles.ctaText}>
            Want to organize an event for a specific week? Register your activity and tag it with the weekly theme!
          </p>
          <a href="#register" className="btn btn-secondary">
            Register Your Event
          </a>
        </div>
      </div>
    </section>
  );
}

export default WeeklyThemesSection;

