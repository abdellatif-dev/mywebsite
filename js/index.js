const css = document.getElementById("css")

let is_dark = localStorage.getItem('is_dark');
savecookie();

if (is_dark == "true") {
    css.href = "css/style.css";

} else {
    css.href = "css/light_style.css";

}

function light_dark() {
    if (is_dark == "true") {
        css.href = "css/light_style.css";
        is_dark = "false";
        savecookie()

    } else {
        css.href = "css/style.css";
        is_dark = "true";        
        savecookie()

    }

}

function savecookie() {
    localStorage.setItem('is_dark', is_dark);
}