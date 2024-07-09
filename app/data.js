export const quizData = {
  totalQuestions: 100,
  questions: [
    {
      id: 1,
      question: "What are the two primary rendering methods offered by Next.js?",
      answers: [
        "a) Client-side Rendering (CSR) and Server-side Rendering (SSR)",
        "b) Static Site Generation (SSG) and Incremental Static Regeneration (ISR)",
        "c) Client-side Rendering (CSR) and Static Site Generation (SSG)",
        "d) Full Page Rendering and Partial Hydration"
      ],
      correctAnswer: "c) Client-side Rendering (CSR) and Static Site Generation (SSG)"
    },
    {
      id: 2,
      question: "What is the benefit of using code splitting in Next.js?",
      answers: [
        "a) Improves security by isolating code for each page",
        "b) Reduces initial bundle size for faster loading times",
        "c) Enables dynamic loading of components at runtime",
        "d) Code splitting is not a feature of Next.js"
      ],
      correctAnswer: "b) Reduces initial bundle size for faster loading times"
    },
    {
      id: 3,
      question: "How do you create dynamic routes in Next.js?",
      answers: [
        "a) Using a custom router library",
        "b) Using file-based routing with square brackets (e.g., [id].js)",
        "c) Dynamic routes are not supported in Next.js",
        "d) All routes need to be defined explicitly in Next.js"
      ],
      correctAnswer: "b) Using file-based routing with square brackets (e.g., [id].js)"
    },
    {
      id: 4,
      question: "What does the `_app.js` component do in Next.js?",
      answers: [
        "a) Defines the global layout for the entire application",
        "b) Handles data fetching for all pages",
        "c) Sets up user authentication for the application",
        "d) It's not a mandatory component, but can be used for custom logic"
      ],
      correctAnswer: "a) Defines the global layout for the entire application"
    },
    {
      id: 5,
      question: "How does Next.js optimize images for performance?",
      answers: [
        "a) Uses modern image formats like WebP (if supported)",
        "b) Enables lazy loading to only load images on demand",
        "c) Both A & B",
        "d) Image optimization is not a built-in feature"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 6,
      question: "What is the difference between `getStaticProps` and `getServerSideProps` in Next.js?",
      answers: [
        "a) `getStaticProps` fetches data at build time, while `getServerSideProps` fetches data on each request",
        "b) `getStaticProps` is for static content, while `getServerSideProps` is for dynamic content",
        "c) Both A & B",
        "d) There's no significant difference between them"
      ],
      correctAnswer: "a) `getStaticProps` fetches data at build time, while `getServerSideProps` fetches data on each request"
    },
    {
      id: 7,
      question: "How can you define custom API routes in Next.js?",
      answers: [
        "a) By creating files inside the `pages/api` directory",
        "b) These API routes can handle data requests from the frontend",
        "c) Both A & B",
        "d) Custom API routes are not supported in Next.js"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 8,
      question: "What are some advantages of using Next.js over a traditional React application?",
      answers: [
        "a) Improved SEO and initial page load performance",
        "b) Automatic code splitting and image optimization",
        "c) Easier data fetching with built-in methods",
        "d) All of the above"
      ],
      correctAnswer: "d) All of the above"
    },
    {
      id: 9,
      question: "What is the purpose of `useEffect` hook in React?",
      answers: [
        "a) To perform side effects in functional components (e.g., data fetching, subscriptions)",
        "b) To manage state changes in functional components",
        "c) To define routing logic within a component",
        "d) To optimize component rendering performance"
      ],
      correctAnswer: "a) To perform side effects in functional components (e.g., data fetching, subscriptions)"
    },
    {
      id: 10,
      question: "What are some popular ways to style components in Next.js?",
      answers: [
        "a) CSS Modules for scoped styles",
        "b) Global CSS for application-wide styles",
        "c) Styled-JSX for inline styling",
        "d) All of the above"
      ],
      correctAnswer: "d) All of the above"
    },
    {
      id: 11,
      question: "What is Incremental Static Regeneration (ISR) in Next.js?",
      answers: [
        "a) A method to pre-render pages at build time with the ability to refresh content periodically",
        "b) Used for highly dynamic content that needs to be updated frequently",
        "c) Both A & B",
        "d) ISR is not yet a supported feature in Next.js"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 12,
      question: "How can you handle user authentication in a Next.js application?",
      answers: [
        "a) Using third-party libraries like Auth0 or NextAuth.js",
        "b) By storing authentication tokens in cookies or local storage",
        "c) Implementing custom authentication logic with server-side validation",
        "d) All of the above"
      ],
      correctAnswer: "d) All of the above"
    },
    {
      id: 13,
      question: "What is the role of the `getInitialProps` method in Next.js?",
      answers: [
        "a) Used for data fetching on the server-side before initial render (deprecated)",
        "b) Can be used in both page and layout components",
        "c) Now replaced by `getServerSideProps` or `getStaticProps` for data fetching",
        "d) Both A & B"
      ],
      correctAnswer: "d) Both A & B"
    },
    {
      id: 14,
      question: "What are some best practices for optimizing performance in Next.js applications?",
      answers: [
        "a) Utilizing code splitting and lazy loading",
        "b) Implementing image optimization techniques",
        "c) Minimizing unnecessary re-renders",
        "d) All of the above"
      ],
      correctAnswer: "d) All of the above"
    },
    {
      id: 15,
      question: "What are the benefits of using TypeScript with Next.js?",
      answers: [
        "a) Improved type safety and code maintainability",
        "b) Enables features like static type checking",
        "c) Integrates seamlessly with existing JavaScript codebases",
        "d) All of the above"
      ],
      correctAnswer: "d) All of the above"
    },
    {
      id: 16,
      question: "What is the primary purpose of Next.js?",
      answers: [
        "a) To enhance React applications with server-side rendering and static site generation",
        "b) To replace React as a front-end library",
        "c) To serve as a backend framework for Node.js",
        "d) To provide a CSS-in-JS solution"
      ],
      correctAnswer: "a) To enhance React applications with server-side rendering and static site generation"
    },
    {
      id: 17,
      question: "What method is used to pre-fetch links in Next.js?",
      answers: [
        "a) prefetch",
        "b) preLink",
        "c) preLoad",
        "d) linkPre"
      ],
      correctAnswer: "a) prefetch"
    },
    {
      id: 18,
      question: "What is a key benefit of static site generation (SSG)?",
      answers: [
        "a) Improved performance by serving pre-rendered HTML",
        "b) Increased security by isolating dynamic content",
        "c) Reduced server load through client-side rendering",
        "d) Enhanced real-time data updates"
      ],
      correctAnswer: "a) Improved performance by serving pre-rendered HTML"
    },
    {
      id: 19,
      question: "How does Next.js handle internationalization?",
      answers: [
        "a) Through a built-in internationalization routing feature",
        "b) Using third-party libraries only",
        "c) By default without any configuration",
        "d) Internationalization is not supported in Next.js"
      ],
      correctAnswer: "a) Through a built-in internationalization routing feature"
    },
    {
      id: 20,
      question: "Which lifecycle method in React is similar to `useEffect`?",
      answers: [
        "a) componentDidMount",
        "b) componentWillUnmount",
        "c) componentDidUpdate",
        "d) All of the above"
      ],
      correctAnswer: "d) All of the above"
    },
    {
      id: 21,
      question: "What does the `head` element do in a Next.js page?",
      answers: [
        "a) Defines metadata and links for the document",
        "b) Specifies the main content of the page",
        "c) Declares JavaScript dependencies",
        "d) All of the above"
      ],
      correctAnswer: "a) Defines metadata and links for the document"
    },
    {
      id: 22,
      question: "What is the purpose of `_document.js` in Next.js?",
      answers: [
        "a) Customizes the default HTML document structure",
        "b) Sets up global CSS styles",
        "c) Defines global state management",
        "d) None of the above"
      ],
      correctAnswer: "a) Customizes the default HTML document structure"
    },
    {
      id: 23,
      question: "What is the difference between `Link` and `a` tags in Next.js?",
      answers: [
        "a) `Link` enables client-side navigation with prefetching",
        "b) `a` tag is used for external links only",
        "c) Both A & B",
        "d) There is no difference between them"
      ],
      correctAnswer: "a) `Link` enables client-side navigation with prefetching"
    },
    {
      id: 24,
      question: "What is the benefit of using `getStaticPaths` in Next.js?",
      answers: [
        "a) Pre-renders pages with dynamic routes",
        "b) Enhances SEO by generating HTML at build time",
        "c) Both A & B",
        "d) Allows real-time data updates"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 25,
      question: "How do you enable API routes in Next.js?",
      answers: [
        "a) By creating files in the `pages/api` directory",
        "b) Using a separate backend framework",
        "c) By defining routes in `next.config.js`",
        "d) API routes are not supported in Next.js"
      ],
      correctAnswer: "a) By creating files in the `pages/api` directory"
    },
    {
      id: 26,
      question: "What is the purpose of a `catch-all` route in Next.js?",
      answers: [
        "a) To handle dynamic routes with multiple segments",
        "b) To catch errors in the application",
        "c) Both A & B",
        "d) To define static routes for the application"
      ],
      correctAnswer: "a) To handle dynamic routes with multiple segments"
    },
    {
      id: 27,
      question: "How does Next.js improve SEO for web applications?",
      answers: [
        "a) By pre-rendering pages for faster load times",
        "b) By allowing custom metadata for each page",
        "c) Both A & B",
        "d) By implementing server-side analytics"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 28,
      question: "What is the purpose of `next/image` in Next.js?",
      answers: [
        "a) To optimize and serve images efficiently",
        "b) To manage background images",
        "c) To handle SVG files exclusively",
        "d) To create image galleries"
      ],
      correctAnswer: "a) To optimize and serve images efficiently"
    },
    {
      id: 29,
      question: "Which method is used to define static paths for dynamic routes?",
      answers: [
        "a) getStaticPaths",
        "b) getStaticRoutes",
        "c) getServerSidePaths",
        "d) getRoutes"
      ],
      correctAnswer: "a) getStaticPaths"
    },
    {
      id: 30,
      question: "How can you enable client-side transitions in Next.js?",
      answers: [
        "a) By using the `next/router` module",
        "b) By defining custom page transitions in `_app.js`",
        "c) Both A & B",
        "d) Client-side transitions are not supported in Next.js"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 31,
      question: "What is the purpose of `next/link` in Next.js?",
      answers: [
        "a) To enable client-side navigation with prefetching",
        "b) To manage external links only",
        "c) To define custom link styles",
        "d) To create navigation bars"
      ],
      correctAnswer: "a) To enable client-side navigation with prefetching"
    },
    {
      id: 32,
      question: "What is the difference between `useState` and `useReducer` in React?",
      answers: [
        "a) `useState` is for simple state logic, `useReducer` is for complex state logic",
        "b) `useState` is for state initialization, `useReducer` is for state updates",
        "c) Both A & B",
        "d) There is no significant difference between them"
      ],
      correctAnswer: "a) `useState` is for simple state logic, `useReducer` is for complex state logic"
    },
    {
      id: 33,
      question: "What are some common use cases for `getServerSideProps`?",
      answers: [
        "a) Fetching user-specific data for a page",
        "b) Rendering dynamic content that changes frequently",
        "c) Handling requests that require authentication",
        "d) All of the above"
      ],
      correctAnswer: "d) All of the above"
    },
    {
      id: 34,
      question: "What does the `react-dom` package provide in React?",
      answers: [
        "a) Methods to manage the DOM tree",
        "b) Tools to render React components to the DOM",
        "c) Both A & B",
        "d) Utilities for server-side rendering"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 35,
      question: "What is the primary purpose of the `useEffect` hook?",
      answers: [
        "a) To manage side effects in functional components",
        "b) To initialize component state",
        "c) To handle routing logic",
        "d) To optimize component rendering performance"
      ],
      correctAnswer: "a) To manage side effects in functional components"
    },
    {
      id: 36,
      question: "What are some advantages of using Next.js over a traditional React application?",
      answers: [
        "a) Improved SEO and initial page load performance",
        "b) Automatic code splitting and image optimization",
        "c) Easier data fetching with built-in methods",
        "d) All of the above"
      ],
      correctAnswer: "d) All of the above"
    },
    {
      id: 37,
      question: "What does the `next export` command do?",
      answers: [
        "a) Generates a static HTML export of the application",
        "b) Packages the application for deployment",
        "c) Both A & B",
        "d) Creates a backup of the application"
      ],
      correctAnswer: "a) Generates a static HTML export of the application"
    },
    {
      id: 38,
      question: "What is the purpose of the `useState` hook in React?",
      answers: [
        "a) To manage component state in functional components",
        "b) To handle side effects in functional components",
        "c) To define routing logic within a component",
        "d) To optimize component rendering performance"
      ],
      correctAnswer: "a) To manage component state in functional components"
    },
    {
      id: 39,
      question: "What is the role of the `getStaticProps` method in Next.js?",
      answers: [
        "a) To fetch data at build time for static generation",
        "b) To fetch data on each request for server-side rendering",
        "c) To define routing logic for dynamic routes",
        "d) To manage component state in functional components"
      ],
      correctAnswer: "a) To fetch data at build time for static generation"
    },
    {
      id: 40,
      question: "What is the purpose of the `getServerSideProps` method in Next.js?",
      answers: [
        "a) To fetch data on each request for server-side rendering",
        "b) To fetch data at build time for static generation",
        "c) To define routing logic for dynamic routes",
        "d) To manage component state in functional components"
      ],
      correctAnswer: "a) To fetch data on each request for server-side rendering"
    },
    {
      id: 41,
      question: "What are some benefits of using Next.js over traditional client-side React applications?",
      answers: [
        "a) Improved SEO and performance",
        "b) Simplified data fetching and rendering",
        "c) Enhanced developer experience with built-in features",
        "d) All of the above"
      ],
      correctAnswer: "d) All of the above"
    },
    {
      id: 42,
      question: "How does Next.js handle static and dynamic content?",
      answers: [
        "a) By using static site generation (SSG) and server-side rendering (SSR)",
        "b) By relying solely on client-side rendering",
        "c) By utilizing third-party libraries for dynamic content",
        "d) By fetching data only at build time"
      ],
      correctAnswer: "a) By using static site generation (SSG) and server-side rendering (SSR)"
    },
    {
      id: 43,
      question: "What are some common use cases for `getStaticProps`?",
      answers: [
        "a) Fetching data for static pages that rarely change",
        "b) Generating static pages with dynamic routes",
        "c) Both A & B",
        "d) Fetching real-time data on each request"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 44,
      question: "What is the difference between `getStaticPaths` and `getStaticProps`?",
      answers: [
        "a) `getStaticPaths` defines paths for dynamic routes, `getStaticProps` fetches data for static generation",
        "b) `getStaticPaths` fetches data, `getStaticProps` defines paths",
        "c) Both A & B",
        "d) There is no significant difference between them"
      ],
      correctAnswer: "a) `getStaticPaths` defines paths for dynamic routes, `getStaticProps` fetches data for static generation"
    },
    {
      id: 45,
      question: "What is the purpose of the `Link` component in Next.js?",
      answers: [
        "a) To enable client-side navigation with prefetching",
        "b) To manage external links only",
        "c) To define custom link styles",
        "d) To create navigation bars"
      ],
      correctAnswer: "a) To enable client-side navigation with prefetching"
    },
    {
      id: 46,
      question: "What is the role of the `useReducer` hook in React?",
      answers: [
        "a) To manage complex state logic in functional components",
        "b) To handle side effects in functional components",
        "c) To define routing logic within a component",
        "d) To optimize component rendering performance"
      ],
      correctAnswer: "a) To manage complex state logic in functional components"
    },
    {
      id: 47,
      question: "What are some advantages of using Next.js over traditional server-side rendering frameworks?",
      answers: [
        "a) Improved SEO and initial page load performance",
        "b) Automatic code splitting and image optimization",
        "c) Easier data fetching with built-in methods",
        "d) All of the above"
      ],
      correctAnswer: "d) All of the above"
    },
    {
      id: 48,
      question: "What is the purpose of `next/image` in Next.js?",
      answers: [
        "a) To optimize and serve images efficiently",
        "b) To manage background images",
        "c) To handle SVG files exclusively",
        "d) To create image galleries"
      ],
      correctAnswer: "a) To optimize and serve images efficiently"
    },
    {
      id: 49,
      question: "How does Next.js handle static and dynamic routes?",
      answers: [
        "a) By using file-based routing with static and dynamic route patterns",
        "b) By relying solely on client-side routing libraries",
        "c) By utilizing third-party libraries for routing",
        "d) By defining all routes in `next.config.js`"
      ],
      correctAnswer: "a) By using file-based routing with static and dynamic route patterns"
    },
    {
      id: 50,
      question: "What is the benefit of using `getServerSideProps` in Next.js?",
      answers: [
        "a) Fetching data on each request for server-side rendering",
        "b) Fetching data at build time for static generation",
        "c) Both A & B",
        "d) Optimizing component rendering performance"
      ],
      correctAnswer: "a) Fetching data on each request for server-side rendering"
    },
    {
      id: 51,
      question: "What is the purpose of the `useState` hook in React?",
      answers: [
        "a) To manage component state in functional components",
        "b) To handle side effects in functional components",
        "c) To define routing logic within a component",
        "d) To optimize component rendering performance"
      ],
      correctAnswer: "a) To manage component state in functional components"
    },
    {
      id: 52,
      question: "What is the role of the `getStaticProps` method in Next.js?",
      answers: [
        "a) To fetch data at build time for static generation",
        "b) To fetch data on each request for server-side rendering",
        "c) To define routing logic for dynamic routes",
        "d) To manage component state in functional components"
      ],
      correctAnswer: "a) To fetch data at build time for static generation"
    },
    {
      id: 53,
      question: "How does Next.js handle static and dynamic content?",
      answers: [
        "a) By using static site generation (SSG) and server-side rendering (SSR)",
        "b) By relying solely on client-side rendering",
        "c) By utilizing third-party libraries for dynamic content",
        "d) By fetching data only at build time"
      ],
      correctAnswer: "a) By using static site generation (SSG) and server-side rendering (SSR)"
    },
    {
      id: 54,
      question: "What is the purpose of the `Link` component in Next.js?",
      answers: [
        "a) To enable client-side navigation with prefetching",
        "b) To manage external links only",
        "c) To define custom link styles",
        "d) To create navigation bars"
      ],
      correctAnswer: "a) To enable client-side navigation with prefetching"
    },
    {
      id: 55,
      question: "What are some advantages of using Next.js over traditional client-side React applications?",
      answers: [
        "a) Improved SEO and performance",
        "b) Simplified data fetching and rendering",
        "c) Enhanced developer experience with built-in features",
        "d) All of the above"
      ],
      correctAnswer: "d) All of the above"
    },
    {
      id: 56,
      question: "What does the `next export` command do?",
      answers: [
        "a) Generates a static HTML export of the application",
        "b) Packages the application for deployment",
        "c) Both A & B",
        "d) Creates a backup of the application"
      ],
      correctAnswer: "a) Generates a static HTML export of the application"
    },
    {
      id: 57,
      question: "What is the primary purpose of the `useEffect` hook?",
      answers: [
        "a) To manage side effects in functional components",
        "b) To initialize component state",
        "c) To handle routing logic",
        "d) To optimize component rendering performance"
      ],
      correctAnswer: "a) To manage side effects in functional components"
    },
    {
      id: 58,
      question: "What are some benefits of using Next.js over traditional server-side rendering frameworks?",
      answers: [
        "a) Improved SEO and initial page load performance",
        "b) Automatic code splitting and image optimization",
        "c) Easier data fetching with built-in methods",
        "d) All of the above"
      ],
      correctAnswer: "d) All of the above"
    },
    {
      id: 59,
      question: "What is the purpose of `next/image` in Next.js?",
      answers: [
        "a) To optimize and serve images efficiently",
        "b) To manage background images",
        "c) To handle SVG files exclusively",
        "d) To create image galleries"
      ],
      correctAnswer: "a) To optimize and serve images efficiently"
    },
    {
      id: 60,
      question: "What is the difference between `getStaticPaths` and `getStaticProps`?",
      answers: [
        "a) `getStaticPaths` defines paths for dynamic routes, `getStaticProps` fetches data for static generation",
        "b) `getStaticPaths` fetches data, `getStaticProps` defines paths",
        "c) Both A & B",
        "d) There is no significant difference between them"
      ],
      correctAnswer: "a) `getStaticPaths` defines paths for dynamic routes, `getStaticProps` fetches data for static generation"
    },
    {
      id: 61,
      question: "What is the purpose of the `pages` directory in a Next.js project?",
      answers: [
        "a) It stores all static assets like images and fonts",
        "b) It defines routes and pages for the application",
        "c) Both A & B",
        "d) None of the above"
      ],
      correctAnswer: "b) It defines routes and pages for the application"
    },
    {
      id: 62,
      question: "How can you define a custom 404 error page in Next.js?",
      answers: [
        "a) By creating a file named `404.js` inside the `pages` directory",
        "b) Next.js automatically handles 404 errors, no customization needed",
        "c) Both A & B",
        "d) Custom 404 pages are not supported in Next.js"
      ],
      correctAnswer: "a) By creating a file named `404.js` inside the `pages` directory"
    },
    {
      id: 63,
      question: "What is the purpose of the `next/router` module in Next.js?",
      answers: [
        "a) To handle client-side routing in the application",
        "b) To define server-side routing logic",
        "c) Both A & B",
        "d) `next/router` module is deprecated in favor of `react-router-dom`"
      ],
      correctAnswer: "a) To handle client-side routing in the application"
    },
    {
      id: 64,
      question: "How can you configure custom webpack behavior in a Next.js project?",
      answers: [
        "a) By modifying the `next.config.js` file",
        "b) Next.js does not support custom webpack configurations",
        "c) Both A & B",
        "d) By creating a separate `webpack.config.js` file in the root directory"
      ],
      correctAnswer: "a) By modifying the `next.config.js` file"
    },
    {
      id: 65,
      question: "What is the purpose of the `Link` component in Next.js?",
      answers: [
        "a) To create links for client-side navigation between pages",
        "b) To handle API requests in Next.js",
        "c) Both A & B",
        "d) Link component is not used in Next.js"
      ],
      correctAnswer: "a) To create links for client-side navigation between pages"
    },
    {
      id: 66,
      question: "How can you implement SEO optimization in a Next.js application?",
      answers: [
        "a) By adding meta tags using the `next/head` component",
        "b) SEO is automatically optimized in Next.js",
        "c) Both A & B",
        "d) Next.js does not support SEO optimization"
      ],
      correctAnswer: "a) By adding meta tags using the `next/head` component"
    },
    {
      id: 67,
      question: "What are some methods to handle form submissions in Next.js?",
      answers: [
        "a) Using `fetch` API with `POST` method",
        "b) Implementing `getInitialProps` method",
        "c) Both A & B",
        "d) Next.js does not support form submissions"
      ],
      correctAnswer: "a) Using `fetch` API with `POST` method"
    },
    {
      id: 68,
      question: "What is the purpose of `publicRuntimeConfig` in Next.js?",
      answers: [
        "a) To define runtime configuration accessible on both client and server",
        "b) To manage static assets in the `public` directory",
        "c) Both A & B",
        "d) `publicRuntimeConfig` is not a valid configuration in Next.js"
      ],
      correctAnswer: "a) To define runtime configuration accessible on both client and server"
    },
    {
      id: 69,
      question: "How can you implement authentication using cookies in a Next.js application?",
      answers: [
        "a) By using libraries like `js-cookie`",
        "b) By setting cookies manually using `document.cookie`",
        "c) Both A & B",
        "d) Authentication with cookies is not recommended in Next.js"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 70,
      question: "What is the purpose of the `next/image` component in Next.js?",
      answers: [
        "a) To optimize and serve images efficiently",
        "b) To manage background images",
        "c) To handle SVG files exclusively",
        "d) To create image galleries"
      ],
      correctAnswer: "a) To optimize and serve images efficiently"
    },
    {
      id: 71,
      question: "How can you optimize images for performance in Next.js?",
      answers: [
        "a) By using the `next/image` component with the `layout` property",
        "b) By compressing images using third-party tools",
        "c) Both A & B",
        "d) Images are automatically optimized in Next.js"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 72,
      question: "What is Incremental Static Regeneration (ISR) in Next.js?",
      answers: [
        "a) A method to pre-render pages at build time with the ability to refresh content periodically",
        "b) Used for highly dynamic content that needs to be updated frequently",
        "c) Both A & B",
        "d) ISR is not yet a supported feature in Next.js"
      ],
      correctAnswer: "a) A method to pre-render pages at build time with the ability to refresh content periodically"
    },
    {
      id: 73,
      question: "How can you handle dynamic routing in Next.js?",
      answers: [
        "a) By using file-based routing with square brackets (e.g., `[id].js`)",
        "b) By defining routes in a centralized routing configuration file",
        "c) Both A & B",
        "d) Dynamic routing is not supported in Next.js"
      ],
      correctAnswer: "a) By using file-based routing with square brackets (e.g., `[id].js`)"
    },
    {
      id: 74,
      question: "What is the purpose of the `catch-all` routes in Next.js?",
      answers: [
        "a) To handle all undefined routes and redirect to a specific page",
        "b) To handle API requests from the frontend",
        "c) Both A & B",
        "d) `catch-all` routes are not supported in Next.js"
      ],
      correctAnswer: "a) To handle all undefined routes and redirect to a specific page"
    },
    {
      id: 75,
      question: "How can you implement internationalization (i18n) in a Next.js application?",
      answers: [
        "a) By using third-party libraries like `next-translate`",
        "b) By creating separate pages for each language",
        "c) Both A & B",
        "d) Internationalization is not supported in Next.js"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 76,
      question: "What are some methods to optimize SEO in a Next.js application?",
      answers: [
        "a) By adding meta tags using the `next/head` component",
        "b) Using structured data with JSON-LD format",
        "c) Both A & B",
        "d) SEO optimization is automatic in Next.js"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 77,
      question: "How can you manage environment variables in a Next.js project?",
      answers: [
        "a) By using `.env.local` file for local development",
        "b) By setting variables in `next.config.js`",
        "c) Both A & B",
        "d) Environment variables are not supported in Next.js"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 78,
      question: "What is the purpose of the `publicRuntimeConfig` in Next.js?",
      answers: [
        "a) To define runtime configuration accessible on both client and server",
        "b) To manage static assets in the `public` directory",
        "c) Both A & B",
        "d) `publicRuntimeConfig` is not a valid configuration in Next.js"
      ],
      correctAnswer: "a) To define runtime configuration accessible on both client and server"
    },
    {
      id: 79,
      question: "How can you perform data fetching in a Next.js application?",
      answers: [
        "a) Using `getStaticProps` for static data fetching",
        "b) Using `getServerSideProps` for server-side rendering",
        "c) Both A & B",
        "d) Data fetching is not supported in Next.js"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 80,
      question: "What is the purpose of the `next/image` component in Next.js?",
      answers: [
        "a) To optimize images for performance and lazy loading",
        "b) To create responsive image galleries",
        "c) Both A & B",
        "d) `next/image` component is deprecated in the latest Next.js versions"
      ],
      correctAnswer: "a) To optimize images for performance and lazy loading"
    },
    {
      id: 81,
      question: "How can you deploy a Next.js application?",
      answers: [
        "a) Using platforms like Vercel, Netlify, or AWS Amplify",
        "b) Manually copying files to a web server",
        "c) Both A & B",
        "d) Deployment is not possible with Next.js"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 82,
      question: "What are some advantages of using Next.js over a traditional React application?",
      answers: [
        "a) Improved SEO and initial page load performance",
        "b) Automatic code splitting and image optimization",
        "c) Easier data fetching with built-in methods",
        "d) All of the above"
      ],
      correctAnswer: "d) All of the above"
    },
    {
      id: 83,
      question: "How can you add custom headers to a Next.js API route response?",
      answers: [
        "a) By setting headers directly in the API route handler function",
        "b) Next.js API routes do not support custom headers",
        "c) Both A & B",
        "d) Custom headers are managed using environment variables"
      ],
      correctAnswer: "a) By setting headers directly in the API route handler function"
    },
    {
      id: 84,
      question: "What is the purpose of the `public` directory in a Next.js project?",
      answers: [
        "a) To store static assets like images and fonts",
        "b) To define global CSS styles",
        "c) To manage API routes",
        "d) None of the above"
      ],
      correctAnswer: "a) To store static assets like images and fonts"
    },
    {
      id: 85,
      question: "How can you manage environment variables in a Next.js project?",
      answers: [
        "a) By using `.env.local` file for local development",
        "b) By setting variables in `next.config.js`",
        "c) Both A & B",
        "d) Environment variables are not supported in Next.js"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 86,
      question: "What is the purpose of the `publicRuntimeConfig` in Next.js?",
      answers: [
        "a) To define runtime configuration accessible on both client and server",
        "b) To manage static assets in the `public` directory",
        "c) Both A & B",
        "d) `publicRuntimeConfig` is not a valid configuration in Next.js"
      ],
      correctAnswer: "a) To define runtime configuration accessible on both client and server"
    },
    {
      id: 87,
      question: "How can you perform data fetching in a Next.js application?",
      answers: [
        "a) Using `getStaticProps` for static data fetching",
        "b) Using `getServerSideProps` for server-side rendering",
        "c) Both A & B",
        "d) Data fetching is not supported in Next.js"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 88,
      question: "What is the purpose of the `next/image` component in Next.js?",
      answers: [
        "a) To optimize images for performance and lazy loading",
        "b) To create responsive image galleries",
        "c) Both A & B",
        "d) `next/image` component is deprecated in the latest Next.js versions"
      ],
      correctAnswer: "a) To optimize images for performance and lazy loading"
    },
    {
      id: 89,
      question: "How can you deploy a Next.js application?",
      answers: [
        "a) Using platforms like Vercel, Netlify, or AWS Amplify",
        "b) Manually copying files to a web server",
        "c) Both A & B",
        "d) Deployment is not possible with Next.js"
      ],
      correctAnswer: "c) Both A & B"
    },
    {
      id: 90,
      question: "What are some advantages of using Next.js over a traditional React application?",
      answers: [
        "a) Improved SEO and initial page load performance",
        "b) Automatic code splitting and image optimization",
        "c) Easier data fetching with built-in methods",
        "d) All of the above"
      ],
      correctAnswer: "d) All of the above"
    },
    {
      id: 91,
      question: "How can you add custom headers to a Next.js API route response?",
      answers: [
        "a) By setting headers directly in the API route handler function",
        "b) Next.js API routes do not support custom headers",
        "c) Both A & B",
        "d) Custom headers are managed using environment variables"
      ],
      correctAnswer: "a) By setting headers directly in the API route handler function"
    },
    {
      id: 92,
      question: "What is the purpose of the `public` directory in a Next.js project?",
      answers: [
        "a) To store static assets like images and fonts",
        "b) To define global CSS styles",
        "c) To manage API routes",
        "d) None of the above"
      ],
      correctAnswer: "a) To store static assets like images and fonts"
    },
    {
      id: 93,
      question: "What is Incremental Static Regeneration (ISR) in Next.js?",
      answers: [
        "a) A method to pre-render pages at build time with the ability to refresh content periodically",
        "b) Used for highly dynamic content that needs to be updated frequently",
        "c) Both A & B",
        "d) ISR is not yet a supported feature in Next.js"
      ],
      correctAnswer: "a) A method to pre-render pages at build time with the ability to refresh content periodically"
    },
    {
      id: 94,
      question: "What is the role of the `getInitialProps` method in Next.js?",
      answers: [
        "a) Used for data fetching on the server-side before initial render (deprecated)",
        "b) Can be used in both page and layout components",
        "c) Now replaced by `getServerSideProps` or `getStaticProps` for data fetching",
        "d) Both A & B"
      ],
      correctAnswer: "d) Both A & B"
    },
    {
      id: 95,
      question: "What are some best practices for optimizing performance in Next.js applications?",
      answers: [
        "a) Utilizing code splitting and lazy loading",
        "b) Implementing image optimization techniques",
        "c) Minimizing unnecessary re-renders",
        "d) All of the above"
      ],
      correctAnswer: "d) All of the above"
    },
    {
      id: 96,
      question: "What are the benefits of using TypeScript with Next.js?",
      answers: [
        "a) Improved type safety and code maintainability",
        "b) Enables features like static type checking",
        "c) Integrates seamlessly with existing JavaScript codebases",
        "d) All of the above"
      ],
      correctAnswer: "d) All of the above"
    },
    {
      id: 97,
      question: "What is the purpose of the `next.config.js` file in a Next.js project?",
      answers: [
        "a) To configure settings like webpack, image optimization, and environment variables",
        "b) To define global CSS styles",
        "c) To manage API routes",
        "d) None of the above"
      ],
      correctAnswer: "a) To configure settings like webpack, image optimization, and environment variables"
    },
    {
      id: 98,
      question: "How can you implement custom error handling in Next.js?",
      answers: [
        "a) By creating a custom `_error.js` file in the `pages` directory",
        "b) Error handling is not supported in Next.js",
        "c) Both A & B",
        "d) By setting `ErrorBoundary` component for each page"
      ],
      correctAnswer: "a) By creating a custom `_error.js` file in the `pages` directory"
    },
    {
      id: 99,
      question: "What is the purpose of the `pages/api` directory in a Next.js project?",
      answers: [
        "a) To define custom API routes that can be accessed from the frontend",
        "b) To manage static assets like images and fonts",
        "c) Both A & B",
        "d) API routes are not supported in Next.js"
      ],
      correctAnswer: "a) To define custom API routes that can be accessed from the frontend"
    },
    {
      id: 100,
      question: "What is Incremental Static Regeneration (ISR) in Next.js?",
      answers: [
        "a) A method to pre-render pages at build time with the ability to refresh content periodically",
        "b) Used for highly dynamic content that needs to be updated frequently",
        "c) Both A & B",
        "d) ISR is not yet a supported feature in Next.js"
      ],
      correctAnswer: "a) A method to pre-render pages at build time with the ability to refresh content periodically"
    }
  ]
 };
