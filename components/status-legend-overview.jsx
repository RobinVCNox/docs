export const StatusTable = () => {
    const getStatusBadge = (status) => {
        const statusStyles = {
            Alpha: "mint-bg-orange-100 mint-text-orange-800",
            Beta: "mint-bg-blue-100 mint-text-blue-800",
            Production: "mint-bg-green-100 mint-text-green-800",
            Limited: "mint-bg-yellow-100 mint-text-yellow-800"
        };

        return (
            <span className={`mint-inline-flex mint-items-center mint-px-2.5 mint-py-0.5 mint-rounded-full mint-text-xs mint-font-medium ${statusStyles[status]}`}>
                {status}
            </span>
        );
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>Status</th>
                    <th>Meaning</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{getStatusBadge("Alpha")}</td>
                    <td>In development, limited testing</td>
                </tr>
                <tr>
                    <td>{getStatusBadge("Beta")}</td>
                    <td>Testing phase, some users have access</td>
                </tr>
                <tr>
                    <td>{getStatusBadge("Production")}</td>
                    <td>Fully available and stable</td>
                </tr>
                <tr>
                    <td>{getStatusBadge("Limited")}</td>
                    <td>Available with restrictions or limited features</td>
                </tr>
            </tbody>
        </table>
    );
};