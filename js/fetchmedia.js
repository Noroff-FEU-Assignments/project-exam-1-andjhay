const url = "https://andrewhay.no/noroff/nftforyourthoughts/wp-json/wp/v2/media/?per_page=100";

async function getMedia() {
  // fetch
  const response = await fetch(url);
  const results = await response.json();
  return results;
}

export const media = await getMedia();
