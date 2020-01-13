import React from 'react';
import styled from '@emotion/styled'

const SegmentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: ${(props: IProps) => props.background || 'transparent'};
    height: ${(props: IProps) => props.height ? `${props.height}px` : 'auto'};
    margin-top: ${(props: IProps) => props.marginTop ? `${props.marginTop}px` : '0'};
    padding: 0 20px;
`;

const SegmentContainer = styled.div`
    width: 100%;
    max-width: ${(props: IProps) => props.width ? `${props.width}px` : '700px'};
`;

interface IProps extends React.Props<{}> {
    background?: string;
    height?: number;
    width?: number;
    marginTop?: number;
}

export default (props: IProps): JSX.Element => (
    <SegmentWrapper height={props.height} background={props.background} marginTop={props.marginTop}>
        <SegmentContainer width={props.width}>{props.children}</SegmentContainer>
    </SegmentWrapper>
);