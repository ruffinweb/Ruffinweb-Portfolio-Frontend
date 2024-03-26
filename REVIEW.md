# Ruffinweb Frontend

Solo code review for deploying in a production environment. There are still additional features to be implemented, which will be addressed once CI/CD is set up with Github actions. In each section, I'll explain the changes made and the reasons behind them. I used an AI model to generate a list of the points to review so some of the unedited items describe what I still need to review and others are the actions specific to my project that need to take or have already taken. 

## Table of Contents

- [Tests](#tests)
- [Folder Structure](#folder-structure)
- [Routing](#routing)
- [Components](#components)
- [Pages/Cards](#pages-cards)
- [State Management](#state-management)
- [API Integration](#api-integration)
- [Third-Party Libraries](#third-party-libraries)
- [Styling](#styling)
- [Error Handling](#error-handling)
- [Documentation](#documentation)

## Tests

- The concept of test driven development make sense to me, but I started this project to learn React, so I couldn't effectively use TDD from the start.
- I only have a starter test that asserts my name is included in the application, but I will add a few more once I have the CI/CD pipeline set up.
- When I add blog and services pages I'll begin with TDD with Jest and React Testing Framework, after that I'll revisit the home page and apply what I have learned to create another testing suite.

## Folder Structure

- Ensure a clear and organized folder structure for the frontend codebase.
- Separate components, pages, styles, and utilities into distinct directories for better maintainability.
- Consider implementing a feature-based folder structure for scalability.

## Routing

- I use React Router to navigate to the incomplete blog and services pages.
- I still need to add routes and ensure proper handling of 404 and 500 errors among the other errors that may occur.

## Components

- Break down UI elements into reusable components for better modularity and re-usability.
- Follow best practices for component naming and structure to enhance readability.
- Implement error boundaries to gracefully handle errors within components.
- The LinksAppBar components and Contact components are the most complex and provide the most opportunities to test different 
- JS/React features for example state management, animations, references, and HTTP requests. 
It is a good place to start refactoring and simplifying components. The contact form page 
- The NavbarLinksSection and Menu component need to be edited so that clicks within the button but outside the text are registered. 
Currently, a click outside the text shows the click feedback and closes the menu, but does not initiate the expected page scroll.
- GSAP reveal animations interfere with the useRef scroll behavior, causing the page to scroll too far past the revealed content. 
A quick fix would be to add an element not included in each GSAP animation at the top of each card on the home page. 
The projects card does not have this problem because the My Projects typography element is placed outside the reveal animations used for each project.
- URLs to each project in ProjectsArray need to updated. Currently they all point to the VPS deployment guide repo.

## Pages-Cards

- The projects page needs to be updated to include the correct links to my GitHub repos.
- I also want to change the projects themselves to reflect specific skills for a full stack developer, including backend, frontend, and system administration.
- I removed the experience card because I didn't like the design I had, but it is important for a portfolio website, so it will be added back soon.

## State Management

- Choose an appropriate state management solution such as React Context API, Redux, or MobX based on project requirements.
- Centralize application state and manage data flow effectively between components.
- Ensure proper handling of asynchronous operations and side effects.

## API Integration

- This app uses the built-in fetch API to send contact form data to a Django REST API.
- Currently, the SendData component sends the request to localhost:8000. 
- Deploying my API to the same domain should allow requests to be received without any issues. I have the CORS and CSRF settings updated in the backend, 
but I still need to update the fetch requests to make sure the settings work on the frontend.
- Implement error handling for API requests to handle network errors, timeouts, and server-side errors gracefully.
- Secure API endpoints by handling authentication and authorization tokens securely.

## Third-Party Libraries

- Utilize third-party libraries judiciously, considering factors such as performance, maintainability, and licensing.
- Prioritize libraries with active maintenance and community support.

## Styling

- I'm using MUI to maintain consistent design and to avoid recreating common frontend elements like forms or dropdowns.
- I define constants for styling MUI components and import them with the sx prop. If the component has fewer than 4 styles needed I use an inline styles in with sx prop.

## Error Handling

- I need to add error messages for when the contact form fails to submit. 
- Implement robust error handling mechanisms to provide meaningful feedback to users in case of errors or failures.
- Handle both client-side and server-side errors gracefully, ensuring a smooth user experience.

## Documentation

- Maintain comprehensive documentation for the frontend codebase, including setup instructions, usage guidelines, and API references.
- Use tools like JSDoc or Markdown to document code components, functions, and modules effectively.
- Keep documentation up-to-date with any changes or updates to the codebase.
