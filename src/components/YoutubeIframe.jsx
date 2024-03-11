import React from "react";

function getEmbedLink(youtubeLink) {
  const youtubeId = youtubeLink ? youtubeLink.split("v=")[1] : [];
  const embedLink = `https://www.youtube.com/embed/${youtubeId}`;
  return embedLink;
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
