import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import navArrow from '../../assets/images/Navarrow.png';

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  gap: 120px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    gap: 20px;
  }
`;

const NavItem = styled.a`
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.text};
  cursor: pointer;
  transition: color 0.2s;
  position: relative;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const DropdownContainer = styled.div`
  position: relative;

  ${NavItem}:hover img {
    filter: brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(224deg) brightness(104%) contrast(97%);
  }
`;

const ArrowIcon = styled.img`
  display: ${props => props.isOpen ? 'inline-block' : 'none'};
  width: auto;
  height: 8px;
  margin-left: 4px;
  transition: filter 0.2s;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 32px;
  background: ${props => props.theme.colors.white};
  border-radius: 12px;
  box-shadow: 0 4px 12px ${props => props.theme.colors.shadow};
  min-width: 180px;
  padding: 8px 0;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: translateX(-50%) translateY(${props => props.isOpen ? '0' : '-10px'});
  transition: opacity 0.2s, visibility 0.2s, transform 0.2s;
  z-index: 1000;
`;

const DropdownItem = styled.a`
  display: block;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  text-decoration: none;

  &:hover {
    background-color: ${props => props.theme.colors.backgroundGray};
    color: ${props => props.theme.colors.primary};
  }

  &:first-child {
    border-radius: 8px 8px 0 0;
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
  }
`;

const Navigation = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const solutionMenuItems = [
    '문제 제기',
    '해결 개념',
    '비포 & 에프터',
    '증명과 신뢰',
    '추천 대상',
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (sectionId) => {
    // '증명과 신뢰'의 경우 두 섹션 사이의 중앙으로 스크롤
    if (sectionId === '증명과 신뢰') {
      const statsSection = document.getElementById('증명과 신뢰-통계');
      const benefitsSection = document.getElementById('증명과 신뢰-혜택');
      
      if (statsSection && benefitsSection) {
        const statsRect = statsSection.getBoundingClientRect();
        const benefitsRect = benefitsSection.getBoundingClientRect();
        
        const statsTop = statsRect.top + window.pageYOffset;
        const benefitsBottom = benefitsRect.bottom + window.pageYOffset;
        
        // 두 섹션 사이의 중앙 지점 계산
        const centerPosition = (statsTop + benefitsBottom) / 2;
        const offsetPosition = centerPosition - (window.innerHeight / 2);
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      // 일반 섹션 스크롤
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - (window.innerHeight / 2) + (element.offsetHeight / 2);
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
    setIsDropdownOpen(false);
  };

  return (
    <NavContainer>
      <NavItem onClick={scrollToTop}>Home</NavItem>
      <DropdownContainer ref={dropdownRef}>
        <NavItem onClick={toggleDropdown}>
          Solution
          {isDropdownOpen && <ArrowIcon src={navArrow} alt="arrow" isOpen={isDropdownOpen} />}
        </NavItem>
        <DropdownMenu isOpen={isDropdownOpen}>
          {solutionMenuItems.map((item, index) => (
            <DropdownItem 
              key={index} 
              href={`#${item}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item);
              }}
            >
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </DropdownContainer>
      <NavItem>Services</NavItem>
    </NavContainer>
  );
};

export default Navigation;
