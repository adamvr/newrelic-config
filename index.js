/**
 * Suppress New Relic config file loading
 */
process.env['NEW_RELIC_NO_CONFIG_FILE'] = 'true';

/**
 * Disable new relic logging by default
 */
process.env['NEW_RELIC_LOG_LEVEL'] = 'fatal';
process.env['NEW_RELIC_LOG'] = '/dev/null';

var NewRelic = function () {
};

/**
 * name - set application name
 * @param {String, Array} name - application name
 * @returns {NewRelic} - for chaining
 */
NewRelic.prototype.name = function (name) {
  process.env['NEW_RELIC_APP_NAME'] = name; 
  return this;
};

/**
 * key - set license key
 * @param {String} key - license key
 * @returns {NewRelic} - for chaining
 */

NewRelic.prototype.key = function (key) {
  process.env['NEW_RELIC_LICENSE_KEY'] = key;
  return this;
};

/**
 * log - set log destination
 * @param {String} dest - log file destination, defaults to /dev/null if falsy
 * @param {String} level - logging level {fatal, error, warn, info, debug, trace}
 * @returns {NewRelic} - for chaining
 */
NewRelic.prototype.log = function (dest, level) {
  if (!dest) process.env['NEW_RELIC_LOG'] = '/dev/null';
  process.env['NEW_RELIC_LOG_LEVEL'] = level;
  process.env['NEW_RELIC_LOG'] = dest;
  return this;
};

/**
 * proxy - set proxy settings
 * @param {String} host - set proxy hostname
 * @param {Number} port - set proxy port
 * @returns {NewRelic} - for chaining
 */
NewRelic.prototype.proxy = function(host, port) {
  process.env['NEW_RELIC_PROXY_HOST'] = host;
  process.env['NEW_RELIC_PROXY_PORT'] = port;
  return this;
};

/**
 * errors - enable error tracing
 * @param {Array} ignored - status codes to ignore
 * @returns {NewRelic} - for chaining
 */
NewRelic.prototype.errors = function(ignored) {

};

/**
 * profile - start the profiler
 */
NewRelic.prototype.profile = function() {
  require('newrelic');
};

module.exports = new NewRelic();

