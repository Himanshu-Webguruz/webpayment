"use client";
import { useEffect, useState } from "react";

const HubSpotMeetings = () => {
const [isScriptLoaded, setIsScriptLoaded] = useState(false);
const [error, setError] = useState(null);

useEffect(() => {
  if (
    document.querySelector(
      'script[src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"]'
    )
  ) {
    setIsScriptLoaded(true);
    return;
  }

  const script = document.createElement("script");
  script.src =
    "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";
  script.async = true;
  script.onload = () => setIsScriptLoaded(true);
  document.body.appendChild(script); 
// Example event listener:
  return () => {
    if (script) {
      document.body.removeChild(script);
    }
  };
  
}, []);

useEffect(() => {
  if (isScriptLoaded && window.HubSpotMeetings) {
    if (!window.HubSpotMeetingsInitialized) {
      try {
        window.HubSpotMeetings.loadMeetings();
        window.HubSpotMeetingsInitialized = true;
      } catch (error) {
        console.error("Error loading HubSpot Meetings:", error);
        setError("Failed to load meetings. Please try again later.");
      }
    }
  }
}, [isScriptLoaded]);

return (
  <div id="hubspot-meeting-container">
    {error ? (
      <p>{error}</p>
    ) : (
      <div
        className="meetings-iframe-container"
        data-src="https://meetings.hubspot.com/jp212/free-digital-marketing-consultation?embed=true"
        aria-label="HubSpot Meetings"
      />
    )}
  </div>
);
};

export default HubSpotMeetings;
