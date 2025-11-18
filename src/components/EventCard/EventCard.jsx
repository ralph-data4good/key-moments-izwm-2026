import React from 'react';
import Icons from '../Icons/Icons';
import { weeklyThemes } from '../../config/izwm2026Content';
import styles from './EventCard.module.css';

// Simple date formatting utility
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
};

const formatTime = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', { 
    hour: 'numeric', 
    minute: '2-digit',
    hour12: true
  });
};

function EventCard({ event, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(event);
    }
  };

  const modalityClass = event.modality?.toLowerCase().replace(' ', '').replace('-', '') || '';
  
  // Find the weekly theme for this event
  const weeklyTheme = event.weeklyTheme 
    ? weeklyThemes.find(w => w.id === event.weeklyTheme)
    : null;

  return (
    <div
      className={`card ${styles.eventCard}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {event.poster_url ? (
        <img src={event.poster_url} alt={event.title} className="poster" />
      ) : (
        <div className={styles.placeholderPoster}>
          {weeklyTheme && (
            <div 
              className={styles.weekThemeBadge}
              style={{ backgroundColor: weeklyTheme.color }}
            >
              {weeklyTheme.week}
            </div>
          )}
          <span>🌱</span>
        </div>
      )}

      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <h3 className={styles.title}>{event.title}</h3>
          <div className={styles.badges}>
            {weeklyTheme && (
              <span 
                className={styles.weekThemeChip}
                style={{ 
                  backgroundColor: weeklyTheme.color,
                  color: '#fff'
                }}
              >
                {weeklyTheme.title}
              </span>
            )}
            {event.modality && (
              <span className={`chip ${modalityClass}`}>{event.modality}</span>
            )}
          </div>
        </div>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <Icons.Calendar size={16} />
            {formatDate(event.start_datetime)}
          </div>
          <div className={styles.metaItem}>
            <Icons.Clock size={16} />
            {formatTime(event.start_datetime)}
          </div>
          {event.country && (
            <div className={styles.metaItem}>
              <Icons.Globe size={16} />
              {event.country}
            </div>
          )}
        </div>

        {event.organizer_name && (
          <div className={styles.organizer}>
            By {event.organizer_name}
          </div>
        )}

        {event.summary && (
          <p className={styles.summary}>
            {event.summary.length > 120 
              ? `${event.summary.substring(0, 120)}...` 
              : event.summary}
          </p>
        )}

        <div className={styles.cardFooter}>
          <span className="btn-text">
            View Details <Icons.ChevronRight size={16} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default EventCard;

