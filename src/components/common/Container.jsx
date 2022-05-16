import styled from 'styled-components'

const Template = styled.div`
    min-height:1080px;

    @midea (max-width){
        min-height :568px;
    }

    @meida (max-width){
        min-width:100%;
    }
`

const Container = ({ children }) => {
    return (
        <Template>
            {children}
        </Template>
    )
}

export default Container