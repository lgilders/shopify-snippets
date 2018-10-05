# shopify-snippets

This repo contains partials and instructions for several common features added to Shopfiy e-commerce websites.

## Blog Categories/Filters
Currently Shopify's built-in blog does not have a way to handle adding a "category" filter to blog posts. 

#### User Case 1: How to Add Blog Categories/Filters
1. Copy the blog-categories.liquid file to the theme's snippet folder.
2. Include the snippet on the blog list page (usually the blog.liquid template) with {% include 'blog-categories' %}.
3. Create a new Navigation menu with the handle blog-menu. (If you use a different name/handle, update the handle references in the blog-categories.liquid file.) 
4. Each nav menu item should have two parts: 
    * a category name that is identical to the category tag to be used on the blog post
    * a category link in the format /blogs/blog-name/tagged/category-name
__Note:__ For an All Posts category link, you must directly type in the URL link, e.g., /blogs/blog-name. If you select the blog from the dropdown list, it will not perform as expected.
5. For each blog post, add a tag with the category name that you wish to filter the post on. A blog post can have zero to many tags for category names. 
6. Style the desktop and mobile versions of the displayed categories/filters.


#### Use Case 1b: Display a particular tag as the "primary" filter tag on the blog list page.
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

