function updateUI(data) {
  //Clear UI
  const results = document.getElementById("results");
  results.innerHTML = "";
  results.style.display = "block";

  let resultsHTML;
  if (data.status.code === "0") {
    resultsHTML = `
                <div>
                <h1>Our analysis:</h1>
                <p><i class="fas fa-hand-point-right"></i>The text is in <span>${data.agreement.toLowerCase()}</span> consisting of <span>${data.subjectivity.toLowerCase()}</span> and <span>${data.irony.toLowerCase()}</span>elements.</p>
                <p><i class="fas fa-hand-point-right"></i>We have <span>${data.confidence.toLowerCase()}%</span> confidence in these results</p>
                </div>`;
  } else {
    resultsHTML = `
                <div>
                <h1>Sorry!</h1>
                <i class="fas fa-car-crash"></i>
                <p>${data.status.msg}</p>
                <p>(error code${data.status.code})</p>
                </div>`;
  }

  //add results to DOM
  results.insertAdjacentHTML("beforeend", resultsHTML);
}

export { updateUI };
