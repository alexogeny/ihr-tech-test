/**
 * In this file the resolvers for the gql schema are defined.
 * Since this app is small, I am defining them all in one place.
 * If the application logic were more complicated, I would separate resolver definitions and use some
 * syntactic sugar to make them pretty and easier to read.
 * Again, since I just want to see if I can get this working in <4 hours, I'll do it this way.
 * Plus, it's very readable and elegant.
 */
export default {
    User: {
        name: (parent, args, context, info) => parent.getName(),
        history: (parent, args, context, info) => parent.getHistory(),
    },
    Name: {
        user: (parent, args, context, info) => parent.getUser(),
        history: (parent, args, context, info) => parent.getHistory(),
    },
    Query: {
        names: (parent, args, { db }, info) => db.name.findAll(),
        users: (parent, args, { db }, info) => db.user.findAll(),
        history: (parent, args, { db }, info) => db.history.findAll(),
        name: (parent, { id }, { db }, info) => db.name.findById(id),
        user: (parent, { id }, { db }, info) => db.user.findById(id),
        historyUser: (parent, { userId }, { db }, info) => db.history.find(history => history.userId === args.userId),
        historyName: (parent, { nameId }, { db }, info) => db.history.find(history => history.nameId === args.nameId),
    },
    Mutation: {
        createName: (parent, { value }, { db }, info) =>
            db.name.create({
                value: value
            }),
        createAssign: (parent, { userId, nameId }, { db }, info) =>
            db.history.create({
                userId: userId,
                nameId: nameId
            }),
        updateUser: (parent, { pwd, isAdmin, id }, { db }, info) =>
            db.user.update({
                pwd: pwd,
                isAdmin: isAdmin
            })
    }
};