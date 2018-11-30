### Featured Products Managed via Metafields
Because the new Sections only work for the Homepage, this snippet allows for metafield-adminable content on other pages, such as blog articles or collection list pages.


## Implementation
1. Copy the featured-products-via-metafields.liquid file into the snippets folder of the theme.
2. Include the snippet in the appropriate page template where the section will be displayed. 
__Note:__ The metafields namespace and key values are hardcoded. To display different featured products sections on different page templates, then copy the liquid file and give it a unique name for each page template. Then update the namespace value to a unique one.
3. Save changes.


## Other Requirements
By default, this code will display up to 4 products. It also requires the use of a product-helper file to display the product information. The theme may already have one in the snippets folder, e.g., product-grid-item.liquid, product-card-grid.liquid, grid-item__product.liquid, etc. If the theme lacks one of these helpers, see the product-helpers folder for several options.


## Documentation
### Using a Featured Products Section on a Page Template
1. Log into your Shopify site via the [partners page](https://partners.shopify.com/).
2. In the left-hand rail, select Apps.
3. Select the metafields management app.
4. Create the new metafields namespace and key/value types.
5. Navigate to the page where the section will be displayed.
6. Add the metafields to the page.
7. Save changes.
__Note:__ metafield namespace: featured_products
__Note:__ metafield key: title; value: string
__Note:__ metafield key: product_X, where X is a number from 1 to 4; value: product_handle
