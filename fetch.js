async function displayImage(x) {
  console.log(`img/${x}.jfif`);
  const response = await fetch(`img/${x}.jfif`);
  const blob = await response.blob();
  document.getElementById(x).src = URL.createObjectURL(blob);
}

const imgArr = ["tea", "lemon", "frenchie", "pasta"];

function loopArr() {
  imgArr.forEach((x) => displayImage(x));
}
loopArr()
  .then((response) => {
    console.log("Success");
  })
  .catch((error) => {
    console.log("Error");
  });
