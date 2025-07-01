import localForage from 'localforage';

localForage.config({
  name: 'analytics',
  storeName: 'events'
});

export async function trackEvent(event) {
  try {
    const events = (await localForage.getItem('events')) || [];
    events.push(event);
    await localForage.setItem('events', events);
    
    if (navigator.onLine) {
      await syncEvents();
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
}

export async function syncEvents() {
  try {
    const events = (await localForage.getItem('events')) || [];
    if (events.length === 0) return;

    const response = await fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ events })
    });

    if (response.ok) {
      // Resolve conflicts by keeping newest events
      const serverEvents = await response.json();
      const localEvents = await localForage.getItem('events');
      const mergedEvents = localEvents.filter(localEvent => 
        !serverEvents.some(serverEvent => 
          serverEvent.timestamp === localEvent.timestamp && 
          serverEvent.userId === localEvent.userId
        )
      );
      await localForage.setItem('events', mergedEvents);
    }
  } catch (error) {
    console.error('Error syncing events:', error);
  }
}
