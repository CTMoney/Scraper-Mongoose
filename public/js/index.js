

document.getElementById("scrape").onclick = () => {
  $.ajax({
    url: "/scrape",
    method: "GET"
  })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}