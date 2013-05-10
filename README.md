# newrelic-config

## Introduction

newrelic-config is a newrelic configurator, wrapping node-newrelic.
It simplifies the default configuration scheme into a chainable API

## Dependencies

* [https://github.com/newrelic/node-newrelic](newrelic)

## Example

    require('newrelic-config')
      .key('<your api key>')
      .name('<your app name>')
      .profile();

## Methods

### NewRelic#name(name)

Set new relic app name

### NewRelic#key(key)

Set new relic license key

### NewRelic#log(dest, level)

Set new relic logging options

* dest - log destination (file, `stderr` or `stdout`)

### NewRelic#proxy(host, port)

Set proxy options

* host - proxy hostname
* port - proxy port
