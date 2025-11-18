import React from 'react';
import Icons from '../../components/Icons/Icons';
import { actionItems } from '../../config/izwm2026Content';
import styles from './GetInvolvedSection.module.css';

function GetInvolvedSection() {
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={32} /> : <Icons.Target size={32} />;
  };

  return (
    <section id="get-involved" className={styles.getInvolvedSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Get Involved
          </h2>
          <p className={styles.sectionSubtitle}>
            Join the global zero waste movement. Here are practical ways you can 
            take action during International Zero Waste Month and beyond.
          </p>
        </div>

        <div className={styles.actionsGrid}>
          {actionItems.map((action) => (
            <div key={action.id} className={styles.actionCard}>
              <div className={styles.actionIcon}>
                {getIcon(action.icon)}
              </div>
              
              <h3 className={styles.actionTitle}>{action.title}</h3>
              <p className={styles.actionDescription}>{action.description}</p>

              {action.link && (
                <a href={action.link} className={styles.actionLink}>
                  Learn More <Icons.ChevronRight size={16} />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className={styles.callToAction}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>
                Ready to make an impact?
              </h3>
              <p className={styles.ctaText}>
                Register your IZWM event or activity and join hundreds of communities 
                worldwide working toward a zero waste future.
              </p>
            </div>
            <div className={styles.ctaButtons}>
              <a href="#register" className="btn btn-primary btn-large">
                <Icons.Plus size={20} />
                Register Event
              </a>
              <a 
                href="https://zerowaste.asia/campaigns" 
                className="btn btn-outline btn-large"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icons.Target size={20} />
                View Campaigns
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetInvolvedSection;

