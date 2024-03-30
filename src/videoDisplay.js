import React from "react";

function VimeoVideo() {
  return (
    <div style={{ padding: "52.53% 0 0 0", position: "relative" }}>
      <iframe
        src="https://player.vimeo.com/video/929178801?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        title="tokenizer2"
      ></iframe>
    </div>
  );
}

export default VimeoVideo;
