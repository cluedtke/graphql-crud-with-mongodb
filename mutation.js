var {
    GraphQLNonNull,
    GraphQLString,
} = require('graphql');
var {
    book,
    bookType,
} = require('./book');

module.exports = {
    addBook: {
        type: bookType,
        args: {
            name: {
                type: new GraphQLNonNull(GraphQLString),
            },
            author:{
                type: new GraphQLNonNull(GraphQLString),
            },
        },
        resolve: async(root, args) => {
            const model = new book(args);
            const newBook = await model.save();
            if (!newBook) {
                throw new Error('error adding book');
            }
            return newBook;
        },
    },

    updateBook: {
        type: bookType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLString),
            },
            name: {
                type: new GraphQLNonNull(GraphQLString),
            },
            author: {
                type: new GraphQLNonNull(GraphQLString),
            },
        },
        resolve: async(root, args) => {
            const updatedBook = await book.findByIdAndUpdate(args.id, args);
            if (!updatedBook) {
                throw new Error('error updating book');
            }
            return updatedBook;
        },
    },

    deleteBook: {
        type: bookType,
        args: {
            id: {
                type: new GraphQLNonNull(GraphQLString),
            },
        },
        resolve: async(root, args) => {
            const deletedBook = await book.findByIdAndRemove(args.id);
            if (!deletedBook) {
                throw new Error('error deleting book');
            }
            return deletedBook;
        },
    },
};
