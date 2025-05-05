module.exports = function (sequelize, dataTypes) {

    let alias = "Movie";

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        title:{
            type: dataTypes.STRING,
        },
        rating:{
            type: dataTypes.DECIMAL,
        },
        awards:{
            type: dataTypes.INTEGER,
        },
        release_date:{
            type: dataTypes.DATE,
        },
        length:{
            type: dataTypes.INTEGER,
        },
        genre_id:{
            type: dataTypes.INTEGER,
        },
        created_at : {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        },
    }

    let config = {
        tableName: "movies",
        timestamps: true,
        underscored: true
    };

    let Movie = sequelize.define(alias, cols, config);

    // Luego del define()
    Movie.associate = function(models) {
        
        Movie.belongsTo( models.Genre, {
            as: "genre",
            foreignKey: "genre_id"
        })
    }

    return Movie;
    
}