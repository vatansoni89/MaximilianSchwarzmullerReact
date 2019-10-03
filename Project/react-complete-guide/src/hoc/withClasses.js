import React from "react";
const withClasses = (WrappedComponent, className) => {
  return (
    props // Its mean return by default, should be used when small section need to be returned.
  ) => (
    <div className={className}>
      {console.log("props from withClasses", props)}
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClasses;
