import { allPosts } from "./fetchposts.js";
import { media } from "./fetchmedia.js";
const loaderVisual = document.querySelector(".outer-loader");
const blogPosts = document.querySelector(".posts");
const mobilePost = document.querySelector(".mobile-post");
const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");
const counter = document.querySelector(".counter");

function blogPostsCarousel(posts, number) {
  blogPosts.innerHTML = "";

  if (allPosts.featured_media === 0) {
    mobilePost.innerHTML += `<div class="post">
<a href="post.html?id=${allPosts[0].id}"><div class="title"><h2>${allPosts[0].title.rendered}</h2><h3>${
      allPosts[0].date.slice(0, -9) + "  " + allPosts[0].date.slice(11)
    }</h3></div>
<div class"image"></div></a>
</div>`;
  } else {
    function checkId(media) {
      return media.id === allPosts[0].featured_media;
    }
    const featuredMedia = media.filter(checkId);
    mobilePost.innerHTML += `<div class="post"> 
<a href="post.html?id=${allPosts[0].id}"><div class="title"><h2>${allPosts[0].title.rendered}</h2><h3>${
      allPosts[0].date.slice(0, -9) + "  " + allPosts[0].date.slice(11)
    }</h3></div>
<div class"image"><img class="post-img" src="${featuredMedia[0].source_url}" alt=""/></div></a>
</div>`;
  }

  posts.forEach((post, index) => {
    if (index <= Number(number) && index >= Number(number - 2)) {
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
    }
  });
}

let i = 2;
let x = 1;

counter.innerHTML = `Page ${x}`;

blogPostsCarousel(allPosts, i);

loaderVisual.innerHTML = "";

buttonLeft.addEventListener("click", function left() {
  if (i > 4) {
    i -= 3;
    x -= 1;
    blogPostsCarousel(allPosts, i);
    counter.innerHTML = `Page ${x}`;
  }
});

buttonRight.addEventListener("click", function right() {
  if (i >= 2 && i < allPosts.length - 1) {
    i += 3;
    x += 1;
    blogPostsCarousel(allPosts, i);
    console.log(i);
    counter.innerHTML = `Page ${x}`;
  }
});
