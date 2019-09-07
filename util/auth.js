function isMember(user, group) {
    return user["groups"].indexOf(group) !== -1;
}

function isStudent(user) {
    return isMember(user, "labs:comp3506-2019-2") || isMember(user, "labs:comp7505-2019-2");
}

module.exports = {
    isMember: isMember,
    isStudent: isStudent
};