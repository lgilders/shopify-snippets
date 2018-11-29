# Blog Categories/Filters
Currently Shopify's built-in blog does not have a way to handle adding a "category" filter to blog posts. This section of snippets/documentation provides the illusion of WordPress-like category structure using Shopify's native tags.

# Implementation
#### How to Add Blog Categories/Filters
1. Copy the blog-categories.liquid file to the theme's snippet folder.
2. Include the snippet on the blog list page (usually the blog.liquid template) with {% include 'blog-categories' %}.
3. Create a new Navigation menu with the handle blog-menu. (If you use a different name/handle, update the handle references in the blog-categories.liquid file.) 
4. Each nav menu item should have two parts: 
    * a category name that is identical to the category tag to be used on the blog post
    * a category link in the format /blogs/blog-name/tagged/category-name
__Note:__ For an All Posts category link, you must directly type in the URL link, e.g., /blogs/blog-name. If you select the blog from the dropdown list, it will not perform as expected.
5. For each blog post, add a tag with the category name that you wish to filter the post on. A blog post can have zero to many tags for category names. 
6. Style the desktop and mobile versions of the displayed categories/filters.


#### Display a particular tag as the "primary" filter tag on the blog list page.
1. Add a custom tag to each blog post with a known preface, e.g., primary-tag::filter name.
2. On the blog list page (usually the blog.liquid template), determine where you want to display the primary filter tag for the article.
3. Add the following code to target the primary-tag:: filter and display it with a link to the correct category/filter.
```
 {% for tag in article.tags %}
    {% if tag contains 'primary-tag:' %}
        {% capture displayTag %} {{ tag | slice: 13, 50 }} {% endcapture %}
        <a href="{{ blog.url }}/tagged/{{ displayTag | handle }}" class="category-tag">{{ displayTag }}</a>
    {% endif %}
{% endfor %}
```
__Note:__ The if statement and the displayTag variable code can be modified to match whatever custom, known preface used.


# Documentation
## Customize Blog Hub Navigation Menu
1. Log into your Shopify site via the [partners page](https://partners.shopify.com/).
2. In the left-hand rail, select Online Store.
3. In the left-hand rail, select Navigation.
4. In the right-hand section, select Blog menu.
5. Update existing Blog menu nav items or add a new nav item. 
  * Name of Collection - The name must match the tag used to tag individual blog posts to appear in that collection.
  * URL of Collection: /blogs/blog-name/tagged/collection-name - Multi-word tag names should be separated with a hyphen.
  * To include an All posts collection, create a nav item with an appropriate collection name and use the url of the blog, e.g., /blogs/blog-name.
  * When referencing the blog directly, you must type out the URL, not use the built-in page selector.
6. Save changes.


##Tag Blog Post to Include in a Collection
1. Log into your Shopify site via the [partners page](https://partners.shopify.com/).
2. In the left-hand rail, select Online Store.
3. In the left-hand rail, select Blog Posts.
4. In the right-hand section, select an existing blog post.
5. In the post’s tags, add a tag to include it in a particular collection.
  * The tag must match the collection name set up as part of the Blog menu navigation.
  * By default, all posts will appear in the All posts collection. No tag is needed.
  * Use as many tags on a blog post as you would like; the post will appear in all tagged collections. 


##Indicate a Primary Tag for a Blog Post
In some cases, you may wish to display a particular tag in association with a blog post, rather than relying only on a tag cloud. 
1. Log into your Shopify site via the [partners page](https://partners.shopify.com/).
2. In the left-hand rail, select Online Store.
3. In the left-hand rail, select Blog Posts.
4. In the right-hand section, select an existing blog post.
5. In the post’s tags, add a tag as the primary collection for this post with the naming convention primary-tag::tag name, e.g., primary-tag::buying guides.
  * The naming convention can be changed to anything you desire, but the display code will need to be updated to reflect the change.
6. Save changes.
