function TopicsPage() {
    return (
        <>


            <h2>Web Development Concepts</h2>
            <nav class="local">
                <a href="#webServers">Web Servers</a>
                <a href="#frontendDesign">Frontend Design</a>
                <a href="#optimizingImages">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#JavaScript">JavaScript</a>
            </nav>
            <article id="webServers">
                <h3>Web Servers</h3>
                <p>
                    When a user wants to visit a webpage they input the <strong>Fully Qualified Domain Name
                        (FQDN)</strong> into their browser which resolves the IP address using a <strong>Domain Name
                        System (DNS)</strong> server.
                    The user then connects to the server using the IP address which host the designated homepage. The
                    user's browser loads the designated homepage at the root URL
                    which is typically named <strong>index</strong> with some suffix such as .html, .js, etc. Static
                    content homepages such as this one typically end
                    in .html (hypertext mark up language) whereas dynamically generated homepages end in .js
                    (javascript) or other suffixes.
                </p>

                <p>
                    A users Web Dev/Inspector Networks tab output screen displays the <strong>request</strong> and
                    <strong>response</strong> headers which contain valuable information such as
                    status code, type, URL, last time modified, and method. The response body contains the actual data
                    such as the index.html document. If the file is viewed from the web server the URL will
                    contain a FQDN such as https://web.engr.oregonstate.edu/~amidonk whereas if it viewed from a local
                    machine the url will be displayed in the following format
                    file:///users/kevin/Desktop/CS%290/M1/a1-amidonk/index.html.
                </p>

                <p>
                    The <strong>favicon.ico</strong> file has a status code of 200 ok because it was found on the server
                    however the main.css and main.js have a 404 error meaning the files were not found.
                </p>

                <p>
                    A URL can consist of a <strong>scheme</strong>, <strong>subdomain</strong>, <strong>host
                        domain</strong> and <strong>resources</strong>. The scheme is the protocol such as http and
                    https. The subdomain is
                    an optional prefix to the domain name such as www. The host domain is the main address of the
                    website which includes a domain name and a <strong>Top Level Domain (TLD)</strong>. Resources
                    provide the
                    specific location where a requested item can be found. The URL
                    https://web.engr.oregonstate.edu/~amidonk/CS%20290/M1/a1-amidonk/ contains these components; https
                    is the scheme, web.engr is the subdomain,
                    oregonstate is the host domain, .edu is the TLD, /~amidonk/CS%20290/M1/a1-amidonk/ is the location
                    where the index.html file can be found on the server.
                </p>
            </article>

            <article id="frontendDesign">
                <h3>Frontend Design</h3>
                <p><strong>Frontend design</strong> is focused on creating the most useful experience for
                    <strong>users</strong>. It consists of <strong>Graphical User-Interfaces (GUI)</strong>
                    , the interactive experience and the overal look and feel and design of the page.
                </p>
                <p>
                    The Five "E"s of usability define a usable website and are:
                </p>
                <dl>
                    <dt>Effective</dt>
                    <dd>Users meet their goals and end up with correct results.</dd>
                    <dt>Efficient</dt>
                    <dd>Users are able to perform tasks with the least number of steps and the are results timely.</dd>
                    <dt>Enjoyable/ Engaging</dt>
                    <dd>Users feel engaged and satisified; they are likely to come back.</dd>
                    <dt>Easy to Learn/ Navigate</dt>
                    <dd>Users are able to intuitively use the site and locate the resources they need. </dd>
                    <dt>Error-free/ Error-tolerant</dt>
                    <dd>Users do not run into road blocks or errors.</dd>
                </dl>
                <p>
                    Page layout <strong>tags</strong> break up the flow of the content and make content more readable.
                    Common page layout tags are the <strong>header</strong> tag which
                    denotes the banner. The <strong>nav</strong> tag which takes users from the current page to another
                    page. The <strong>main</strong> tag which denotes the core block that
                    contains content. The <strong>section</strong> tag which is used to make a grouping of content. The
                    <strong>article</strong> tag which is inside a section and denotes a single
                    topic and finally, the <strong>footer</strong> tag which usually holds legal information, contact
                    information and links to critical pages.
                </p>
                <p><strong>Anchors</strong> link to content in the following ways.</p>
                <ol>
                    <li>External content - using a URL</li>
                    <li>Internal content - using an ID</li>
                    <li>page-to-page - using an <strong>absolute</strong> or <strong>relative</strong> path</li>
                </ol>
            </article>
            <article id="optimizingImages">
                <h3>Optimizing Images</h3>
                <p>The six major image optimizing specifications are a descriptive file name, small file size, exact
                    dimensions, correct file format, reduced resolution and color modified.
                    A descriptive file name improvese <strong>Search Engine Optimization (SEO)</strong>. Having a small
                    file size allows images to load quickly. Using exact dimensions allows the image to load
                    efficiently and without distorting the image. Correct file formate enables images to display
                    properly for their use case for example online photos typically are in JPEG and render best in this
                    format.
                    Reduced resolution is key to loading images quickly. You want to aim for providing an image that has
                    the same resolution as the display. Color mode should allign to the file format
                    of the image. For example RGB is typically used for .PNG and .JPG images.
                </p>
                <p>
                    File formats appropriate for photos are .JPG and .WebP. Both file types are able to be compressed to
                    a smaller size than images stored in other file formats. Images have a lot of pixels and
                    compression is an important attribute for fast loading of web pages and images.

                    File formats appropriate for line art are .GIF, .PNG and .SVG. GIF offers 8-bit transparency and/ or
                    animation. The advantage of using .GIF is a small file size. SVG files are able to scale
                    mathematically with the
                    dimensions of the display, they also have a small file size. PNG files offer transparency and work
                    well with 2d art.
                </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p><strong>Favicons</strong> are used by browser and devices to display a default logo in the browser
                    tab and sometimes sometimes in other locations such as on the home page.
                    This website's favicon is <image src="./android-chrome-192x192.png" alt="favicon KA" width="20px"
                        height="20px"></image> which is displayed both in the browser tab and on the homepage at the
                    top.
                    Favicons are images stored in a variety of formats to include as favicon.ico in the root directory.
                    Browsers and devices know to display this image in the tab when found in the root directory
                    by default. Links are added to the head of the html document to make the favicon images display
                    appropriately for a variety of devices.
                </p>
            </article>
            <article id="JavaScript">
                <h3>JavaScript</h3>
                <p>The main <strong>Data Types</strong> are <strong>numbers, strings, bigint, boolean, undefined, null,
                        symbol and object.</strong> </p>
                <p><strong>Objects</strong> contain key value pairs, using [object].key will render the value. <strong>Arrays</strong> are similar to
                    lists, using array[index] renders the value in the arravy at that index location.
                    <strong>JSON</strong>in returns nested key value pairs and can be access similar to objects. </p>
                <p><strong>Conditionals</strong> apply a condition to a parameter such as if 8 is greater than 2 execute some task. Loops
                    iterate over the same task repeatly until a conditions is met an then stop.
                    
                </p>
                <p><strong>Object orient programing</strong> is an abstraction layer that allows the creation of a class which provides a
                    blue print for an instance of the class</p>
                <p><strong>Functional programming</strong> is a way of progamming in which you have functions that receive inputs and
                    return predicatable outputs.</p>

            </article>




        </>
    )
}

export default TopicsPage;