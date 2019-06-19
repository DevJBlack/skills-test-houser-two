module.exports = {
  getAllHouses: (req, res) => {
    const db = req.app.get('db')
    db.get_all_houses().then((response) => {
      res.status(200).send(response)
    }).catch(err => console.log(err))
  },
  createHouse: (req, res) => {
    const db = req.app.get('db')
    console.log(req.body)
    db.create_houses(req.body).then((response) => {
      res.status(200).send(response)
    }).catch(err => console.log(err))
  },
  deleteHouse: (req, res) => {
    const db = req.app.get('db')
    let { id } = req.params
    db.delete_houses(id).then((response) => {
      res.status(200).send(response)
    }).catch(err => console.log(err))
  }
}