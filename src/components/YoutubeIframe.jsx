import React from "react";

function getEmbedLink(youtubeLink) {
  try {
    const url = new URL(youtubeLink);
    const params = new URLSearchParams(url.search);
    const youtubeId = params.get("v");
    const embedLink = `https://www.youtube.com/embed/${youtubeId}`;
    return embedLink;
  } catch (error) {
    console.error("Error constructing URL", error);
    return null;
  }
}

export default function YoutubeIframe({ youtubeLink }) {
  const embedLink = getEmbedLink(youtubeLink);

  return (
    <>
      <iframe
        title="Youtube Embed"
        src={embedLink}
        className="embed-responsive-item w-100 h-100"
        allowFullScreen
      ></iframe>
    </>
  );
}
