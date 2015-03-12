# newrelic-config

## Introduction

newrelic-config is a newrelic configurator, wrapping node-newrelic.
It simplifies the default configuration scheme into a chainable API.

## Dependencies

* [newrelic](https://github.com/newrelic/node-newrelic)

## Example

Minimal required:

    require('newrelic-config')
      .key('<your api key>')
      .name('<your app name>')
      .profile();

Complete example:

    require('newrelic-config')
      .key('<your api key>')
      .name('<your app name>')
      .log('/dev/null', 'trace')
      .proxy('localhost', 8080)
      .errors([404, 401])
      .profile();

Conditional configuration:

    require('newrelic-config')
      .key('<key>')
      .name(process.env.NODE_ENV === 'production' ? 'app' : 'app-dev')
      .profile()

Using environment variables:

    require('newrelic-config')
      .key(process.env['NEWRELIC_KEY'])
      .name(process.env['NEWRELIC_APP_NAME'])
      .profile()

Using a config file:

    var config = require('./config');

    require('newrelic-config')
      .key(config.newrelic.key)
      .name(config.newrelic.name)
      .profile();

## Methods

### NewRelic#name(name)

Set new relic app name

### NewRelic#key(key)

Set new relic license key

### NewRelic#log(dest, level, ignore)

Set new relic logging options

* `dest` - log destination (file, `stderr` or `stdout`)
* `level` - logging level, option of `error`, `warn`, `info`, `debug` or `trace`
* `ignore` – list of comma-delimited patterns, for example `'^/socket\.io/.*/xhr-polling,ignore_me'`

### NewRelic#proxy(host, port)

Set proxy options

* `host` - proxy hostname
* `port` - proxy port

### NewRelic#errors(ignored)

Enable error tracing

* `ignored` - error codes to ignore

### NewRelic#profile() 

Start profiling!
