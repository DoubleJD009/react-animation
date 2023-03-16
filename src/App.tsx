import React, { useRef } from "react";
import styled from "styled-components";
import { motion, Variants } from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
`;

const Box = styled(motion.ul)`
  width: 200px;
  height: 200px;
  overflow: hidden;
  margin: 0;
  list-style: none;
  gap: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 1);
  border-radius: 50px;
`;

const boxVariants: Variants = {
  hover: { rotateZ: 90 },
  click: { borderRadius: "100%" },
};

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
        />
      </BiggerBox>
    </Wrapper>
  );
}

export default App;
