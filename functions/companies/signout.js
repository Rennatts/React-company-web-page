
module.exports = (req, res) => {
    res.clearCookie("t")
    return res.json({message: "signout success"})
};