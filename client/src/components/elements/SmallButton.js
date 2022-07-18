import styled from "styled-components";
import { Link } from "react-router-dom";

export const SmallButton = styled(Link)`
  

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;
  width: 200px;
  height: 52px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18.14px;
  background: #ffffff;
  border-radius: 10px;
  color: rgba(0, 20, 197, 1);
  margin-right: 15px;
  text-align: center;
  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
`;

SmallButton.text = styled.p`
  /* Join our Community */
  height: 23px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18.14px;
  /* identical to box height */
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(0, 20, 197, 1);
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;
