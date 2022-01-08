const notFound = (req,res) => (
    res.status(404).send("There is not route for this direction")
)
module.exports = notFound