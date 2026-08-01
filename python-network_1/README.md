# Python - Network 1

## Description

This project introduces how to communicate with external services using Python. It focuses on making HTTP requests, fetching internet resources, handling responses, working with APIs, and processing JSON data.

The project covers two main Python libraries:

* `urllib` — Python's built-in library for making HTTP requests.
* `requests` — a simpler and more powerful library for handling HTTP communication.

## Learning Objectives

By completing this project, you should understand:

* How to fetch internet resources using `urllib`
* How to decode responses from `urllib`
* How to use the `requests` package
* How to make HTTP GET requests
* How to make HTTP POST requests
* How to send data to external services
* How to fetch and manipulate JSON data
* How to interact with APIs

## Requirements

* All files are written in Python 3.
* All scripts start with:

```python
#!/usr/bin/python3
```

* All files end with a new line.
* All files are executable.
* Code follows PEP 8 style guidelines.
* Every module contains proper documentation.
* Scripts should not execute code when imported.
* Dictionary values must be accessed using `.get()`.

## Files Description

| File               | Description                                                          |
| ------------------ | -------------------------------------------------------------------- |
| `0-hbtn_status.py` | Fetches the status of the ALU/Holberton intranet using `urllib`      |
| `1-hbtn_header.py` | Displays the value of the `X-Request-Id` response header             |
| `2-post_email.py`  | Sends an email using a POST request with `urllib`                    |
| `3-error_code.py`  | Handles HTTP errors and displays status codes using `urllib`         |
| `4-hbtn_status.py` | Fetches the status page using the `requests` library                 |
| `5-hbtn_header.py` | Retrieves the `X-Request-Id` header using `requests`                 |
| `6-post_email.py`  | Sends an email using a POST request with `requests`                  |
| `7-error_code.py`  | Handles HTTP errors using `requests`                                 |
| `8-json_api.py`    | Sends a request to an API and handles JSON responses                 |
| `10-my_github.py`  | Uses the GitHub API with authentication to retrieve user information |

## Technologies Used

* Python 3
* urllib
* requests
* HTTP protocol
* REST APIs
* JSON

## HTTP Requests Covered

### GET Request

Used to retrieve information from a server.

Example:

```python
response = requests.get(url)
```

### POST Request

Used to send data to a server.

Example:

```python
requests.post(url, data=data)
```

## JSON Handling

This project also introduces working with JSON responses:

* Checking if a response contains valid JSON
* Extracting values from JSON objects
* Displaying useful information from API responses

Example:

```python
data = response.json()
```

## API Authentication

The final task uses GitHub API authentication with:

* Username
* Personal access token

The authentication allows access to user information securely.
