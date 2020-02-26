// Define Controller Object.
const Controller = {}

// Setting Home controller.
Controller.home = (req, res)=>{
    return res.render('home', {title: 'TODO List'});
}

// Export the module.
module.exports = Controller;