// const toggleButton = document.getElementsByClassName("toggle-button")[0];
// const navLinks = document.getElementsByClassName("navbar-links")[0];

// toggleButton.addEventListener('click', function() {
//     navLinks.classList.toggle('active')
// })

const albums = document.getElementsByClassName('albums')[0];
const button = document.getElementById("addAlbum");

button.addEventListener('click', function(e) {

    e.preventDefault();

    const imageUrl = document.getElementById("img").value;
    const description = document.getElementById("description").value;

    const album = createAlbum(imageUrl, description);
    albums.appendChild(album);
})

function createAlbum(imageUrl, description) {

    const albumDiv = document.createElement('div');
    albumDiv.className = 'album';

    const image = document.createElement('img');
    image.setAttribute('src', imageUrl);

    const para = document.createElement('p');
    para.textContent = description;

    const albumFooter = document.createElement('div');
    albumFooter.className = 'albumFooter';

    const buttonDiv =  document.createElement('div');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    button1.textContent= 'view';
    button2.textContent= 'edit';

    buttonDiv.appendChild(button1);
    buttonDiv.appendChild(button2);

    const timeElement = document.createElement('span');
    timeElement.textContent="9 min";

    albumFooter.appendChild(buttonDiv);
    albumFooter.appendChild(timeElement);

    albumDiv.appendChild(image);
    albumDiv.appendChild(para);
    albumDiv.appendChild(albumFooter);

    return albumDiv;

}
