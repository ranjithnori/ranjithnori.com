import { useEffect, useRef, useState } from "react";
import { Typography } from "@mui/material";

import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.primary.main,
  height: 300,
  padding: 8,
}));

interface BlinkerProps {
  hide?: boolean;
}

function Blinker({ hide }: BlinkerProps) {
  const [blink, setBlink] = useState(false);
  const blinkIntervalRef = useRef(0);

  useEffect(() => {
    blinkIntervalRef.current = window.setInterval(() => {
      setBlink((value) => !value);
    }, 360);

    return () => {
      clearInterval(blinkIntervalRef.current);
    };
  }, []);

  return (
    <Typography
      variant="body1"
      component="span"
      style={{
        visibility: blink && !hide ? "visible" : "hidden",
      }}
    >
      _
    </Typography>
  );
}

interface TypeWriterTextProps {
  text: string;
}

function useTypeWriterText({ text }: TypeWriterTextProps) {
  const [steps, setSteps] = useState("");
  const intervalRef = useRef(0);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setSteps((prevSteps) => text.slice(0, prevSteps.length + 1));
      if (steps.length === text.length) {
        clearInterval(intervalRef.current);
      }
    }, 120);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [text, steps.length]);

  return steps;
}

function Home() {
  const text = useTypeWriterText({
    text: "Hi, my name is Ranjith NoriI am a Front-End developer",
  });

  return (
    <Container>
      <Typography variant="h4" component="h4">
        {text.slice(0, 27)}
        {text.length <= 27 && <Blinker />}
      </Typography>
      <Typography variant="h6" component="h6">
        {text.slice(27, 53)}
        {text.length > 27 && <Blinker />}
      </Typography>
    </Container>
  );
}

export default Home;
