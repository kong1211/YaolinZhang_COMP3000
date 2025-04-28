# YaolinZhang_COMP3000 - Smart Canteen Ordering System Project Description

## Project Overview

This smart canteen ordering system aims to solve the pain points of traditional canteens in terms of ordering efficiency, management efficiency, and user experience. The project is built on the `Spring Boot`, `Vue`, `MyBatis`, and `MySQL` technology stacks, adopts an agile development model, and realizes the digital transformation of canteen operations through system functional modules. Through multi-dimensional testing and practical application verification, the system has significantly improved operational efficiency and service quality.

## Project Background

Traditional canteen ordering has problems such as long queuing time, low ordering efficiency, and inconvenient dish management, resulting in poor user experience. With the development of digital technology, the development of intelligent canteen ordering systems has become an important way to improve the operation level of canteens. This project is committed to using advanced technology to optimize the ordering process, improve the efficiency of canteen management, and provide users with a convenient and efficient dining experience.

## Technology Selection

* **Backend**:
    * The `Spring Boot` framework is used to build backend services, which can efficiently implement the business logic of the system with its rapid development, dependency management, and microservice support features.
    * Database operations are carried out through the `MyBatis` framework, which facilitates the realization of object-relational mapping and improves the flexibility and efficiency of data access.
* **Front-end**:
    * The `Vue` framework is used to build a user interface, which is concise, easy-to-use, data-driven, and component-oriented, and can build a highly interactive and responsive front-end interface to improve user experience.
* **Database**:
    * `MySQL` is selected as the database management system, which is open-source, reliable and stable, which can meet the needs of the system for data storage and management.

## Development Environment

* **Backend**: `JDK 1.8`, `Maven 3.6`, `IntelliJ IDEA` (recommended).
* **Front-end**: `Node.js 14`, `npm 6`, `Visual Studio Code` (recommended).
* **Database**: `MySQL 8.0`.

## Project Structure

* **Backend**:
    * The main directory includes `src/main/java` to store the Java source code and organize the business logic by package name.
    * `src/main/resources` stores configuration files, such as database connection configuration, Spring Boot configuration, etc.
* **Front-end**:
    * The `src` directory contains `components` to store Vue components, `router` to manage routes, `store` to manage status, and `views` to store page components.
    * The `public` directory is used to store static resources.
* **Database**:
    * Contains the database table structure design file and the SQL script used to initialize the data.

## Instructions for Use

* **Backend deployment**:
    1.  Open the backend project in `IntelliJ IDEA`.
    2.  Package the project with the Maven command `mvn clean install`.
    3.  Create a database in `MySQL` and run the database initialization SQL script.
    4.  Modify the database connection information in the backend configuration file.
    5.  Run the packaged JAR package to start the backend service.
* **Front-end deployment**:
    1.  Open the front-end project in `Visual Studio Code`.
    2.  Run `npm install` in the terminal to install the dependencies.
    3.  Run `npm run serve` to start the front-end development server.
    4.  Access the specified address in the browser, and enter the smart canteen ordering system.
* **User operation**:
    * After entering the system, the user can browse the dish information, select the dish to add to the shopping cart, confirm the order and complete the payment.
    * Administrators can log in to the system for dish management, order management and other operations.

## Project Testing

* **Unit testing**:
    * The backend uses `JUnit` and `Mockito` for unit testing to test the business logic and data access layer code to ensure the correctness of the functionality.
* **Integration testing**:
    * Verify the interaction between back-end services and databases, as well as the functional integrity of front-end and back-end integrations, by writing integration test cases.
* **Performance testing**:
    * Use tools to test the performance of the system, including the number of concurrent users, response time and other indicators to ensure the stability and responsiveness of the system in high concurrency scenarios.

## Project Evaluation and Summary

* **Evaluation indicators**:
    * Evaluate the actual effect of the system through statistical indicators such as the proportion of ordering efficiency improvement, canteen management efficiency improvement data, and user satisfaction survey results.
* **Project Results**:
    * The system has significantly improved the efficiency of ordering and reduced the queuing time of users.
    * Optimized the canteen management process and improved management efficiency.
    * Improved user experience and high user satisfaction.
* **Disadvantages**:
    * In high-concurrency scenarios, the response speed of some operations needs to be improved.
    * In terms of functionality, the personalized recommendation function is not perfect.
* **Follow-up optimization direction**:
    * Optimize system performance, use caching technology, optimize database queries, etc. to improve response speed.
    * Improve the personalized recommendation algorithm to provide more accurate recommendations based on the user's ordering history.
