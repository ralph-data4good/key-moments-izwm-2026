import React from 'react';
import Icons from '../../components/Icons/Icons';
import EventCard from '../../components/EventCard/EventCard';
import { KEY_MOMENT_IZWM_2026 } from '../../config/izwm2026Content';
import { mockEvents } from '../../config/mockEvents';
import styles from './EventsSection.module.css';

function EventsSection() {
  const handleViewAllEvents = () => {
    window.location.href = `/festival/events?keyMoment=${KEY_MOMENT_IZWM_2026}`;
  };

  const handleEventClick = (event) => {
    // Route to Festival event detail page
    window.location.href = `/festival/event/${event.id}?keyMoment=${KEY_MOMENT_IZWM_2026}`;
  };

  const handleCalendarClick = () => {
    window.location.href = `/festival/calendar?keyMoment=${KEY_MOMENT_IZWM_2026}`;
  };

  const handleMapClick = () => {
    window.location.href = `/festival/map?keyMoment=${KEY_MOMENT_IZWM_2026}`;
  };

  return (
    <section id="events" className={styles.eventsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            Events & Activities
          </h2>
          <p className={styles.sectionSubtitle}>
            Discover IZWM 2026 events happening across the globe—from workshops and waste audits 
            to film screenings and policy dialogues
          </p>
        </div>

        {/* Event Gallery Preview */}
        <div className={styles.eventGallery}>
          <div className={styles.galleryHeader}>
            <h3 className={styles.subsectionTitle}>
              <Icons.Calendar size={28} />
              Featured Events
            </h3>
          </div>

          <div className={styles.eventsGrid}>
            {mockEvents.slice(0, 6).map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={handleEventClick}
              />
            ))}
          </div>

          <div className={styles.galleryFooter}>
            <button onClick={handleViewAllEvents} className="btn btn-primary">
              <Icons.Calendar size={20} />
              View All IZWM Events
            </button>
          </div>
        </div>

        {/* Calendar & Map Preview */}
        <div className={styles.previewsGrid}>
          {/* Calendar Preview */}
          <div className={styles.previewCard}>
            <div className={styles.previewIcon}>
              <Icons.Calendar size={48} />
            </div>
            <h3 className={styles.previewTitle}>Calendar View</h3>
            <p className={styles.previewDescription}>
              Browse IZWM events by date and time. Filter by topic, location, 
              or modality to find activities that match your interests.
            </p>
            <button onClick={handleCalendarClick} className="btn btn-outline">
              <Icons.Calendar size={20} />
              Open Calendar
            </button>
          </div>

          {/* Map Preview */}
          <div className={styles.previewCard}>
            <div className={styles.previewIcon}>
              <Icons.Map size={48} />
            </div>
            <h3 className={styles.previewTitle}>Map View</h3>
            <p className={styles.previewDescription}>
              Explore IZWM events on an interactive map. See where the movement 
              is happening and connect with activities in your region.
            </p>
            <button onClick={handleMapClick} className="btn btn-outline">
              <Icons.Map size={20} />
              Open Map
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div className={styles.infoBox}>
          <div className={styles.infoIcon}>
            <Icons.Globe size={32} />
          </div>
          <div className={styles.infoContent}>
            <h4 className={styles.infoTitle}>Can't find an event near you?</h4>
            <p className={styles.infoText}>
              Register your own IZWM activity! Whether it's a community cleanup, 
              workshop, or awareness campaign, we'll help amplify your event.
            </p>
          </div>
          <div className={styles.infoAction}>
            <a href="#register" className="btn btn-secondary">
              <Icons.Plus size={20} />
              Register Event
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsSection;

