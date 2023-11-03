# YelpCamp
YelpCamp is a full-stack website project where users can create, review and browse campgrounds. This project is a part of Colt Steele's Web Dev Bootcamp course.

To interact more actively with the website, users can log in to edit campground details or leave comments. Users can only edit or delete campgrounds and comments that they have added themselves.

# Technologies Used

**Backend and Infrastructure:**

Node.js
Mongoose
Express.js
MongoDB
REST
Data Associations
AWS
passport (local-strategy)
JOI
connect-flash
morgan
sessions
helmet
mongoSanitize
sanitizeHtml

**Frontend:**

HTML
CSS
Bootstrap
JavaScript
jQuery

**Dependencies:**

Cloudinary
Multer
Moment.js
Passport 

# Features:

**Authentication:**

- User Registration and Login: Users can register and log in to the system.
- PassportJS Integration: PassportJS is used for secure user authentication.

**Authorization:**

- User Authorization: To perform actions like adding, updating, or deleting, users must be logged in.
- Post and Review Ownership: Users can only modify their own posts and reviews.

**Functionalities:**

- Interactive Map Display: Campgrounds are displayed on a clustered map using the Mapbox API.
- Fuzzy Search and Autocomplete: MongoDB Atlas search enables fuzzy search with autocomplete functionality.
- Validation: Both client-side and server-side validations are implemented.
- Image Management: Campground images are uploaded to Cloudinary. Users can add and delete images after creating a campground.
- CRUD Operations: CRUD (Create, Read, Update, Delete) functions are available for campgrounds.
- Flash Messages: Flash messages provide user feedback.
- Sessions and Cookies: Sessions and cookies are utilized for user management.
- Location Display: Each campground is displayed on a separate map with its location.
