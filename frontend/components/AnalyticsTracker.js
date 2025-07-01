'use client';

import { useEffect, useRef } from 'react';
import localForage from 'localforage';
import { v4 as uuidv4 } from 'uuid';
import { trackEvent, syncEvents } from '../lib/analytics';

export default function AnalyticsTracker() {
  const userId = useRef(uuidv4());
  const sessionId = useRef(uuidv4());
  const startTime = useRef(Date.now());

  useEffect(() => {
    // Track page view
    const trackPageView = async () => {
      await trackEvent({
        userId: userId.current,
        sessionId: sessionId.current,
        page: window.location.pathname,
        eventType: 'page-view',
        timestamp: Date.now(),
        data: {}
      });
    };

    // Track time on page when leaving
    const trackTimeOnPage = async () => {
      const duration = Date.now() - startTime.current;
      await trackEvent({
        userId: userId.current,
        sessionId: sessionId.current,
        page: window.location.pathname,
        eventType: 'time-on-page',
        timestamp: Date.now(),
        data: { duration }
      });
    };

    // Track clicks
    const handleClick = async (e) => {
      const target = e.target.closest('[data-track]');
      if (target) {
        await trackEvent({
          userId: userId.current,
          sessionId: sessionId.current,
          page: window.location.pathname,
          eventType: 'click',
          timestamp: Date.now(),
          data: { element: target.dataset.track }
        });
      }
    };

    // Track form submissions
    const handleSubmit = async (e) => {
      if (e.target.tagName === 'FORM') {
        await trackEvent({
          userId: userId.current,
          sessionId: sessionId.current,
          page: window.location.pathname,
          eventType: 'form-submit',
          timestamp: Date.now(),
          data: { formId: e.target.id }
        });
      }
    };

    trackPageView();
    document.addEventListener('click', handleClick);
    document.addEventListener('submit', handleSubmit);
    window.addEventListener('beforeunload', trackTimeOnPage);

    // Sync events when online
    const handleOnline = () => syncEvents();
    window.addEventListener('online', handleOnline);

    // Periodic sync when online
    const syncInterval = setInterval(() => {
      if (navigator.onLine) syncEvents();
    }, 30000);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('submit', handleSubmit);
      window.removeEventListener('beforeunload', trackTimeOnPage);
      window.removeEventListener('online', handleOnline);
      clearInterval(syncInterval);
    };
  }, []);

  return null;
}