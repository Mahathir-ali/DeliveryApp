import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const BASE = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: colors.black,
};

const BASE_BOLD = {
  fontFamily: typography.Bold,
  fontSize: 16,
  color: colors.black,
};
const BOLD = {
  fontFamily: typography.Bold,
  color: colors.black,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 32,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 14,
  },
  small: {
    ...BASE,
    fontSize: 12,
  },
};
