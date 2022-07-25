console.log("javascript connected");

// const getResidentsBtn  = document.querySelector('#resident-btn')
const getResidentsBtn = document.getElementById("resident-btn");

const getResidents = () => {
  console.log("button clicked");
  axios
    .get("https://swapi.dev/api/planets?search=Alderaan")
    .then((res) => {
      const { residents } = res.data.results[0];
      console.log(residents);
      for (let i = 0; i < residents.length; i++) {
        axios
          .get(`${residents[i]}`)
          .then((response) => {
            console.log(response.data);
            const residentTitle = document.createElement("section");
            residentTitle.innerHTML = `
            <h2>${response.data.name}</h2>
            <h5>gender:${response.data.gender}</h5>
            <span>eye-color:${response.data.eye_color}</span>
            `
            document.body.appendChild(residentTitle)
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};

getResidentsBtn.addEventListener("click", getResidents);

