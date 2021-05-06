const prompt = require("prompt-sync")({ sigint: true });

const lengthArr = prompt("create_parking_lot:-");
let Arr = new Array(Number(lengthArr)).fill(0);
console.log(Arr);
let exit = true;
console.log(`give a input
    EX.:-
        status,
        leave 4,
        park KA01HH1234 White,
        registration_numbers_for_cars_with_colour White,
        slot_numbers_for_cars_with_colour White,
        slot_number_for_registration_number KA01HH3141,
        exit`);
while (exit) {
  let userInput = prompt(":-");
  if (userInput === "status") {
    Arr.map((data, index) =>
      console.log(`${index} ${data[0]} ${data[1]} ${data[2]}`)
    );
  } else if (userInput.includes("park")) {
    let arr1 = userInput.split(" ");
    let slot = true;
    for (let i = 0; i < lengthArr; i++) {
      if (Arr[i] === 0) {
        Arr[i] = arr1;
        console.log(`Allocated slot number: ${i}`);
        slot = false;
        break;
      }
    }
    if (slot) console.log("Sorry,parking lot is full ");
  } else if (userInput.includes("registration_numbers_for_cars_with_colour")) {
    let arr1 = userInput.split(" ");
    // console.log(arr1);
    // console.log(Arr);
    let data = Arr.map((ele, i) => {
      if (ele[2] === arr1[1]) {
        console.log(ele[1]);
        return true;
      } else return false;
    });
    if (!data.includes(true)) console.log("not present");
  } else if (userInput.includes("leave")) {
    let arr1 = userInput.split(" ");
    let data = Arr.map((ele, i) => {
      if (i == arr1[1]) {
        Arr[i] = 0;
        console.log(`Slot number ${i} is free`);
        return true;
      } else return false;
    });
    if (!data.includes(true)) console.log("Not present");
  } else if (userInput.includes("slot_numbers_for_cars_with_colour")) {
    let arr1 = userInput.split(" ");
    let data = Arr.map((ele, i) => {
      if (ele[2] === arr1[1]) {
        console.log(i);
        return true;
      } else return false;
    });
    if (!data.includes(true)) console.log("Not present");
  } else if (userInput.includes("slot_number_for_registration_number")) {
    let arr1 = userInput.split(" ");
    let data = Arr.map((ele, i) => {
      if (ele[1] === arr1[1]) {
        console.log(i);
        return true;
      } else return false;
    });
    if (!data.includes(true)) console.log("Not Fount");
  } else {
    if (userInput.includes("exit")) {
      exit = false;
    }
  }
}
