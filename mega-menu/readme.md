# Mega Menu
Built with Shopify's native Navigation, this mega menu contains the bare bones for a standard site navigation and header, along with DOM for including custom images per sub-link title.

## Implementation
1. Open the theme's header.liquid file. 
2. Copy/paste the contents out into a new file for safe keepting.
3. Open the header.liquid snippet from this repo.
4. Copy/paste the contents into the theme's header.liquid file.
5. Add copies of the following files to the theme's snippets folder:
    * announcement-bar.liquid - site-wide bar at the top of all pages
    * header-desktop.liquid - desktop header, includes logo, search form, my account link, and cart link
    * header-mobile.liquid - mobile header, includes logo, search form, my account link, and cart link
    * nav-desktop.liquid - desktop navigation
    * nav-mobile.liquid - mobile navigation
6. Open the nav-overlay-desktop.liquid file and copy the DOM into the theme's theme.liquid file after the ```<body>``` tag.
7. Open the header.js file and copy/paste the contents into the theme's theme.js file.
8. Open the search.js file and copy/paste the contents into the theme's theme.js file.
9. If having a sticky version of the menu is a requirement, open the sticky-nav.js file and copy/paste the contents into the theme's theme.js file.

## Documentation
### Customize Site Navigation Menu
1. Log into your Shopify site via the [partners page](https://partners.shopify.com/).
2. In the left-hand rail, select Online Store.
3. In the left-hand rail, select Navigation.
4. In the right-hand section, select Main menu.
5. In the right-hand section, select Add menu item to create a new nav menu link.
    * Requires a nav link title
    * Requires a page link
    __Note:__ While crafting the menu, you can simply use a ```#``` for the link. Remember to replace these placeholders before site launch.
6. To nest a nav menu item, select the icon to the left of the name and drag the selection onto and underneath the parent menu item.
7. Save changes.

### Customize Images Associated with Nav Menu Items
1. Log into your Shopify site via the [partners page](https://partners.shopify.com/).
2. Navigate to the Files section of the site (/admin/files).
3. Select the Upload File button from the far right-hand section.
4. Upload an image for each associated nav menu item.
    __Note:__ The image name must match the format: illustration-nav-link-title.
    __Note:__ If you are replacing an existing image, you must first DELETE the old one from the /files section and then upload the new one. Otherwise, Shopfiy will rename the new image with a different name, breaking the link between the image and the nav menu item. 
5. Save changes.

