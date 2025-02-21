// Show the Awards page with the Player of the Match and Series Awards buttons
function showAwardsPage() {
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('awards-page').classList.remove('hidden');
}

// Show Player of the Match links
function showPlayerOfTheMatch() {
    document.getElementById('awards-page').classList.add('hidden');
    document.getElementById('player-of-the-match-page').classList.remove('hidden');	
}

// Show Series Awards links
function showSeriesAwards() {
    document.getElementById('awards-page').classList.add('hidden');
    document.getElementById('series-awards-page').classList.remove('hidden');
	document.getElementById('award-links').classList.remove('hidden');
}

// Go back to the previous page (Home)
function goBackToHome() {
    document.getElementById('awards-page').classList.add('hidden');
    document.getElementById('home-page').classList.remove('hidden');
}

// Go back to the previous page (Awards)
function goBackToAwards() {
    document.getElementById('player-of-the-match-page').classList.add('hidden');
    document.getElementById('series-awards-page').classList.add('hidden');
    document.getElementById('awards-page').classList.remove('hidden');
}

// View Scorecard - Dynamically show the image
function viewScorecard(match) {
    // Hide the links and Back button
    document.getElementById('player-links').classList.add('hidden');
	document.getElementById('player-of-the-match-page').classList.add('hidden');
	document.getElementById('awards-page').classList.add('hidden');
    	document.getElementById('player-of-the-match-page').querySelector('button').classList.add('hidden');
    	document.getElementById('scorecard-images').classList.remove('hidden');
	document.getElementById('header1').classList.add('hidden');

    // Clear any previously shown images
    document.getElementById('scorecard-images').innerHTML = '';

    // Create the image container
    const scorecardContainer = document.getElementById('scorecard-images');
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = `images/${match}.gif`;  // Replace with your image file
    img.alt = `${match} details`;

    imageContainer.appendChild(img);
    scorecardContainer.appendChild(imageContainer);
	if (match === 'Leo_Champions')
	{
		document.getElementById('back-button-Win').classList.remove('hidden');
		document.getElementById('back-button-Run').classList.add('hidden');
		document.getElementById('back-button-MoM').classList.add('hidden');
	}
	else if (match === 'NMSD11_Runners')
	{
		document.getElementById('back-button-Run').classList.remove('hidden');
		document.getElementById('back-button-Win').classList.add('hidden');
		document.getElementById('back-button-MoM').classList.add('hidden');
	}
	else
	{
		document.getElementById('back-button-MoM').classList.remove('hidden');		
		document.getElementById('back-button-Run').classList.add('hidden');
		document.getElementById('back-button-Win').classList.add('hidden');
	}
	if (match === 'M1'){
			document.getElementById('prev-btn').classList.add('hidden');
			document.getElementById('next-btn').classList.remove('hidden');
		}
		else if (match === 'M13')
		{
			document.getElementById('next-btn').classList.add('hidden');
			document.getElementById('prev-btn').classList.remove('hidden');
		}
		else
		{
			document.getElementById('prev-btn').classList.remove('hidden');
			document.getElementById('next-btn').classList.remove('hidden');
		}
		// Toggle visibility of buttons based on current index
   		 document.getElementById('prev-btn').style.display = currentImageIndex === 0 ? 'none' : 'inline';
   	 	document.getElementById('next-btn').style.display = currentImageIndex === images.length - 1 ? 'none' : 'inline';
}

// View Award - Dynamically show the image
function viewAwardImage(award) {
    // Hide the links and Back button
    document.getElementById('award-links').classList.add('hidden');
	document.getElementById('player-of-the-match-page').classList.add('hidden');	
    document.getElementById('series-awards-page').querySelector('button').classList.add('hidden');
    document.getElementById('award-images').classList.remove('hidden');
	document.getElementById('header1').classList.add('hidden');
	

    // Clear any previously shown images
    document.getElementById('award-images').innerHTML = '';

    // Create the image container
    const awardContainer = document.getElementById('award-images');
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const img = document.createElement('img');
    img.src = `images/${award}.jpg`;  // Replace with your image file
    img.alt = `${award} award`;

    imageContainer.appendChild(img);
    awardContainer.appendChild(imageContainer);
	document.getElementById('back-button-MoS').classList.remove('hidden');
}

