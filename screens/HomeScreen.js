import React, { useEffect } from 'react';
import Quote from '../components/Quote';
import { Button, Dimensions, FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { load_quotes } from '../redux/actionCreators'

const mapStateToProps = state => ({
    quotes: state.quotes
});

const mapDispatchToProps = dispatch => ({
    load_quotes: () => dispatch(load_quotes())
});

const HomeScreen = props => {
    useEffect(()=>{
        props.load_quotes();
    }, []);
    return (
        <FlatList
            data={props.quotes.results}
            renderItem={({ item }) => {
                return <Quote content={item.content} author={item.author} />
            }}
            keyExtractor={(item) => item._id}
            horizontal={true}
            decelerationRate="fast"
            snapToInterval={Dimensions.get('window').width}
        />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)