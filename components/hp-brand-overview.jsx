export const SupportedBrandOverviewTable = () => {
    const getStatusBadge = (status) => {
        const statusStyles = {
            Alpha: "mint-bg-orange-100 mint-text-orange-800",
            Beta: "mint-bg-blue-100 mint-text-blue-800",
            Production: "mint-bg-green-100 mint-text-green-800",
            Limited: "mint-bg-yellow-100 mint-text-yellow-800",
            Unsupported: "mint-bg-red-100 mint-text-red-800",
            Supported: "mint-bg-green-100 mint-text-green-800"
        };

        return (
            <span className={`mint-inline-flex mint-items-center mint-px-2.5 mint-py-0.5 mint-rounded-full mint-text-xs mint-font-medium ${statusStyles[status]}`}>
                {status}
            </span>
        );
    };

    const [expandedRows, setExpandedRows] = useState(new Set());

    const toggleRow = (brandName) => {
        const newExpandedRows = new Set(expandedRows);
        if (newExpandedRows.has(brandName)) {
            newExpandedRows.delete(brandName);
        } else {
            newExpandedRows.add(brandName);
        }
        setExpandedRows(newExpandedRows);
    };

    const getDeviceModels = (brandName) => {
        const deviceData = {
      "Alpha Innotec": [
        {
          "model": "HT",
          "status": "Beta",
          "hpType": "-"
        },
        {
          "model": "LD9V",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "MSW2-6S",
          "status": "Beta",
          "hpType": "Water to Water"
        },
        {
          "model": "SP6V",
          "status": "Beta",
          "hpType": "-"
        },
        {
          "model": "SWCV 122K3",
          "status": "Beta",
          "hpType": "Water to Water"
        },
        {
          "model": "SWCV 62K3",
          "status": "Beta",
          "hpType": "Water to Water"
        },
        {
          "model": "SWCV 92K3",
          "status": "Beta",
          "hpType": "Water to Water"
        },
        {
          "model": "WZSV 122K3M",
          "status": "Beta",
          "hpType": "-"
        },
        {
          "model": "WZSV 62K3M",
          "status": "Beta",
          "hpType": "Water to Water"
        },
        {
          "model": "WZSV 92K3M",
          "status": "Beta",
          "hpType": "Water to Water"
        }
      ],
      "Atlantic": [
        {
          "model": "Alfea Extensa A.I. R32",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "Alfea Extensa Duo A.I. R32",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "Alfea Excellia A.I.",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "Alfea Excellia Duo A.I.",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "Alfea Excellia HP A.I.",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "Alfea Excellia HP Duo A.I.",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "Alfea Hybrid Duo Fuel Oil A.I.",
          "status": "Beta",
          "hpType": "Air to Water"
        }
      ],
      "Bosch": [
        {
          "model": "To be determined",
          "status": "Alpha",
          "hpType": "-"
        }
      ],
      "Buderus": [
        {
          "model": "To be determined",
          "status": "Alpha",
          "hpType": "-"
        }
      ],
      "Bulex": [
        {
          "model": "GeniaAir Mono",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "GeniaAir Split",
          "status": "Supported",
          "hpType": "Air to Water"
        }
      ],
      "CTC": [
        {
          "model": "EcoAir 400",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "EcoAir 500M",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "EcoAir 600M",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "CombiAir",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "EcoPart 400",
          "status": "Beta",
          "hpType": "Ground to Water"
        },
        {
          "model": "EcoPart 400 Pro/Basic",
          "status": "Beta",
          "hpType": "Ground to Water"
        },
        {
          "model": "EcoPart 600M",
          "status": "Beta",
          "hpType": "Ground to Water"
        },
        {
          "model": "EcoPart i600M",
          "status": "Beta",
          "hpType": "Ground to Water"
        },
        {
          "model": "GSi 600",
          "status": "Beta",
          "hpType": "Ground to Water"
        },
        {
          "model": "GS 600",
          "status": "Beta",
          "hpType": "Ground to Water"
        },
        {
          "model": "EcoHeat 400",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "EcoVent i360F",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "EcoZenith i255",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "EcoZenith i360",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "EcoZenith i555 Pro",
          "status": "Beta",
          "hpType": "Air to Water"
        }
      ],
      "Daikin": [
        {
          "model": "Altherma",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "dx23",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "dx4",
          "status": "Unsupported",
          "hpType": "Air to Air"
        }
      ],
      "Dewarmte": [
        {
          "model": "Pomp T",
          "status": "Supported",
          "hpType": "Air to Water"
        }
      ],
      "Fujitsu": [
        {
          "model": "ASYG wall-mounted split series",
          "status": "Alpha",
          "hpType": "Air to Air"
        },
        {
          "model": "ARXG multi-split indoor units",
          "status": "Alpha",
          "hpType": "Air to Air"
        },
        {
          "model": "AUYG / AOHG ducted units",
          "status": "Alpha",
          "hpType": "Air to Air"
        },
        {
          "model": "AJYG cassette units",
          "status": "Alpha",
          "hpType": "Air to Air"
        },
        {
          "model": "KGTG / KMTG ceiling units",
          "status": "Alpha",
          "hpType": "Air to Air"
        }
      ],
      "Hitachi": [
        {
          "model": "Yutaki S",
          "status": "Alpha",
          "hpType": "Air to Water"
        },
        {
          "model": "Yutaki S Combi",
          "status": "Alpha",
          "hpType": "Air to Water"
        },
        {
          "model": "Yutaki S Combi 2.0",
          "status": "Alpha",
          "hpType": "Air to Water"
        },
        {
          "model": "Yutaki S80",
          "status": "Alpha",
          "hpType": "Air to Water"
        },
        {
          "model": "Yutaki M",
          "status": "Alpha",
          "hpType": "Air to Water"
        },
        {
            "model": "airHome 400 series",
            "status": "Alpha",
            "hpType": "Air to Air"
        },
        {
            "model": "airHome 600 series",
            "status": "Alpha",
            "hpType": "Air to Air"
        },
        {
            "model": "Shirokuma",
            "status": "Alpha",
            "hpType": "Air to Air"
        },
        {
            "model": "Light Commercial series",
            "status": "Alpha",
            "hpType": "Air to Air"
        },
        {
            "model": "S-Series / Summit",
            "status": "Alpha",
            "hpType": "Air to Air"
        },
        {
            "model": "Airhome multi-split",
            "status": "Alpha",
            "hpType": "Air to Air"
        },
        {
            "model": "Utopia ES indoor units",
            "status": "Alpha",
            "hpType": "Air to Air"
        }
      ],
      "IVT Värmepumpar": [
        {
            "model": "AirX 400",
            "status": "Alpha",
            "hpType": "Air to Water"
        },
        {
            "model": "AirX 400S",
            "status": "Alpha",
            "hpType": "Air to Water"
        },
        {
            "model": "AirX 500",
            "status": "Alpha",
            "hpType": "Air to Water"
        },
        {
            "model": "AirSplit 300",
            "status": "Alpha",
            "hpType": "Air to Water"
        },
        {
            "model": "Greenline HE",
            "status": "Alpha",
            "hpType": "Ground to Water"
        },
        {
            "model": "PremiumLine HQ",
            "status": "Alpha",
            "hpType": "Ground to Water"
        },
        {
            "model": "Geo 600",
            "status": "Alpha",
            "hpType": "Ground to Water"
        },
        {
            "model": "Geo 200",
            "status": "Alpha",
            "hpType": "Ground to Water"
        }
      ],
      "Jäspi": [
        {
          "model": "Basic NORDIC",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "Basic MONO",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "Basic SPLIT",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "Tehowatti Air NORDIC",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "Tehowatti Air Split",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "Inverter NORDIC",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "NORDIC Larger Property",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "KSY series",
          "status": "Beta",
          "hpType": "Ground to Water"
        },
        {
          "model": "KLP series",
          "status": "Beta",
          "hpType": "Ground to Water"
        }
      ],
      "LG": [
        {
          "model": "DEVICE_AIR_CONDITIONER",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "DEVICE_SYSTEM_BOILER",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "DEVICE_WATER_HEATER",
          "status": "Supported",
          "hpType": "Air to Water"
        }
      ],
      "Midea": [
        {
          "model": "M-Thermal Monobloc R32",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "M-Thermal Split R32",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "M-Thermal Arctic R290",
          "status": "Beta",
          "hpType": "Air to Water"
        }
      ],
      "Mitsubishi": [
        {
          "model": "EHPT20Q-VM2EA",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "EHPT20X-MHEDW",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "EHSC-MEC",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "EHSC-VM2D",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "EHSD-VM2D",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "EHSD-VM2E",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "EHST20C-VM2C",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "EHST20D-VM2C",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "EHST20D-VM2D",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERPT20X-VM2D",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERPT30X-VM2EE",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERSC-MED",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERSC-VM2C",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERSC-VM2D",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERSC-YM9D",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERSD-VM2D",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERSD-VM6D",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERSD-YM9D",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERSF-VM2E",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERST20C-VM2D",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERST20C-VM6D",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERST20D-VM2C",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERST20D-VM2D",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERST20D-VM2E",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERST20D-VM6E",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERST20F-VM2E",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERST30C-VM2ED",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERST30D-VM2D",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERST30D-VM2ED",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERST30D-VM2EE",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "ERST30F-VM2EE",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "Ecodan",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "Ehsc-Vm9",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "Esd",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "MAC-5671F-E",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MAC-577IF2-E",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MFZ-KA25VA",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MFZ-KT25VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MFZ-KT50VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MLZ-KP50VA",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AP15VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AP20VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AP25VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AP25VGK",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AP35VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AP42VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AP50VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AP50VGK",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AP60VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AY15VGK",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AY20VGK",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AY25 VGK",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AY25VGK",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AY35VGK",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AY42VGK",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AY50VGK",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-AY50VGKP",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-DM25VA",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-EF18VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-EF22VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-EF22VGK",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-EF25VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-EF35VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-EF35VGB/S/W",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-EF50VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-FT25VGK",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-HR25VFK",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-HR35VFK",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-HR50VFK",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-LN25VG2",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-LN25VG2W",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-LN35VG2",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-LN50VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-LN50VG2",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-LN60VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-RW35VG",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-SF35VE",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "MSZ-SF50VE",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "PAC-IF061B-E",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "PAC-IF071B-E",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "PEAD-M100JA",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "PLA-ZM60EA",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "PUZ-WM85YAA",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "SLZ-KA25VA",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "SLZ-M25FA",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "SLZ-M50FA",
          "status": "Unsupported",
          "hpType": "Air to Air"
        },
        {
          "model": "Shr-80v",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "scr-m80",
          "status": "Unsupported",
          "hpType": "Air to Water"
        }
      ],
      "Nibe": [
        {
          "model": "BA-SVM 10-200/12 E",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "BA-SVM 10-200/6 E",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "BA-SVM 20-200/6 E EM",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "F1145-10 PC",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1145-15 EXP",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1145-8 PC",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1153-4 PC EM 3X400V",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1153-6 PC EM 3X400V",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1155-12 EXP",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1155-16 EXP",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1155-6 PC",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1245-10 R PC",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1245-5 R PC",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1245-6 R PC",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1245-8 R EM, 3x230",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1245-8 R PC",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1253-4 R PC EM",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1253-6 R PC EM",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1255-12 R",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1255-16 R",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1255-6 R",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1255-6 R PC",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1255-6 R PC EM 3x400V",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F1355-28",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "F370 R 3x400V NL",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "F470 R 3x400V",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "F470 R 3x400V NL",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "F730 E EM 3x400V",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "F730 R EM 3x400V NL",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "F750 R EM 3x400V",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "F750 R EM 3x400V NL",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "MHB 05",
          "status": "Supported",
          "hpType": "-"
        },
        {
          "model": "NIBE S1155-12 EM 3X400V",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "NIBE S1155-16 EM 3X400V",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "NIBE S1155-25 EM 3X400V",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "NIBE S1155-6 PC EM 3X400V",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "NIBE S1156-13 EM 3X400V",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "NIBE S1156-18 EM 3X400V",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "NIBE S1156-8 PC EM 3X400V",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "NIBE S1255-12 R EM 3X400V",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "NIBE S1255-16 R EM 3X400V",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "NIBE S1255-6 R EM 3X400V",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "NIBE S1255-6 R PC EM 3X400V",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "NIBE S1256-13 R EM 3X400V",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "NIBE S1256-8 R PC EM 3X400V",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "NIBE VVM S320 CU EM 3x400V",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "NIBE VVM S320 R EM 3x400V NL ",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "S735-7 R EM 3x400V NL",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "SHB 20-12 EM",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "SHK200S",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "SMO 20",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "SMO 40",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "SMO S40",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "SWCV 62K3",
          "status": "Supported",
          "hpType": "-"
        },
        {
          "model": "VVM 225 E EM 3x400V",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "VVM 310, 3x400V",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "VVM 320 R",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "VVM 500",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "WZSV 62K3M",
          "status": "Supported",
          "hpType": "-"
        }
      ],
      "Panasonic": [
        {
          "model": "Aquarea H-series",
          "status": "Alpha",
          "hpType": "Air to Water"
        },
        {
          "model": "Aquarea J-series (T-CAP)",
          "status": "Alpha",
          "hpType": "Air to Water"
        },
        {
          "model": "Aquarea K-series",
          "status": "Alpha",
          "hpType": "Air to Water"
        },
        {
          "model": "Aquarea L-series",
          "status": "Alpha",
          "hpType": "Air to Water"
        },
        {
          "model": "Aquarea M-series",
          "status": "Alpha",
          "hpType": "Air to Water"
        }
      ],
      "Samsung": [
        {
          "model": "DA-AC-EHS-01001",
          "status": "Supported",
          "hpType": "-"
        },
        {
          "model": "DA-SAC-EHS-000001-SUB",
          "status": "Supported",
          "hpType": "-"
        },
        {
          "model": "DA-SAC-EHS-000002-SUB",
          "status": "Supported",
          "hpType": "-"
        }
      ],
      "Saunier Duval": [
        {
          "model": "GeniaAir Mono",
          "status": "Production",
          "hpType": "Air to Water"
        },
        {
          "model": "GeniaAir Split",
          "status": "Production",
          "hpType": "Air to Water"
        },
        {
          "model": "GeniaAir Max",
          "status": "Production",
          "hpType": "Air to Water"
        },
        {
          "model": "GeniaSet Max",
          "status": "Production",
          "hpType": "Air to Water"
        },
        {
          "model": "GeniaAir Hybrid",
          "status": "Production",
          "hpType": "Air to Water"
        }
      ],
      "Thermia": [
        {
          "model": "Atlas 12",
          "status": "Limited",
          "hpType": "Ground to Water"
        },
        {
          "model": "Atlas 18",
          "status": "Limited",
          "hpType": "Ground to Water"
        },
        {
          "model": "Calibra",
          "status": "Limited",
          "hpType": "Ground to Water"
        },
        {
          "model": "Calibra E / Calibra E Duo",
          "status": "Limited",
          "hpType": "Ground to Water"
        },
        {
          "model": "Calibra Cool / Calibra E Cool",
          "status": "Limited",
          "hpType": "Ground to Water"
        },
        {
          "model": "Diplomat Inverter M",
          "status": "Limited",
          "hpType": "Air to Water"
        },
        {
          "model": "Diplomat Inverter L",
          "status": "Limited",
          "hpType": "Air to Water"
        },
        {
          "model": "Diplomat Inverter Mini",
          "status": "Limited",
          "hpType": "Air to Water"
        },
        {
          "model": "Diplomat Inverter Duo",
          "status": "Limited",
          "hpType": "Air to Water"
        },
        {
          "model": "Mega",
          "status": "Limited",
          "hpType": "Ground to Water"
        },
        {
          "model": "Athena",
          "status": "Limited",
          "hpType": "Ground to Water"
        },
        {
          "model": "iTec E",
          "status": "Limited",
          "hpType": "Ground to Water"
        },
        {
          "model": "iTec Eco",
          "status": "Limited",
          "hpType": "Ground to Water"
        },
        {
          "model": "iTec XTR",
          "status": "Limited",
          "hpType": "Ground to Water"
        },
        {
          "model": "Atria Optimum",
          "status": "Limited",
          "hpType": "Ground to Water"
        }
      ],
      "Thermor": [
        {
          "model": "Aérolia",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "Aérolia 2",
          "status": "Beta",
          "hpType": "Air to Water"
        },
        {
          "model": "Auréa",
          "status": "Beta",
          "hpType": "Air to Water"
        }
      ],
      "Toshiba": [
        {
          "model": "E3_Vitocal",
          "status": "Supported",
          "hpType": "Air to Water"
        }
      ],
      "Vaillant": [
        {
          "model": "Hydraulic station",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "aroTHERM",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "aroTHERM Split plus",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "aroTHERM plus",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "aroTHERM pure",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "flexoCOMPACT exclusiv",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "flexoCOMPACT exclusive",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "flexoTHERM (NoOrd)",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "flexoTHERM exclusiv",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "flexoTHERM exclusive",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "geoTHERM",
          "status": "Supported",
          "hpType": "Water to Water"
        },
        {
          "model": "uniTOWER pro (1 HC)",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "uniTOWER pure",
          "status": "Supported",
          "hpType": "Air to Water"
        }
      ],
      "Viessmann": [
        {
          "model": "CU401B_G",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "CU401B_S",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "E3_Vitocal",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "E3_Vitocal_16",
          "status": "Supported",
          "hpType": "Air to Water"
        },
        {
          "model": "E3_Vitodens_100_BHC_0122_1",
          "status": "Unsupported",
          "hpType": "Water to Water"
        },
        {
          "model": "V200WO1A",
          "status": "Supported",
          "hpType": "-"
        }
      ]
    };
        return deviceData[brandName] || [];
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Status</th>
                    <th>HP Types</th>
                </tr>
            </thead>
            <tbody>
                <tr onClick={() => toggleRow("Alpha Innotec")} style={{ cursor: 'pointer' }}>
                    <td>Alpha Innotec</td>
                    <td>{getStatusBadge("Beta")}</td>
                    <td>Air to Water, Water to Water</td>
                </tr>
                {expandedRows.has("Alpha Innotec") &&
                    getDeviceModels("Alpha Innotec").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Atlantic")} style={{ cursor: 'pointer' }}>
                    <td>Atlantic</td>
                    <td>{getStatusBadge("Beta")}</td>
                    <td>Air to Water</td>
                </tr>
                {expandedRows.has("Atlantic") &&
                    getDeviceModels("Atlantic").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Bosch")} style={{ cursor: 'pointer' }}>
                    <td>Bosch</td>
                    <td>{getStatusBadge("Alpha")}</td>
                    <td>To be determined</td>
                </tr>
                {expandedRows.has("Bosch") &&
                    getDeviceModels("Bosch").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Buderus")} style={{ cursor: 'pointer' }}>
                    <td>Buderus</td>
                    <td>{getStatusBadge("Alpha")}</td>
                    <td>To be determined</td>
                </tr>
                {expandedRows.has("Buderus") &&
                    getDeviceModels("Buderus").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Bulex")} style={{ cursor: 'pointer' }}>
                    <td>Bulex</td>
                    <td>{getStatusBadge("Production")}</td>
                    <td>Air to Water</td>
                </tr>
                {expandedRows.has("Bulex") &&
                    getDeviceModels("Bulex").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("CTC")} style={{ cursor: 'pointer' }}>
                    <td>CTC</td>
                    <td>{getStatusBadge("Beta")}</td>
                    <td>Air to Water, Ground to Water</td>
                </tr>
                {expandedRows.has("CTC") &&
                    getDeviceModels("CTC").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Daikin")} style={{ cursor: 'pointer' }}>
                    <td>Daikin</td>
                    <td>{getStatusBadge("Production")}</td>
                    <td>Air to Air, Air to Water</td>
                </tr>
                {expandedRows.has("Daikin") &&
                    getDeviceModels("Daikin").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Dewarmte")} style={{ cursor: 'pointer' }}>
                    <td>Dewarmte</td>
                    <td>{getStatusBadge("Production")}</td>
                    <td>Air to Water</td>
                </tr>
                {expandedRows.has("Dewarmte") &&
                    getDeviceModels("Dewarmte").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Fujitsu")} style={{ cursor: 'pointer' }}>
                    <td>Fujitsu</td>
                    <td>{getStatusBadge("Alpha")}</td>
                    <td>Air to Air</td>
                </tr>
                {expandedRows.has("Fujitsu") &&
                    getDeviceModels("Fujitsu").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Hitachi")} style={{ cursor: 'pointer' }}>
                    <td>Hitachi</td>
                    <td>{getStatusBadge("Alpha")}</td>
                    <td>Air to Water, Air to Air</td>
                </tr>
                {expandedRows.has("Hitachi") &&
                    getDeviceModels("Hitachi").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("IVT Värmepumpar")} style={{ cursor: 'pointer' }}>
                    <td>IVT Värmepumpar</td>
                    <td>{getStatusBadge("Alpha")}</td>
                    <td>Air to Water, Ground to Water</td>
                </tr>
                {expandedRows.has("IVT Värmepumpar") &&
                    getDeviceModels("IVT Värmepumpar").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Jäspi")} style={{ cursor: 'pointer' }}>
                    <td>Jäspi</td>
                    <td>{getStatusBadge("Beta")}</td>
                    <td>Air to Water, Ground to Water</td>
                </tr>
                {expandedRows.has("Jäspi") &&
                    getDeviceModels("Jäspi").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("LG")} style={{ cursor: 'pointer' }}>
                    <td>LG</td>
                    <td>{getStatusBadge("Production")}</td>
                    <td>Air to Air, Air to Water</td>
                </tr>
                {expandedRows.has("LG") &&
                    getDeviceModels("LG").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Midea")} style={{ cursor: 'pointer' }}>
                    <td>Midea</td>
                    <td>{getStatusBadge("Beta")}</td>
                    <td>Air to Water, Air to Air</td>
                </tr>
                {expandedRows.has("Midea") &&
                    getDeviceModels("Midea").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Mitsubishi")} style={{ cursor: 'pointer' }}>
                    <td>Mitsubishi</td>
                    <td>{getStatusBadge("Production")}</td>
                    <td>Air to Air, Air to Water</td>
                </tr>
                {expandedRows.has("Mitsubishi") &&
                    getDeviceModels("Mitsubishi").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Nibe")} style={{ cursor: 'pointer' }}>
                    <td>Nibe</td>
                    <td>{getStatusBadge("Production")}</td>
                    <td>Air to Water, Water to Water</td>
                </tr>
                {expandedRows.has("Nibe") &&
                    getDeviceModels("Nibe").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Panasonic")} style={{ cursor: 'pointer' }}>
                    <td>Panasonic</td>
                    <td>{getStatusBadge("Alpha")}</td>
                    <td>Air to Water</td>
                </tr>
                {expandedRows.has("Panasonic") &&
                    getDeviceModels("Panasonic").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Samsung")} style={{ cursor: 'pointer' }}>
                    <td>Samsung</td>
                    <td>{getStatusBadge("Limited")}</td>
                    <td>To be determined</td>
                </tr>
                {expandedRows.has("Samsung") &&
                    getDeviceModels("Samsung").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Saunier Duval")} style={{ cursor: 'pointer' }}>
                    <td>Saunier Duval</td>
                    <td>{getStatusBadge("Production")}</td>
                    <td>Air to Water</td>
                </tr>
                {expandedRows.has("Saunier Duval") &&
                    getDeviceModels("Saunier Duval").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Thermia")} style={{ cursor: 'pointer' }}>
                    <td>Thermia</td>
                    <td>{getStatusBadge("Limited")}</td>
                    <td>Ground to Water, Air to Water</td>
                </tr>
                {expandedRows.has("Thermia") &&
                    getDeviceModels("Thermia").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Thermor")} style={{ cursor: 'pointer' }}>
                    <td>Thermor</td>
                    <td>{getStatusBadge("Beta")}</td>
                    <td>Air to Water</td>
                </tr>
                {expandedRows.has("Thermor") &&
                    getDeviceModels("Thermor").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Toshiba")} style={{ cursor: 'pointer' }}>
                    <td>Toshiba</td>
                    <td>{getStatusBadge("Production")}</td>
                    <td>Air to Water</td>
                </tr>
                {expandedRows.has("Toshiba") &&
                    getDeviceModels("Toshiba").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Vaillant")} style={{ cursor: 'pointer' }}>
                    <td>Vaillant</td>
                    <td>{getStatusBadge("Production")}</td>
                    <td>Air to Water, Water to Water</td>
                </tr>
                {expandedRows.has("Vaillant") &&
                    getDeviceModels("Vaillant").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Viessmann")} style={{ cursor: 'pointer' }}>
                    <td>Viessmann</td>
                    <td>{getStatusBadge("Production")}</td>
                    <td>Air to Water, Water to Water</td>
                </tr>
                {expandedRows.has("Viessmann") &&
                    getDeviceModels("Viessmann").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};
