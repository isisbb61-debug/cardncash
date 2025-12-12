function loadComponent(path, selector) {
    fetch(path, { cache: "no-cache" }) 
        .then(response => {
            if (!response.ok) {
                console.error("❌ 컴포넌트 로드 실패:", path, response.status);
                return "";
            }
            return response.text();
        })
        .then(html => {
            const target = document.querySelector(selector);
            if (target) target.innerHTML = html;
        })
        .catch(err => console.error("❌ Fetch 오류:", err));
}
