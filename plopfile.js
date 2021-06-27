// helping out with plopjs
// for the editor input
const { writeJson, cleanUp } = require('./src/helpers/write-json')
const { join } = require('path')
// for the editor field
process.env.EDITOR = 'nano'
// run
module.exports = function(plop) {

  plop.setActionType('updateCvAction', function(answers) {
    // need to change the tech string in array
    answers.tech = cleanUp(answers.tech, ",")
    // need to change the desc into array
    answers.desc = cleanUp(answers.desc, "\n")

    return writeJson(join(__dirname, 'src', 'cv', 'cv.json'), 'cvList', answers)
      .then(() => 'Done')
      .catch(err => {
        console.error(err)
        return 'Fail'
      })
  })

  plop.setGenerator('cv', {
    description: 'cmd to update CV data file',
    prompts: [
      { type: 'input', name: 'title' },
      { type: 'input', name: 'client' },
      { type: 'input', name: 'date' },
      { type: 'editor', name: 'desc' },
      { type: 'confirm', name: 'active' },
      { type: 'input', name: 'tech' }
    ],
    actions: [{ type: 'updateCvAction' }]
  })

}
