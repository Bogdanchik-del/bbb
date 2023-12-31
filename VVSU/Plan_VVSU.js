let planXML = `
<Plan object="VVSU">
  <Exit id="2" name="Вход 2" floor="3" show_name="1" />
 
  <Floor num="3">
    <Path start="2" type="left_right_walls" dir="up">
      <Point id="near_exit2" name="у входа 2" />
      <Path start="near_exit2" rotate="left" type="no_walls">
        <Point name="Андеграунд" show_name="1" />
      </Path>
      <Room name="Кофейня" location="left" />
      <Door/>
      <Point id="exit2_exit2" name="Exit" />
      <Path rotate="left" start="exit2_exit2" type="no_walls">
        <Point/>
        <Point id="exit2_exit2_left" name="Угол" />
        <Path rotate="right" type="left_wall" start="exit2_exit2_left">
          <Room name="Лестница" location="left" />
          <Room name="Буфет" location="left" />
          <Room name="Голубиная падь" location="left" />
          <Door id="door_golub_pad" />
          <Path rotate="left" type="left_right_walls" start="door_golub_pad">
            <Point id="corner1" name="Кафе" location="left" show_name="1" />
            <Room location="right" name="Студотряды" />
            <Stairs id="stairs1" name="Лестница" />
            <Path start="corner1" rotate="right" type="left_right_walls">
               <Point />
               <Point id="corner2" name="Угол" />
               <Path start="corner2" rotate="forward" type="left_wall">
                 <Room location="left" id="1306" name="ToiletM" />
                 <Room location="left" id="1308" name="ToiletW" />
	         <Path start="1308" rotate="forward" type="left_right_walls">
	           <Room name="Блинная" />
                   <Door id="kaf_mark_torg_begin" name="Кафедра маркетинга и торговли" show_name="1" />
                   <Path rotate="forward" start="kaf_mark_torg_begin" type="left_right_walls">
                     <Room id="4301" location="right" />
                     <Room id="4303" location="right" />
                     <Room id="4305" location="right" />
                     <Room id="4307" location="right" />
                     <Room id="4309" location="right" />
                     <Room id="4311" location="right" />
                     <Room id="4313" location="right" />
                     <Room id="4315" location="right" />
                     <Path rotate="left" start="4313" type="left_right_walls">
                       <Door name="Кафедра транспортных процессов" show_name="1" />
                       <Room location="left" name="4302" />
                       <Stairs id="stairs2" name="Лестница" />
                     </Path>
                   </Path>
                 </Path>
               </Path>
            </Path>
          </Path>
        </Path>
      </Path>
      <Path rotate="right" start="exit2_exit2" type="no_walls">
        <Point/>
        <Point id="exit2_exit2_right" name="Угол" />
        <Path rotate="left" type="right_wall" start="exit2_exit2_right">
          <Room name="Буфет" location="right" />
          <Room name="Точка кипения" location="right" />  
          <Room name="Столовая" location="right" />
          <Room name="Столовая" location="right" />
          <Room id="1311" location="right" />
          <Room id="1313" name="1313" location="right" />
          <Path start="1313" rotate="left" type="left_right_walls">
            <Room location="left" id="1309" />
            <Room location="right" id="1312" />
            <Room location="left" id="1307" />
            <Room location="right" id="1310" />
            <Point id="corner2" />
          </Path>
          <Path start="1313" rotate="forward" type="left_right_walls">
            <Room location="right" id="1315" />
            <Room location="right" id="1317" />
            <Room location="left" id="1314" />
            <Room location="left" id="1316" />
            <Room location="right" id="1319" />
            <Room location="left" id="1318" />
            <Room location="left" id="1320" />
            <Room location="left" id="1322" />
            <Room location="left" id="1324" />
            <Room location="right" id="1321" />
            <Room location="left" id="1326" />
            <Room location="right" id="1323" />
            <Room location="left" id="1328" />
            <Room location="right" id="1325" />
            <Room location="left" id="1330" />
            <Room location="right" id="1327" />
            <Room location="left" id="1332" />
            <Room location="right" id="1331" />
            <Room location="left" id="1334" />
            <Path start="1334" rotate="right" type="left_wall">
              <Stairs id="big_stairs" name="Большая лестница" />
              <Path start="big_stairs" rotate="left" type="left_right_walls">
                <Room location="left" id="1336" />
                <Room location="right" id="1333" />
                <Room location="right" id="1335" />
                <Room location="left" id="1338" />
                <Door />
                <Room location="right" id="1337" />
                <Room location="left" id="1340" />
                <Room location="right" id="1339" />
                <Room location="left" id="1342" />
                <Room location="left" id="1344" />
                <Room location="left" id="1346" />
                <Room location="right" id="1341" />
                <Point name="Зона отдыха" show_name="1" />
                <Room location="left" id="1348" />
                <Room location="right" id="1343" />
                <Room location="left" id="1350" />
                <Room location="right" id="1345" />
                <Room location="left" id="1352" />
                <Point name="Касса" location="right" show_name="1" />
                <Room location="left" id="1354" />
                <Room location="right" id="1349" />
                <Room location="left" id="1356" />
                <Room location="right" id="1351" />
                <Room location="right" id="1353" />
                <Room location="left" id="1358" />
                <Stairs id="stairs5" name="Лестница" />
              </Path>
            </Path>
          </Path>
        </Path>
      </Path>
    </Path>
  </Floor>

  <Floor num="4">
    <Stairs id="big_stairs" />
    <Path start="big_stairs" type="left_right_walls" dir="up">
      <Room location="right" id="1431" />
      <Room location="left" id="1421" />
      <Room location="right" id="1433" />
      <Room location="left" id="1426" />
      <Door/>
      <Room location="left" id="1428" />
      <Room location="right" id="1437" />
      <Room location="left" id="1430" />
      <Room location="left" id="1432" />
      <Room location="right" id="1439" />
      <Room location="left" id="1434" />
      <Room location="right" id="1441" />
      <Room location="left" id="1436" />
      <Room location="left" id="1438" />
      <Room location="right" id="1443" />
      <Room location="left" id="1440" />
      <Room location="right" id="1445" />
      <Room location="left" id="1442" />
      <Room location="right" id="1447" />
      <Room location="left" id="1444" />
      <Room location="right" id="1449" />
      <Room location="left" id="1446" />
      <Room location="right" id="1451" />
      <Room location="right" id="1453" />
      <Room location="left" id="1448" />
      <Stairs id="stairs5" />
      <Path rotate="forward" start="stairs5" type="right_wall">
        <Room location="right" id="1457" />
      </Path>
    </Path>
  </Floor>

  <Exit id="1" name="Вход 1" floor="1" show_name="1" />
  <Floor num="1">
    <Path start="1" type="right_wall" dir="up">
      <Point id="near_exit1" />
      <Room location="right" name="Лотос" />
      <Stairs id="stairs5" name="Лестница" />
      <Path start="near_exit1" rotate="left" type="left_right_walls">
        <Room location="right" name="Гардероб" />
        <Room location="right" id="1140" />
        <Room location="left" id="1131" />
        <Room location="left" id="1129" />
        <Room location="left" id="1127" />
        <Room location="left" id="1125" />
        <Room location="right" id="1132" />
        <Room location="right" id="1130" />
        <Room location="left" id="1123" />
        <Room location="right" id="1128" />
        <Room location="right" id="1126" />
        <Point id="near_big_stairs_1" />
        <Path rotate="left" start="near_big_stairs_1" type="left_right_walls">
          <Room location="left" id="1119" />
          <Room location="right" id="1117" />
        </Path>
        <Path rotate="forward" start="near_big_stairs_1" type="left_walls">
          <Stairs id="big_stairs" />
          <Path rotate="right" start="big_stairs" type="left_right_walls">
            <Point id="corridor_1_near_stairs" />
            <Path rotate="left" start="corridor_1_near_stairs" type="left_right_walls">
              <Room id="1115" location="left" />
              <Room id="1113" location="left" />
              <Room id="1111" location="left" />
              <Room id="1114" location="right" />
              <Room id="1109" location="left" />
              <Room id="1107" location="left" />
              <Room id="1112" location="right" />
              <Room id="1105" location="left" />
              <Room id="1102" location="right" />
            </Path>
          </Path>
        </Path>
      </Path>
    </Path>
  </Floor>

</Plan>
`
