'use strict'

module.exports = {
    isLogIn(req, res, next){
        if(req.isAuthenticated()){
            return next();
        }else{
            return res.redirect('/signin');
        }
    },
    isNotLogIn(req, res, next){
        if(!req.isAuthenticated()){
            return next();
        }else{
            return res.redirect('/profile');
        }
    }
}