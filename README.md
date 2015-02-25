## Install Prerequisites

1. Oracle JDK 8 (http://www.oracle.com/technetwork/java/javase/downloads/index.html)
2. Node.js for npm (http://nodejs.org/)
3. Leiningen (http://leiningen.org/)


## Build

Install clojure + npm/bower requirements with

    lein deps
    npm install

Compile application css file with

    ./node_modules/gulp/bin/gulp.js build


## Usage

Then run the HTTP server with

    lein ring server


## Unit Tests

Run unit tests with

    lein expectations


## Documentation

Available at http://metabase.github.io/metabase-init/.

You can generate and view documentation with

    lein marg
	open ./docs/uberdoc.html

You can update the GitHub pages documentation using

	make dox

You should be on the `master` branch without any uncommited local changes before doing so. Also, make sure you've fetched the branch `gh-pages` and can push it back to `origin`.


## Options

...

## Examples

...

### Bugs

...


## License

Copyright © 2015 FIXME

Distributed under the terms of the GNU Affero General Public License (AGPL) except as otherwise noted.  See individual files for details.

