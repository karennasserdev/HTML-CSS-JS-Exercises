<!--HTML Structure-->

<!DOCTYPE html>

<html lang='pt-PT'>
<head>
    <meta charset="UTF-8" /> 
    <title>
        Title
	</title>
    <link rel="stylesheet" type="text/css" href="main.css" /> 
</head>
<body>
</body>
</html>
--------------------------------------------------------------------------------
# HTML Structure

**DOCTYPE html:** Specifies witch version of HTML is being used.

**Meta tag:** The browser interprets the estructure trought TAGS, but its not rendered.

**HTML:**

• Is the root element. The elements (head, meta-tags, title, body...) that form the page content are put between the opening tag <html> and cloging tag </html>. • HTML is a series of tags that surround or mark up
different parts of the content so you have a certain
appearance or a certain behavior.

**HTML elements:**

Delimited by the characters ‘<‘ and ‘>’
• Usually made up of an initial pair - initial or opening tag and final or closing tag. Example: <p></p>
• closing tag can be omitted in cases that do not exist
content between pair. Example: <img/>

**Attributtes:**
• Elements may also contain attributes, which are presented in the
as follows: <tag attribute = “value”> text </tag>
example: <p class = “blue-text”> text </p>
• Attributes contain extra information about the element, but not visible as the content.
• An important lang attribute in <html> tag indicates the file content language, and is important for accessibility (automatic translation) and search engines. example: <html lang = “en”>
• Lang attribute value:
    1. Letters **before** hyphen specify language: pt, en, es, ...
    2. Letters **after** hyphen specify country: PT, BR, US, GB, ... 
    Examples: pt-PT, pt-BR, en-US, en-GB, es-ES, es-AR...

**Head Element**

<head></head>
• The <head> element acts as a container for all content of the HTML page that is not visible to users.
• Contains essentially metadata about the HTML document: <meta charset = "utf-8"> - This element specifies the character encoding of the document, the character set that the document is allowed to use.

<title></title>
• The title element is **not** a Meta Tag but is one of the **most important** in SEO;
• It is one of the items that most influences positioning on Google, if
not the most important;
• The purpose of the Google algorithm is to be able to show people the results most relevant to your searches;
• Search Results Title helps us quickly find what we are looking for;

