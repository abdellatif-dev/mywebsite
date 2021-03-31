// style element
const css = document.getElementById("css")

//  load from  localStorage 
let is_dark = localStorage.getItem('is_dark') || true;

save_localStorage();

// toggle light/dark theme before loading the page
if (is_dark != "false") {
    css.href = "css/style.css";

} else {
    css.href = "css/light_style.css";
}

// toggle light/dark theme onclick()
function light_dark() {
    if (is_dark == "true") {
        css.href = "css/light_style.css";
        is_dark = "false";
        save_localStorage()

    } else {
        css.href = "css/style.css";
        is_dark = "true";        
        save_localStorage()

    }

}

// save to localStorage
function save_localStorage() {
    localStorage.setItem('is_dark', is_dark);
}