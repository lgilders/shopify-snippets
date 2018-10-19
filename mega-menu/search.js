// Add to theme.js

// SEARCH FORM BEHAVIOR
theme.ajaxSearch();

theme.ajaxSearch = (function() {
    let currentAjaxRequest = null;
    const searchForms = $('#header form[action="/search"],#mobile-search-form  form[action="/search"]').each(function() {
      let $input = $(this).find('input[name="q"]');
      $input.attr('autocomplete', 'off').bind('keyup change focus', function() {
        let $term = $(this).val();
        let searchURL = '/search?type=product&q=*' + $term + '*';
        let $resultsList = $('.ajax-search-results');
  
        if ($term.length > 3 && $term !== $(this).attr('data-old-term')) {
          $(this).attr('data-old-term', $term);
  
          if (currentAjaxRequest !== null) currentAjaxRequest.abort();
                  
            currentAjaxRequest = $.getJSON(searchURL + '&view=json', function(data) {
              $resultsList.empty();
  
              if (data.results_count === 0) {
                $resultsList.html('<p>No results.</p>');
                $resultsList.fadeIn(200);
                $resultsList.hide();
              } else {
                $.each(data.results, function(index, item) {
                  let $link = $('<a></a>').attr('href', item.url);
                  
                  $link.append('<span class="title">' + item.title + '</span>');
                  $resultsList.append($link);
                });
  
                if (data.results_count > 10) {
                  $resultsList.append('<div class="row"><div class="semi-10 large-push-2 semi-push-1 large-8 columns"><a class="btn" href="' + searchURL + '"> +(' + data.results_count + ') more</a></div></div>');
                 }
                
                 $resultsList.fadeIn(200);
                  }
              });
              
          } else if( $term == $(this).attr('data-old-term') ){
              $resultsList.fadeIn(200);
          }
      });
    });
  
    $('body').bind('click', (evt) => {
      if( (evt.target.id !== 'Search') && (evt.target.id !== 'mobile-search') ){
        $('.ajax-search-results').fadeOut(200);
      }
    });
  });
  