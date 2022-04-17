export const pagination = (users, start, end) => {
    let _users = []
    try {
        for (let i = start; i < end; i++) {
            if (users[i] === undefined || users[i] === 'undefined' || users[i].length === 0 || users[i] === '[]') {
                break
            } else {
                _users.push(users[i]);
            }

        }
    } catch { }

    return _users;
}

export const maxOfPagination = (length, numPage) => {
    let page = parseInt(length) / parseInt(numPage);
    return Math.round(page);
}