import React from 'react'

function Faqs() {
  return (
    <div className='container p-4'>
    <h1>HTML Frequently Asked Questions (FAQs)</h1>
    
    <h2 className="text-success">1. What is HTML?</h2>
    <p>
      HTML stands for Hypertext Markup Language. It is the standard markup language for creating web pages and web applications.
      HTML describes the structure of a web page semantically and consists of a series of elements enclosed in angle brackets.
    </p>

    <h2 className="text-success">2. What are HTML elements?</h2>
    <p>
      HTML elements are building blocks of HTML pages. An element consists of a start tag, content, and an end tag (if it is not an empty element).
      Example: &lt;p&gt;This is a paragraph.&lt;/p&gt;
    </p>

    <h2 className="text-success">3. What is the difference between HTML and XHTML?</h2>
    <p>
      HTML (HyperText Markup Language) and XHTML (Extensible HyperText Markup Language) are both markup languages used to create web pages.
      The main difference between them is that XHTML is stricter and more XML-like, requiring well-formed documents and adhering to XML syntax rules.
    </p>

    <h2 className="text-success">4. What are the new features in HTML5?</h2>
    <p>
      HTML5 introduced several new features and elements, including semantic tags like &lt;header&gt;, &lt;nav&gt;, &lt;section&gt;, &lt;article&gt;, &lt;footer&gt;, audio and video elements, canvas element for drawing graphics, and more.
      It also includes APIs for multimedia, geolocation, local storage, web workers, and offline web applications.
    </p>

    <h2 className="text-success">5. How to include images in HTML?</h2>
    <p>
      To include images in HTML, use the &lt;img&gt; element with the src attribute specifying the URL of the image file.
      Example: &lt;img src="image.jpg" alt="Description of the image"&gt;
    </p>

    <h2 className="text-success">6. What is the purpose of the alt attribute in the img element?</h2>
    <p>
      The alt attribute in the &lt;img&gt; element provides alternative text for the image, which is displayed if the image cannot be loaded or for accessibility purposes.
      It should describe the content or function of the image for users who cannot see it.
    </p>

    <h2 className="text-success">7. How to create hyperlinks in HTML?</h2>
    <p>
      To create hyperlinks in HTML, use the &lt;a&gt; (anchor) element with the href attribute specifying the URL of the destination.
      Example: &lt;a href="https://example.com"&gt;Link Text&lt;/a&gt;
    </p>

    <h2 className="text-success">8. What is the role of HTML in web development?</h2>
    <p>
      HTML plays a central role in web development by defining the structure and content of web pages.
      It provides a standardized way to create documents that can be interpreted by web browsers and displayed to users.
      Together with CSS (Cascading Style Sheets) and JavaScript, HTML forms the foundation of the World Wide Web.
    </p>

    <h2 className="text-success">Conclusion</h2>
    <p>
      These HTML FAQs cover common questions and topics related to HTML, providing a basic understanding of the language and its usage in web development.
      By familiarizing yourself with HTML fundamentals and best practices, you'll be better equipped to create engaging and accessible web content.
    </p>
  </div>
  )
}

export default Faqs
