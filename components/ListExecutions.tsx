import React from 'react';
import { Component } from "react";
import { Text, View, FlatList } from 'react-native';

import { Execution } from '../database/ExecutionModel';
import ExecutionService from '../database/ExecutionsService';
import { ScrollView } from 'react-native-gesture-handler';


export default class ListExecutions extends Component {

    constructor(props) {
      super(props);
      this.findAllExecutions();
    }

    state = {
      data: []
    }

    componentDidMount() {
      this.findAllExecutions();
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.data !== this.state.data) {
        this.findAllExecutions();
      }
    }

    findAllExecutions=()=> {
      ExecutionService.findAll()
        .then((response: any) => {
          this.setState({
            data: response._array,
            isLoading: false,
          })
        }), (error) => {
          console.log(error);
        }
    }

    render() {
      const {data} = this.state;
      const renderItem = ({ item }) => (
        <Text>{item.exercise} ({item.weight} kg)</Text>
      );
      return (
        <View>
          <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={item => String(item.id)}
          />
        </View>
      );
    }

}