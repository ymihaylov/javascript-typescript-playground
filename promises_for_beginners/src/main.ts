const getMovie = (value: string = "Game of thrones") => {
	// Challenge: Display a loader
	fetch(`https://api.tvmaze.com/singlesearch/shows?q=${value}&embed=episodes`)
		.then((response) => response.json())
		.then((data) => {
			if (data._embedded.episodes.length > 0) {
				const new_data = data._embedded.episodes.slice(0, 4);

				create_UI(data);
				return create_episodesUI(new_data);
			} else {
				return create_UI(data);
			}
		})
		.catch((error) => {
			console.log(error);
			// Challenge: Display error messages
		});
};

const create_UI = (data) => {
	const movie_img = document.querySelector("#img_src");
	const movie_icon = document.querySelector("#img_icon")!;
	const movie_title = document.querySelector(".movie_title")!;
	const movie_desc = document.querySelector(".movie_desc");
	const movie_link = document.querySelector(".btn");
	const movie_date = document.querySelector("#movie_date");
	const movie_rating = document.querySelector("#movie_rating");
	const movie_runtime = document.querySelector("#movie_runtime");
	const movie_status = document.querySelector("#movie_status");

	// set the UI
	movie_icon.src = data.image.medium;
	movie_img.src = data.image.original;
	movie_title.textContent = data.name;
	movie_desc.innerHTML = data.summary;
	movie_link.href = data.officialSite;
	movie_date.textContent = data.premiered;
	movie_rating.textContent = data.rating.average;
	movie_runtime.textContent = data.runtime;
	movie_status.textContent = data.status;
};

const create_episodesUI = (data) => {
	//episodes
	const episodes_list = document.querySelector("#episodes");
	const episodes_title = document.querySelector(".episodes_title");

	// remove children if they exist
	episodes_title.textContent = "";
	episodes_list.innerHTML = "";

	// add the title
	episodes_title.textContent = "Episodes";

	data.forEach((episode) => {
		let li = document.createElement("li");
		const link = document.createElement("a");
		const img = document.createElement("img");
		img.src = episode.image.original;
		// Append the text node to anchor element.
		link.appendChild(img);

		// Set the title.
		link.title = episode.name;

		// Set the href property.
		link.href = episode.url;

		// Append the anchor element to the body.
		li.appendChild(link);
		episodes_list.appendChild(li);
	});
};

// handle form submit
const search = (event) => {
	event.preventDefault();
	const value = document.querySelector(".header_form-input").value;

	getMovie(value);
};

// create default UI
getMovie();
