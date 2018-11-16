# shopify-snippets

This repo contains partials and instructions for several common features added to Shopfiy e-commerce websites.

### Blog Categories/Filters
Currently Shopify's built-in blog does not have a way to handle adding a "category" filter to blog posts. This section of snippets/documentation provides the illusion of WordPress-like category structure using Shopify's native tags.

### Mega Menu
Built with Shopify's native Navigation, this mega menu contains the bare bones for a standard site navigation and header, along with DOM for including custom images per sub-link title.

### Buy More, Save More Script
Built with Shopify's Script Editor app, this custom line item script checks the value of the items in the cart and implements a percentage discount based on that value. One version requires a discount code and the other does not.

### Hero Section
Built to work with Shopify's new Sections for Homepages, this same setup can be modified to fit other theme requirements.

### Free Shipping Script
Built with Shopify's Script Editor app, this custom shipping script looks for a specific shipping service and updates its cost to $0. One version requires a discount code and the other does not.

### Re-Sorting Products on PLP
Currently Shopify does not include a way to sort products to display New products first and Sold Out products last on the collection page. This snippet will ONLY work for collections that contain 50 or fewer products. This is due to a Shopify built-in hard limit to avoid over-taxing its databases.

### Identifying User by IP Address
This liquid snippet can be included on any page and will display a modal if a user's IP location is one of those identified. For this example, the country codes are for Taiwan, Hong Kong, and China. This snippet requires an account with ipstack.com in order to get an access key. See ipstack.com for a complete set of documentation.
