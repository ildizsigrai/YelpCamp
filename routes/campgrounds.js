const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds');
const catchAsync = require('../utils/catchAsync');
const {isLoggedIn, isAuthor, validateCampground} = require('../middleware');
const Reviews = require('./reviews');

//MULTER
const multer  = require('multer');
const {storage} = require('../cloudinary');
const upload = multer({ storage });

const Campground = require('../models/campground');

//MVC - Model View Controller framework (structuring applications)
//referring to campgrounds.js where we store the index controller

router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLoggedIn, 
        upload.array('image'),
        validateCampground,
        catchAsync(campgrounds.createCampground))

  // multer middleware - helps handle multipart/form-data -that is used for uploading files
  //Multer adds a body object and a file or files object to the request object. 
  //The body object contains the values of the text fields of the form, 
  //the file or files object contains the files uploaded via the form.

router.get('/new',isLoggedIn, campgrounds.renderNewForm )

router.route('/:id')
    .get( catchAsync(campgrounds.showCampground))
    .put(isLoggedIn, 
        isAuthor,
        upload.array('image'),
        validateCampground, 
        catchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, 
        isAuthor, 
        catchAsync(campgrounds.deleteCampground));


router.get('/:id/edit', isLoggedIn, isAuthor, catchAsync(campgrounds.renderEditForm));

module.exports = router;

//only routes that refer to campgrounds.js
//setting up middleware, passing the controllers that are defined