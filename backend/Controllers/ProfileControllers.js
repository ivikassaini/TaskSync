const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/Users");

const getProfile = async (req, res) => {
    try {
        const { email } = req.user; // Assuming `req.user` contains authenticated user data
        const user = await UserModel.findOne({ email }, '-password'); // Exclude password

        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }

        res.status(200).json({
            message: 'Profile fetched successfully',
            success: true,
            user,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            success: false,
        });
    }
};

const updateProfile = async (req, res) => {
    try {
        const { email } = req.user; // Assuming `req.user` contains authenticated user data
        const { name, password ,age ,state } = req.body;

        const updates = {};
        if (name) updates.name = name;
        if (age) updates.age = age;
        if (state) updates.state = state;
        if (password) updates.password = await bcrypt.hash(password, 10);

        const updatedUser = await UserModel.findOneAndUpdate(
            { email },
            { $set: updates },
            { new: true, select: '-password' } // Exclude password from the response
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found', success: false });
        }

        res.status(200).json({
            message: 'Profile updated successfully',
            success: true,
            user: updatedUser,
        });
    } catch (err) {
        res.status(500).json({
            message: 'Internal server error',
            success: false,
        });
    }
};
module.exports = {
    getProfile,
    updateProfile,
};