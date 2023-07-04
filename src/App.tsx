import React, { useCallback, useEffect } from "react";
import { useSession } from "@us3r-network/auth-with-rainbowkit";

import "./App.css";
import LoginButton from "./Login";
import { S3DappModel } from "./dapp/S3DemoModel";

export const CERAMIC_TESTNET_HOST = "https://gcp-ceramic-testnet-dev.s3.xyz";

const s3Demo = new S3DappModel(CERAMIC_TESTNET_HOST);
function App() {
  const session = useSession();

  const queryDapps = useCallback(() => {
    s3Demo
      .queryDappIndex({ first: 100 })
      .then((resp) => {
        if (resp.errors) throw new Error(resp.errors[0].message);
        console.log(resp.data);
      })
      .catch(console.error);
  }, []);

  const queryWithId = useCallback(() => {
    s3Demo
      .queryDappWithId(
        "kjzl6kcym7w8ya5tjba92wrqbbi07ini61516eo17k14kvibr5yafazkgua2j6v"
      )
      .then((resp) => {
        if (resp.errors) throw new Error(resp.errors[0].message);
        console.log(resp.data);
      })
      .catch(console.error);
  }, []);

  const createDapp = useCallback(() => {
    if (!session) return;
    s3Demo.authComposeClient(session);
    s3Demo
      .createDapp({ content: { name: "sdk demo" } })
      .then((res) => {
        if (res.errors) throw new Error(res.errors[0].message);
        console.log(res.data);
      })
      .catch(console.error);
  }, [session]);

  const updateDapp = useCallback(() => {
    if (!session) return;
    s3Demo.authComposeClient(session);
    s3Demo
      .updateDapp({
        id: "kjzl6kcym7w8ya5tjba92wrqbbi07ini61516eo17k14kvibr5yafazkgua2j6v",
        content: { name: "skd demo 01" },
      })
      .then((res) => {
        if (res.errors) throw new Error(res.errors[0].message);
        console.log(res.data);
      })
      .catch(console.error);
  }, [session]);

  useEffect(() => {
    if (!session) {
      s3Demo.resetComposeClient();
      return;
    }

    s3Demo.authComposeClient(session);
  }, [session]);
  return (
    <div className="App">
      <LoginButton />
      <div>
        <button onClick={queryDapps}>query Dapps</button>
        <button onClick={createDapp}>create Dapp</button>
        <button onClick={updateDapp}>updateDapp</button>
        <button onClick={queryWithId}>query with id</button>
      </div>
    </div>
  );
}

export default App;
