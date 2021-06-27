// helping out with plopjs
// for the editor input
const { writeJson } = require('./src/helpers/write-json')
const { join } = require('path')

process.env.EDITOR = 'nano'

module.exports = function(plop) {

  plop.setActionType('updateCvAction', function(answers) {
    answers.tech = answers.tech.split(',')
    // the only thing we need to modified is the tech
    return writeJson(join(__dirname, 'src', '_data', 'cv.json'), answers)
      .then(() => 'Done')
      .catch(() => 'Fail')
  })

  plop.setGenerator('cv', {
    description: 'cmd to update CV data file',
    prompts: [
      {
        type: 'input',
        name: 'title'
      },
      {
        type: 'input',
        name: 'client'
      },
      {
        type: 'input',
        name: 'date'
      },
      {
        type: 'editor',
        name: 'desc'
      },
      {
        type: 'confirm',
        name: 'active'
      },
      {
        type: 'input',
        name: 'tech'
      }
    ],
    actions: [
      {
        type: 'updateCvAction'
      }
    ]
  })

}
