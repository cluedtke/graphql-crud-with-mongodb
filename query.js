var {
    GraphQLObjectType,
    GraphQLList,
} = require('graphql');
var {
    book,
    bookType,
} = require('./book');

// Query
exports.BookQuery = new GraphQLObjectType({
    name: 'Query',
    fields: () => {
        return {
            books: {
                type: new GraphQLList(bookType),
                resolve: async () => {
                    const books = await book.find();
                    if (!books) {
                        throw new Error('error while fetching data');
                    }
                    return books;
                }
            }
        };
    },
});
