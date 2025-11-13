document.addEventListener("DOMContentLoaded", function () {

    const submitBtn = document.getElementById("submit");
    const bookList = document.getElementById("book-list");

    submitBtn.addEventListener("click", function () {

        const title = document.getElementById("title").value.trim();
        const author = document.getElementById("author").value.trim();
        const isbn = document.getElementById("isbn").value.trim();

        if (title === "" || author === "" || isbn === "") {
            return; // no alert needed for tests
        }

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">X</button></td>
        `;

        bookList.appendChild(tr);

        // clear fields
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("isbn").value = "";
    });

    // delete row
    bookList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete")) {
            e.target.closest("tr").remove();
        }
    });

});
