import tinycolor from 'tinycolor2'
import { createSystem, defaultConfig, SystemConfig } from "@chakra-ui/react"

function _generateColorShades(baseColor: string) {
  return {
    50: {value: tinycolor(baseColor).lighten(45).toHexString(),},
    100: {value: tinycolor(baseColor).lighten(35).toHexString(),},
    200: {value: tinycolor(baseColor).lighten(25).toHexString(),},
    300: {value: tinycolor(baseColor).lighten(15).toHexString(),},
    400: {value: tinycolor(baseColor).lighten(5).toHexString(),},
    500: {value: tinycolor(baseColor).toHexString(),},
    600: {value: tinycolor(baseColor).darken(5).toHexString(),},
    700: {value: tinycolor(baseColor).darken(15).toHexString(),},
    800: {value: tinycolor(baseColor).darken(25).toHexString(),},
    900: {value: tinycolor(baseColor).darken(35).toHexString(),},
  };
}

const config: SystemConfig = {
  theme: {
    tokens: {
      colors: {
        primary: _generateColorShades('#555347'),
        secondary: _generateColorShades('#dec208'),
      },
      fonts: {
        heading: { value: "var(--font-barlow-semi-condensed)" },
        body: { value: "var(--font-barlow-semi-condensed)" },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          solid: { value: "{colors.primary.500}" },
          contrast: { value: "#fff" },
          fg: { value: "{colors.primary.700}" },
          muted: { value: "{colors.primary.100}" },
          subtle: { value: "{colors.primary.200}" },
          emphasized: { value: "{colors.primary.300}" },
          focusRing: { value: "{colors.primary.500}" },
        },
        secondary: {
          solid: { value: "{colors.secondary.500}" },
          contrast: { value: "{colors.primary.600}" },
          fg: { value: "{colors.secondary.700}" },
          muted: { value: "{colors.secondary.100}" },
          subtle: { value: "{colors.secondary.200}" },
          emphasized: { value: "{colors.secondary.300}" },
          focusRing: { value: "{colors.secondary.500}" },
        },
      }
    }
  },
}

export const system = createSystem(defaultConfig, config)
