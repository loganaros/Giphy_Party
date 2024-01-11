async function getGIF() {
    let searchVal = document.getElementById("searchInput").value;
    let res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${searchVal}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    let index = Math.floor(Math.random() * res.data.data.length);
    return res.data.data[index].images.original.url;
}

$("form").on("submit", async (e) => {
    e.preventDefault();
    let gif = document.createElement("img");
    gif.src = await getGIF();
    $("#gifArea").append(gif);
});

$("#deleteAll").on("click", (e) => {
    e.preventDefault();
    $("#gifArea").empty();
})