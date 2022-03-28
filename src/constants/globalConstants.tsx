export enum Colours {
  white = "#fff",
  greyBlue = "var(--grey-blue)",
  deepBlue = "var(--deep-blue)",
  primary = "var(--primary)",
  primaryDark = "var(--dark-primary)",
  primaryBlue = "var(--primary-blue)",
  primaryGreen = "var(--primary-green)",
  offWhite = "var(--off-white)",
  lightGrey = "var(--light-grey)",
}

export const iPad: any = !!window.navigator.userAgent.match(/iPad/i);
export const iPhone: any = !!window.navigator.userAgent.match(/iPhone/i);
export const iOS: any = iPad || iPhone;
