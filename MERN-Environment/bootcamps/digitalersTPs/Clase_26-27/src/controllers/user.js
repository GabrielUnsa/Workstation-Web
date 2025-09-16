const { User } = require('../models');

exports.get = () => User.find();

exports.getById = async (id) => {
    const user = await User.findById(id).exec();
    if (!user) throw new Error(`Could not find the user with the provided id ${id}`);
    return user;
}

exports.create = async (userData) => {
    const user = new User(userData);
    const {id} = await user.save();
    return id;
};

exports.update = async (id, userData) => {
    const res = await User.updateOne({ _id: id }, userData);
    if (!res.matchedCount) throw new Error(`Could not find the user with the provided ${id}`);
    if (!res.modifiedCount) throw new Error(`Could not modified the user ${id}`);
    return id;
};

exports.remove = async (id) => {
    const res = await User.deleteOne({ _id: id });
    if(!res.deletedCount) throw new Error(`Could not delete the user by id ${id}`);
    return id;
}

