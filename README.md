# scrollTargeting.js

### Introducing scrollTargeting.js

scrollTargeting.js is a small (468 bytes minimised, 264 bytes minimised and gzipped) jQuery plug-in for controlling scrolling behaviours in the web-browser (only tested in Safari 6 on OS X 10.8 - may work on other platforms).

The plug-in “watches” the mouse cursor position and the DOM’s focused properties and adjusts the scroll behaviour accordingly. It has a very small footprint and should not have a negative impact on performance.

### Why?

To scratch a personal itch. Read the back-story on [my weblog.](http://darkblue.sdf.org/weblog/post/scroll-targeting)

### Demo

I have put together a [demo page,](http://darkblue.sdf.org/lab/scrollTargeting/) illustrating the various options of the scrollTargeting.js plug-in. The files for the demo page are also available on GitHub.

### Usage

scrollTargeting.js is extremely easy to use:

1) Load jQuery

`<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js" type="text/javascript"></script>`

2) Load the plug-in

`<script src="/path/to/scrollTargeting.min.js" type="text/javascript"></script>`

3) Bind the behaviours

`<script type="text/javascript"> scrollTargeting('#exampleID', 1); </script>`

4) Enjoy!

### Details, Details

When binding the behaviours, the two parameters you must provide are the element/object selector(s) and the behaviour index respectively. Hence:

* `scrollTargeting('#myTextarea', 1);` will add behaviour #1 to the element `#myTextarea`;
* `scrollTargeting('pre', 3);` will add behaviour #3 to all `<pre>` elements;
* `scrollTargeting('#myContainer textarea', 2);` will add behaviour #2 to all `<textarea>` elements that are descendants of the element `#myContainer`;
* `scrollTargeting('textarea, blockquote, code, pre', 1);` will add behaviour #1 to all `<textarea>`, `<blockquote>`, `<code>` and `<pre>` elements.

The element/object can be any jQuery-style selector. The behaviours are as follows:

* #1: If the mouse cursor is over the specified element then scrolling will be limited to that element;
* #2: If the element gets focus then scrolling will be limited to the element;
* #3: A combinaton of #1 & #2. If the mouse cursor is over the element or the element gets focus, then scrolling will be limited to the element.

### Where Can I Use It?

Anywhere. Aside from working with editable content areas, scrollTargeting.js comes in handy for `<pre>` and `<code>` regions, HTML `<iframe>` containers or for preventing background scrolling when modal windows are displayed. The plug-in can be very useful when used in conjunction with lightbox scripts, especially when they are displaying scrollable content of their own.