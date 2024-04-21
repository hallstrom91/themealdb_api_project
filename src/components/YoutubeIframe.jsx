import React from "react";

/* works but gives errors */
function getEmbedLink(youtubeLink) {
  try {
    let url = "";
    if (youtubeLink) {
      url = new URL(youtubeLink, youtubeLink);
    }
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
      {embedLink ? (
        <iframe
          title="Youtube Embed"
          src={embedLink}
          className="embed-responsive-item w-100 h-100"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Invalid Youtube Link...</p>
      )}
    </>
  );
}
