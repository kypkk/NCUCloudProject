/**
 * 必須先安裝 
 * 
 * npm i babel-jest \@babel/core \@babel/preset-env -D
 */

module.exports = {
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": true
                }
            }
        ]
    ]
}
