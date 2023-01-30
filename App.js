const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
false;
import Homepage from "./screens/Homepage";
import Maps from "./screens/Maps";
import WaterFalls from "./screens/WaterFalls";
import LaxmanTemple from "./screens/LaxmanTemple";
import SurangTila from "./screens/SurangTila";
import SiddheshwarTemple from "./screens/SiddheshwarTemple";
import PrayagGiri from "./screens/PrayagGiri";
import MadvaMahal from "./screens/MadvaMahal";
import PachrahiMuseum from "./screens/PachrahiMuseum";
import MamaBhanjaTemple from "./screens/MamaBhanjaTemple";
import BattisaTemple from "./screens/BattisaTemple";
import MuseumOfAnthropology from "./screens/MuseumOfAnthropology";
import KutumsarCaves from "./screens/KutumsarCaves";
import KailashCaves from "./screens/KailashCaves";
import Heritage from "./screens/Heritage";
import Dongargarh from "./screens/Dongargarh";
import Ratanpur from "./screens/Ratanpur";
import Danteshwari from "./screens/Danteshwari";
import BhoramDev from "./screens/BhoramDev";
import RajivLochanTemple from "./screens/RajivLochanTemple";
import Shivrinarayan from "./screens/Shivrinarayan";
import ChandrahashiniDeviTemple from "./screens/ChandrahashiniDeviTemple";
import HatkeshwarMahadevTemple from "./screens/HatkeshwarMahadevTemple";
import DuddhadhariTemple from "./screens/DuddhadhariTemple";
import SomnathTemple from "./screens/SomnathTemple";
import RamMandir from "./screens/RamMandir";
import IskconTemple from "./screens/IskconTemple";
import Temples from "./screens/Temples";
import CottonFabrics from "./screens/CottonFabrics";
import BambooArt from "./screens/BambooArt";
import BellMetal from "./screens/BellMetal";
import GodnaArt from "./screens/GodnaArt";
import WroughtIron from "./screens/WroughtIron";
import Ornaments from "./screens/Ornaments";
import Terracotta from "./screens/Terracotta";
import Tumba from "./screens/Tumba";
import WallPainting from "./screens/WallPainting";
import WoodCarving from "./screens/WoodCarving";
import ArtAndCraft from "./screens/ArtAndCraft";
import MMFuncity from "./screens/MMFuncity";
import WonderLand from "./screens/WonderLand";
import JungleSafari from "./screens/JungleSafari";
import Puno from "./screens/Puno";
import BubbleIsland from "./screens/BubbleIsland";
import GoKarting from "./screens/GoKarting";
import BungeeJumping from "./screens/BungeeJumping";
import BastarDussehra from "./screens/BastarDussehra";
import BhoramdevMahotsav from "./screens/BhoramdevMahotsav";
import MadaiFestival from "./screens/MadaiFestival";
import RajimKumbh from "./screens/RajimKumbh";
import RajimKumbh1 from "./screens/RajimKumbh1";
import Festivals from "./screens/Festivals";
import Accomodation from "./screens/Accomodation";
import ArrowCircleLeft from "./screens/ArrowCircleLeft";
import Search from "./screens/Search";
import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import SemarsotSanctuary from "./screens/SemarsotSanctuary";
import TamorPinglaSanctuary from "./screens/TamorPinglaSanctuary";
import BarnawaparaSanctuary from "./screens/BarnawaparaSanctuary";
import BhoramdeoSanctuary from "./screens/BhoramdeoSanctuary";
import BadalKholSanctuary from "./screens/BadalKholSanctuary";
import GomardaSanctuary from "./screens/GomardaSanctuary";
import PamedSanctuary from "./screens/PamedSanctuary";
import Camera from "./screens/Camera";
import WildLifeSanturies from "./screens/WildLifeSanturies";
import AccountDetails from "./screens/AccountDetails";
import DiscoverNow from "./screens/DiscoverNow";
import Menu from "./screens/Menu";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Homepage"
              component={Homepage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Maps"
              component={Maps}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WaterFalls"
              component={WaterFalls}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaxmanTemple"
              component={LaxmanTemple}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SurangTila"
              component={SurangTila}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SiddheshwarTemple"
              component={SiddheshwarTemple}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PrayagGiri"
              component={PrayagGiri}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MadvaMahal"
              component={MadvaMahal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PachrahiMuseum"
              component={PachrahiMuseum}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MamaBhanjaTemple"
              component={MamaBhanjaTemple}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BattisaTemple"
              component={BattisaTemple}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MuseumOfAnthropology"
              component={MuseumOfAnthropology}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KutumsarCaves"
              component={KutumsarCaves}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="KailashCaves"
              component={KailashCaves}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Heritage"
              component={Heritage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Dongargarh"
              component={Dongargarh}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ratanpur"
              component={Ratanpur}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Danteshwari"
              component={Danteshwari}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BhoramDev"
              component={BhoramDev}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RajivLochanTemple"
              component={RajivLochanTemple}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Shivrinarayan"
              component={Shivrinarayan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChandrahashiniDeviTemple"
              component={ChandrahashiniDeviTemple}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HatkeshwarMahadevTemple"
              component={HatkeshwarMahadevTemple}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DuddhadhariTemple"
              component={DuddhadhariTemple}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SomnathTemple"
              component={SomnathTemple}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RamMandir"
              component={RamMandir}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IskconTemple"
              component={IskconTemple}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Temples"
              component={Temples}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CottonFabrics"
              component={CottonFabrics}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BambooArt"
              component={BambooArt}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BellMetal"
              component={BellMetal}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GodnaArt"
              component={GodnaArt}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WroughtIron"
              component={WroughtIron}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ornaments"
              component={Ornaments}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Terracotta"
              component={Terracotta}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Tumba"
              component={Tumba}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WallPainting"
              component={WallPainting}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WoodCarving"
              component={WoodCarving}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ArtAndCraft"
              component={ArtAndCraft}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MMFuncity"
              component={MMFuncity}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WonderLand"
              component={WonderLand}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="JungleSafari"
              component={JungleSafari}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Puno"
              component={Puno}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BubbleIsland"
              component={BubbleIsland}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GoKarting"
              component={GoKarting}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BungeeJumping"
              component={BungeeJumping}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BastarDussehra"
              component={BastarDussehra}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BhoramdevMahotsav"
              component={BhoramdevMahotsav}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MadaiFestival"
              component={MadaiFestival}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RajimKumbh"
              component={RajimKumbh}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RajimKumbh1"
              component={RajimKumbh1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Festivals"
              component={Festivals}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Accomodation"
              component={Accomodation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ArrowCircleLeft"
              component={ArrowCircleLeft}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SemarsotSanctuary"
              component={SemarsotSanctuary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TamorPinglaSanctuary"
              component={TamorPinglaSanctuary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BarnawaparaSanctuary"
              component={BarnawaparaSanctuary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BhoramdeoSanctuary"
              component={BhoramdeoSanctuary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BadalKholSanctuary"
              component={BadalKholSanctuary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GomardaSanctuary"
              component={GomardaSanctuary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PamedSanctuary"
              component={PamedSanctuary}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Camera"
              component={Camera}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WildLifeSanturies"
              component={WildLifeSanturies}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountDetails"
              component={AccountDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DiscoverNow"
              component={DiscoverNow}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Menu"
              component={Menu}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
