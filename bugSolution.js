The solution involves using the `estimatedItemSize` prop in the FlatList component. This prop helps FlatList estimate the height of each item, leading to more accurate measurements and avoiding the rendering issues.  A reasonably accurate estimation will prevent the visual artifacts.  If you know the range of heights in your data, setting `initialNumToRender` can also improve the initial render.

```javascript
// solution code
<FlatList
  data={[{ height: 100 }, { height: 300 }, { height: 50 }]}
  estimatedItemSize={150} // Estimate average height
  renderItem={({ item }) => (
    <View style={{ height: item.height, backgroundColor: 'lightblue' }}>
      <Text>{item.height}</Text>
    </View>
  )}
/>
```