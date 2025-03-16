import { createTheme, rem } from '@mantine/core';

export default createTheme({
  fontFamily: 'Barlow Semi Condensed, sans-serif',
  fontSizes: {
    xs: rem(11),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(20),
  },
  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65',
  },
  headings: {
    fontWeight: '600',
  },
  fontSmoothing: true,
  colors: {
    primary: [
      "#f6f5f4",
      "#e9e9e9",
      "#d0d0d0",
      "#b7b6b4",
      "#a1a09b",
      "#94938b",
      "#8e8c82",
      "#7a796e",
      "#6d6b60",
      "#5e5c4f"
    ],
    secondary: [
      "#fffce3",
      "#fef8ce",
      "#fcef9f",
      "#fae76b",
      "#f8df41",
      "#f7db27",
      "#f6d917",
      "#dbbf08",
      "#c3aa00",
      "#a89200"
    ],
    success: [
      "#eafbea",
      "#dbf2db",
      "#b8e1b8",
      "#92d093",
      "#73c273",
      "#5eb95e",
      "#52b553",
      "#429e43",
      "#388d39",
      "#297a2d"
    ],
    error: [
      "#fff6e7",
      "#fbead3",
      "#f6d4a6",
      "#f2bc74",
      "#eea84b",
      "#ec9b31",
      "#eb9423",
      "#d18017",
      "#ba710f",
      "#a26102"
    ]
  }
});
