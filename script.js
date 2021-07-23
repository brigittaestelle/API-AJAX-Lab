"use strict";

const url = "https://www.reddit.com/r/aww/.json";

// fetch(url)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data.data.before);
//   });

// async function getInfo() {
//   let ourFecth = await fetch(url);
//   let data = await ourFecth.json();
//   console.log(data.data.children[0].data.title);
//   let title = document.createElement("h1");
//   title.innerText = data.data.children[0].data.title;
//   document.body.append(title);
// }

// getInfo();

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let information = data.data.children; //an array
    for (let i = 0; i <= 27; i++) {
      console.log(i);
      let title = document.createElement("h1");
      let image = document.createElement("img");
      let link = document.createElement("a");
      title.innerText = data.data.children[i].data.title;
      image.src = data.data.children[i].data.thumbnail;
      link.innerText = data.data.children[i].data.url;
      document.body.append(title);
      document.body.append(image);
      document.body.append(link);
      console.log(data.data.children[i].data.title);
      var linebreak = document.createElement("br");
      document.body.append(linebreak);
      document.body.append(linebreak);
    }
  });
