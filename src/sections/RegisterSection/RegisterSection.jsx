import React from 'react';
import Icons from '../../components/Icons/Icons';
import { KEY_MOMENT_IZWM_2026 } from '../../config/izwm2026Content';
import styles from './RegisterSection.module.css';

function RegisterSection() {
  const handleRegisterClick = () => {
    window.location.href = `/festival/register?keyMoment=${KEY_MOMENT_IZWM_2026}`;
  };

  return (
    <section id="register" className={styles.registerSection}>
      <div className="container">
        <div className={styles.registerCard}>
          <div className={styles.registerContent}>
            <div className={styles.contentInner}>
              <h2 className={styles.registerTitle}>
                Register Your IZWM Event
              </h2>
              <p className={styles.registerSubtitle}>
                Are you organizing an event, workshop, campaign, or activity for 
                International Zero Waste Month 2026? Register it with us and gain visibility 
                across our global network.
              </p>

              <div className={styles.steps}>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>1</div>
                  <div className={styles.stepText}>
                    <strong>Sign Up</strong>
                    <span>Create your account on the platform</span>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>2</div>
                  <div className={styles.stepText}>
                    <strong>Fill out the form</strong>
                    <span>Provide basic details about your event</span>
                  </div>
                </div>
                <div className={styles.step}>
                  <div className={styles.stepNumber}>3</div>
                  <div className={styles.stepText}>
                    <strong>Go live</strong>
                    <span>Your event appears on the Festival calendar and map</span>
                  </div>
                </div>
              </div>

              <div className={styles.benefits}>
                <h3 className={styles.benefitsTitle}>Why register?</h3>
                <ul className={styles.benefitsList}>
                  <li>
                    <Icons.ChevronRight size={18} />
                    <span>Reach a global audience of zero waste advocates</span>
                  </li>
                  <li>
                    <Icons.ChevronRight size={18} />
                    <span>Connect with other organizers and build partnerships</span>
                  </li>
                  <li>
                    <Icons.ChevronRight size={18} />
                    <span>Access promotional materials and support</span>
                  </li>
                  <li>
                    <Icons.ChevronRight size={18} />
                    <span>Contribute to the global IZWM impact report</span>
                  </li>
                </ul>
              </div>

              <button onClick={handleRegisterClick} className="btn btn-primary btn-large">
                <Icons.Plus size={22} />
                Register Your Event Now
              </button>
            </div>
          </div>

          <div className={styles.registerVisual}>
            <div className={styles.visualInner}>
              <div className={styles.iconCircle}>
                <Icons.Calendar size={80} />
              </div>
              <div className={styles.floatingCard} style={{ top: '15%', left: '10%' }}>
                <Icons.Users size={24} />
              </div>
              <div className={styles.floatingCard} style={{ top: '60%', right: '10%' }}>
                <Icons.Globe size={24} />
              </div>
              <div className={styles.floatingCard} style={{ bottom: '15%', left: '20%' }}>
                <Icons.Heart size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;

