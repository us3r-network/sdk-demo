import styled from "styled-components";
import {
  useAuthentication,
  useIsAuthenticated,
  useSession,
} from "@us3r-network/auth-with-rainbowkit";

import {
  LoginButton as LoginButtonStyled,
  UserAvatar,
} from "@us3r-network/profile";

import { useCallback } from "react";

const LoginButton = () => {
  const session = useSession();

  const isAuthenticated = useIsAuthenticated();
  const { ready, signOut } = useAuthentication();
  const isDisabled = !ready || !isAuthenticated;

  const logoutAction = useCallback(() => {
    if (!isDisabled && isAuthenticated) {
      signOut();
    }
  }, [isDisabled, isAuthenticated, signOut]);

  const sessId = session?.id;
  return (
    <Wrapper>
      {!!sessId ? (
        <div>
          <UserAvatarStyled title={sessId} />
          <button onClick={logoutAction}>logout</button>
        </div>
      ) : (
        <LoginButtonStyled>Login</LoginButtonStyled>
      )}
    </Wrapper>
  );
};

const UserAvatarStyled = styled(UserAvatar)`
  display: inline-block;
  width: 32px;
  height: 32px;
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: #999;
    }
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;

export default LoginButton;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  gap: 10px;
  button[data-us3r-component="LoginButton"] {
    overflow: hidden;
    cursor: pointer;
    padding: 5px 10px;
    width: fit-content;
    height: 32px;
    border-radius: 10px;
    color: #fff;
    background: none;
    outline: none;
    border: 1px solid gray;
  }

  > div {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;
