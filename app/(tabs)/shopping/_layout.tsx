import { Stack } from "expo-router";
import { ButtonColor } from "@/constants/ButtonColor";
export default function LeftStack() {
    return (
        <Stack
        screenOptions={{
            headerStyle: {
                backgroundColor: ButtonColor,
              },
              headerTintColor: '#fff',


        }}
        
        
        
        >
        <Stack.Screen
            name="index"
            
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="[id]"
            
           options={{ title: '' }}
            />
        </Stack>
    );
    }   