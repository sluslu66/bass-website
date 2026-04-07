function jam() {
  alert("Let's groove! 🎸");
}

// load gear
if (document.getElementById("gear")) {
  fetch("data/bass.json")
    .then(res => res.json())
    .then(data => {
      let html = "";
      data.forEach(item => {
        html += `<div class="card">
          <h3>${item.name}</h3>
          <p>${item.type}</p>
        </div>`;
      });
      document.getElementById("gear").innerHTML = html;
    });
}

// load footer
fetch("components/footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
