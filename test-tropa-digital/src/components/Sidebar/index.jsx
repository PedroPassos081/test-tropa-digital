// src/components/Sidebar/index.jsx
import styled from "styled-components";
import { LuCalendarDays } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiGroupLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icon.svg";
import Paragraph from "../Paragraph";
import photoKaique from "../../assets/kaique-icon.png";
import { LiaPowerOffSolid } from "react-icons/lia";
import { MdOutlineManageAccounts } from "react-icons/md";

const SidebarContainer = styled.div`
  width: 240px;
  height: 100vh;
  background-color: #ffff;
  color: white;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
`;

const ImageLogo = styled.img`
  width: 200px;
  margin-bottom: 10px;
`;

const MenuItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  text-decoration: none;
  color: #000;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  width: 200px;
  height: 20px;
  margin-bottom: 20px;

  &.active {
    background-color: #cc6237; /* cor de destaque quando ativo */
    color: #fff;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const ContainerLogout = styled.div`
  margin-top: 250px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const ImageKaique = styled.img`
  border: 2px solid #cc6237; /* Laranja */
  border-radius: 15px;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <ImageLogo src={logo} alt="logo Tropa digital" />
      <Paragraph margin="30px 13px 0" color="#A3A3A3">
        MENU
      </Paragraph>
      <MenuItem to="/">
        <RxDashboard size={20} />
        Dashboard
      </MenuItem>

      <MenuItem to="/home">
        <LuCalendarDays size={20} />
        Eventos
      </MenuItem>

      <MenuItem to="/">
        <HiOutlineUserGroup size={20} />
        Equipes
      </MenuItem>

      <MenuItem to="/">
        <RiGroupLine size={20} />
        Inscrições
      </MenuItem>
      <ContainerLogout>
        <ImageKaique src={photoKaique} alt="" />
        <div>
          <Paragraph color="#000" size="14px" weight="500">
            Kaique Steck
          </Paragraph>
          <Paragraph>Administrador</Paragraph>
        </div>
      </ContainerLogout>
      <MenuItem to="/">
        <MdOutlineManageAccounts size={20} />
        Alterar dados
      </MenuItem>

      <MenuItem to="/">
        <LiaPowerOffSolid size={20} />
        Sair
      </MenuItem>
    </SidebarContainer>
  );
}

export default Sidebar;
