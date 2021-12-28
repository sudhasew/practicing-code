(function () {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", buttonClicked);
  function buttonClicked() {
    let numInput1 = document.getElementById("num1");
    // console.log(numInput1.value);
    let numInput2 = document.getElementById("num2");
    // console.log(numInput2.value);
    let count = 0;
    let mathmatics = document.querySelector(".mathmatics");
    // console.log(mathmatics.value);
    if (numInput1.value <= 0) {
      alert(`number ${numInput1.value} is not valid`);
    } else {
      alert(`number ${numInput2.value} is not valid`);
    }
    if (mathmatics.value === "option") {
      alert("please select a valid option");
    } else if (mathmatics.value === "add") {
      count = parseInt(numInput1.value) + parseInt(numInput2.value);
      console.log("add", count);
    } else if (mathmatics.value === "subtract") {
      count = parseInt(numInput1.value) - parseInt(numInput2.value);
      console.log("subtract", count);
    } else if (mathmatics.value === "divide") {
      count = parseInt(numInput1.value) / parseInt(numInput2.value);
      console.log("divide", count);
    } else {
      count = parseInt(numInput1.value) * parseInt(numInput2.value);
      console.log("multiply", count);
    }
    let result = (document.getElementById("result").value = `${count}`);
  }
  let clearBtn = document.getElementById("clearBtn");
  clearBtn.addEventListener("click", (event) => {
    // console.log(event.target);
    let numInput1 = document.getElementById("num1");
    let numInput2 = document.getElementById("num2");
    let mathmatics = document.querySelector(".mathmatics");
    numInput1.value = "";
    numInput2.value = "";
    result.value = "";
    mathmatics.value = "option";
  });
})();
