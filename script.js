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
	if (match = "Leo_Champions")
	{
		document.getElementById('back-button-Win').classList.remove('hidden');
	}
	else if (match = "NMSD11_Runners")
	{
		document.getElementById('back-button-Run').classList.remove('hidden');
	}
	else
	{
		document.getElementById('back-button-MoM').classList.remove('hidden');
	}
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
	document.getElementById('player-of-the-match-page').classList.remove('hidden');
    document.getElementById('scorecard-images').classList.add('hidden');
    document.getElementById('award-images').classList.add('hidden');
	document.getElementById('back-button-MoM').classList.add('hidden');

    // Show the links again
    document.getElementById('player-links').classList.remove('hidden');
    document.getElementById('player-of-the-match-page').querySelector('button').classList.remove('hidden');
    document.getElementById('award-links').classList.remove('hidden');
    document.getElementById('series-awards-page').querySelector('button').classList.remove('hidden');
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
	document.getElementById('awards-page').classList.remove('hidden');
	document.getElementById('header1').classList.remove('hidden');
}

// Open the player profile link
function openPlayerProfile() {
    window.open('https://sreekanthc86.github.io/SCCPlayerProfile/', '_blank');
}
