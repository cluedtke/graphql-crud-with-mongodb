var {
    GraphQLSchema,
    GraphQLObjectType,
} = require('graphql');
var query = require('./query').BookQuery;
var mutation = require('./mutation');

module.exports.BookSchema = new GraphQLSchema({
    query: query,
    mutation: new GraphQLObjectType({
        name: 'Mutation',
        fields: mutation,
    }),
});
