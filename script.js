// Array to store all posts
let posts = [];

// Get elements from HTML
const titleInput = document.getElementById("titleInput");
const contentInput = document.getElementById("contentInput");
const addPostBtn = document.getElementById("addPostBtn");
const postsContainer = document.getElementById("postsContainer");

// Load saved posts when page opens
if (localStorage.getItem("blogPosts")) {
    posts = JSON.parse(localStorage.getItem("blogPosts"));
    renderPosts();
}

// Add new post
addPostBtn.addEventListener("click", function () {
    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title === "" || content === "") {
        alert("Please write both title and content.");
        return;
    }

    const newPost = {
        title: title,
        content: content
    };

    posts.push(newPost);

    // Save posts to localStorage
    localStorage.setItem("blogPosts", JSON.stringify(posts));

    titleInput.value = "";
    contentInput.value = "";

    renderPosts();
});

// Show posts on page
function renderPosts() {
    postsContainer.innerHTML = "";

    for (let i = 0; i < posts.length; i++) {
        const postDiv = document.createElement("div");
        postDiv.className = "post";

        const postTitle = document.createElement("h2");
        postTitle.innerText = posts[i].title;

        const postContent = document.createElement("p");
        postContent.innerText = posts[i].content;

        postDiv.appendChild(postTitle);
        postDiv.appendChild(postContent);

        postsContainer.appendChild(postDiv);
    }
}
