import React from 'react';
import Icons from '../../components/Icons/Icons';
import { aboutContent, historyContent, partnerOrganizations } from '../../config/izwm2026Content';
import styles from './AboutSection.module.css';

function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
      {/* About the Event */}
      <div className={styles.aboutEvent}>
        <div className="container">
          <div className={styles.twoCol}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>
                About International Zero Waste Month
              </h2>
              <div className={styles.description}>
                {aboutContent.event.description.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
              
              <div className={styles.objectives}>
                <h3 className={styles.objectivesTitle}>Key Objectives</h3>
                <ul className={styles.objectivesList}>
                  {aboutContent.objectives.map((objective, index) => (
                    <li key={index}>
                      <Icons.ChevronRight size={20} />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.visualContent}>
              <div className={styles.visualPlaceholder}>
                <div className={styles.iconGrid}>
                  <div className={styles.iconItem}>
                    <Icons.Globe size={48} />
                  </div>
                  <div className={styles.iconItem}>
                    <Icons.Users size={48} />
                  </div>
                  <div className={styles.iconItem}>
                    <Icons.Target size={48} />
                  </div>
                  <div className={styles.iconItem}>
                    <Icons.Heart size={48} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <div className={styles.historySection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Journey So Far</h2>
            <p className={styles.sectionSubtitle}>
              See how International Zero Waste Month has grown over the years
            </p>
          </div>

          <div className={styles.timeline}>
            {historyContent.map((item, index) => (
              <div key={item.year} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{item.year}</div>
                <div className={styles.timelineContent}>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineSummary}>{item.summary}</p>
                  {item.highlights && (
                    <ul className={styles.highlightsList}>
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx}>
                          <Icons.ChevronRight size={16} />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.link && (
                    <a href={item.link} className={styles.timelineLink}>
                      Read Full Story <Icons.ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partner Organizations */}
      <div className={styles.partnersSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Partner Organizations</h2>
            <p className={styles.sectionSubtitle}>
              Organizations that have supported International Zero Waste Month
            </p>
          </div>

          <div className={styles.partnersGrid}>
            {partnerOrganizations.map((partner, index) => (
              <div key={index} className={styles.partnerCard}>
                <div className={styles.partnerLogo}>{partner.logo}</div>
                <h4 className={styles.partnerName}>{partner.name}</h4>
                <p className={styles.partnerCountry}>{partner.country}</p>
              </div>
            ))}
          </div>

          <div className={styles.partnerCta}>
            <p className={styles.partnerCtaText}>
              Interested in partnering with us for IZWM 2026?
            </p>
            <a href="https://zerowaste.asia/partners" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <Icons.Users size={20} />
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

