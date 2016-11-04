# DB and GUI example app using Laravel PHP Framework and Angular 2

This serves of an example of how to setup the Angular 2 and Laravel frameworks
to work together. There are a few hoops to jump through, but this example lays
the groundwork to make that jumping a little easier.

## Installation

Clone the repository:

```sh
git clone https://github.com/wspurgin/dbandgui && cd dbandgui
```

Next, install composer and install PHP packages:

```sh
curl -O https://getcomposer.org/composer.phar
php composer.phar install
```

Then install the Node modules:

```sh
npm install
```

## Copy Example Env file

Laravel uses an `.env` hidden file to set certain sensitive information (like
database host, username, password, and the like. There's already an example that
you can copy:

```sh
cp .env.example .env
```

You'll want to update the secret key that Laravel uses for various security
measures. Thankfully, the `artisan` tool included in the repo does that for you:

```sh
php artisan key:generate
```

## Build with Gulp

To compile the typescript, mix the style sheets and copy the node modules that
angular requires to the public directory, we use `gulp`. You can install it
globally using `npm install -g gulp` or you can just use the binary in the node
module `./node_modules/gulp/bin/gulp.js`.

With either the global `gulp` command or substituting `gulp` below with the path
to the node module above, all the task can be run with:

```sh
gulp
```

If you are developing the styles sheets or angular typescript and want your
local app to update while you make changes, use `gulp watch`.

## Serve the App Locally

Use the `artisan` tool to run the app locally. The default serves to
`localhost:8000`.

```sh
php artisan serve
```

## License

This example is open-sourced software licensed under the [MIT
license](http://opensource.org/licenses/MIT).
