# Installation
$ npm install --save multer

# Usage
Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.

# Note
In an average web app, only dest might be required, and configured as shown in the following example. 
example:
var upload = multer({ dest: 'uploads/' })
