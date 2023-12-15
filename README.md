# Revly-io Assignment

## Overview

This document provides insights into the DoubtShare-revly-io application, outlining its routes, functionalities, expected inputs, and responses.

## Cron Job

### Count Available Tutors

- **Description**: A cron job runs every second to count available tutors based on their recent activity within a 3-second window.
- **Functionality**:
  - Queries the database to count tutors with recent activity within the specified window.
  - Logs the count of available tutors and the current time.
- **Implementation**:
  - The cron job is initialized upon server startup using `cron.schedule('* * * * * *', countAvailableTutors)`.
  - `countAvailableTutors` function performs the database query and logging.

## User Routes

### Register User

- **Route**: `POST /user/register`
- **Description**: Creates a new user account.
- **Request Body**:
  - `email`: User's email address.
  - `password`: User's password.
  - `name`: User's name.
  - `usertype`: Type of user (Student or Tutor).
  - `userlanguage`: Languages spoken by the user.
  - `subjectexpertise`: Subjects in which the user has expertise (for tutors).
  - `class`: Class or grade of the user (for students).
- **Response**:
  - `200 OK` on successful registration.
  - `400 Bad Request` if the user already exists or required fields are missing.
  - `500 Internal Server Error` for server-related issues.

### Login User

- **Route**: `POST /user/login`
- **Description**: Logs in a user, generating an authentication token.
- **Request Body**:
  - `email`: User's email address.
  - `password`: User's password.
- **Response**:
  - `200 OK` on successful login with a generated authentication token.
  - `400 Bad Request` for incorrect passwords or missing required fields.
  - `404 Not Found` if the user is not registered.
  - `500 Internal Server Error` for server-related issues.

## Dought Routes

### Fetch Dought History

- **Route**: `GET /dought/history`
- **Description**: Retrieves the doubt history for a specific user.
- **Request Body**:
  - `user`: User object containing `_id`.
- **Response**:
  - `200 OK` with doubt history data sorted by creation date.
  - `404 Not Found` if the user's doubt history is empty.
  - `500 Internal Server Error` for server-related issues.

## Tutor Routes

### Update Ping Time

- **Route**: `GET /tutor/update-ping`
- **Description**: Updates the last ping time for a tutor's availability.
- **Request Body**:
  - `user`: User object containing `_id` of the tutor.
- **Response**:
  - `200 OK` with a success message and updated data.
  - `404 Not Found` if the tutor's availability details are not found.
  - `500 Internal Server Error` for server-related issues.
