# Ad Spot Insert for Collection Page
For collection pages a design may call for using adminable ad spots. This snippet describes how a single spot can be inserted; however, in most cases, clients will want two or more spots. 

## Implementation
1. Search for the collection grid in the theme. This section may be in collection.liquid, collection-product-grid.liquid, or something similar.
2. Copy/paste the ad spot code snippet at the top of the for-loop used to display the product in the collection grid.
__Note:__ To include more than one ad spot in a collection grid, copy/paste the snippet as many times as required ad spots. Update each snippet's metafields to use unique names.
3. Using a metafield editor, add the newly created metafields and provide values for each.

## Documentation
1. Log into your Shopify site via the [partners page](https://partners.shopify.com/).
2. Using a metafield editor (either a browser extension or a third-party app), add namespace + key/value pairs for each related metafield.
__Note:__ Ensure the namespace matches whatever is used in the ad spot snippets. Ensure the key/value pairs match the correct key name and expected value.
3. Save changes.
