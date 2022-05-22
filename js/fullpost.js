import { allPosts } from "./fetchposts.js";
const loaderVisual = document.querySelector(".outer-loader");
const pageTitle = document.querySelector("title");
const fullPost = document.querySelector(".post-page");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = Number(params.get("id"));

function selectPost(posts) {
  return posts.id === postId;
}
const selectedPost = allPosts.filter(selectPost)[0];
pageTitle.innerHTML += `${selectedPost.title.rendered}`;
fullPost.innerHTML = `
<div class="content"><h1>${selectedPost.title.rendered}</h1><h3>${
  selectedPost.date.slice(0, -9) + "  " + selectedPost.date.slice(11)
}</h3><p>${selectedPost.content.rendered}</p></div>
`;

loaderVisual.innerHTML = "";

// Modal code

const imageModal = document.querySelector(".content figure img");
const modalBox = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const imgClone = imageModal.cloneNode(true);

imageModal.addEventListener("click", function openModal() {
  modalBox.style.display = "inline-block";
  modalContent.appendChild(imgClone);
});

// Struggled with appendChild that it deleted the original img so found that it was possible to clone it and then it no longer deleted the html.

window.onclick = function (modal) {
  if (modal.target == modalBox) {
    modalBox.style.display = "none";
  }
};
