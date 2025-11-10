function render() {
    let main = document.getElementById("main");
    main.innerHTML = "";

    for (let i = 0; i < books.length; i++) {
        let b = books[i];

        let commentsHTML = "";
        for (let j = 0; j < b.comments.length; j++) {
            let c = b.comments[j];
            commentsHTML += `<li><strong>${c.name}:</strong> ${c.comment}</li>`;
        }

        main.innerHTML += `
            <div class="book">
                <h2>${b.name}</h2>
                <p>Autor: ${b.author}</p>
                <p>Preis: ${b.price} €</p>
                <p>Likes: ${b.likes}</p>
                <p>Genre: ${b.genre}</p>
                <p>Jahr: ${b.publishedYear}</p>
        
                <h3>Kommentare</h3>
                <ul>
                    ${commentsHTML}
                </ul>
            </div>
        `;
    }
}