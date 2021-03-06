import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const IngredientList = ({ ingredients }) => {
  return (
    <View>
      { ingredients.map((ingredient, i) => {
          return (
            <Text key={i}>{`\u2022 ${ingredient}`}</Text>
          );
        })
      }
    </View>
  );
};

export default IngredientList;
