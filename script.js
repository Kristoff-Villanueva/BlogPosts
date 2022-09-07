import fetch from "node-fetch";

const blogPosts = document.getElementById("blogPosts");

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		let html = "";
		data.title;
		data.body;
		html;
	});
