var {
    GraphQLSchema,
    GraphQLObjectType,
} = require('graphql');
var query = require('./query');
var mutation = require('./mutation');

exports.BookSchema = new GraphQLSchema({
    query: query,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutation,
    }),
});