const home = (req,res) => {
    console.log('Home controller')
    res.send(`From home controller`)
}

module.exports = home;