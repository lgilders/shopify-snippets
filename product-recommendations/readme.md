# Product Recommendations
Add a section to each product page to display a random group of related products. See this [documentation](https://help.shopify.com/en/themes/customization/products/features/recommend-related-products#edit-your-theme-code-to-recommend-products-sectioned-themes-specific) for more information.

## Implementation
1. Copy the product-recommendations.liquid snippet into the theme's snippet folder.
2. Copy the product-grid-item-recommendations.liquid snippet into the theme's snippet folder.
    * This is only needed if you do not want to use the theme's existing product-grid-item snippet.
3. Include the new snippet on the product detail template (usually product.liquid).

## Documentation
### Default Product Recommendations
For any given product, the recommendations section will be populated by a random selection of products from any shared collections that product is a part of. 

For example, when viewing Men’s Golf Gloves, the recommended products will be populated by products from the viewed product’s collections - in this case Men’s Gloves.

### Adding Variety to Product Recommendations
The easiest way to add variety to the product recommendations is to use a custom collection populated with all products that should be available as a recommendation. 

For example, for men’s product recommendations, we have created an example Product Recommendations - Men collection that contains a variety of men’s products. If a user views any of those products, then the recommendations are populated by both the product’s original collection and the Product Recommendations - Men’s collection. 

An example collection for women’s product recommendations was also created - Product Recommendations - Women.

### Customizing Product Recommendations Per Product
Each product can also have a custom collection associated with it that will be used to populate the recommendations section instead. 

1. Log in to the Shopify admin.
2. From the left-hand rail, select Products.
3. From the left-hand rail, select Collections.
4. Find the collection to be used for product recommendations.
5. View the collection.
6. Copy the collection’s handle from that collection’s URL.
    * Example: mens-polos
7. From the left-hand rail, select Products.
8. Search for the product that needs custom recommendations.
9. Select the product.
10. Select More actions > Add Metafields to Product.
11. From the Metafields Manager app, scroll down to the Recommended_Products section. 
12. Add the collection handle copied from step 6. 
13. Save changes.
    * Note: If a custom collection is associated to a product via this metafield, then product recommendations will only come from that custom collection. 
