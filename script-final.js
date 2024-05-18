document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => populateCards(data))
        .catch(error => console.error('Error fetching the JSON data:', error));

    function populateCards(data) {
        const container = document.querySelector('.row.row-cols-1.row-cols-sm-2.row-cols-md-3.row-cols-lg-4.g-4');
        container.innerHTML = ''; // Clear any existing content

        data.forEach(anime => {
            const col = document.createElement('div');
            col.className = 'col';

            const card = document.createElement('div');
            card.className = 'card h-100';

            const img = document.createElement('img');
            img.src = anime.thumbnail;
            img.className = 'card-img-top rounded';
            img.alt = anime.title;

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body rounded';

            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.textContent = anime.title;

            const cardTextWrapper = document.createElement('div');
            cardTextWrapper.className = 'd-flex justify-content-between';

            const episodeCount = document.createElement('p');
            episodeCount.className = 'card-text episode-count';
            episodeCount.textContent = anime.episodeCount;

            const year = document.createElement('p');
            year.className = 'card-text year';
            year.textContent = anime.year;

            cardTextWrapper.appendChild(episodeCount);
            cardTextWrapper.appendChild(year);

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardTextWrapper);
            card.appendChild(img);
            card.appendChild(cardBody);
            col.appendChild(card);

            container.appendChild(col);
        });
    }
});

