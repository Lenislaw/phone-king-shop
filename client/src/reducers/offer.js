import { SET_OFFER, GET_DETAILS, SET_LOADING } from "../actions/types";
const initialState = {
  products: [
    {
      id: "0",
      name: "Smartfon Apple iPhone 11 64 GB Dual SIM Czarny (MWLT2PM/A)",
      shortName: "Apple iPhone 11",
      price: 3500,
      producent: "Apple",
      producentCode: "MWLXALPA/21",
      ean: 190199192919291,
      operatingSystem: "IOS 13",
      processor: "Apple A13 Bionic",
      ramMemory: 4,
      builtinMemory: 128,
      supForMemoryCards: "no",
      maxCapOfCart: "no card",
      standardSim: "nanoSim",
      dualSim: "yes",
      modem: "4G LTE",
      wifi: "yes",
      bluetooth: "yes",
      nfc: "yes",
      usb: "lightning",
      audioConnectors: "none",
      screen: '6.2"',
      camera: "12 + 12 MPix",
      gps: "yes",
      fingerprintScanner: "no",
      proximitySensor: "no",
      waterproof: "yes",
      battery: 3110,
      height: 150.9,
      width: 75.7,
      depth: 8.3,
      weight: 198,
      photo: ["phone1.jpg"],
      inStock: 4,
    },
    {
      id: "1",
      name:
        "Smartfon Samsung Galaxy S20 128 GB Dual SIM Niebieski (SM-G980FLBD)",
      shortName: "Samsung Galaxy S20",
      price: 1000,
      producent: "Samsung",
      producentCode: "SM-G980FLBD",
      ean: 8806090322372,
      operatingSystem: "Android 10",
      processor: "Exynos 990",
      ramMemory: 8,
      builtinMemory: 128,
      supForMemoryCards: "yes",
      maxCapOfCart: "1 TB",
      standardSim: "nanoSim",
      dualSim: "yes",
      modem: "4G LTE",
      wifi: "yes",
      bluetooth: "yes",
      nfc: "yes",
      usb: "USB typ C",
      audioConnectors: "none",
      screen: '6.2"',
      camera: "64 + 12 + 12 MPix",
      gps: "yes",
      fingerprintScanner: "yes",
      proximitySensor: "yes",
      waterproof: "yes",
      battery: 3110,
      height: 151.7,
      width: 69.1,
      depth: 7.9,
      weight: 163,
      photo: ["phone2.jpg"],
      inStock: 6,
    },
    {
      id: "2",
      name: "Smartfon Samsung Galaxy A20e 32 GB Dual SIM Czarny (SM-A202FZK)",
      shortName: "Samsung Galaxy A20e",
      price: 200,
      producent: "Samsung",
      producentCode: "SM-A202FZK",
      ean: 8801643849894,
      operatingSystem: "Android 9",
      processor: "Exynos 7884",
      ramMemory: 3,
      builtinMemory: 32,
      supForMemoryCards: "yes",
      maxCapOfCart: "512 GB",
      standardSim: "nanoSim",
      dualSim: "yes",
      modem: "4G LTE",
      wifi: "yes",
      bluetooth: "yes",
      nfc: "yes",
      usb: "USB typ C",
      audioConnectors: "miniJack 3.5mm",
      screen: '5.8"',
      camera: "13 + 5 MPix",
      gps: "yes",
      fingerprintScanner: "yes",
      proximitySensor: "yes",
      waterproof: "yes",
      battery: 3000,
      height: 147.7,
      width: 69.7,
      depth: 8.4,
      weight: 141,
      photo: ["phone3.jpg"],
      inStock: 2,
    },
    {
      id: "3",
      name: "Smartfon Huawei P40 Lite 128 GB Dual SIM Czarny (51095CJV)",
      shortName: "Huawei P40",
      price: 350,
      producent: "Huawei",
      producentCode: "51095CJV",
      ean: 6901443375769,
      operatingSystem: "Android 10",
      processor: "HiSilicon Kirin 810",
      ramMemory: 6,
      builtinMemory: 128,
      supForMemoryCards: "yes",
      maxCapOfCart: "256 GB",
      standardSim: "nanoSim",
      dualSim: "yes",
      modem: "4G LTE",
      wifi: "yes",
      bluetooth: "yes",
      nfc: "no",
      usb: "USB typ C",
      audioConnectors: "miniJack 3.5mm",
      screen: '6.4"',
      camera: "48 + 8 + 2 + 2 MPix",
      gps: "yes",
      fingerprintScanner: "yes",
      proximitySensor: "yes",
      waterproof: "no",
      battery: 4200,
      height: 159.2,
      width: 76.3,
      depth: 8.7,
      weight: 183,
      photo: ["phone4.jpg"],
      inStock: 0,
    },
    {
      id: "4",
      name: "Smartfon Apple iPhone 7 32 GB Czarny (MN8X2PM/A)",
      shortName: "Apple IPhone 7",
      price: 500,
      producent: "Apple",
      producentCode: "MN8X2PM/A",
      ean: 123213213824,
      operatingSystem: "IOS 10",
      processor: "Apple A10",
      ramMemory: 2,
      builtinMemory: 32,
      supForMemoryCards: "no",
      maxCapOfCart: "none",
      standardSim: "nanoSim",
      dualSim: "no",
      modem: "4G LTE",
      wifi: "yes",
      bluetooth: "yes",
      nfc: "yes",
      usb: "Lightning",
      audioConnectors: "miniJack 3.5mm",
      screen: '4.7"',
      camera: "12 MPix",
      gps: "yes",
      fingerprintScanner: "yes",
      proximitySensor: "yes",
      waterproof: "no",
      battery: 0,
      height: 138.3,
      width: 67.1,
      depth: 7.1,
      weight: 138,
      photo: ["phone5.jpg"],
      inStock: 1,
    },
    {
      id: "5",
      name: "Smartfon Huawei P40 Lite 128 GB Dual SIM Zielony (51095CJX)",
      shortName:"Huawei P40",
      price: 450,
      producent: "Huawei",
      producentCode: "51095CJX",
      ean: 6901443375769,
      operatingSystem: "Android 10",
      processor: "HiSilicon Kirin 810",
      ramMemory: 6,
      builtinMemory: 128,
      supForMemoryCards: "yes",
      maxCapOfCart: "256 GB",
      standardSim: "nanoSim",
      dualSim: "yes",
      modem: "4G LTE",
      wifi: "yes",
      bluetooth: "yes",
      nfc: "no",
      usb: "USB typ C",
      audioConnectors: "miniJack 3.5mm",
      screen: '6.4"',
      camera: "48 + 8 + 2 + 2 MPix",
      gps: "yes",
      fingerprintScanner: "yes",
      proximitySensor: "yes",
      waterproof: "no",
      battery: 4200,
      height: 159.2,
      width: 76.3,
      depth: 8.7,
      weight: 183,
      photo: ["phone6.jpg"],
      inStock: 41,
    },
  ],
  productDetails: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_OFFER:
      return {
        ...state,
        loading: false,
      };
    case GET_DETAILS:
      return {
        ...state,
        productDetails: state.products.find((product) => {
          return product.id === payload ? product : null;
        }),
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
