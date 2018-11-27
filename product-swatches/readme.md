# Add Swatches to Product
Rather than using a third-party app, add swatches to products via these code changes. See this [documentation](https://help.shopify.com/en/themes/customization/products/features/add-color-swatches) for more information.

## Implementation
1. Add the swatch.liquid file to the snippets folder in the site's theme. 
2. Include the swatch snippet via the example in the product.liquid file.
3. Include the two JavaScript snippets from the product.js file to enable swatch select behavior.
4. Upload a sold-out graphic to the admin/files section of the site.
__Note:__ The image must be named soldout.png.
5. Include swatch.scss into stylesheet / build.
6. Upload color swatch graphics to the admin/files section of the site.
__Note:__ The image must be named after the color option, but be handleized, and have a .png extension.

## Documentation
### Swatch Option Customization
1. Log into your Shopify site via the [partners page](https://partners.shopify.com/).
2. Navigate to the admin/files.
3. Upload color swatch graphics to the site.
4. Save changes.
