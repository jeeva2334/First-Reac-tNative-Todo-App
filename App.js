import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task,setTask] = useState()
  const [taskItem,setTaskItem] = useState([])
  const handleTask = ()=>{
    Keyboard.dismiss()
    setTaskItem([...taskItem,task])
    setTask(null)
  }

  const completeTask = (index) => {
    let taskcp = [...taskItem]
    taskcp.splice(index, 1)
    setTaskItem(taskcp)
  }

  return (
    <View style={styles.container}>
      <View style={styles.task}>
        <Text style={styles.sectionTitle}>Toadys Tasks</Text>
        <View style={styles.item}>
        <ScrollView>
          {
            taskItem.map((item,index)=>(
              <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                <Task text={item} />
              </TouchableOpacity>
            ))
          }
        </ScrollView>
        </View>
      </View>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios'?'padding':'height'}
        style={styles.taskWritter}
        >
          <TextInput style={styles.input} placeholder='Write your Tasks....' value={task} onChangeText={text => setTask(text)}/>
          <TouchableOpacity onPress={()=>handleTask()}>
            <View style={styles.wrap}>
              <Text style={styles.addtext}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  task:{
    padding:60,
    paddingHorizontal:20,
  },
  sectionTitle:{
    fontSize:24,
    fontWeight: '800'
  },
  item:{
    marginTop:30
  },
  taskWritter:{
    position: 'absolute',
    bottom:50,
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    paddingHorizontal:15,
    paddingVertical:15,
    backgroundColor: '#fff',
    borderRadius:60,
    width:250,
    borderColor:'#c0c0c0',
    borderWidth: 1
  },
  wrap:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#c0c0c0',
    borderWidth: 1
  },
  addtext:{

  },
});
