import {Text, View} from "react-native";
import {useEffect} from "react";

export default function Index() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => {
        console.log(response);
        return response.json();
      }).then((data) => console.log(data));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  
  return (
      <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
  );
}
