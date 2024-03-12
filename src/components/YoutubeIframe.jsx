import React from "react";

/* old code gives error but works */
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

/* function getEmbedLink(youtubeLink) {
  try {
    console.log("YoutubeLink:", youtubeLink);
    const url = new URL(youtubeLink);
    const params = new URLSearchParams(url.search);
    const youtubeId = params.get("v") || params.get("list");

    if (!youtubeId) {
      throw new Error("Invalid URL or missing ID.");
    }
    const embedLink = `https://www.youtube.com/embed/${youtubeId}`;
    return embedLink;
  } catch (error) {
    console.error("Error constructing URL.");
    return null;
  }
} */

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
