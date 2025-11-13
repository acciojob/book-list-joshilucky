document.addEventListener("DOMContentLoaded", () => {

    const submit = document.getElementById("submit");
    const list = document.getElementById("book-list");

    submit.addEventListener("click", () => {

        const title = document.getElementById("title").value.trim();
        const author = document.getElementById("author").value.trim();
        const isbn = document.getElementById("isbn").value.trim();

        if (!title || !author || !isbn) return;

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">X</button></td>
        `;

        list.appendChild(tr);

        // clear input fields
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    });

    list.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            e.target.closest("tr").remove();
        }
    });

});
