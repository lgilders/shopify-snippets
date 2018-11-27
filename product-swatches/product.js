// Add this code block to the selectCallback for the product

// BEGIN SWATCHES
if (variant) {
    var form = jQuery('#' + selector.domIdPrefix).closest('form');

    for (var i=0,length=variant.options.length; i<length; i++) {
        var radioButton = form.find('.swatch[data-option-index="' + i + '"] :radio[value="' + variant.options[i] +'"]');
        if (radioButton.size()) {
        radioButton.get(0).checked = true;
        }
    }
}
// END SWATCHES



// Add this script snippet to enable on change behavior when selecting a variant
jQuery(function() {
    jQuery('.swatch :radio').change(function() {

      var optionIndex = jQuery(this).closest('.swatch').attr('data-option-index');
      var optionValue = jQuery(this).val();
      
      jQuery(this)
        .closest('form')
        .find('.single-option-selector')
        .eq(optionIndex)
        .val(optionValue)
        .trigger('change');
    });
});