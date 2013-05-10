# newrelic-config

## Introduction

newrelic-config is a newrelic configurator, wrapping node-newrelic.
It simplifies the default configuration scheme into a chainable API.

## Dependencies

* [https://github.com/newrelic/node-newrelic](newrelic)

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

## Methods

### NewRelic#name(name)

Set new relic app name

### NewRelic#key(key)

Set new relic license key

### NewRelic#log(dest, level)

Set new relic logging options

* `dest` - log destination (file, `stderr` or `stdout`)

### NewRelic#proxy(host, port)

Set proxy options

* `host` - proxy hostname
* `port` - proxy port

### NewRelic#errors(ignored)

Enable error tracing

* `ignored` - error codes to ignore

### NewRelic#profile() 

Start profiling!
