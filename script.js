//your JS code here. If required.
// Get form elements
const form = document.querySelector("form");
const fontsize = document.getElementById("fontsize");
const fontcolor = document.getElementById("fontcolor");

// Function to apply saved preferences
function applyPreferences() {
    const cookies = document.cookie.split(";");

    let savedFontSize = "";
    let savedFontColor = "";

    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();

        if (cookie.startsWith("fontsize=")) {
            savedFontSize = cookie.substring("fontsize=".length);
        }

        if (cookie.startsWith("fontcolor=")) {
            savedFontColor = cookie.substring("fontcolor=".length);
        }
    }

    if (savedFontSize !== "") {
        document.documentElement.style.setProperty(
            "--fontsize",
            savedFontSize + "px"
        );
        fontsize.value = savedFontSize;
    }

    if (savedFontColor !== "") {
        document.documentElement.style.setProperty(
            "--fontcolor",
            savedFontColor
        );
        fontcolor.value = savedFontColor;
    }
}

// Save preferences when form is submitted
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const size = fontsize.value;
    const color = fontcolor.value;

    // Save values in cookies
    document.cookie = "fontsize=" + size + "; path=/";
    document.cookie = "fontcolor=" + color + "; path=/";

    // Apply values immediately
    document.documentElement.style.setProperty(
        "--fontsize",
        size + "px"
    );

    document.documentElement.style.setProperty(
        "--fontcolor",
        color
    );
});

// Apply saved preferences when page loads
applyPreferences();