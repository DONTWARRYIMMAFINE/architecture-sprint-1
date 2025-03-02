const deps = require("./package.json").dependencies;

export const mfConfig = {
    name: "profile",
    filename: "remoteEntry.js",
    remotes: {
        ui: "ui@http://localhost:3002/remoteEntry.js",
        auth: "auth@http://localhost:3003/remoteEntry.js",
    },
    exposes: {
        "./ProfileSection": "./src/components/ProfileSection.tsx",
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
    },
};
