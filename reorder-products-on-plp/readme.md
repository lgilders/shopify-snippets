### Reorder Products on PLP
Currently Shopify does not include a way to sort products to display New products first and Sold Out products last on the collection page. This snippet will ONLY work for collections that contain 50 or fewer products. This is due to a Shopify built-in hard limit to avoid over-taxing its databases. See this forum [thread](https://ecommerce.shopify.com/c/shopify-discussion/t/how-do-i-sort-out-of-stock-products-to-the-end-of-a-collection-299550) for more information.


## Implementation
1. Open the collection.liquid file in the theme.
2. Copy/paste the contents of the reorder-products-on-plp.liquid file in place of the for-loop used to display the products.
3. Update the check for 'Sold Out' to use product.available if disallowing negative product quantity. 
4. Update the check for 'New' / 'Brand New' tags as needed. 
5. Save changes.
