import React, { useState, useEffect } from 'react';
import { mockEvents } from '../../config/mockEvents';
import Icons from '../Icons/Icons';
import styles from './FeaturedEventCarousel.module.css';

function FeaturedEventCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Filter to one event per week
  const featuredEvents = mockEvents.reduce((acc, event) => {
    const weekTheme = event.weeklyTheme;
    if (!acc.some(e => e.weeklyTheme === weekTheme)) {
      acc.push(event);
    }
    return acc;
  }, []);

  // Auto-rotate every 4 seconds when not hovered
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === featuredEvents.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovered, featuredEvents.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredEvents.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredEvents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentEvent = featuredEvents[currentIndex];

  // Get week number from weeklyTheme (e.g., 'week-1' -> '1')
  const getWeekNumber = (weeklyTheme) => {
    return weeklyTheme?.split('-')[1] || '1';
  };

  // Get week label based on theme
  const getWeekLabel = (weeklyTheme) => {
    const weekLabels = {
      'week-1': 'Launch Week',
      'week-2': 'Barriers to Zero Waste',
      'week-3': 'Solutions Week',
      'week-4': 'False Solutions Week',
      'week-5': 'Humans of Zero Waste'
    };
    return weekLabels[weeklyTheme] || 'Featured Event';
  };

  return (
    <div 
      className={styles.carousel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.carouselHeader}>
        <span className={styles.headerLabel}>FEATURED EVENT</span>
        <span className={styles.weekBadge}>
          Week {getWeekNumber(currentEvent.weeklyTheme)}
        </span>
      </div>

      <div className={styles.carouselContent}>
        <div className={styles.imageSection}>
          <div className={styles.imagePlaceholder}>
            <Icons.Calendar size={48} />
          </div>
          <div className={styles.weekLabel}>
            {getWeekLabel(currentEvent.weeklyTheme)}
          </div>
        </div>

        <div className={styles.eventInfo}>
          <h4 className={styles.eventTitle}>{currentEvent.title}</h4>
          <div className={styles.eventMeta}>
            <span className={styles.metaItem}>
              <Icons.MapPin size={14} />
              {currentEvent.location}
            </span>
            <span className={styles.metaDot}>•</span>
            <span className={styles.metaItem}>
              {currentEvent.country}
            </span>
          </div>
        </div>
      </div>

      <div className={styles.carouselControls}>
        <button 
          onClick={handlePrevious} 
          className={styles.controlButton}
          aria-label="Previous event"
        >
          <Icons.ChevronLeft size={20} />
        </button>
        
        <div className={styles.indicators}>
          {featuredEvents.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''}`}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={handleNext} 
          className={styles.controlButton}
          aria-label="Next event"
        >
          <Icons.ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default FeaturedEventCarousel;

