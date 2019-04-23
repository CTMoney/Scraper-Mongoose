

document.getElementById("scrape").onclick = (event) => {
  event.preventDefault();

  $.getJSON({
    url: "/scrape",
    method: "GET"
  })
    .then(res => console.log(res))
    .catch(err => console.log(err))

}