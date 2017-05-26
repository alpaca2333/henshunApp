let index = 1;

module.exports.getUniqueToken = function getUniqueToken() {
    return 'token' + index++;
};