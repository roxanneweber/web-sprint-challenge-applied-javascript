
// TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //




const headerContainer = document.querySelector('.header-container');

const Header = (title, date, temp) => {

  //* create web elements
  const header = document.createElement('div'); // child1
  const headerDate = document.createElement('span'); // child2
  const headerTitle = document.createElement('h1'); // child2
  const headerTemp = document.createElement('span') // child2
  
  //* set classnames
  header.classList.add('header');
  headerDate.classList.add('date');
  headerTitle.classList.add('title');
  headerTemp.classList.add('temp');
  
  //* creating the hierarchy
  header.appendChild(headerDate);
  header.appendChild(headerTitle);
  header.appendChild(headerTemp);
  
  //* telling it to put the variables above into our elements
  headerTitle.textContent = title;
  headerDate.textContent = date; 
  headerTemp.textContent = temp;

  return header;
}

Header('Lambda Times', 'October 29', 'damn cold');

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerElem = document.querySelector(selector);
  headerElem.appendChild(headerContainer);

}
headerAppender('.header-container');


export { Header, headerAppender }
