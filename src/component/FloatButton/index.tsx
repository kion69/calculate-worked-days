import { Tooltip } from "@material-ui/core";
import React from "react";
import * as Icons from 'react-icons/all';
import { IconType } from "react-icons/lib";
import styled from "styled-components";
import { ButtonStyled, FabStyled } from '../../style';

export const FloatButton = styled(FabStyled)``;

export const NormalButton = styled(ButtonStyled)`

    background-color: transparent;
    color: white;
    margin: 10px 30px;
    min-width: fit-content;

     &:hover {
        background-color:transparent;   
    }

   /* &:hover .tooltip {
        opacity: 1;
        transition: opacity .5s;
        transition-delay: 1.3s;
    }

    .tooltip.left {
        top: 10%;
        left: 100%;
        transform: translateX(calc(-100% - 80px));
    }

    .tooltip.right {
        background-color: purple;
        top: 90px;
        left: 0;
        transform: translateX(calc(-100% - 30px));
    } */
    
`;

export const Tooltip2 = styled.div`
    background-color:#5e5e5e;
    position: absolute;
    padding: 5px;
    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
    color: white;
    /* transition: opacity .5s;
    transition-delay: 1.3s; */
    opacity: 0;
    pointer-events: none;
    white-space: nowrap;

    &:hover .tooltip {
        opacity: 1;
        transition: opacity .5s;
        transition-delay: 1.3s;
        z-index: 999;
    }

.tooltip.bottom {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, calc(100% + 10px));
}

.tooltip.right {
    top: 0;
    right: 0;
    transform: translateX(calc(100% + 10px));
}`;

export interface ButtonProps {
    iconName: string;
    iconSize: number;
    style?: {};
    tooltipMsg: string;
    float?: boolean;
    func: () => any;
}

function Button(props: ButtonProps) {

    const renderIcon = () => {

        const icon = (Icons as Record<string, IconType>)[props.iconName];
        return React.createElement(icon, {
            size: props.iconSize,
            style: props.style,
        });
    }

    const floatButton = () => {
        if (props.float) {
            return (
                <Tooltip title={props.tooltipMsg} enterDelay={900} leaveDelay={900}>
                    <FloatButton fontSize={15} size={'medium'} onClick={props.func}>
                        {renderIcon()}
                    </FloatButton>
                </Tooltip>

            );
        } else {
            return (
                <Tooltip title={props.tooltipMsg} enterDelay={900} leaveDelay={900}>
                    <NormalButton disableRipple fontSize={15} onClick={props.func}>
                        {renderIcon()}
                    </NormalButton>
                </Tooltip>
            )
        }
    }

    return (
        floatButton()
    )
}

export default Button; 