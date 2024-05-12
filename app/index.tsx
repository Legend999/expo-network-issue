import {Text} from "react-native";
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
      <Text>Open dev menu, click on element inspector and select network tab</Text>
  );
}
