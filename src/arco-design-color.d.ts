/*
 * Copyright (c) 2024 YuJie Ge(Smile)
 * Licensed under the MIT License.
 */
// arco-design-color.d.ts

declare module "@arco-design/color" {
  // 定义颜色类型
  type Color = string

  // 定义生成颜色的选项类型
  interface GenerateOptions {
    list?: boolean
    dark?: boolean
  }

  // 定义 generate 函数的类型
  function generate(color: Color, options?: GenerateOptions): Color[]

  // 定义 getRgbStr 函数的类型
  function getRgbStr(color: Color): string

  // 定义颜色列表的类型
  interface ColorList {
    [key: string]: Color
  }

  // 定义预设颜色的类型
  interface PresetColors {
    [key: string]: {
      light: Color[] // 颜色的浅色调
      dark: Color[] // 颜色的深色调
      primary: Color // 主要颜色
    }
  }

  // 导出相关函数和常量
  export { generate, getRgbStr }

  // 导出获取预设颜色的函数
  export function getPresetColors(): PresetColors

  // 导出颜色列表
  export const colorList: ColorList
}
