const deps = require("./package.json").dependencies;

export const mfConfig = {
    name: "ui",
    filename: "remoteEntry.js",
    exposes: {
        "./PopupWithForm": "./src/components/PopupWithForm.tsx",
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
