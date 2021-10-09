const Alert = ({alert, clearAlert}) => {
  return (
    alert !== null && (
      <div onClick={clearAlert} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle"/> {alert.msg}
      </div>
    )
  );
};

export default Alert;