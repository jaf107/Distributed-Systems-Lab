# Distributed Systems Lab - MiniFacebook

This repository contains the code and documentation for the Distributed Systems Lab project - MiniFacebook. The project aims to demonstrate the process of developing a Monolithic structure for a social media platform and then transitioning it into a distributed system with three separate services: User Service, Story Service, and Status Service. Additionally, the project explores the use of a server proxy (NGINX) for load balancing, Docker for containerization of services, and Docker Compose for orchestration.

## Project Structure

The repository is organized into the following directories:

- `miniFacebook/`: Contains the frontend code for the MiniFacebook application.
- `server/`: Includes the backend services for User Service, Story Service, Status Service, and the frontend client used in orchestration.
  - `user/`: Contains the code for the User Service, responsible for managing user accounts and profiles.
  - `story/`: Includes the code for the Story Service, responsible for handling user stories.
  - `status/`: Contains the code for the Status Service, responsible for managing user statuses.
  - `client/`: Contains the frontend client code for the MiniFacebook application.
  - `nginx.config`: Includes the NGINX configuration file for load balancing and reverse proxy setup.
  - `docker-compose.yml`: The Docker Compose file for orchestrating the services.

## Setup

To set up the project locally, follow the steps below:

1. Clone the repository:

```bash
git clone https://github.com/your-username/distributed-systems-lab.git
cd distributed-systems-lab
```

2. Follow the instructions in each service directory (`user/`, `story/`, `status/`, and `client/`) to set up and run the respective services.

3. Use Docker Compose to orchestrate the services using the `docker-compose.yml` file:

```bash
docker-compose up
```

## Monolithic Structure

In the initial version of the MiniFacebook application, the frontend and backend services are tightly coupled into a monolithic structure. This version provides a foundation for understanding the core functionalities and interactions of the platform.

## Distributed System

The repository evolves from the monolithic version to a distributed system architecture. The services (`user/`, `story/`, `status/`) are broken down into separate components to achieve better scalability, maintainability, and fault isolation.

## Server Proxy (NGINX)

The `nginx.config` file in the `server/` directory contains the configuration for the NGINX server proxy. NGINX is used to perform load balancing and act as a reverse proxy to distribute incoming requests among the various services in the distributed system.

## Dockerization

Each service (`user/`, `story/`, `status/`, and `client/`) is dockerized for easy deployment and isolation of dependencies. Docker allows us to package the application along with its dependencies into containers, ensuring consistent behavior across different environments.

## Orchestration with Docker Compose

The `docker-compose.yml` file in the `server/` directory allows for easy orchestration of all the services using Docker Compose. Docker Compose simplifies the process of defining and running multi-container Docker applications.

## Contributing

Contributions to this project are welcome! If you have any bug fixes, improvements, or new features to add, please follow the standard Git workflow:

1. Fork the repository.
2. Create a new branch for your changes.
3. Make the necessary changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to this repository with a detailed description of your changes.

## License

This project is licensed under the [MIT License](LICENSE), which allows for both personal and commercial use with proper attribution.

---
Feel free to update this Readme file with more detailed instructions, diagrams, and additional information as the project evolves. Happy coding!
