import AlertContext from '../../context/alert/alertContext'
import {useContext} from "react";

const Alert = () => {
  const alertContext = useContext(AlertContext)

  const {alert, clearAlert} = alertContext

  return (
    alert !== null && (
      <div onClick={clearAlert} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"/> {alert.msg}
      </div>
    )
  );
};

export default Alert;