# API test project

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

## API version 1

## /token 
### GET
Method returns a token that is required to register a new user. The token is valid for 40 minutes and can be used for only one request. For the next registration, you will need to get a new one.

## /users 
### GET
Returns users data from a database divided into pages and sorted by ID in the ascending order. You can specify the parameters such as **count**, **offset** and **page**, which correspond to the number of users on the page, missing record number and page number. If you specify the **offset** parameter, the **page** parameter will be ignored.

To navigate through the pages, you can use the links in the server's response: next_link to go to the next page and prev_link to return to the previous page. If the next or previous page does not exist, the next_link/prev_link parameter will be set to null
### POST
All fields are *required*
- name - user name, should be 2-60 characters
- email - user email, must be a valid email according to RFC2822
- phone - user phone number, should start with code of Ukraine +380
- position_id - user position id. You can get list of all positions with their IDs using the API method GET api/v1/positions
- photo - user photo should be jpg/jpeg image, with resolution at least 70x70px and size must not exceed 5MB.
## /users/{id}
### GET
Get user by id Return information about user by his id. This method can be used to obtain a specific user for the site header.
## /positions 
### GET
Returns a list of all available users positions.
