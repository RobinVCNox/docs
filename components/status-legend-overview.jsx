export const StatusTable = () => {
    const getStatusBadge = (status) => {
        const statusColors = {
            Alpha: "orange",
            Beta: "blue",
            Production: "green",
            Limited: "yellow"
        };

        return (
            <Badge color={statusColors[status]} shape="pill" size="sm">
                {status}
            </Badge>
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