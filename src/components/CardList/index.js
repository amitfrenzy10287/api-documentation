import React from 'react';
import './styles';
import iconAuth from '../../assets/icons/auth.png';
import iconRight from '../../assets/icons/right.png';
import iconAutomation from '../../assets/icons/automation.png';
import iconData from '../../assets/icons/datamgmt.png';
import iconModel from '../../assets/icons/model.png';
import iconReality from '../../assets/icons/reality.png';
import {
    CardContainer,
    Wrapper,
    CardTitle,
    LinkContainer,
    LinkHead,
    CardBody,
    GroupIcon,
    IconArrowRight,
    InnerLink
} from './styles';
const iconArr = {
    1:iconAuth,
    2:iconAutomation,
    3:iconData,
    4:iconModel,
    5:iconReality,
};
const CardList = (props) => {
    const { id, title, description, links } = props.data;
    return (
            <CardContainer>
                <Wrapper>
                    <CardTitle>
                        <GroupIcon src={iconArr[id]} />
                            {title}
                        </CardTitle>
                    <div>
                        <CardBody>{description}</CardBody>
                        <LinkContainer>
                            <InnerLink>
                                <LinkHead to="/developer/en/api/dummy1/intro">{links[0]}</LinkHead>
                                <IconArrowRight src={iconRight} />
                            </InnerLink>
                            <hr/>
                            <InnerLink>
                                <LinkHead to="/developer/en/api/dummy1/guide">{links[1]}</LinkHead>
                                <IconArrowRight src={iconRight} />
                            </InnerLink>
                            <hr/>
                            <InnerLink>
                                <LinkHead to="/developer/en/api/dummy1/reference">{links[2]}</LinkHead>
                                <IconArrowRight src={iconRight} />
                            </InnerLink>
                        </LinkContainer>
                    </div>
                </Wrapper>
            </CardContainer>
    )
};

export default CardList;