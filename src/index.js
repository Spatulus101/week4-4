import "./styles.css";

const submitButton = document.getElementById("submit-data");

const content = document.getElementById("content");

submitButton.addEventListener("click", getShows);

async function getShows() {
  content.innerHTML = "";

  event.preventDefault();

  const w = document.getElementById("input-show").value;
  const response = await fetch("https://api.tvmaze.com/search/shows?q=" + w);
  const jsonData = await response.json();
  console.log(jsonData);

  const x = jsonData;

  x.forEach((r) => {
    const showdata = document.createElement("div");
    showdata.classList.add("show-data");
    content.appendChild(showdata);

    if (r.show.image != null) {
      const img = document.createElement("img");
      img.src = r.show.image.medium;
      showdata.appendChild(img);
    }

    const showinfo = document.createElement("div");
    showinfo.classList.add("show-info");
    showdata.appendChild(showinfo);

    const title = document.createElement("h1");
    title.innerHTML = r.show.name;
    showinfo.appendChild(title);

    const summary = document.createElement("p");
    summary.innerHTML = r.show.summary;
    showinfo.appendChild(summary);
  });
}
