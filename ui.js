class UI{
    constructor () {
        this.posts = document.getElementById('post-display');
    }

    showPost(results){
        let output = '';

        results.forEach(result => {
            
            output += `
            
            <div class="container">
                <h4 class="title">${result.title}</h4>
                <p class="subtitle">${result.body}</p>

                <a href="#" class="edit-post card-link" data-id="${result.id}">
                <i class="fas fa-edit"></i>
                </a>
                <a href="#" class="delete-post card-link" data-id="${result.id}">
                <i class="far fa-trash-alt"></i>
                </a>
            </div>
            <br>
            
            `;
        });

        this.posts.innerHTML = output;
    }
}