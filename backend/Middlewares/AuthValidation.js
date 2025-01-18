// authvalidation

const joi = require('joi');

const signupValidation = (req,res, next) => {
    const schema = joi.object({
        name: joi.string().min(3).max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({ message: "bad request", error})
    }
    next();
}

const loginValidation = (req,res, next) => {
    const schema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(4).max(100).required()
    });
    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400)
        .json({ message: "bad request", error})
    }
    next();
}

const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Expecting `Bearer <token>`
    if (!token) {
        return res.status(401).json({ message: 'Authentication required', success: false });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded user info to request object
        next();
    } catch (err) {
        res.status(403).json({ message: 'Invalid or expired token', success: false });
    }
};

module.exports = {
    signupValidation,
    loginValidation,
    authenticate,
}