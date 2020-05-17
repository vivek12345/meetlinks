export function getEventNameAndLink(events) {
  return events.map((event) => {
    return {
      name: event.summary,
      link: getCalenderLink(event)
    };
  });
}

export function getCalenderLink(event) {
  if (event.hangoutLink) return event.hangoutLink;
  if (event?.conferenceData?.entryPoints?.[0]?.uri)
    return event.conferenceData.entryPoints[0].uri;
  try {
    new URL(event.location);
    return event.location;
  } catch (e) {
    return null;
  }
}
