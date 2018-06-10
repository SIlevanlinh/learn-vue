const capitalize = function (value) {
    if (!value) return ''
    return value.charAt(0).toUpperCase() + value.slice(1)
}

const uppercase = value => {
    return value.toUpperCase();
}

export default {
    capitalize,
    uppercase
}