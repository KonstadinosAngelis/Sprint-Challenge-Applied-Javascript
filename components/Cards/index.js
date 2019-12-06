// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createArticles(array){
    const mainCard = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imgContainer = document.createElement('div'),
    authorImg =  document.createElement('img')
    authorName = document.createElement('span');

    mainCard.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    mainCard.appendChild(headline);
    mainCard.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    imgContainer.appendChild(authorName);

    headline.textContent = array.headline;
    authorName.textContent = array.authorName;
    authorImg.src = array.authorPhoto;
    authorName.textContent = array.authorName;

    return mainCard;
}

const articlePlacer = document.querySelector('.cards-container')

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(response => {
    let test = Object.values(response.data.articles);
    test.forEach((entry) => {
        entry.forEach(element => {
            console.log(element)
            articlePlacer.appendChild(createArticles(element))
        })
    })
})