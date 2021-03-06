function handleSubmit(event) {
  event.preventDefault();

  // get user input
  const format = document.querySelector("input[name=format]:checked").value;
  const input = document.getElementById("input-text").value;
  const data = { format, input };

  //Send to server, then update UI with response
  ClientLibrary.postData("http://localhost:2099/submit", data).then((res) => {
    ClientLibrary.updateUI(res);
  });
}

export { handleSubmit };
