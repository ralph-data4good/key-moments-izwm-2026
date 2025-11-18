import React from 'react';
import Icons from '../../components/Icons/Icons';
import { mockResources } from '../../config/mockEvents';
import styles from './ToolkitSection.module.css';

function ToolkitSection() {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'Guide':
        return <Icons.BookOpen size={24} />;
      case 'Poster':
        return <Icons.Target size={24} />;
      case 'Social Media Pack':
        return <Icons.Globe size={24} />;
      default:
        return <Icons.Download size={24} />;
    }
  };

  const handleResourceClick = (resource) => {
    // In production, this would trigger actual download
    console.log('Downloading:', resource.title);
  };

  return (
    <section id="toolkit" className={styles.toolkitSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Toolkit & Resources
          </h2>
          <p className={styles.sectionSubtitle}>
            Free, ready-to-use materials to support your zero waste activities. 
            Download guides, posters, social media graphics, and more.
          </p>
        </div>

        <div className={styles.resourcesGrid}>
          {mockResources.map((resource) => (
            <div key={resource.id} className={styles.resourceCard}>
              <div className={styles.resourceIcon}>
                {getTypeIcon(resource.type)}
              </div>
              
              <div className={styles.resourceContent}>
                <div className={styles.resourceHeader}>
                  <span className={styles.resourceType}>{resource.type}</span>
                  <span className={styles.resourceSize}>{resource.fileSize}</span>
                </div>
                
                <h3 className={styles.resourceTitle}>{resource.title}</h3>
                <p className={styles.resourceDescription}>{resource.description}</p>
              </div>

              <div className={styles.resourceFooter}>
                <button
                  onClick={() => handleResourceClick(resource)}
                  className="btn btn-outline"
                >
                  <Icons.Download size={18} />
                  Download
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.toolkitCta}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              Need more resources?
            </h3>
            <p className={styles.ctaText}>
              Browse the full Zero Waste Asia Resource Library for guides, 
              case studies, policy briefs, and educational materials.
            </p>
          </div>
          <div className={styles.ctaAction}>
            <a 
              href="https://zerowaste.asia/library?search=izwm" 
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.BookOpen size={20} />
              Browse Library
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToolkitSection;

