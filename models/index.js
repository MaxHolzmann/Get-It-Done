const User = require('./User');
const Tasks = require('./Tasks');

Tasks.belongsTo(User, {
    foreignKey: 'user_id'
});

User.hasMany(Tasks, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = {User, Tasks};

