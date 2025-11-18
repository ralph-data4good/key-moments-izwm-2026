import React, { useState } from 'react';
import { weeklyThemes } from '../../config/izwm2026Content';
import Icons from '../../components/Icons/Icons';
import styles from './WeeklyThemesSection.module.css';

function WeeklyThemesSection() {
  const [selectedWeek, setSelectedWeek] = useState(weeklyThemes[0]);

  return (
    <section id="weekly-themes" className={styles.weeklyThemesSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            IZWM 2026 Weekly Themes
          </h2>
          <p className={styles.sectionSubtitle}>
            Each week in January focuses on a different aspect of zero waste. 
            Click a week to learn more and find related events.
          </p>
        </div>

        <div className={styles.weeklyContent}>
          {/* Horizontal Week Selector */}
          <div className={styles.weekSelector}>
            {weeklyThemes.map((week) => (
              <button
                key={week.id}
                className={`${styles.weekTab} ${selectedWeek.id === week.id ? styles.weekTabActive : ''}`}
                onClick={() => setSelectedWeek(week)}
                style={{
                  borderBottomColor: selectedWeek.id === week.id ? week.color : 'transparent'
                }}
              >
                <div className={styles.weekNumber} style={{ backgroundColor: week.color }}>
                  {week.week.replace('Week ', '')}
                </div>
                <div className={styles.weekTabText}>
                  <div className={styles.weekTabDates}>{week.dates}</div>
                  <div className={styles.weekTabTitle}>{week.title}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Week Details */}
          <div className={styles.weekDetail} style={{ borderTopColor: selectedWeek.color }}>
            <div className={styles.weekDetailContent}>
              <div className={styles.weekDetailHeader}>
                <h3 className={styles.weekDetailTitle}>
                  {selectedWeek.title}
                  {selectedWeek.subtitle && (
                    <span className={styles.weekDetailSubtitle}> {selectedWeek.subtitle}</span>
                  )}
                </h3>
                <div className={styles.weekDetailDates} style={{ color: selectedWeek.color }}>
                  <Icons.Calendar size={18} />
                  {selectedWeek.dates}
                </div>
              </div>
              <p className={styles.weekDetailDescription}>{selectedWeek.description}</p>
            </div>

            <div className={styles.weekActions}>
              <a href="#events" className="btn btn-outline">
                <Icons.Calendar size={18} />
                View {selectedWeek.week} Events
              </a>
              <a href="#register" className="btn btn-secondary">
                <Icons.Plus size={18} />
                Register Event for This Week
              </a>
            </div>
          </div>
        </div>

        {/* Visual Timeline Overview */}
        <div className={styles.timelineVisual}>
          <div className={styles.timelineLine}></div>
          {weeklyThemes.map((week, index) => (
            <div 
              key={week.id} 
              className={styles.timelinePoint}
              style={{ left: `${(index / (weeklyThemes.length - 1)) * 100}%` }}
            >
              <div 
                className={`${styles.timelineDot} ${selectedWeek.id === week.id ? styles.timelineDotActive : ''}`}
                style={{ backgroundColor: week.color }}
                onClick={() => setSelectedWeek(week)}
              ></div>
              <div className={styles.timelineLabel} style={{ color: week.color }}>
                {week.dates}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WeeklyThemesSection;

