This file contains re-usable partials used in the template.html file. Unfortuantely, the build system isn't setup for these partials to be rendered from inside other partials.

In addition, some of the partials aren't actually reused, but have been separated from the top-level template.html because they contain images. It seems that requiring them from `template.html` is the only way to get Webpack to parse the images into the stream, so they can be processed and added to the final `public` directory.
