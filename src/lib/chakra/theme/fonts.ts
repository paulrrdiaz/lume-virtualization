import { Raleway, Roboto } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["700"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fonts = {
  raleway,
  roboto,
};

export default fonts;
