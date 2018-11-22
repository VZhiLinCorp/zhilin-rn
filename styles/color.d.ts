import { getColor, getBgColor } from "./fn";
import { COLOR_LIGHT, COLOR_INFO, COLOR_BLACK, COLOR_SUCCESS, COLOR_DANGER, COLOR_PRIMARY, BG_GRAY, COLOR_WHITE, COLOR_SAFE, COLOR_PRIMARY_SUB, COLOR_WARNING, COLOR_SUB, COLOR_PLACEHOLDER, COLOR_PRIMARY_LIGHT, BLOCK_GRAY, COLOR_BLUE, COLOR_GREEN, COLOR_ORANGE, COLOR_ICON_TEXT } from "./constant";

export const bgPrimary = getBgColor(COLOR_PRIMARY)//主题色
export const bgPrimarySub = getBgColor(COLOR_PRIMARY_SUB)//主题色
export const bgPrimaryLight = getBgColor(COLOR_PRIMARY_LIGHT)

export const bgWarning = getBgColor(COLOR_WARNING)//黄色
export const bgSuccess = getBgColor(COLOR_SUCCESS)//绿色
export const bgDanger = getBgColor(COLOR_DANGER)//红色
export const bgSafe = getBgColor(COLOR_SAFE)//蓝色
export const bgWhite = getBgColor(COLOR_WHITE)//白色
export const bgBlue = getBgColor(COLOR_BLUE)//淡蓝色
export const bgGreen = getBgColor(COLOR_GREEN)//浅绿色
export const bgOrange = getBgColor(COLOR_ORANGE)//桔色
export const bgSub = getBgColor(COLOR_SUB) //辅助色 灰
export const bgInfo = getBgColor(COLOR_INFO) //灰色
export const bgInfoLight = getBgColor(COLOR_LIGHT)//浅灰色
export const bgBlack = getBgColor(COLOR_BLACK)//黑色
export const bgGray = getBgColor(BG_GRAY)//背景色
export const bgBlockGray = getBgColor(BLOCK_GRAY)//块灰色

export const colorPrimary = getColor(COLOR_PRIMARY)//主题色
export const colorPlaceholder = getColor(COLOR_PLACEHOLDER)//白色
export const colorInfo = getColor(COLOR_INFO)//灰色
export const colorInfoLight = getColor(COLOR_LIGHT)//浅灰色
export const colorBlack = getColor(COLOR_BLACK)//黑色
export const colorSub = getColor(COLOR_SUB)//辅助色 灰
export const colorSuccess = getColor(COLOR_SUCCESS)//绿色
export const colorDanger = getColor(COLOR_DANGER)//红色
export const colorSafe = getColor(COLOR_SAFE)//蓝色
export const colorWhite = getColor(COLOR_WHITE)//白色
export const colorWarning = getColor(COLOR_WARNING)//白色
export const colerPlaceHolder = getColor(COLOR_PLACEHOLDER)//
export const colerIconText = getColor(COLOR_ICON_TEXT)//图标文字颜色


//颜色
const statusColors = {
    '未通过': colorDanger,
    '迟到': colorDanger,
    '未签退': colorDanger,

    '进行中': colorSafe,
}
//背景
const statusBg = {
    '待评价': bgWarning,
    '评分中': bgWarning,

    '进行中中': bgSafe,
    '已通过': bgSafe,

    '未通过': bgDanger,

    '结束': bgSub,
}
export const getStupidColor = (str) => {
    str = str || ''
    return statusColors[str] || colorPrimary

}
export const getStupidBg = (str) => {
    str = str || ''
    return statusBg[str] || bgPrimary
}