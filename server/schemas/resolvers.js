const fakeUser = [
{
    _id: 1,
    username: "Bill",
    email: "bill@bill.com"
}
]
const resolvers = {
     Query: {
        users: async () => {
            return fakeUser
        },
        books: async () => {

        }
     }
};

module.exports = resolvers