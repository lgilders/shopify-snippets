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
    let pagination = $('.collection-grid .pagination').last();
    let loadButton = $('.collection-grid .load-more-button').last();
    let paginationURL = $('a.load-more-button').last().attr('href');
    let loadingIcon = $('.loading-icon').last();

    if (loadButton.length > 0 && loadButton.css('display') != 'none') {
      $.ajax({
        type: 'GET',
        url: paginationURL,
        beforeSend: () => {
          loadButton.remove();
          loadingIcon.show();
        },
        success: (data) => {
          let currentProducts = $('.product-list');
          let nextProducts = $(data).find('.product-list');

          currentProducts.append(nextProducts);
          $('.product-list .product-list .product').unwrap();
          loadingIcon.remove();
          pagination.remove();
          attachLoadMore();
        },
        dataType: 'html'
      });
    }
  }

})();