import { allPosts } from "./fetchposts.js";
import { somePosts } from "./fetchposts.js";
import { media } from "./fetchmedia.js";
const loaderVisual = document.querySelector(".outer-loader");
const blogPosts = document.querySelector(".posts");
const loadMoreButton = document.querySelector(".load-more");

// BLOG PAGE ALL POSTS
function listBlogPosts(posts) {
  blogPosts.innerHTML = "";
  posts.forEach((post) => {
    if (post.featured_media === 0) {
      blogPosts.innerHTML += `<div class="post">
    <a href="post.html?id=${post.id}"><div class="title"><h2>${post.title.rendered}</h2><h3>${
        post.date.slice(0, -9) + "  " + post.date.slice(11)
      }</h3></div>
    <div class"image"></div></a>
    </div>`;
    } else {
      function checkId(media) {
        return media.id === post.featured_media;
      }
      const featuredMedia = media.filter(checkId);
      blogPosts.innerHTML += `<div class="post"> 
    <a href="post.html?id=${post.id}"><div class="title"><h2>${post.title.rendered}</h2><h3>${
        post.date.slice(0, -9) + "  " + post.date.slice(11)
      }</h3></div>
  <div class"image"><img class="post-img" src="${featuredMedia[0].source_url}" alt=""/></div></a>
  </div>`;
    }
  });
}

listBlogPosts(somePosts);

// load the rest of the posts

loaderVisual.innerHTML = "";

loadMoreButton.addEventListener("click", function clickFunction() {
  listBlogPosts(allPosts);
});
