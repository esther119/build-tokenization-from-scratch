import React from "react";

function VimeoVideo() {
  return (
    <div style={{ padding: "52.53% 0 0 0", position: "relative" }}>
      <iframe
        src="https://player.vimeo.com/video/929178801?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;byline=0&amp;portrait=0&amp;controls=0&amp;autoplay=1&amp;loop=1&amp;muted=1"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "506px", // Maintain aspect ratio if necessary
        }}
        title="tokenizer2"
      ></iframe>
    </div>
  );
}

export default VimeoVideo;
