let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let newTourists = touristSpots.map( (place) => {
	const newPlaceArr = place.split(" ");
	let articleLessString = ""
	for( let word of newPlaceArr){
		if( word !== 'an' && word !== 'An' && word !== 'the' && word !== 'The' && word !== 'A' && word !== 'a')
		{
			articleLessString += word + " ";
		}
	}
	return articleLessString.trim();
} )
newTourists.sort()
touristSpots = newTourists;

let list = document.getElementsByClassName("myList");
touristSpots.forEach( (place) => {
    const liElement = document.createElement('li');
    liElement.textContent=place;
    list.appendChild(liElement);
} )
