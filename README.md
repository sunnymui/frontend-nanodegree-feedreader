# Unit Testing an RSS Feed Reader App With Jasmine

This repository demonstrates the setup and usage of the Jasmine testing framework on an RSS Feed Reader app. The base RSS Feed Reader app code is forked from [Udacity's Feed Reader App repository](https://github.com/udacity/frontend-nanodegree-feedreader). Unit tests are created to automatically check that the different functions of the web app are working properly, which helps prevent future development from breaking core functionality.

[Jasmine is an open source JavaScript testing framework](https://jasmine.github.io/index.html) focused on Behavior Driven Development, where tests are written as easily understandable descriptions of the essential tasks for an application, then the code is written to accomplish those tasks.

Here's an example of how a test is written to be readable:

```
it('has the starting allFeeds array defined with something in there', function() {
    expect(allFeeds).toBeDefined();
    expect(allFeeds.length).not.toBe(0);
});
```

Reading tests is similar to reading regular English sentences.

## How to Use

Jasmine displays test results at the bottom of the page you are testing, so all you really have to do is view the web page and scroll to the bottom.

See it live, in action here: [https://sunnymui.github.io/frontend-nanodegree-feedreader/](https://sunnymui.github.io/frontend-nanodegree-feedreader/)

Alternatively, you could run it locally by cloning the repository to your computer and opening `index.html` in your web browser. Clone it in the command line by entering `git clone https://github.com/sunnymui/frontend-nanodegree-feedreader.git`

## Modifying Tests / Viewing Test Code

All of the test specs and code are written in `jasmine/spec/feedreader.js`. If you want to add your own additional tests, you would write them in that file.

If you want to set up tests on a different page, you need to include the Jasmine library scripts and files, plus your test spec code on that page. If you don't want to download anything, you can just load it from a CDN--instructions for that in the next section.

For documentation on how to write tests, [read the official guide.](https://jasmine.github.io/tutorials/your_first_suite)

## How to Set Up Jasmine on Another Page

You can load Jasmine from a CDN by including this code in between the `<head>` tags of your page's html:

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/jasmine-html.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.3.0/boot.min.js"></script>
```

If you want to download the Jasmine files yourself and include it manually in your project's folder, you can get them from their [Releases page](https://github.com/jasmine/jasmine/releases).

To keep stuff organized, create a folder in your project directory called `Jasmine` with a subfolder called `spec` which will contain your `tests.js` file.

So your directory structure would look like:

```
your-project/
├── css/
├── js/
├── img/
└── Jasmine/
    └── spec/
        └── tests.js
```

 Next, load the script file containing your tests after your main JavaScript files, probably in the footer of your page before the closing `</body>` tag:

```
<html>

... (all the other stuff on your page)

    <script src="js/your-app.js"></script>

    <script src="jasmine/spec/tests.js"></script>
  </body>
</html>
```

You should then see the test results for your tests appear at the bottom of your page when you view it in a web browser.
