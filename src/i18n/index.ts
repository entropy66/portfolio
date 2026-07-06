import zhCN from './zh-CN'
import zhTW from './zh-TW'
import en from './en'

export type Locale = 'zh-CN' | 'zh-TW' | 'en'
export type Translations = typeof zhCN

export const locales: { code: Locale; label: string }[] = [
  { code: 'zh-CN', label: '简体' },
  { code: 'zh-TW', label: '繁體' },
  { code: 'en', label: 'EN' },
]

export const translations: Record<Locale, Translations> = {
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  'en': en,
}
