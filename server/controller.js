let messages = []
let id = 0;

module.exports = {
  get: (req, res) => {
    res.status(200).send(messages)
  },

  create : (req, res) => {
    const {text, time} = req.body
    messages.push({id, text, time})
    id++
    res.status(200).send(messages)
  },

  update: (req, res) => {
    const {id} = req.params
    const {text} = req.body
    let messageIndex = messages.findIndex( message => message.id === id)
    let message = messages[messageIndex]

    messages[messageIndex] = {
      id: message.id,
      text: message.text,
      time: message.time
    }

    res.status(200).send(messages)
  },

  delete: (req, res) => {
    const {id} = req.params
    let index = messages.findIndex( message => message.id == id)
    messages.splice(index, 1)
    res.status(200).send(messages)
  }
}
