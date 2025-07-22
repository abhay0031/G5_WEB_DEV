let blogs = [
  {
    id: 1,
    title: "My First Blog",
    content: "This is my first blog post.",
    author: "Abhayjeet",
    date: "2025-07-20"
  },
  {
    id: 2,
    title: "Another Post",
    content: "Learning frontend with Bootstrap.",
    author: "Aakash",
    date: "2025-07-18"
  }
];

let blogIdCounter = blogs.length + 1;

function displayBlogs(blogArray = blogs) {
  const blogList = document.getElementById("blogList");
  blogList.innerHTML = "";

  if (blogArray.length === 0) {
    blogList.innerHTML = "<li class='list-group-item'>No blogs available.</li>";
    return;
  }

  blogArray.forEach(blog => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
      <h5>${blog.title}</h5>
      <p>${blog.content}</p>
      <span><strong>Author:</strong> ${blog.author} | <strong>Date:</strong> ${blog.date}</span>
      <br />
      <button class="btn btn-sm btn-danger mt-2" onclick="deleteBlog(${blog.id})">Delete</button>
    `;
    blogList.appendChild(li);
  });
}

function addBlog(title, content, author) {
  const date = new Date().toISOString().split("T")[0];
  const newBlog = {
    id: blogIdCounter++,
    title,
    content,
    author,
    date
  };
  blogs.push(newBlog);
  displayBlogs();
}

function deleteBlog(id) {
  blogs = blogs.filter(blog => blog.id !== id);
  displayBlogs();
}

document.addEventListener("DOMContentLoaded", () => {
  displayBlogs();

  // Example: Add blog from static input (replace this with dynamic form later)
  document.getElementById("addBlogBtn")?.addEventListener("click", () => {
    const title = prompt("Enter blog title:");
    const content = prompt("Enter blog content:");
    const author = prompt("Enter author name:");
    if (title && content && author) {
      addBlog(title, content, author);
    } else {
      alert("All fields are required!");
    }
  });
});
