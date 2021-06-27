// src/helpers/write-json.js
// this is for use in the plopfile.js
// break it out for re-use purposes
const fsx = require('fs-extra')

/**
 * @param {string} pathToFile where the json is
 * @param {string} key to insert under
 * @param {object} objToAdd the object to add to it
 */
function writeJson(pathToFile, key, objToAdd) {
  return fsx.readJson(pathToFile)
    .then(json => {
      if (Array.isArray(json[key])) {
        json[key].push(objToAdd)
        return json
      }
      throw new Error(`Expect ${key} in json is an array but got ${typeof json[key]}`)
    })
    // writing it back to the same file
    .then(json => fsx.writeJson(pathToFile, json, {spaces: 4}))
}

// named export
module.exports = { writeJson }
