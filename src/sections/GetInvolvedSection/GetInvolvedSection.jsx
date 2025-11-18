import React from 'react';
import Icons from '../../components/Icons/Icons';
import { getInvolvedCards, heroContent } from '../../config/izwm2026Content';
import styles from './GetInvolvedSection.module.css';

function GetInvolvedSection() {
  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={28} /> : <Icons.Target size={28} />;
  };

  const renderCard = (card) => {
    switch (card.type) {
      case 'quote':
        return (
          <div key={card.id} className={`${styles.card} ${styles.quoteCard}`}>
            <div className={styles.quoteIcon}>"</div>
            <blockquote className={styles.quote}>
              {card.quote}
            </blockquote>
            <div className={styles.quoteAuthor}>
              <div className={styles.authorName}>{card.cta}</div>
              <div className={styles.authorRole}>{card.role}</div>
            </div>
            {card.link && (
              <a href={card.link} className={styles.quoteLink} target="_blank" rel="noopener noreferrer">
                Read Full Report <Icons.ExternalLink size={14} />
              </a>
            )}
          </div>
        );

      case 'video':
        return (
          <div key={card.id} className={`${styles.card} ${styles.videoCard}`}>
            <div className={styles.videoPlaceholder}>
              <div className={styles.playButton}>
                <Icons.ChevronRight size={32} />
              </div>
              <div className={styles.videoOverlay}>
                <span className={styles.videoLabel}>▶ Watch Video</span>
              </div>
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </div>
        );

      case 'action':
      case 'resource':
      case 'campaign':
        return (
          <a 
            key={card.id} 
            href={card.link} 
            className={`${styles.card} ${styles.actionCard}`}
            style={{ borderLeftColor: card.color }}
          >
            <div className={styles.cardVisual} style={{ backgroundColor: card.color }}>
              {card.visual && (
                <div className={styles.visualPlaceholder}>
                  {card.visual === 'event' && '📅'}
                  {card.visual === 'conversation' && '💬'}
                  {card.visual === 'composting' && '🌱'}
                  {card.visual === 'refuse' && '♻️'}
                </div>
              )}
            </div>
            <div className={styles.cardBody}>
              {card.subtitle && (
                <div className={styles.cardSubtitle}>{card.subtitle}</div>
              )}
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardDescription}>{card.description}</p>
              <div className={styles.cardCta}>
                {getIcon(card.icon)}
                <span>{card.cta}</span>
                <Icons.ChevronRight size={16} />
              </div>
            </div>
          </a>
        );

      default:
        return null;
    }
  };

  return (
    <section id="get-involved" className={styles.getInvolvedSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Get Involved
          </h2>
          <p className={styles.sectionSubtitle}>
            Zero Waste Is Easier Together. Zero Waste Is For Everyone. Zero Waste Is Now.
          </p>
          <div className={styles.taglineBox}>
            <p className={styles.tagline}>{heroContent.tagline}</p>
          </div>
        </div>

        <div className={styles.cardsGrid}>
          {getInvolvedCards.map(card => renderCard(card))}
        </div>

        <div className={styles.bottomCta}>
          <p className={styles.bottomCtaText}>
            Ready to take action? Register your IZWM event and be part of the global movement.
          </p>
          <a href="#register" className="btn btn-primary btn-large">
            <Icons.Plus size={20} />
            Register Your Event
          </a>
        </div>
      </div>
    </section>
  );
}

export default GetInvolvedSection;

