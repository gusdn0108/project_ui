import styled from 'styled-components'
import Responsive from './Responsive'

const FooterTemplate = styled.div`
    clear: both;
    height:10rem;
    width:100%;
    background:#999;
    color:#fff;
`

const Footer = ({ children }) => {
    return (
        <FooterTemplate>
            <Responsive>
                {children}
                지도자 : 곽인구
                © 2022 ggow.com
            </Responsive>
        </FooterTemplate>
    )
}

export default Footer