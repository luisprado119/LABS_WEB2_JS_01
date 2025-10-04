function getStringLength(str) {
    return str.length;
}

function toUpperCase(str) {
    return str.toUpperCase();
}

function toLowerCase(str) {
    return str.toLowerCase();
}

function includesSubstring(str, substring) {
    return str.includes(substring);
}

function startsWithPrefix(str, prefix) {
    return str.startsWith(prefix);
}

function endsWithSuffix(str, suffix) {
    return str.endsWith(suffix);
}

function repeatString(str, count) {
    return str.repeat(count);
}

function replaceSubstring(str, oldSub, newSub) {
    return str.replace(oldSub, newSub);
}

function trimString(str) {
    return str.trim();
}

function concatenateStrings(str1, str2) {
    return str1 + str2;
}

module.exports = {
    getStringLength,
    toUpperCase,
    toLowerCase,
    includesSubstring,
    startsWithPrefix,
    endsWithSuffix,
    repeatString,
    replaceSubstring,
    trimString,
    concatenateStrings
};
