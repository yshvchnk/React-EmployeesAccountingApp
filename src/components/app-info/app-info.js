import "./app-info.css";

const AppInfo = ({ increased, employees }) => {
    return (
        <div className="app-info">
            <h1>Employees</h1>
            <h2>Total number: {employees}</h2>
            <h2>Extra salary get: {increased}</h2>
        </div>
    );
};

export default AppInfo;
