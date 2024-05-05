interface GbPalette {
  shortName: string,
  name: string,
  palette: string[],
  origin: string,
}

type GbPalettes = GbPalette[];

export { GbPalette, GbPalettes, GbPalettes as default };
