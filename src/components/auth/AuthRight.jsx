import AuthButton from "../button/AuthButton";

const AuthRight = () => {
  return (
    <div className="auth-right">
      <h1 className="auth-header">Create An Account</h1>
      <div className="auth-container">
        <AuthButton iconUrl="https://cdn-icons.flaticon.com/png/512/2504/premium/2504739.png?token=exp=1641976014~hmac=c6a0141e9b25a8324ec9f7027f042179">
          Sign In With Google
        </AuthButton>
        <AuthButton iconUrl="https://cdn-icons-png.flaticon.com/512/145/145802.png">
          Sign In With Facebook
        </AuthButton>
      </div>
    </div>
  );
};

export default AuthRight;
