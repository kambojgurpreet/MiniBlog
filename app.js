//init HTTP
const http = new BasicHTTP();

//init UI
const ui = new UI();

//show post on DOM load
document.addEventListener('DOMContentLoaded', getPosts());


//getPosts function
function getPosts() {
   http.get('http://localhost:3000/posts')
   .then((result) => {
        ui.showPost(result);
   }).catch((err) => {
        console.log(err);
   });
}

