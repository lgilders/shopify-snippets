# Ajax Load More Button
For collection pages a design may call for using a Load More button to ajax the next page of products onto the existing page, rather than using the traditional pagination provided by Shopify.

## Implementation
1. Open the theme's collection.liquid file. 
2. Open the ajax-load-more-button.liquid snippet from this repo.
3. Copy/paste the contents into the theme's collection.liquid file before the (% endpaginate %) line.
3. Open the theme's src/assets/scripts/sections folder.
4. Copy the ajax-load-more-button.js file into the scripts/sections folder.
5. Open the theme's src/assets/scripts/templates folder.
6. Open the templates/collection.js file.
7. Add a line to load the button's behavior.
    * If this file does not yet exist, copy the collection.js file into the scripts/templates folder.

__Note:__ The JavaScript implementation directions are set up for the Slate framework. For the Themekit framework, copy/paste the contents of ajax-load-more-button.js into the bottom of the collection.liquid file and wrap it in <script></script> tags.