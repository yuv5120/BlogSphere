// JavaScript for blog functionalities
document.getElementById("blogForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const category = document.getElementById("category").value;
    const tags = document.getElementById("tags").value;
  
    const postHTML = `
      <div class="post">
        <h3>${title}</h3>
        <p>${content}</p>
        <small><strong>Category:</strong> ${category} | <strong>Tags:</strong> ${tags}</small>
      </div>
    `;
  
    document.getElementById("posts").innerHTML += postHTML;
  
    // Clear form fields
    document.getElementById("blogForm").reset();
  });
  