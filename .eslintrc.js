module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },

     "extends": ["eslint:recommended","react"],

    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": false
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],

    "rules": {
        "indent": [
            "error",
            2
        ],
        "react/forbid-prop-types": 0,
        "no-console":"off",
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "space-before-function-paren":[
            "error",{
                "anonymous": "ignore",
                "named": "ignore",
                "asyncArrow": "always"
            }
        ],
        "prefer-reflect": 0
    }
};
