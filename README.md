# tm-system

The API provides functionality for creating, reading, updating and deleting tasks, as well as the ability to assign labels (tags) to tasks.

## API Endpoints

| Methods | Endpoints   | Access  | Description         |
|---------|-------------| ------- |---------------------|
| POST    | /users      | Public  | Sign up             |
| POST    | /auth/login | Public  | Login               |
| GET     | /users      | Private | Get All Users       |
| GET     | /users/:id  | Private | Get Single User     |
| PUT     | /users/:id  | Private | Update User         |
| DELETE  | /users/:id  | Private | Delete User         |
| POST    | /tasks      | Private | Create Task         |
| GET     | /tasks      | Private | Get All Tasks       |
| GET     | /tasks/:id  | Private | Get Single Task     |
| PUT     | /tasks/:id  | Private | Update Task         |
| DELETE  | /tasks/:id  | Private | Delete Task         |
| POST    | /tags       | Private | Create Tag          |
| GET     | /tags       | Private | Get All Tags        |
| GET     | /tags/:id   | Private | Get Single Tag      |
| PUT     | /tags/:id   | Private | Update Tag          |
| DELETE  | /tags/:id   | Private | Delete Tag          |



