import React, { useState} from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

import List from "../component/List";
import SearchBar from "../component/SearchBar";

const Page1 = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [fakeData, setFakeData] = useState();

  //get data from the fake api
//   useEffect(() => {
//     const getData = async () => {
//       const apiResponse = await fetch(
//         "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
//       );
//       const data = await apiResponse.json();
//       setFakeData(data);
//     };
//     getData();
//   }, []);

  return (
    <SafeAreaView style={styles.root}>
        <Text style={styles.title}> Partern's Name</Text>
      {/* {!clicked && <Text style={styles.title}> Partern's Name</Text>} */}

      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {/* {!fakeData ? (
        <ActivityIndicator size="large" />
      ) : (
        
        //   <List
        //     searchPhrase={searchPhrase}
        //     // data={fakeData}
        //     setClicked={setClicked}
        //   />
        
      )} */}

      
    </SafeAreaView>
  );
};

export default Page1;
const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: "100%",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: "10%",
  },
});

