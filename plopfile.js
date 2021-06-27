// helping out with plopjs

module.exports = function(plop) {

  plop.setActionType('updateCvAction', function(answers, config) {
    console.log(answers)
    console.log(config)
    return 'done'
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
        type: 'input',
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
