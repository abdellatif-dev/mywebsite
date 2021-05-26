// consts
const css = document.getElementById("css");
const theme_btn = document.getElementById("themebtn");

//  load from  localStorage 
let is_dark = localStorage.getItem('is_dark');

theme_onload();

function theme_onload() {
  if (is_dark != "light") {
    css.href = "css/style.css";

  } else {
    css.href = "css/light_style.css";

  }

  themebtn_txt();
  save_localStorage();

}

function themebtn_txt() {
  if (is_dark == "light") {
    theme_btn.textContent = "dark theme";

  } else {
    theme_btn.textContent = "light theme";

  }
}

theme_btn.addEventListener('click', light_dark);

// toggle light/dark theme onclick()
function light_dark(e) {
  e.preventDefault();
  if (is_dark == "dark") {
    css.href = "css/light_style.css";
    is_dark = "light";
    themebtn_txt();
    save_localStorage()

  } else {
    css.href = "css/style.css";
    is_dark = "dark";
    themebtn_txt();
    save_localStorage()

  }

}

// save to localStorage
function save_localStorage() {
  localStorage.setItem('is_dark', is_dark);
}