// Close the image and show links again
function closeMoMImage() {
    // Clear the image and hide the container
    document.getElementById('scorecard-images').classList.add('hidden');
    document.getElementById('award-images').classList.add('hidden');
	document.getElementById('back-button-MoM').classList.add('hidden');

    // Show the links again
    document.getElementById('player-links').classList.remove('hidden');
	document.getElementById('player-of-the-match-page').classList.remove('hidden');	
    document.getElementById('player-of-the-match-page').querySelector('button').classList.remove('hidden');
	document.getElementById('header1').classList.remove('hidden');
}

function closeMoSImage() {
    // Clear the image and hide the container
	document.getElementById('player-of-the-match-page').classList.add('hidden');
    document.getElementById('scorecard-images').classList.add('hidden');
    document.getElementById('award-images').classList.add('hidden');
	document.getElementById('back-button-MoS').classList.add('hidden');

    // Show the links again
    document.getElementById('player-links').classList.remove('hidden');
    document.getElementById('player-of-the-match-page').querySelector('button').classList.remove('hidden');
    document.getElementById('award-links').classList.remove('hidden');
    document.getElementById('series-awards-page').querySelector('button').classList.remove	('hidden');
	document.getElementById('header1').classList.remove('hidden');
}

function closeRunnersImage() {
    // Clear the image and hide the container
	document.getElementById('scorecard-images').classList.add('hidden');
    document.getElementById('award-images').classList.add('hidden');
	document.getElementById('back-button-Run').classList.add('hidden');

    // Show the links again
	document.getElementById('player-links').classList.remove('hidden');	
    document.getElementById('player-of-the-match-page').querySelector('button').classList.remove('hidden');
    document.getElementById('awards-page').classList.remove('hidden');
	document.getElementById('header1').classList.remove('hidden');
 }

function closeWinnersImage() {
    // Clear the image and hide the container
	document.getElementById('scorecard-images').classList.add('hidden');
    document.getElementById('award-images').classList.add('hidden');
	document.getElementById('back-button-Win').classList.add('hidden');

    // Show the links again
	document.getElementById('player-links').classList.remove('hidden');	
    document.getElementById('player-of-the-match-page').querySelector('button').classList.remove('hidden');
	document.getElementById('awards-page').classList.remove('hidden');
	document.getElementById('header1').classList.remove('hidden');
}
let images = [
    'images/M1.gif', 'images/M2.gif', 'images/M3.gif', 'images/M4.gif','images/M5.gif', 'images/M6.gif', 'images/M7.gif', 'images/M8.gif','images/M9.gif', 'images/M10.gif','images/M11.gif', 'images/M12.gif', 'images/M13.gif'
];
let currentImageIndex = 0;

// Function to update the displayed image
function updateImage() {
    const imgElement = document.getElementById('current-image');
    imgElement.src = images[currentImageIndex];

    // Toggle visibility of buttons based on current index
    document.getElementById('prev-btn').style.display = currentImageIndex === 0 ? 'none' : 'inline';
    document.getElementById('next-btn').style.display = currentImageIndex === images.length - 1 ? 'none' : 'inline';
}

// Function to navigate to the next or previous image
function navigateImage(direction) {
    if (direction === 'next') {
        if (currentImageIndex < images.length - 1) {
            currentImageIndex++;
        }
    } else if (direction === 'prev') {
        if (currentImageIndex > 0) {
            currentImageIndex--;
        }
    }
    updateImage();
}

// Initialize the first image when the page loads
document.addEventListener('DOMContentLoaded', function() {
    updateImage();
});


// Open the player profile link
function openPlayerProfile() {
    window.open('https://sreekanthc86.github.io/SCCPlayerProfile/', '_blank');
}
