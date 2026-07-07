export const SupportedPVBrandOverviewTable = () => {
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
      "Huawei": [
        {
          "model": "SUN2000-10KTL",
          "status": "Supported"
        },
        {
          "model": "SUN2000-10KTL-BEM1",
          "status": "Supported"
        },
        {
          "model": "SUN2000-12-100KTL-M2",
          "status": "Supported"
        },
        {
          "model": "SUN2000-17-20K-MB0",
          "status": "Supported"
        },
        {
          "model": "SUN2000-2-5KTL-L1",
          "status": "Supported"
        },
        {
          "model": "SUN2000-3-10KTL-M1",
          "status": "Supported"
        },
        {
          "model": "SUN2000-3-4.6K-LB0",
          "status": "Supported"
        },
        {
          "model": "SUN2000-3KTL-L0",
          "status": "Supported"
        },
        {
          "model": "SUN2000-5-10KTL-M0",
          "status": "Supported"
        },
        {
          "model": "SUN2000-5-8K-MAP0",
          "status": "Supported"
        },
        {
          "model": "SUN2000-8K-LC0",
          "status": "Supported"
        },
        {
          "model": "SUN2000L-3-5KTL",
          "status": "Supported"
        }
      ],
      "Sungrow": [
        {
          "model": "SG2.0-3.0RS-S",
          "status": "Supported"
        },
        {
          "model": "SG3.6-5.0RS",
          "status": "Supported"
        },
        {
          "model": "SG5.0-8.0RT",
          "status": "Supported"
        },
        {
          "model": "SH10RT-20",
          "status": "Supported"
        },
        {
          "model": "SH10T",
          "status": "Supported"
        },
        {
          "model": "SH3.6-5.0RS",
          "status": "Supported"
        },
        {
          "model": "SH5-10RT-V112",
          "status": "Supported"
        }
      ],
      "SMA Solar Technology": [
        {
          "model": "SB 1600TL-10",
          "status": "Unsupported"
        },
        {
          "model": "SB 2100TL",
          "status": "Unsupported"
        },
        {
          "model": "SB 2500-3000TLST-21",
          "status": "Unsupported"
        },
        {
          "model": "SB 3000-5000TL-21",
          "status": "Supported"
        },
        {
          "model": "SB1.5-2.5-1VL-40",
          "status": "Supported"
        },
        {
          "model": "SB3.0-5.0-1AV-40",
          "status": "Supported"
        },
        {
          "model": "SB3.0-5.0-1AV-41",
          "status": "Supported"
        },
        {
          "model": "SBSE3.6-5.0-50",
          "status": "Supported"
        },
        {
          "model": "STP 12-15-50",
          "status": "Supported"
        },
        {
          "model": "STP 15000-25000TL-30",
          "status": "Supported"
        },
        {
          "model": "STP 5000-10000TL-20",
          "status": "Supported"
        },
        {
          "model": "STP3.0-10.0-3AV-40",
          "status": "Supported"
        },
        {
          "model": "STP5.0-10.0-3SE-40",
          "status": "Supported"
        }
      ],
      "Solis": [
        {
          "model": "RHI-3-5K-48ES-5G",
          "status": "Supported"
        },
        {
          "model": "RHI-3P4-10K-HVES-5G",
          "status": "Supported"
        },
        {
          "model": "S5-EH1P3-5K-L",
          "status": "Supported"
        },
        {
          "model": "S5-GR1P1-3.6K-M",
          "status": "Supported"
        },
        {
          "model": "S5-GR1P3-4.6K",
          "status": "Supported"
        },
        {
          "model": "S5-GR3P4-20K",
          "status": "Supported"
        },
        {
          "model": "S6-EA3P10KAA-NV-ND-H",
          "status": "Supported"
        },
        {
          "model": "S6-EH1P3.6-6K-L-PLUS",
          "status": "Supported"
        },
        {
          "model": "S6-EH3P5-40K-H",
          "status": "Supported"
        },
        {
          "model": "S6-EH3P8-15K02-NV-YD-L",
          "status": "Supported"
        },
        {
          "model": "S6-GR1P1-3.6K-M",
          "status": "Supported"
        },
        {
          "model": "S6-GR1P2.5-5K",
          "status": "Supported"
        },
        {
          "model": "Solis-1P3-5K-4G",
          "status": "Supported"
        },
        {
          "model": "Solis-1P3.6-4K-2G",
          "status": "Supported"
        },
        {
          "model": "Solis-3P4-12K-4G",
          "status": "Supported"
        },
        {
          "model": "Solis-60K-LV-5G",
          "status": "Supported"
        },
        {
          "model": "Solis-6K",
          "status": "Supported"
        },
        {
          "model": "Solis-mini-2000",
          "status": "Supported"
        },
        {
          "model": "Solis-mini-700-3600-4G",
          "status": "Supported"
        }
      ],
      "SolarEdge": [
        {
          "model": "SE2200-5000H-RW000BNN4",
          "status": "Supported"
        },
        {
          "model": "SE3500",
          "status": "Supported"
        },
        {
          "model": "SE4000H-RWBMNBF54",
          "status": "Supported"
        },
        {
          "model": "SE5000H-RW000BEN4",
          "status": "Supported"
        },
        {
          "model": "SE5K-RWS48BEN4",
          "status": "Supported"
        },
        {
          "model": "SE6-10K-RW0TEBNN4",
          "status": "Supported"
        },
        {
          "model": "SE6K-BE0TEBEN4",
          "status": "Supported"
        },
        {
          "model": "SE8K-RWB48BFN4",
          "status": "Supported"
        },
        {
          "model": "SE8K-RWS48BNN4",
          "status": "Supported"
        }
      ],
      "Growatt": [
        {
          "model": "GROWATT SPH4600",
          "status": "Unsupported"
        },
        {
          "model": "MIC 1000-1500TL-X2",
          "status": "Unsupported"
        },
        {
          "model": "MIC 800-3300TL-X",
          "status": "Unsupported"
        },
        {
          "model": "MID 15-20KTL3-XH",
          "status": "Supported"
        },
        {
          "model": "MIN 2500-6000TL-XE",
          "status": "Unsupported"
        },
        {
          "model": "MIN 2500-6000TL-XH",
          "status": "Supported"
        },
        {
          "model": "MIN 3000-5000TL-X",
          "status": "Unsupported"
        },
        {
          "model": "MIN 3000-5000TL-XH2",
          "status": "Supported"
        },
        {
          "model": "MIN 4600TL-x",
          "status": "Unsupported"
        },
        {
          "model": "MOD 10KTL3-XH",
          "status": "Supported"
        },
        {
          "model": "MOD 10KTL3-XH (BP)",
          "status": "Supported"
        },
        {
          "model": "MOD 3000-8000TL3-XH (BP)",
          "status": "Supported"
        },
        {
          "model": "MOD 3000-9000TL3-XH",
          "status": "Supported"
        },
        {
          "model": "NEO 800M-X",
          "status": "Unsupported"
        },
        {
          "model": "SPH 5000-10000TL3 BH-UP",
          "status": "Supported"
        },
        {
          "model": "SPH 5000TL3 BH",
          "status": "Supported"
        }
      ],
      "GoodWe": [
        {
          "model": "GW10K-ET",
          "status": "Supported"
        },
        {
          "model": "GW3000D-NS",
          "status": "Supported"
        },
        {
          "model": "GW8KN-ET",
          "status": "Supported"
        }
      ],
      "Fronius": [
        {
          "model": "Primo 3.0-5.0-1",
          "status": "Supported"
        },
        {
          "model": "Primo GEN24 4.0-5.0 Plus",
          "status": "Supported"
        },
        {
          "model": "Symo 5.0-12.5-3-M",
          "status": "Supported"
        },
        {
          "model": "Symo GEN24 10.0-12.0 SC Plus",
          "status": "Supported"
        },
        {
          "model": "Symo GEN24 6.0-10.0 Plus",
          "status": "Supported"
        }
      ],
      "Enphase": [],
    };
        return deviceData[brandName] || [];
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Brand</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <tr onClick={() => toggleRow("Huawei")} style={{ cursor: 'pointer' }}>
                    <td>Huawei</td>
                    <td>{getStatusBadge("Production")}</td>
                </tr>
                {expandedRows.has("Huawei") &&
                    getDeviceModels("Huawei").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Sungrow")} style={{ cursor: 'pointer' }}>
                    <td>Sungrow</td>
                    <td>{getStatusBadge("Production")}</td>
                </tr>
                {expandedRows.has("Sungrow") &&
                    getDeviceModels("Sungrow").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("SMA Solar Technology")} style={{ cursor: 'pointer' }}>
                    <td>SMA Solar Technology</td>
                    <td>{getStatusBadge("Production")}</td>
                </tr>
                {expandedRows.has("SMA Solar Technology") &&
                    getDeviceModels("SMA Solar Technology").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Solis")} style={{ cursor: 'pointer' }}>
                    <td>Solis</td>
                    <td>{getStatusBadge("Production")}</td>
                </tr>
                {expandedRows.has("Solis") &&
                    getDeviceModels("Solis").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("SolarEdge")} style={{ cursor: 'pointer' }}>
                    <td>SolarEdge</td>
                    <td>{getStatusBadge("Production")}</td>
                </tr>
                {expandedRows.has("SolarEdge") &&
                    getDeviceModels("SolarEdge").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Growatt")} style={{ cursor: 'pointer' }}>
                    <td>Growatt</td>
                    <td>{getStatusBadge("Production")}</td>
                </tr>
                {expandedRows.has("Growatt") &&
                    getDeviceModels("Growatt").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("GoodWe")} style={{ cursor: 'pointer' }}>
                    <td>GoodWe</td>
                    <td>{getStatusBadge("Production")}</td>
                </tr>
                {expandedRows.has("GoodWe") &&
                    getDeviceModels("GoodWe").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Fronius")} style={{ cursor: 'pointer' }}>
                    <td>Fronius</td>
                    <td>{getStatusBadge("Production")}</td>
                </tr>
                {expandedRows.has("Fronius") &&
                    getDeviceModels("Fronius").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                        </tr>
                    ))
                }
                <tr onClick={() => toggleRow("Enphase")} style={{ cursor: 'pointer' }}>
                    <td>Enphase</td>
                    <td>{getStatusBadge("Beta")}</td>
                </tr>
                {expandedRows.has("Enphase") &&
                    getDeviceModels("Enphase").map((device, index) => (
                        <tr key={index} style={{ backgroundColor: 'rgba(249, 249, 249, 0)' }}>
                            <td style={{ paddingLeft: '20px' }}>└ {device.model}</td>
                            <td>{getStatusBadge(device.status)}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};
