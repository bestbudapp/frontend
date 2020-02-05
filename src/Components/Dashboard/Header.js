import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../img/logo.png';

const HeaderContainer = styled.div`
    height: 10vh;
    width: 100%;
    background: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    display: flex;
    justify-content: center;
    align-items: center;

    .header-container {
        width: 1024px;
        background: white;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            height: 64px;
        }

        nav {
            display: flex;
            align-items: center;

            a {
                text-decoration: none;
                margin: 0 16px;
                // border-bottom: 2px solid white;
                font-size: 1rem;
                font-weight: 500;
                color: #333;
                transition: 0.25s;

                :hover {
                    opacity: 0.5;
                }
            }
        }

        .sign-out {
            text-decoration: none;
            font-size: 1rem;
            font-weight: 500;
            color: #333;
            transition: 0.25s;

            :hover {
                opacity: 0.5;
            }
        }
    }
`;

const Header = () => {
    return(
        <HeaderContainer>
            <div className='header-container'>
                <img src={logo} alt='bestbud logo'/>
                <nav>
                    <Link to='/recommender'>Recommender</Link>
                    <Link to='/strains'>Strain Search</Link>
                    <Link to='/cabinet'>My Cabinet</Link>
                </nav>
                <Link to='/' className='sign-out'>Sign Out</Link>
                {/* needs to remove token from local storage, you can probably even leave out the redirect since the private route component does that for you */}
            </div>
        </HeaderContainer>
    );
};

export default Header;