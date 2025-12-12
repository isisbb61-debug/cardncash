function loadComponent(path, selector) {
    fetch(path)
        .then(res => res.text())
        .then(html => {
            document.querySelector(selector).innerHTML = html;
        });
}
