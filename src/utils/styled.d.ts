import "styled-components";
import { Screens } from "./screens";
import { Colors } from "./colors";
import { Spacing } from "./spacing";
import { Opacity } from "./opacity";
import { FontWeight } from "./font-weight";

declare module "styled-components" {
  export interface DefaultTheme {
    screens: Screens;
    colors: Colors;
    spacing: Spacing;
    opacity: Opacity;
    fontWeight: FontWeight;
  }
}
