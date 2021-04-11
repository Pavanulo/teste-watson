const { Model, DataTypes } = require('sequelize')

class Comment extends Model {
    static init(connection) {
        super.init({
            comment: DataTypes.STRING(1200),
            audiopath: DataTypes.STRING(1200),
        }, {
            sequelize: connection
        })
    }
}

module.exports = Comment