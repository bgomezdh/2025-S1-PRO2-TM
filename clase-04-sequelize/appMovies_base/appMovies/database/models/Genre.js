module.exports = function (sequelize, dataTypes){

    let alias = 'Genre'; //Este alias se busca como nombre en de la tabla en plural dentro de la base de datos.

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        name: {
            type: dataTypes.STRING
        },
        ranking: {
            type: dataTypes.INTEGER
        },
        active: {
            type: dataTypes.INTEGER
        },
        created_at : {
            type: dataTypes.DATE,
        },
        updated_at: {
            type: dataTypes.DATE,
        },

    }

    let config = {
        tableName : "genres",
        timestamps:false, //Indica al modelo si debe buscar los campos createdAt y updatedAt en la tabla. Si están en la tabla no es necesario declararlos en la lista de campos.
        // Si en la tabla están con guión bajo hay que usar la propiedad underscore.
        underscored: false, //Indica al modelo que si loscampos de timestamp en la tabla usan o no guiones bajos en lugar de camelCase.
    };

    const Genre = sequelize.define(alias, cols, config);

    // Luego del define()
    Genre.asocciate = function(models) {
        Genre.hasMany(models.Movie, {
            as : "movies",
            foreignKey: "genre_id"
        })
    }

    return Genre;

}