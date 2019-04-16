var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString
} = require('graphql');

module.exports = {
    book: mongoose.model('book', new Schema({
        name: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
    })),
    bookType: new GraphQLObjectType({
        name: 'book',
        fields: () => {
            return {
                id: { type: new GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLString },
                author: { type: GraphQLString },
            };
        },
    }),
};
