document.addEventListener('DOMContentLoaded', () => {
  console.log("I loaded!");


  const form = document.querySelector('#input-form');
  form.addEventListener('submit', handleInputForm);

})


const handleInputForm = function(event){
  event.preventDefault();

  const titleInputResult = document.querySelector('#title-input-result');
  titleInputResult.textContent = `Title entered: ${this.title.value}`

  const authorInputResult = document.querySelector('#author-input-result');
  authorInputResult.textContent = `Author entered: ${this.author.value}`

  const selectionInputResult =
  document.querySelector('#category-selected-result');
  selectionInputResult.textContent = `Category selected: ${this.category.value}`

  const genreInputResult =
  document.querySelector('#genre-selected-result');
  genreInputResult.textContent = `Genre selected: ${this.select.value}`

  resetForm();


}

function resetForm(){
  document.querySelector('#input-form').reset();
}
