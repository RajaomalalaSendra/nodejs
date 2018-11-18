# Here is just the inhiretance inside of the Array and the Math and the String

Array
• some() and every(): assertions for array items
• join() and concat(): convertion to a string
• pop(), push(), shift(), and unshift(): working with stacks and queues
• map(): model mapping for array items
• filter(): querying array items
• sort(): ordering items
• reduce(), reduceRight(): computing
• slice(): copying
• splice(): removing
• indexOf(): lookups of finding the value in the array
• reverse(): reversing the order
• The in operator: iteration over array items

Math
random(): random real number less than one

String
• substr() and substring(): extracting substrings
• length: length of the string
• indexOf(): index of finding the value in the string
• split(): converting the string to an array

http in the nodejs
The main methods are as follows:
• http.createServer(): returns a new web server object
• http.listen(): begins accepting connections on the specified port and hostname
• http.createClient(): is a client and makes requests to other servers
• http.ServerRequest(): passes incoming requests to request handlers
• data: emitted when a part of the message body is received
• end: emitted exactly once for each request
• request.method(): the request method as a string
• request.url(): request URL string
• http.ServerResponse(): creates this object internally by an HTTP server — not by the user— and is used as an output of request handlers
• response.writeHead(): sends a response header to the request
• response.write(): sends a response body
• response.end(): sends and ends a response body

util
• util.inspect(): return the string representation of an object, which is useful for debugging

querystring
• querystring.stringify(): serializes an object to a query string
• querystring.parse(): deserializes a query string to an object

url
• parse(): takes a URL string and returns an object

fs
fs handles file system operations such as reading to and writing from files. There are synchronous and asynchronous
methods in the library. Some of the methods include the following:
• fs.readFile(): reads files asynchronously
• fs.writeFile(): writes data to files asynchronously

