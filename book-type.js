var {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLID,
    GraphQLString,
} = require('graphql');

module.exports.bookType = new GraphQLObjectType({
    name: 'book',
    fields: () => {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID),
            },
            name: {
                type: GraphQLString,
            },
            author: {
                type: GraphQLString,
            },
        };
    },
});
