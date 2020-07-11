//init HTTP
const http = new BasicHTTP();

//init UI
const ui = new UI();

//show post on DOM load
document.addEventListener('DOMContentLoaded', getPosts());

//submit post
const postSubmit = document.getElementById('post-submit');

//add Event Listener
postSubmit.addEventListener('click', e => {
    //get input values
    const postTitle = document.getElementById('post-title').value;
    const postBody = document.getElementById('post-body').value;

    const post = {
        title: postTitle,
        body: postBody
    }

    //create post

    if(post.title === '' || post.body === ''){
        ui.showAlert('Please check your input fields','notification is-danger is-light');
    }else{
        http.post('http://localhost:3000/posts', post)
        .then((result) => {
            ui.showAlert('Post added successfully','notification is-success is-light');
        }).catch((err) => {
            console.log(err);
        });
        e.preventDefault();
    }
});

//getPosts function
function getPosts() {
   http.get('http://localhost:3000/posts')
   .then((result) => {
        ui.showPost(result);
   }).catch((err) => {
        console.log(err);
   });
}

