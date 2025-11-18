import React from 'react';
import Icons from '../../components/Icons/Icons';
import { aboutContent, historyContent, partnerOrganizations, heroContent } from '../../config/izwm2026Content';
import styles from './AboutSection.module.css';

function AboutSection() {
  const objectiveIcons = {
    'Celebrate community-led zero waste initiatives': 'Heart',
    'Share best practices and solutions across Asia': 'Globe',
    'Amplify the voices of waste pickers and frontline workers': 'Users',
    'Build solidarity and collective action globally': 'Target'
  };

  const getObjectiveIcon = (objective) => {
    const iconName = objectiveIcons[objective] || 'ChevronRight';
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={32} /> : <Icons.ChevronRight size={32} />;
  };

  return (
    <section id="about" className={styles.aboutSection}>
      {/* About the Event */}
      <div className={styles.aboutEvent}>
        <div className="container">
          <div className={styles.introSection}>
            <h2 className={styles.sectionTitle}>
              About International Zero Waste Month
            </h2>
            <p className={styles.leadText}>
              A global key moment organized by the Global Alliance for Incinerator Alternatives (GAIA) 
              and partners worldwide.
            </p>
          </div>

          {/* Impact Stats */}
          <div className={styles.statsGrid}>
            {heroContent.stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <div className={styles.statIcon}>
                  {index === 0 && <Icons.Globe size={32} />}
                  {index === 1 && <Icons.Calendar size={32} />}
                  {index === 2 && <Icons.Users size={32} />}
                  {index === 3 && <Icons.Target size={32} />}
                </div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission Statement */}
          <div className={styles.missionCard}>
            <div className={styles.missionIcon}>
              <Icons.Heart size={48} />
            </div>
            <div className={styles.missionContent}>
              <h3 className={styles.missionTitle}>Our Mission</h3>
              <p className={styles.missionText}>
                Throughout January, communities, cities, and organizations come together to celebrate and 
                advance zero waste solutions—from waste reduction and reuse systems to composting and circular 
                economy initiatives.
              </p>
              <p className={styles.missionText}>
                IZWM amplifies the voices of waste workers, grassroots movements, and local leaders who are 
                building regenerative systems that respect people and planet. It's a time to showcase what's 
                working, share knowledge across borders, and mobilize collective action for a world without waste.
              </p>
            </div>
          </div>

          {/* Key Objectives Grid */}
          <div className={styles.objectivesSection}>
            <h3 className={styles.objectivesHeader}>Key Objectives</h3>
            <div className={styles.objectivesGrid}>
              {aboutContent.objectives.map((objective, index) => (
                <div key={index} className={styles.objectiveCard}>
                  <div className={styles.objectiveIcon}>
                    {getObjectiveIcon(objective)}
                  </div>
                  <p className={styles.objectiveText}>{objective}</p>
                </div>
              ))}
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

