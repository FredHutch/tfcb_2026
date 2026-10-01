const lectureText = {
    "--r-main-font-size": "34px",
    "--r-heading2-size": "1.45em",
    "--r-heading3-size": "1em",
    "--r-heading-text-transform": "none",
};

for (const [property, value] of Object.entries(lectureText)) {
    document.documentElement.style.setProperty(property, value);
}
