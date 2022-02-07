import { Link } from "react-router-dom";
import { RNav, RnLi, RnList } from "./FunctionsBtn.style";
import useAuth from "../../../../Server/useAuth";

function FunctionsBtn() {
  const { user } = useAuth();
  return (
    <>
      <RNav>
        <RnList>
          <RnLi>
            {!user ? (
              <Link to="/login" role="button">
                Login
              </Link>
            ) : (
              <Link to="/logout" role="button">
                Loout
              </Link>
            )}
          </RnLi>
        </RnList>
      </RNav>
    </>
  );
}

export default FunctionsBtn;
