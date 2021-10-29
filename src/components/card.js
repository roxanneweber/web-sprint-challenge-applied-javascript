import axios from "axios";



axios.get(`http://localhost:5000/api/articles`)
.then(resp => {
  const data = resp.data.articles.technology[0]
  console.log(resp.data.articles.technology)

  //const corral = Card(data)
  //cards.appendChild(corral)
})
.catch(error => {
  console.error(error);
})


const cards = document.querySelector('.cards'); // main card holder
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.

const Card = ( { authorName, headline, authorPhoto }) => {

  //* instantiating the elements
  const articleCard = document.createElement('div') //child1 parent
  const articleHeadline = document.createElement('div') //child2
  const authorContainer = document.createElement('div') // child2 parent
  const authorImgContainer = document.createElement('div') // child3 parent
  const authorImg = document.createElement('img') // child4
  const author = document.createElement('span') //child3

  //* set classnames
  articleCard.classList.add('card');
  articleHeadline.classList.add('headline');
  authorContainer.classList.add('author');
  authorImgContainer.classList.add('img-container');
  authorImg.classList.add('photo');
  author.classList.add('author-name');

  //* creating the hierarchy
  //card.appendChild(articleCard);
  articleCard.appendChild(headline);
  articleCard.appendChild(authorContainer);
  authorContainer.appendChild(authorImgContainer);
  authorImgContainer.appendChild(authorImg);
  authorContainer.appendChild(author);


  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //* telling it what to use for each variable
  headline.textContent = headline; 
  authorImg.href = authorPhoto;
  author.textContent = authorName

  //return articleCard;

}


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.


const cardAppender = (selector) => {

}

//cardAppender(.cards);

export { Card, cardAppender }
