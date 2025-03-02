const deps = require("./package.json").dependencies;

export const mfConfig = {
    name: "auth",
    filename: "remoteEntry.js",
    exposes: {
        "./ProtectedRoute": "./src/components/ProtectedRoute.tsx",
        "./AuthRoutes": "./src/components/AuthRoutes.tsx",
        "./AuthContext": "./src/contexts/AuthContext.tsx",
        "./useAuth": "./src/hooks/useAuth.ts",
    },
    shared: {
        ...deps,
        "react": {
            singleton: true,
            requiredVersion: deps["react"],
        },
        "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
            singleton: true,
            requiredVersion: deps["react-router-dom"],
        },
    },
};
