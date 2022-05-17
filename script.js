const div = document.createElement("div");
div.classList.add("loading-main");

function showLoading() {
  const loading = document.createElement("div");
  loading.classList.add("loading");
  div.appendChild(loading);
  document.body.appendChild(div);

  setTimeout(() => fetchUsers(), 1000);
}

function fetchUsers() {
  if (div.classList.contains("loading-main")) {
    div.parentNode.removeChild(div);
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
      .then((response) => response.json())
      .then((users) => {
        const list = document.querySelector(".list");
        list.classList.add("ativo");

        users.map((user) => {
          const all = document.createElement("tr");
          const id = document.createElement("td");
          const username = document.createElement("td");
          const name = document.createElement("td");
          const web = document.createElement("td");
          const link = document.createElement("a");
          id.innerHTML = user.id;
          name.innerHTML = user.name;
          username.innerHTML = user.username;
          link.setAttribute("href", user.website);
          link.innerHTML = user.website;
          web.appendChild(link);
          all.appendChild(id);
          all.appendChild(name);
          all.appendChild(username);
          all.appendChild(web);
          list.appendChild(all);
        });

        const btn = document.querySelector(".button");
        const cont = document.querySelector('.cont');
        btn.disabled = true;
        btn.style.backgroundColor = '#bc9ede';
        btn.style.marginBottom = '25px';
        cont.style.display = 'block';
      });
  }
}
