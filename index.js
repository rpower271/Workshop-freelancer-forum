/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function makeFreelancer() {
  const randomName = Math.floor(Math.random() * NAMES.length);
  const randomOccupation = Math.floor(Math.random() * OCCUPATIONS.length);
  const rate =
    PRICE_RANGE.min +
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));

  return {
    name: NAMES[randomName],
    occupation: OCCUPATIONS[randomOccupation],
    rate: rate,
  };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, makeFreelancer);

function getAverageRate() {
  const total = freelancers.reduce((total, curr) => total + curr.rate, 0);
  return total / freelancers.length;
}

const freelancerAverage = getAverageRate();

function FreelancerRow({ name, occupation, rate }) {
  const $tr = document.createElement("tr");
  $tr.innerHTML = `
  <td>${name}</td>
  <td>${occupation}</td>
  <td>${rate}</td>
  `;
  return $tr;
}

function FreelancerRows() {
  const $tbody = document.createElement("tbody");
  const $freelancers = freelancers.map(FreelancerRow);
  console.log($freelancers);
  $tbody.replaceChildren(...$freelancers);
  return $tbody;
}

function AverageRate() {
  const $p = document.createElement("p");
  $p.textContent = freelancerAverage;
  return $p;
}

// FreelancerRows();
// AverageRate();

function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <AverageRate></AverageRate>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Occupation</th>
                <th>Rate</th>
            </tr>
        </thead>
        <tbody id="FreelancerRows"></tbody>
    </table>`;

  $app.querySelector("Average").replaceWith(AverageRate());
  $app.querySelector("FreelancerRows").replaceWith(FreelancerRows());
}

render();
