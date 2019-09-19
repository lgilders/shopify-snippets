(function() {
  $(window).on('load', () => {
    attachLoadMore();
  });

  function attachLoadMore() {
    let loadMoreButton = $('a.load-more-button');

    loadMoreButton.off();
    loadMoreButton.on('click', (event) => {
      loadMoreProducts();
      event.stopPropagation();
      return false;
    });
  }

  function loadMoreProducts() {
    const $pagination = $('.pagination').last();
    const $loadButton = $('a.load-more-button').last();
    const paginationURL = $('a.load-more-button').last().attr('href');
    const $loadingIcon = $('.loading-icon').last();

    if ($loadButton.length > 0 && $loadButton.css('display') !== 'none') {
      $.ajax({
        type: 'GET',
        url: paginationURL,
        beforeSend: () => {
          $loadButton.remove();
          $loadingIcon.show();
        },
        success: (data) => {
          const $currentProducts = $('.product-list'); // Add class to product collection wrapper
          const $nextProducts = $(data).find('.product-list');
          const $nextLoadButton = $(data).find('a.load-more-button');

          $currentProducts.append($nextProducts);
          $('.product-list .product-list .product').unwrap();
          $loadingIcon.remove();
          $pagination.remove();
          $currentProducts.append($nextLoadButton);
          attachLoadMore();
        },
        dataType: 'html',
      });
    }
  }

})();
