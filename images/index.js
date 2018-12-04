const DEFAULT_AVATAR = require('./defaultAvatar.png')
export function getAvatar(uri) {
    return !!uri ? { uri } : DEFAULT_AVATAR
}