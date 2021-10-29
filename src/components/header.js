
const headContainer = document.querySelector('.header-container');
const Header = (title, date, temp) => {

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

 
  //* instantiating the elements
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
  headerTitle.textContent = 'Lambda Times';
  headerDate.textContent = 'October 29, 2021'; 
  headerTemp.textContent = '45&#176';

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //


}
  //return headerAppender;

export { Header, headerAppender }
