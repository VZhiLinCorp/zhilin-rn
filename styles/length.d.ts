import React, { StyleSheet, Dimensions, PixelRatio, Platform, StatusBar } from "react-native";
import { getFontSize, getHeight, getMorP, getLineHeight, getFontWeight, getSquare } from "./fn";
import { FONT_SIZE_BIG, FONT_SIZE_XS, FONT_SIZE_SM, FONT_SIZE_MD, FONT_SIZE_N, FONT_SIZE_LG, DEFAULT_AVATAR_SIZE } from "./constant";


export const lhXs = getLineHeight(FONT_SIZE_XS * 1.5)
export const lhSm = getLineHeight(FONT_SIZE_SM * 1.5)
export const lhN = getLineHeight(FONT_SIZE_N * 1.5)
export const lhMd = getLineHeight(FONT_SIZE_MD * 1.5)
export const lhBig = getLineHeight(FONT_SIZE_BIG * 1.5)

export const fontSizeXs = getFontSize(FONT_SIZE_XS)//12
export const fontSizeSm = getFontSize(FONT_SIZE_SM)//14
export const fontSizeN = getFontSize(FONT_SIZE_N)//16
export const fontSizeMd = getFontSize(FONT_SIZE_MD)//18
export const fontSizeBig = getFontSize(FONT_SIZE_BIG)//19
export const fontSizeLg = getFontSize(FONT_SIZE_LG)//19

export const heightXs = getHeight(24)
export const heightSm = getHeight(28)
export const heightN = getHeight(32)
export const heightMd = getHeight(36)
export const heightBig = getHeight(40)

//margin p:水平 v:垂直 lrtb:分别对应 left right top bottom
export const m_0 = getMorP(0, 0)


export const m_sm = getMorP(0, 10, 'trbl')
export const m_xs = getMorP(0, 5, 'trbl')


export const mp_xs = getMorP(0, 5, 'lr')
export const mp_sm = getMorP(0, 10, 'lr')
export const ml_sm = getMorP(0, 10, 'l')
export const ml_md = getMorP(0, 20, 'l')

export const ml_xs = getMorP(0, 5, 'l')
export const mr_md = getMorP(0, 20, 'r')
export const mr_sm = getMorP(0, 10, 'r')
export const mr_xs = getMorP(0, 5, 'r')
export const mt_md = getMorP(0, 20, 't')
export const mt_sm = getMorP(0, 10, 't')
export const mt_xs = getMorP(0, 5, 't')
export const mv_xs = getMorP(0, 5, 'tb')
export const mv_sm = getMorP(0, 10, 'tb')
export const mv_md = getMorP(0, 20, 'tb')
export const mb_xs = getMorP(0, 5, 'b')
export const mb_sm = getMorP(0, 10, 'b')
export const mb_md = getMorP(0, 20, 'b')


// padding

export const p_0 = getMorP(1, 0)

export const p_n = getMorP(1, 15, 'lrtb')

export const pl_sm = getMorP(1, 10, 'l')
export const pl_xs = getMorP(1, 5, 'l')
export const pl_md = getMorP(1, 20, 'l')

export const pr_sm = getMorP(1, 10, 'r')


export const pt_xs = getMorP(1, 5, 't')
export const p_xs = getMorP(1, 5, 'trbl')
export const p_sm = getMorP(1, 10, 'trbl')
export const p_md = getMorP(1, 20, 'trbl')

export const pp_md = getMorP(1, 20, 'lr')
export const pp_n = getMorP(1, 15, 'lr')
export const pp_sm = getMorP(1, 10, 'lr')
export const pp_xs = getMorP(1, 5, 'lr')

export const pv_md = getMorP(1, 20, 'tb')
export const pv_n = getMorP(1, 15, 'tb')

export const pv_sm = getMorP(1, 10, 'tb')
export const pv_xs = getMorP(1, 5, 'tb')



export const bold = getFontWeight('bold')

// 
export const formItemHeight = getHeight(40)  //表单项高度
export const defaultAvatarSize = getSquare(DEFAULT_AVATAR_SIZE)  //头像大小
