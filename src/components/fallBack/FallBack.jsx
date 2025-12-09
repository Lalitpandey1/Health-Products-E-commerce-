// LoadingSpinner.js
import React from "react";

const spinnerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "200px", // Give it some height so it's visible
  fontSize: "18px",
  color: "#333",
};

const dotStyle = {
  fontSize: "32px",
  animation: "pulse 1s infinite",
  margin: "0 5px",
};

// NOTE: For a real application, you'd use a CSS file for animations
// and keyframes, but for a simple example, we use text/emoji or a simple image.

const FallBack = () => (
  <div style={spinnerStyle}>
    {/* A simple, clean, three-dot loading animation concept */}
    <p>Loading Content</p>
    <span style={{ ...dotStyle, animationDelay: "0s" }}>•</span>
    <span style={{ ...dotStyle, animationDelay: "0.2s" }}>•</span>
    <span style={{ ...dotStyle, animationDelay: "0.4s" }}>•</span>
  </div>
);

export default FallBack;
