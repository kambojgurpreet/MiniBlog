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

    showAlert(message, className){
        //create div
        const div = document.createElement('div');

        //add class
        div.className = className;

        //add text
        div.appendChild(document.createTextNode(message));

        //get element
        const container = document.getElementById('errContainer');
        //container.className = secondaryClass;

        //get post title element
        const errTitle = document.querySelector('.errTitle');
        container.insertBefore(div, errTitle);

        //Timeout
        setTimeout(() => {
            document.querySelector('.notification').remove();
        },1500);
    }
}