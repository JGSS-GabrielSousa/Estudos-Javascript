const user = {
    id: 1,
    nickname: "JGSS",
    fullName: {
        firstName: "Gabriel",
        lastName: "Sousa"
    }
};

function getUserID({id}) {
    return id;
}

function getUserFullName({fullName: {firstName: first, lastName: last}}) {
    return first+" "+last;
}