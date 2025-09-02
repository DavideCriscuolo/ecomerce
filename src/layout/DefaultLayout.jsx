import { Outlet } from "react-router-dom";
import HeaderC from "../components/HeaderC";
import JumboC from "../components/JumboC";
import FooterC from "../components/FooterC";
export default function DefaultFunction() {
  return (
    <>
      <HeaderC></HeaderC>
      <JumboC></JumboC>
      <Outlet></Outlet>
      <FooterC></FooterC>
    </>
  );
}
