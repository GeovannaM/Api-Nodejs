const create = (req, res, next) => {
  res.status(201).send(req.body)
}

const update = (req, res, next) => {
  const id = req.params.id
  res.status(200).send({
    id: id,
    item: req.body
  })
}

const remove = (req, res, next) => {
  res.status(200).send(req.body)
}

module.exports = {
  create,
  update,
  remove,
}