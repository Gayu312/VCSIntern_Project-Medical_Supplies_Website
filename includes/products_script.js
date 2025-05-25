document.getElementById('searchInput').addEventListener('input', function () {
  const filter = this.value.toLowerCase();
  const productCards = document.querySelectorAll('.product-card');
  const noResultsMessage = document.getElementById('noResultsMessage');

  let matchFound = false;

  productCards.forEach(card => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const description = card.querySelector('p')?.textContent.toLowerCase() || '';

    const isMatch = title.includes(filter) || description.includes(filter);

    card.closest('.col-md-4').style.display = isMatch ? '' : 'none';

    if (isMatch) matchFound = true;
  });

  // Show or hide the "No results" message
  noResultsMessage.style.display = matchFound ? 'none' : 'block';
});


