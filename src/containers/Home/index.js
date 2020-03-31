import React, {Component} from 'react';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';
import CardList from '../../components/CardList';
import iconLoading from '../../assets/icons/ajax-loader.gif';
import { MainContainer, CardContainer, Header, SubHeader, ContentLoading } from './styles';

class Home extends Component{
    componentDidMount(){
        this.props.getAllData();
    }
    render(){
        const { loading , result } = this.props;
        console.log('loading',loading);
        const list =  result ? Object.keys(result).map((key)=> <CardList data={result[key]} />): 'No Records Found';
        return (
                <MainContainer>
                    <Header>APIs & Services</Header>
                    <SubHeader>Access information to how to use forge APIs and Services</SubHeader>
                    <CardContainer>
                        { loading ?
                            <ContentLoading>
                                <img alt="loading" src={iconLoading} />
                            </ContentLoading> :
                            list
                        }
                    </CardContainer>
                </MainContainer>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllData : () => dispatch(actions.getAllData()),
    };
};

const mapStateToProps = state => {
    return {
        loading : state.app.loading,
        result : state.app.result
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);