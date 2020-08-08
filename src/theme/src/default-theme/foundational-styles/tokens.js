const colorTokens = {
  // Grays / neutrals
  gray900: '#101840',
  gray800: '#474d66',
  gray700: '#696f8c',
  gray600: '#8f95b2',
  gray500: '#c1c4d6',
  gray400: '#d8dae5',
  gray300: '#E6E8F0',
  gray200: '#edeff5',
  gray100: '#F4F5F9',
  gray90: '#F4F6FA',
  gray75: '#F9FAFC',
  gray50: '#FAFBFF',

  // Blues
  blue900: '#0A1433',
  blue800: '#142966',
  blue700: '#1F3D99',
  blue600: '#2952CC',
  blue500: '#3366FF',
  blue400: '#5C85FF',
  blue300: '#85A3FF',
  blue200: '#ADC2FF',
  blue100: '#D6E0FF',
  blue50: '#EBF0FF',

  // Reds
  red700: '#7D2828',
  red600: '#A73636',
  red500: '#D14343',
  red100: '#F9DADA'
}

const colors = {
  ...colorTokens,
  muted: colorTokens.gray500
}

const fontFamilies = {
  /**
   * @property {string} display - Used for headings larger than 20px.
   */
  display: `"SF UI Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,

  /**
   * @property {string} ui - Used for text and UI (which includes almost anything).
   */
  ui: `"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,

  /**
   * @property {string} mono - Used for code and sometimes numbers in tables.
   */
  mono: `"SF Mono", "Monaco", "Inconsolata", "Fira Mono", "Droid Sans Mono", "Source Code Pro", monospace`
}

const text = {
  /**
   * It's useful to have 600 because `Link` uses the `Text` component.
   * A `Link` could be used as 600 in the context of a breadcrumb.
   */
  '600': {
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '24px',
    letterSpacing: '-0.07px',
    marginTop: 28,
    /**
     * Use font family display because the font-size is 20px.
     */
    fontFamily: fontFamilies.display
  },
  '500': {
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '20px',
    fontFamily: fontFamilies.ui,
    letterSpacing: '-0.05px',
    marginTop: 16
  },
  '400': {
    // Default
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    fontFamily: fontFamilies.ui,
    letterSpacing: '-0.05px',
    marginTop: 12
  },
  '300': {
    fontSize: '12px',
    fontWeight: 400,
    fontFamily: fontFamilies.ui,
    lineHeight: '16px',
    letterSpacing: '0',
    marginTop: 12
  }
}

const headings = {
  /**
   * Heading styles.
   * @property {Object} headings.900
   * @property {Object} headings.800
   * @property {Object} headings.700
   * @property {Object} headings.600
   * @property {Object} headings.500 - Default.
   * @property {Object} headings.400
   * @property {Object} headings.300
   * @property {Object} headings.200
   * @property {Object} headings.100
   */

  '900': {
    fontSize: '35px',
    fontWeight: 500,
    lineHeight: '40px',
    letterSpacing: '-0.2px',
    marginTop: 52,
    fontFamily: fontFamilies.display,
    color: colors.gray800
  },
  '800': {
    fontSize: '29px',
    fontWeight: 500,
    lineHeight: '32px',
    letterSpacing: '-0.2px',
    marginTop: 40,
    fontFamily: fontFamilies.display,
    color: colors.gray800
  },
  '700': {
    fontSize: '24px',
    fontWeight: 500,
    lineHeight: '28px',
    letterSpacing: '-0.07px',
    marginTop: 40,
    fontFamily: fontFamilies.display,
    color: colors.gray800
  },
  '600': {
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '24px',
    letterSpacing: '-0.07px',
    marginTop: 28,
    fontFamily: fontFamilies.display,
    color: colors.gray800
  },
  '500': {
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 24,
    fontFamily: fontFamilies.ui,
    color: colors.gray800
  },
  '400': {
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '20px',
    letterSpacing: '-0.05px',
    marginTop: 16,
    fontFamily: fontFamilies.ui,
    color: colors.gray800
  },
  '300': {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '16px',
    letterSpacing: '0',
    marginTop: 16,
    fontFamily: fontFamilies.ui,
    color: colors.gray800
  },
  '200': {
    fontSize: '12px',
    fontWeight: 600,
    lineHeight: '16px',
    letterSpacing: '0',
    marginTop: 16,
    fontFamily: fontFamilies.ui,
    color: colors.muted
  },
  '100': {
    fontSize: '11px',
    fontWeight: 400,
    textTransform: 'uppercase',
    lineHeight: '16px',
    letterSpacing: '0.6px',
    marginTop: 16,
    fontFamily: fontFamilies.ui,
    color: colors.muted
  }
}

export default {
  ...colors,
  fontFamilies,
  text,
  headings,
  primary: {
    base: colors.blue500,
    hover: colors.blue600,
    active: colors.blue700
  }
}