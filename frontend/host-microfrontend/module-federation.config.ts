const deps = require("./package.json").dependencies;

export const mfConfig = {
    name: "host",
    remotes: {
        ui: "ui@http://localhost:3002/remoteEntry.js",
        auth: "auth@http://localhost:3003/remoteEntry.js",
        profile: "profile@http://localhost:3004/remoteEntry.js",
        card: "card@http://localhost:3005/remoteEntry.js",
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
