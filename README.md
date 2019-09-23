# Installation
$ npm install --save multer

# Usage
Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.

# Example 

var express = require('express')
var app = express()
var multer  = require('multer')
var upload = multer()
 
app.post('/profile', upload.none(), function (req, res, next) {
  // req.body contains the text fields
})


# multer-task-done
a task related to project which a bug and here i resolved with multer
