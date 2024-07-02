# Todo Website's Backend

Firstly, routes should start from /api/v1 for convention purpose.

## Create an Account

i) Give a Signup functionality:

    a) Check if input is valid
    b) Check if the username doesn't exists and only then create one
    c) Put it in mongoDB
    d) Take mongoDB ID and generate token and send it back

ii) Give a login functionality

    a) Check if input is valid
    b) Check if the username does exists and only then login
    c) Also send token

## CRUD on todo(s)

NOTE: This could be only done if the user has an account.

i) Create a Todo

    a) Validate inputs
    b) Decode userId from token and search for the same in todos table in db
    c) Push the input todo to todos

ii) Read all Todos

    a) Get userId from token and find the same in Todos tabel in db
    b) Send the todos

iii) Update a Todo i.e. mark as complete or incomplete

    a) Validate token
    b) Find todos list of the specific user by his userId
    b) Get id of the todo and search for it in the array and then modify it be complete/incomplete

iv) Delete a Todo
