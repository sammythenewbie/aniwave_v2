fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const wrapper = document.getElementById('row');
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add("col");
      card.innerHTML = `
      <a href="${item.link}"> 
        <div class="card h-100">
          <img src="${item.image}" class="card-img-top rounded" alt="${item.title}">
          <div class="card-body rounded">
            <h5 class="card-title">${item.title}</h5>
            <div class="d-flex justify-content-between">
              <p class="card-text episode-count">${item.episodeCount}</p>
              <p class="card-text year">${item.year}</p>
            </div>
          </div>
        </div>
      </a>
      `;

      wrapper.appendChild(card);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

//Loader
window.addEventListener("load", function () {
    var preloader = document.querySelector(".preloader, .preloader-video");
});

document.addEventListener('DOMContentLoaded', function() {
  const text = document.getElementById('description');
  const button = document.getElementById('toggleButton');

  button.addEventListener('click', function() {
      if (text.classList.contains('clamped-text')) {
          text.classList.remove('clamped-text');
          button.textContent = 'Show less';
      } else {
          text.classList.add('clamped-text');
          button.textContent = 'Read more';
      }
  });
});

