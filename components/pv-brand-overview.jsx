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
      ],
      "Sungrow": [
      ],
      "SMA Solar Technology": [
      ],
      "Solis": [
      ],
      "Enphase": [
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
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
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
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
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
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
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
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
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
                            <td style={{ paddingLeft: '20px' }}>{device.hpType}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
};
