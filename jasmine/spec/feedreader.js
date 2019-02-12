/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('has the starting allFeeds array defined with something in there', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('has each feed contain a defined url that is not empty', function() {
           for (let current_feed of allFeeds) {
             expect(current_feed.url).toBeDefined();
             expect(current_feed.url).not.toBe('');
           }
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('has each feed contain a defined name that is not empty', function() {
           for (let current_feed of allFeeds) {
             expect(current_feed.name).toBeDefined();
             expect(current_feed.name).not.toBe('');
           }
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The Menu', function() {
        // init these in top scope for accessibility to lower level functions
        let hidden_class, body;

        beforeEach(function() {
          hidden_class = 'menu-hidden';
          body = document.querySelector('body');
        });

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('should have body element with menu-hidden class by default and be slide menu translate3ded off screen', function() {
           expect(body).toHaveClass(hidden_class);
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('should not have hidden class on body after click event and should have hidden class when clicked again', function() {
            // get the menu button dom element
            const $menu_button = $('.menu-icon-link');

            // trigger a click event on the menu button
            $menu_button.triggerHandler('click');
            // shouldnt have hidden class after click
            expect(body).not.toHaveClass(hidden_class);

            // trigger another click
            $menu_button.triggerHandler('click');
            // body should have hidden now
            expect(body).toHaveClass(hidden_class);
          });

    });

    /* TODO: Write a new test suite named "Initial Entries" */

    describe('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done) {
           // load one of the feed's data and pass in the done callback
           loadFeed(0, done);
         });

         it('should have at least one entry in the feed container after loading feed', function(done) {
           // grab the entry element dom node array and get the number of entries
           const number_of_entries_in_feed = document.querySelectorAll('.feed .entry').length;
           // check that there's at least 1 entry
           expect(number_of_entries_in_feed).toBeGreaterThan(0);
           // call the done method to signal completion of spec
           done();
         });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */

    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         const feed = document.querySelector('.feed');
         let initial_feed_content, next_feed_content;

         beforeEach(function(done) {
           // load a feed
           loadFeed(1);
           // get the text content of what was loaded
           initial_feed_content = feed.innerText;
           // load a different feed and signal done
           loadFeed(2, done);
         });

         it('should load different feed content when a new feed is selected', function(done) {
           // get the text content of the newly loaded feed
           next_feed_content = feed.innerText;

           // check that the first feed's content is not the same as the second feed
           expect(initial_feed_content).not.toBe(next_feed_content);
           // signal done to complete the spec
           done();
         });

    });

}());
