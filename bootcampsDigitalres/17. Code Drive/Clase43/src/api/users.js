export const getAllUsers = async () => {
    return [
        {
            id: 1,
            username: "Pol",
            password: "1234",
            email: "pol@gmail.com"
        },
        {
            id: 2,
            username: "Merlí",
            password: "1234",
            email: "merli@gmail.com"
        },
        {
            id: 3,
            username: "Bruno",
            password: "1234",
            email: "bruno@gmail.com"
        },
    ];
}

export const userExists = async (user) => {
    const users = await getAllUsers();

    return users.find((u) => u.username === user.username && u.password === user.password)
}
