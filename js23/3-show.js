const formEl = document.querySelector('#searchForm');
const sectionEl = document.querySelector('#films');
// const reqToShow = ' search/shows';

const baseUrl = 'https://api.tvmaze.com';

// const getShows = async () => {
//   const res = await axios.get(`${baseUrl}/search/shows?q=`);
// };

function renderData(data) {
  data.forEach(({ show }) => {
    const card = `
      <div class="card" style="width: 18rem;">
    <img src="${
      show.image.medium ? show.image.medium : ''
    }" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${show.name}</h5>
      <p class="card-text">${show.summary}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
      `;

    sectionEl.innerHTML += card;
  });

  console.log(data);
}

formEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = e.target.query;
  // console.dir(e.target.query);

  const res = await axios.get(`${baseUrl}/search/shows`, {
    params: {
      q: input.value,
    },
  });

  console.log(res.data);
  renderData(res.data);
});
