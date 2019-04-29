const getObjectPropertyByStringRegex = (obj = {}, string = '') => {
    return string.split('.').reduce((x, y) => (x === undefined ? undefined : x[y]), obj);
};

export {
    getObjectPropertyByStringRegex,
}