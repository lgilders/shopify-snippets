# Add Filtering
For the collections page, this snippet will add filtering behavior based on product tags. See this [documentation](https://help.shopify.com/en/themes/customization/collections/filter-collections-with-product-tags) for more information.

## Implementation
1. Open the filtering.liquid file and copy the code snippet.
2. In the theme, find collection.liquid and add the snippet to the bottom of the file. 
3. Determine if you want to use the dropdown or the radio buttons option for filtering. Copy/paste the appropriate file into the snippets folder of the theme.
4. Include the snippet for the dropdown or the radio buttons in collection.liquid above `{% section 'collection-template' %}`.
5. Save changes.
__Note:__ If you are using product tags for a variety of functionality, make sure to remove them from the all_tags group using `{% unless %}` to avoid having them appear as viable filter options.

## Documentation
### Using Filters on PLP
1. Log into your Shopify site via the [partners page](https://partners.shopify.com/).
2. In the left-hand rail, select Products.
3. Search for the product in question.
4. Select the product and choose edit.
5. Add the appropriate tags for filtering.
6. Save changes.
