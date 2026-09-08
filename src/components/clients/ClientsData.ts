import aliZaher from "../../assets/Customer logos/ALI Zaher Jewellery.jpg";
import asmar from "../../assets/Customer logos/Asmar Jewellery.jpeg";
import eden from "../../assets/Customer logos/EDEN Jewellery.jpg";
import jats from "../../assets/Customer logos/JATS.png";
import oya from "../../assets/Customer logos/Oya Jewellery.jpg";
import waddah from "../../assets/Customer logos/Waddah Hreiz Jewellery.jpg";

export const clients = [
  { name: "Ali Zaher Jewelry", logo: aliZaher, country: "JORDAN" },
  { name: "Asmar Jewellery", logo: asmar, country: "UAE" },
  { name: "EDEN Jewelry", logo: eden, country: "JORDAN" },
  { name: "JATS", logo: jats, country: "JORDAN" },
  { name: "OYA Jewellery", logo: oya, country: "JORDAN" },
  { name: "Waddah Hreiz Jewelry", logo: waddah, country: "JORDAN" },
];


interface CountryClient {
  id: string;
  name: string;
  flagCode: string; // ISO 2-letter code for Flagcdn
  top: string;
  left: string;
  isHq?: boolean;
}

export const clientCountries: CountryClient[] = [
  {
    id: "jordan",
    name: "Jordan",
    flagCode: "jo",
    top: "40.5%",
    left: "57.5%",
    isHq: true,
  },
  {
    id: "palestine",
    name: "Palestine",
    flagCode: "ps",
    top: "40.2%",
    left: "57%",
  },
  {
    id: "iraq",
    name: "Iraq",
    flagCode: "iq",
    top: "39.5%",
    left: "59.4%",
  },
  {
    id: "uae",
    name: "UAE",
    flagCode: "ae",
    top: "43.6%",
    left: "62.4%",
  },
  {
    id: "morocco",
    name: "Morocco",
    flagCode: "ma",
    top: "40.5%",
    left: "46.2%",
  },
  {
    id: "usa",
    name: "USA",
    flagCode: "us",
    top: "35.5%",
    left: "22.5%",
  },
];