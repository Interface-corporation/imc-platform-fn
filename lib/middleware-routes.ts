/**
 * 
 * Array of routes that are accessible to the public
 * these routes do not require authentication
 * @type { string[] }
 */
export const publicRoutes = [
    /^\/blogs(\/.*)?$/,
    /^\/projects(\/.*)?$/, // Match any path that starts with "/projects"
    /^\/api(\/.*)?$/,
    "/",
];

/**
 * 
 * Array of routes that are used for authentication
 * these routes will redirect logged user to /admin -> dashboard
 * @type { string[] }
 */
export const authRoutes = [
    "/auth",
    "/auth/forgot-password",
    /^\/auth\/reset-password(\/.*)?$/,
]

/**
 * 
 * The routes for API authentication 
 * Routes that start with this prefix are used for api authentication purposes
 * @type { string }
 */
export const apiAuthPrefix = "/api/auth";


/**
 * 
 * Default redirect path after logging in.
 * @type { string }
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";