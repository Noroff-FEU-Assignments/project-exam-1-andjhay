const url = "https://andrewhay.no/noroff/nftforyourthoughts/wp-json/wp/v2/posts/?per_page=100";
const url2 = "https://andrewhay.no/noroff/nftforyourthoughts/wp-json/wp/v2/posts/";

async function getAllPosts() {
  // fetch
  const response = await fetch(url);
  const results = await response.json();
  return results;
}

export const allPosts = await getAllPosts();

async function getPosts() {
  // fetch
  const response = await fetch(url2);
  const results = await response.json();
  return results;
}

export const somePosts = await getPosts();
