//going to store the hexidecimal ranges values in a string and use string indexing to reach each one randomly using bracket notation
var hex_values = "0123456789abcdef";
//geting the max index value to set a range from 0 to max index #
var hex_max_index = hex_values.length - 1;
//setting a variable and array to hold random numbers to then use to go through the hex values indexing
var hex_array = [];
//where the final hex css value will be stored
var hex_css_value = "#";

function color_change() {
  for (let cond = 0; cond < 6; cond++) {
    hex_array[cond] = Math.floor(Math.random() * hex_max_index);
    hex_css_value = hex_css_value + hex_values[hex_array[cond]];
  }

  document.getElementById("box").style.backgroundColor = hex_css_value;
  console.log(hex_css_value + "\n");
  hex_css_value = "#";
}

//setinterval method was used so it can call the function to change the color of the ball every 1 second (1000ms)
setInterval(color_change, 1000);
