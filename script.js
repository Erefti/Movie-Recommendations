function showRecommendations(genre) {
    const recommendations = {
        action: [
            { title: 'Mad Max: Fury Road', description: 'A post-apocalyptic action film featuring high-octane stunts and a gripping storyline.', img: 'mad_max.jpg' },
            { title: 'John Wick', description: 'A neo-noir action thriller with intense action sequences and a compelling revenge plot.', img: 'john_wick.jpg' },
            { title: 'The Dark Knight', description: 'A gripping superhero film with a standout performance by Heath Ledger as the Joker.', img: 'dark_knight.jpg' },
            { title: 'Gladiator', description: 'An epic historical film with grand battles and a powerful story of vengeance.', img: 'gladiator.jpg' }
        ],
        comedy: [
            { title: 'Superbad', description: 'A hilarious coming-of-age story about high school friends trying to make the most of their last days together.', img: 'superbad.jpg' },
            { title: 'The Hangover', description: 'A comedy about a bachelor party gone wrong, filled with unexpected twists and laughs.', img: 'hangover.jpg' },
            { title: 'Step Brothers', description: 'A comedy about two immature stepbrothers who are forced to live together.', img: 'step_brothers.jpg' },
            { title: 'Anchorman', description: 'A satirical comedy about a 1970s news team dealing with a changing world.', img: 'anchorman.jpg' }
        ],
        drama: [
            { title: 'The Shawshank Redemption', description: 'A powerful story of friendship and hope set in a prison.', img: 'shawshank.jpg' },
            { title: 'Forrest Gump', description: 'A touching tale of a man with a low IQ who influences major historical events.', img: 'forrest_gump.jpg' },
            { title: 'The Godfather', description: 'A classic film about a powerful crime family and its struggles.', img: 'godfather.jpg' },
            { title: 'Fight Club', description: 'A dark and provocative film exploring identity and consumerism.', img: 'fight_club.jpg' }
        ]
    };

    const container = document.getElementById('recommendations');
    container.innerHTML = ''; // Clear existing recommendations

    recommendations[genre].forEach(movie => {
        const movieBox = document.createElement('div');
        movieBox.classList.add('movie-box');

        movieBox.innerHTML = `
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-description">${movie.description}</p>
        `;

        container.appendChild(movieBox);
    });

    container.style.display = 'block'; // Show the recommendations container
}
