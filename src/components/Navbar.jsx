// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

/*
  Optional assets you referenced:
  HERO IMAGE PATH: /mnt/data/1873d8e6-e937-4f7f-846c-22dc88a4d4c7.png
  ABOUT BG PATH:   /mnt/data/3be6005b-4ab4-416d-a11b-c9398caffbb2.png
  PORTRAIT PATH:   /mnt/data/c1d6aba9-78f4-4f57-a42c-2f54613de127.png
*/

const ACCENT = "#d89463";
const DARK_BG = "#2b1b1e";
const TEXT_LIGHT = "#f6f2f2";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background 260ms ease, box-shadow 260ms ease, backdrop-filter 260ms ease;
  display: flex;
  justify-content: center;
`;

/* inner container */
const NavInner = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 22px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 980px) {
    padding: 14px 18px;
  }
`;

/* Use transient props ($hero / $scrolled) to avoid forwarding to DOM */
const NavBarBox = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${props =>
    props.$hero &&
    css`
      background: linear-gradient(rgba(43,27,30,0.15), rgba(43,27,30,0.05));
      box-shadow: none;
      border-bottom: 0;
    `}

  ${props =>
    props.$scrolled &&
    css`
      background: ${DARK_BG};
      box-shadow: 0 6px 30px rgba(11, 6, 7, 0.45);
      border-bottom: 1px solid rgba(255,255,255,0.03);
      backdrop-filter: blur(4px);
    `}
`;

const Logo = styled(Link)`
  color: ${ACCENT};
  font-weight: 800;
  letter-spacing: 1px;
  text-decoration: none;
  font-size: 26px;
`;

/* center links */
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 28px;
  align-items: center;
  margin: 0;
  padding: 0;

  a {
    color: ${ACCENT};
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    opacity: 0.95;
  }

  a.active {
    color: ${TEXT_LIGHT};
    background: linear-gradient(90deg, rgba(216,148,99,0.12), rgba(216,148,99,0.06));
    padding: 6px 10px;
    border-radius: 6px;
  }

  @media (max-width: 980px) {
    display: none;
  }
`;

const CTA = styled(Link)`
  border: 1px solid ${ACCENT};
  color: ${ACCENT};
  padding: 12px 20px;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  transition: background 180ms ease, color 180ms ease;
  background: transparent;

  &:hover {
    background: ${ACCENT};
    color: ${DARK_BG};
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: transparent;
  border: 0;
  color: ${TEXT_LIGHT};
  cursor: pointer;

  @media (max-width: 980px) {
    display: block;
  }
`;

/* mobile menu (simple) */
const MobileMenu = styled.div`
  position: fixed;
  top: 72px;
  right: 18px;
  background: ${DARK_BG};
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.6);
  display: ${props => (props.open ? "block" : "none")};
  z-index: 1100;

  a {
    display: block;
    padding: 8px 12px;
    color: ${TEXT_LIGHT};
    text-decoration: none;
  }
`;

const CenterGroup = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 28px;
`;

/* persistent Navbar component */
export default function Navbar() {
  const [isHeroVisible, setHeroVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // IntersectionObserver watches the #hero element if it exists.
    // When #hero is visible the navbar shows the transparent/overlay style,
    // otherwise it switches to the solid scrolled style.
    const heroEl = document.querySelector("#hero");
    if (!heroEl) {
      // No hero on this page — default to scrolled style (solid bar)
      setHeroVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => setHeroVisible(entry.isIntersecting));
      },
      { root: null, threshold: 0.25 }
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  // close mobile menu when navigation occurs — listen for clicks on document links
  useEffect(() => {
    const handleDocClick = e => {
      const a = e.target.closest && e.target.closest("a");
      if (a && a.getAttribute("href") && mobileOpen) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("click", handleDocClick);
    return () => document.removeEventListener("click", handleDocClick);
  }, [mobileOpen]);

  return (
    <Header aria-label="Main navigation">
      <NavInner>
        {/* Use NavBarBox to toggle hero/scrolled visuals if needed */}
       
          <Logo to="/">Sathwik</Logo>

          <CenterGroup>
            <NavLinks>
              <li>
                <NavLink to="/" end>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/work">Work</NavLink>
              </li>
              <li>
                <NavLink to="/service">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </NavLinks>
          </CenterGroup>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <CTA to="/contact">Let's Talk</CTA>

            <MobileToggle
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen(v => !v)}
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </MobileToggle>
          </div>

          <MobileMenu open={mobileOpen} role="menu" aria-hidden={!mobileOpen}>
            <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link to="/work" onClick={() => setMobileOpen(false)}>Work</Link>
            <Link to="/service" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)} style={{borderTop: "1px solid rgba(255,255,255,0.04)", marginTop:8, paddingTop:8}}>Contact</Link>
          </MobileMenu>
        
      </NavInner>
    </Header>
  );
}
