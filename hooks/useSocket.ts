import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  socketsLatestDataState,
  socketsStatusState,
} from "../atoms/socketsAtom";

function useSocket() {
  const [linkStatus, setLinkStatus] = useRecoilState(socketsStatusState);
  const [latestData, setLatestData] = useRecoilState(socketsLatestDataState);
  const [linkUri, setLinkUri] = useState(
    "ws://192.168.0.77:16969/realtime/ref"
  );

  const connectWs = () => {
    const ws = new WebSocket(linkUri);

    ws.onopen = () => {
      setLinkStatus("Up");
    };

    ws.onmessage = (msg) => {
      const value = JSON.parse(msg.data).value;
      setLatestData(value);
    };

    ws.onclose = () => {
      if (ws) {
        setLinkStatus("Closed");
      }
      setTimeout(connectWs, 1000);
    };

    return ws;
  };

  useEffect(() => {
    const ws = connectWs();

    return () => {
      ws.close();
    };
  }, [linkUri]);

  return { linkStatus, latestData, setLinkUri };
}

export default useSocket;
