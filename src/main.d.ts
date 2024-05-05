interface GbPalette {
  shortName: string,
  name: string,
  palette: string[],
  origin: string,
}

declare const gbPalettes: GbPalette[]

export { GbPalette, gbPalettes as default };
