function StrengthMeter({
    poorPassword,
    weakPassword,
    strongPassword,
    passwordError
  }) {
    return (
      <>
        <p> {passwordError}</p>
      </>
    );
  }
  
  export default StrengthMeter;
  