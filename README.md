# Task API

This project is a small Express.js backend for managing a simple task list. It exposes REST endpoints for creating, reading, updating, and deleting tasks, and it also includes Swagger documentation at `/docs`.

## Install and run

Use this single command to install dependencies and start the server:

```bash
npm install && node app.js
```

Once running, the API is available at http://localhost:3000 and the Swagger UI is available at http://localhost:3000/docs.

## API endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/` | Returns API name, version, and available endpoints |
| GET | `/health` | Health check endpoint |
| GET | `/tasks` | Gets all tasks |
| GET | `/tasks/:id` | Gets one task by ID |
| POST | `/tasks` | Creates a new task |
| PUT | `/tasks/:id` | Updates an existing task |
| DELETE | `/tasks/:id` | Deletes a task by ID |

## Example request

```bash
curl -i http://localhost:3000/health
```

Example output:

```http
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 18
ETag: W/"12-7F4p2xVQm2NQw2dF5i8c6A"
Date: Tue, 08 Sep 2026 00:00:00 GMT
Connection: keep-alive

{"status":"ok"}
```

## Swagger screenshot
<img width="1469" height="783" alt="swagger" src="https://github.com/user-attachments/assets/82124596-bb24-450c-b42f-8d9ab62015e9" />

