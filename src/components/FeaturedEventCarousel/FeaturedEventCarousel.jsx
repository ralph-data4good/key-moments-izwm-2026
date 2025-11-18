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

  // Get week color based on theme
  const getWeekColor = (weeklyTheme) => {
    const weekColors = {
      'week-1': '#A4BF3D', // Green
      'week-2': '#D4A23D', // Gold
      'week-3': '#4A8FC7', // Blue
      'week-4': '#CC5538', // Brick/Orange
      'week-5': '#8B5A9D'  // Purple
    };
    return weekColors[weeklyTheme] || '#A4BF3D';
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div 
      className={styles.carousel}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={styles.carouselContent}>
        <div className={styles.imageSection}>
          {/* Image Background with Gradient Overlay */}
          <div className={styles.imageBackground}></div>
          
          {/* Soft Corner Shadows */}
          <div className={styles.cornerShadows}></div>
          
          {/* Event Details Overlay */}
          <div className={styles.eventOverlay}>
            <div className={styles.spotlightLabel}>PROJECT SPOTLIGHT</div>
            
            <h3 className={styles.eventTitle}>{currentEvent.title}</h3>
            
            <div className={styles.eventLocation}>
              {currentEvent.organizer_name || 'Zero Waste Initiative'}
            </div>
            
            <div 
              className={styles.countryBadge}
              style={{ backgroundColor: getWeekColor(currentEvent.weeklyTheme) }}
            >
              {currentEvent.country.toUpperCase()}
            </div>
          </div>

          {/* Week Badge - Top Right */}
          <div 
            className={styles.weekBadgeTop}
            style={{ backgroundColor: getWeekColor(currentEvent.weeklyTheme) }}
          >
            <span className={styles.weekNumber}>Week {getWeekNumber(currentEvent.weeklyTheme)}</span>
            <span className={styles.weekTheme}>{getWeekLabel(currentEvent.weeklyTheme)}</span>
          </div>

          {/* Date Badge - Top Left */}
          <div className={styles.dateBadge}>
            <Icons.Calendar size={16} />
            {formatDate(currentEvent.start_datetime)}
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
              style={{ 
                backgroundColor: index === currentIndex ? getWeekColor(featuredEvents[index].weeklyTheme) : undefined 
              }}
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

