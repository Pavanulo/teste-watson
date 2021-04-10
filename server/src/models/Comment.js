const { Model, DataTypes } = require('sequelize')

class Comment extends Model {
    static init(connection) {
        super.init({
            comment: DataTypes.STRING,
            audiopath: DataTypes.STRING,
        }, {
            sequelize: connection
        })
    }
}

module.exports = Comment