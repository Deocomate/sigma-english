/* ===== VOCABULARY: 3 boards, from the class folders ===== */
/* card: [term, part of speech, IPA, English meaning, Vietnamese meaning, example from source with {form} or ""] */
const BOARDS=[
{id:"col",title:"Collocations",sub:"Unit 2 · Countryside",acc:"mint",lessons:[
 {id:"col-a",title:"A. Writing about the landscape",cards:[
  ["surrounding countryside","collocation","/səˈraʊndɪŋ ˈkʌntrisaɪd/","the countryside all around a place","vùng quê xung quanh","From my room I look out over the {surrounding countryside}."],
  ["familiar landscape","collocation","/fəˈmɪliə ˈlændskeɪp/","a landscape you know very well","phong cảnh quen thuộc","It is very different from the {familiar landscape} I see from the windows at home."],
  ["gentle landscape","collocation","/ˈdʒentl ˈlændskeɪp/","a soft, calm landscape with nothing harsh or dangerous in it","phong cảnh êm dịu","At home it is a {gentle landscape} with open fields."],
  ["bleak landscape","collocation","/bliːk ˈlændskeɪp/","a cold, empty landscape that does not feel welcoming","phong cảnh hoang vắng, ảm đạm","Here it is a {bleak landscape} with rocky mountains in the distance."],
  ["follow a path","collocation","/ˈfɒləʊ ə pɑːθ/","walk along a path","đi theo một lối mòn","Yesterday we {followed a path} down to the lake."],
  ["catch a glimpse of","collocation","/kætʃ ə ɡlɪmps ɒv/","see something for a very short moment","thoáng nhìn thấy","As we turned a corner we {caught a glimpse of} a kingfisher standing in the water."],
  ["take a picture","collocation","/teɪk ə ˈpɪktʃə/","take a photograph","chụp ảnh","John tried to {take a picture} of it but it caught sight of us and flew off."],
  ["round a bend","collocation","/raʊnd ə bend/","go around a curve in a road, path or river","đi qua khúc quanh","A little further on we {rounded a bend} and St John’s Abbey came into view."],
  ["fall into ruin","collocation","/fɔːl ˈɪntuː ˈruːɪn/","become old and broken, so that only parts are left","đổ nát, hoang tàn","The Abbey {fell into ruin} about three hundred years ago."],
  ["mountains tower","collocation","/ˈmaʊntɪnz ˈtaʊə/","mountains rise very high above something","núi cao sừng sững","It stands beside a fast-flowing river with {mountains towering} above it."],
  ["unspoilt countryside","collocation","/ˌʌnˈspɔɪlt ˈkʌntrisaɪd/","countryside that has not been changed by industry or modern buildings","vùng quê còn hoang sơ","The cottage is in some wonderful {unspoilt countryside}."],
  ["dense forest","collocation","/dens ˈfɒrɪst/","a thick forest with trees growing very close together","rừng rậm","The cottage is on the edge of a {dense forest}."],
  ["stream winds","collocation","/striːm waɪndz/","a small river makes lots of bends and does not flow in a straight line","dòng suối uốn khúc","The {stream winds} through the forest."]],
 context:[
  {type:"read",title:"A. Writing about the landscape",instr:"Read. Tap a blue phrase to see its card.",paras:[
   "From my room I look out over the surrounding countryside. It is very different from the familiar landscape I see from the windows at home. At home it is a gentle landscape¹ with open fields. Here it is a bleak landscape² with rocky mountains in the distance.",
   "Yesterday we followed a path down to the lake. As we turned a corner we caught a glimpse of³ a kingfisher standing in the water. John tried to take a picture⁴ of it but it caught sight of us and flew off. A little further on we rounded a bend⁵ and St John’s Abbey came into view. The Abbey fell into ruin⁶ about three hundred years ago. Although it lies in ruins, it is well worth seeing as it stands in a dramatic setting on a steep slope beside a fast-flowing river with mountains towering⁷ above it.",
   "The cottage is in some wonderful unspoilt countryside⁸ on the edge of a dense forest⁹. Unfortunately the trees block the view of the snow-covered mountains. It has a little garden with a stream at the end of it. The stream winds¹⁰ through the forest. They wanted to build a timber factory here but the local people said that it would destroy the countryside and, fortunately, their campaign to protect the environment succeeded."]},
  {type:"match",title:"What do the numbered phrases mean?",instr:"Match each phrase (1–10) with its meaning.",
   left:["1. gentle landscape","2. bleak landscape","3. caught a glimpse of","4. take a picture","5. rounded a bend","6. fell into ruin","7. mountains towering","8. unspoilt countryside","9. dense forest","10. stream winds"],
   right:["a soft, calm landscape with nothing harsh or dangerous","a cold, empty landscape","saw something for a very short moment","take a photograph","went around a curve in the path","became old and broken","mountains rising very high","countryside not changed by industry or modern buildings","a thick forest","a small river makes lots of bends"],ans:[0,1,2,3,4,5,6,7,8,9]}]},
 {id:"col-b",title:"B. The language of tourism",cards:[
  ["uninterrupted view","collocation","/ˌʌnɪntəˈrʌptɪd vjuː/","a view with no buildings or objects blocking it","tầm nhìn không bị che chắn","From most rooms there are {uninterrupted views} of the castle."],
  ["panoramic view","collocation","/ˌpænəˈræmɪk vjuː/","a wide view of a large area","tầm nhìn toàn cảnh","From the top floor restaurant diners have a {panoramic view} of the countryside."],
  ["spectacular view","collocation","/spekˈtækjələ vjuː/","a very beautiful and impressive view","cảnh đẹp ngoạn mục","From the balcony there is a {spectacular view} of the mountains."],
  ["enjoy / admire a view","collocation","/ɪnˈdʒɔɪ · ədˈmaɪər ə vjuː/","to look at and enjoy the scenery","ngắm cảnh","We stopped for a few minutes to {enjoy / admire the view}."],
  ["breathtaking scenery","collocation","/ˈbreθteɪkɪŋ ˈsiːnəri/","scenery that is extremely beautiful","phong cảnh đẹp đến nghẹt thở","The area has some {breathtaking scenery} – mountains, cliffs, lakes."],
  ["dominate the landscape","collocation","/ˈdɒmɪneɪt ðə ˈlændskeɪp/","to be the most noticeable feature","nổi bật nhất trong cảnh quan","The castle {dominates the landscape} for miles around."],
  ["beach stretches","collocation","/biːtʃ ˈstretʃɪz/","long areas of beach","bãi biển trải dài","A beautiful {beach stretches} for miles along the coast."],
  ["sandy beach","collocation","/ˈsændi biːtʃ/","a beach with a lot of sand","bãi biển nhiều cát","The hotel has its own {sandy beach}."],
  ["secluded beach","collocation","/sɪˈkluːdɪd biːtʃ/","a quiet beach with few people","bãi biển vắng vẻ, biệt lập","You will love the {secluded beaches}."],
  ["golden sands","collocation","/ˈɡəʊldən sændz/","yellow or golden-coloured sand","bãi cát vàng","You can wander for miles along the {golden sands}."],
  ["peaceful / tranquil countryside","collocation","/ˈpiːsfl · ˈtræŋkwɪl ˈkʌntrisaɪd/","a calm and quiet rural area","vùng quê yên bình","You can quickly go from the hustle and bustle of the town to the {peaceful / tranquil countryside}."]],
 context:[
  {type:"cloze",title:"B. The language of tourism",instr:"Complete the meanings in the table.",lines:[
   "uninterrupted view → a view with no buildings or objects {blocking|block|blocks} it",
   "panoramic view → a {wide} view of a large area",
   "spectacular view → a very beautiful and {impressive} view",
   "enjoy / admire a view → to {look at} and enjoy the scenery",
   "breathtaking scenery → scenery that is {extremely beautiful|very beautiful}",
   "dominate the landscape → to be the most {noticeable|important|visible} feature",
   "beach stretches → {long} areas of beach",
   "sandy beach → a beach with a lot of {sand}",
   "secluded beach → a {quiet} beach with few people",
   "golden sands → yellow or golden-{coloured|colored} sand",
   "peaceful / tranquil countryside → a {calm} and quiet rural area"]}]},
 {id:"col-p",title:"Practice",cards:[],context:[
  {type:"cloze",title:"Task 1. Complete the collocations",instr:"Write the missing words.",lines:[
   "1. Near the lake there is an old house that {fell into} ruin about a hundred years ago. It stands in a lovely landscape, surrounded by {open} fields.",
   "2. We {followed} a footpath along the river for about three kilometres. In the distance there were {towering} mountains.",
   "3. We walked through a {dense} forest; it was very dark among the trees."]},
  {type:"cloze",title:"Task 2. Correct the collocation errors",instr:"Each underlined word is wrong. Write the correct word.",lines:[
   "A chain of <<snowy>> {snow-covered|towering} mountains runs down the east of the country. The Wassa River, the country’s biggest, <<dances>> {flows} slowly from the northern mountains to the sea. Even in summer it is a <<sour>> {bleak} landscape, with its dark, stony mountains and its cold streams. But for me it is the <<family>> {familiar} landscape of my childhood and I am happy that the government has decided to <<guard>> {protect} this environment. It is a dramatic <<set>> {setting} which is <<a lot worth>> {well worth} visiting for anyone who likes spectacular views."]},
  {type:"cloze",title:"Task 3. Choose the correct collocation",instr:"Tap the correct word.",lines:[
   "1. We [made|*took|put] a lot of photographs because it was such a beautiful day.",
   "2. As I [returned|*turned] the corner I [made|*caught|took] a glimpse of the house through the trees.",
   "3. A long [sanded|*sandy] beach [reached|ran|*stretched] for miles in front of us.",
   "4. Unfortunately, the new hotel [*blocks|jams|stops] the view of the castle."]},
  {type:"cloze",title:"Task 4. Replace the words in brackets",instr:"Write ONE word which collocates with the word in bold.",lines:[
   "1. It’s a beautiful town and the **countryside** (which is all around it) is even more beautiful. → {surrounding}",
   "2. The tower (is the most important and visible thing on) **the landscape**. → {dominates}",
   "From the top of the tower, you get a **view** (which allows you to see a very wide stretch) of the surrounding area. → {panoramic}",
   "3. There are lovely **beaches** (with very few people on them). → {secluded}",
   "4. We travelled through some **scenery** (which was extremely exciting and beautiful). → {breathtaking}",
   "5. From the windows of our villa we had **views** (which were continuous, without any obstacles), of the lakes and mountains. → {uninterrupted}"]}]}
]},
{id:"wt",title:"Words in Topic",sub:"Lost in Squid Game",acc:"sky",lessons:[
 {id:"wt-1",title:"Vocabulary practice. Lost in Squid Game",cards:[
  ["to fulfill one’s wish","verb phrase","/fʊlˈfɪl wʌnz wɪʃ/","to carry out or satisfy a desire or request","thực hiện điều ước","",["fulfill"]],
  ["to intercept","verb","/ˌɪntəˈsept/","to stop something or someone from arriving at their destination","chặn lại (giữa đường)","",["intercept"]],
  ["clumsy","adjective","/ˈklʌmzi/","moving or doing things in a way that is not smooth or careful","vụng về",""],
  ["to dust off","phrasal verb","/dʌst ɒf/","remove dust or dirt from a surface","phủi bụi","",["dust off"]],
  ["vile","adjective","/vaɪl/","extremely unpleasant or bad","kinh tởm, rất tệ",""],
  ["in all seriousness","phrase","/ɪn ɔːl ˈsɪəriəsnəs/","used to emphasize a serious statement or discussion","nói nghiêm túc thì",""],
  ["peephole","noun","/ˈpiːphəʊl/","a small opening in a door or wall to look through","lỗ nhìn (mắt thần trên cửa)",""],
  ["to dart off","phrasal verb","/dɑːt ɒf/","run quickly and suddenly in a specific direction","lao vụt đi","",["dart off"]],
  ["out of the question","phrase","/aʊt əv ðə ˈkwestʃən/","not possible or acceptable under any circumstances","không thể được, không đời nào",""],
  ["a figment of one’s imagination","phrase","/ə ˈfɪɡmənt əv wʌnz ɪˌmædʒɪˈneɪʃn/","something imagined or invented in the mind but does not exist in reality","điều do trí tưởng tượng bịa ra",""],
  ["disbelief","noun","/ˌdɪsbɪˈliːf/","the feeling of being unable to believe something is true","sự không tin nổi",""],
  ["to rummage","verb","/ˈrʌmɪdʒ/","to move things around carelessly while searching","lục lọi","",["rummage"]],
  ["to make a fuss","verb phrase","/meɪk ə fʌs/","react to a situation in an exaggerated or excessive way","làm ầm ĩ, làm to chuyện","",["make a fuss"]]],
 context:[
  {type:"match",title:"Task 1. Match the words with their definitions",instr:"Tap a word, then tap its definition.",
   left:["1. To fulfill one’s wish","2. To intercept","3. Clumsy","4. To dust off","5. Vile","6. In all seriousness","7. Peephole","8. To dart off","9. Out of the question","10. A figment of one’s imagination","11. Disbelief","12. To rummage","13. To make a fuss"],
   right:["A. Something imagined or invented in the mind but does not exist in reality.","B. The feeling of being unable to believe something is true.","C. Remove dust or dirt from a surface.","D. Moving or doing things in a way that is not smooth or careful.","E. React to a situation in an exaggerated or excessive way.","F. Used to emphasize a serious statement or discussion.","G. Run quickly and suddenly in a specific direction.","H. Extremely unpleasant or bad.","I. To stop something or someone from arriving at their destination.","J. A small opening in a door or wall to look through.","K. Not possible or acceptable under any circumstances.","L. To move things around carelessly while searching.","M. To carry out or satisfy a desire or request."],
   ans:[12,8,3,2,7,5,9,6,10,0,1,11,4]},
  {type:"cloze",title:"Task 2. Use the vocabulary words to fill in the blanks",instr:"Write the word or phrase. Change its form if needed.",lines:[
   "1. After years of hard work, she finally managed to {fulfill|fulfil} her dream of becoming a doctor.",
   "2. The police were able to {intercept} the package before it reached the suspect.",
   "3. The toddler’s {clumsy} movements made everyone in the room laugh.",
   "4. He {dusted off} the old photo album from the shelf to show it to his grandchildren.",
   "5. That food smells absolutely {vile}! I can’t eat it.",
   "6. {In all seriousness, I|In all seriousness I} think we should consider the consequences of this decision.",
   "7. She peeked through the {peephole} to see who was at the door.",
   "8. The cat {darted off} as soon as it heard a loud noise.",
   "9. Buying a new car right now is completely {out of the question}.",
   "10. That monster you think you saw is just {a figment of your imagination|a figment of my imagination}; it’s not real.",
   "11. She stared in {disbelief} as the magician made the rabbit disappear.",
   "12. He started to {rummage} through the box, looking for his missing keys.",
   "13. Please don’t {make a fuss} over something so trivial."]}]}
]},
{id:"idm",title:"Idioms",sub:"Unit 4 · People Do the Strangest Things",acc:"peach",lessons:[
 {id:"idm-1",title:"People Do the Strangest Things",cards:[
  ["On Ice","idiom","/ɒn aɪs/","set aside for future use","tạm gác lại (để dùng sau)",""],
  ["Shoot the Breeze","idiom","/ʃuːt ðə briːz/","chat informally","tán gẫu",""],
  ["Bite the Dust","idiom","/baɪt ðə dʌst/","be unsuccessful, go down in defeat","thất bại, thua cuộc",""],
  ["Bend Over Backwards","idiom","/bend ˈəʊvə ˈbækwədz/","to make a special effort, especially in order to please","cố gắng hết sức (để làm vừa lòng ai)",""],
  ["Hit the Hay","idiom","/hɪt ðə heɪ/","go to bed","đi ngủ",""],
  ["Cough Up","idiom","/kɒf ʌp/","give unwillingly","miễn cưỡng đưa (tiền)",""],
  ["Jump the Gun","idiom","/dʒʌmp ðə ɡʌn/","to be hasty, to begin prematurely; act too hastily","hấp tấp, làm quá sớm",""],
  ["Scratch Someone’s Back","idiom","/skrætʃ ˈsʌmwʌnz bæk/","to return a favor","có qua có lại",""],
  ["Hit the Ceiling","idiom","/hɪt ðə ˈsiːlɪŋ/","become very angry","nổi giận đùng đùng",""],
  ["Fork Over","idiom","/fɔːk ˈəʊvə/","hand over, give","đưa, trao (tiền)",""],
  ["Turn Someone Off","idiom","/tɜːn ˈsʌmwʌn ɒf/","disgust someone","làm ai chán ghét, mất hứng",""],
  ["Go Fly a Kite","idiom","/ɡəʊ flaɪ ə kaɪt/","go away!","đi chỗ khác đi!",""],
  ["Kick the Bucket","idiom","/kɪk ðə ˈbʌkɪt/","die","qua đời (cách nói suồng sã)",""],
  ["Raise a Stink","idiom","/reɪz ə stɪŋk/","protest strongly, complain","phản đối ầm ĩ",""]],
 context:[
  {type:"match",title:"Task 1. Match the idiom with its meaning",instr:"Tap an idiom, then tap its meaning.",
   left:["1. On Ice","2. Shoot the Breeze","3. Bite the Dust","4. Bend Over Backwards","5. Hit the Hay","6. Cough Up","7. Jump the Gun","8. Scratch Someone’s Back","9. Hit the Ceiling","10. Fork Over","11. Turn Someone Off","12. Go Fly a Kite","13. Kick the Bucket","14. Raise a Stink"],
   right:["A. Chat informally","B. Set aside for future use","C. Go to bed","D. Give unwillingly","E. To make a special effort, especially in order to please","F. To return a favor","G. Go away!","H. Unsuccessful, go down in defeat","I. To be hasty, to begin prematurely; act too hastily","J. Hand over, give","K. Become very angry","L. Disgust someone","M. Protest strongly, complain","N. Die"],
   ans:[1,0,7,4,2,3,8,5,10,9,11,6,13,12]},
  {type:"cloze",title:"Task 2. Fill in the blanks",instr:"Write the idiom. Change its form if needed.",lines:[
   "1. After the meeting, the project was put {on ice} until further notice.",
   "2. We didn’t have anything specific to talk about, just wanted to {shoot the breeze}.",
   "3. The team fought hard but eventually had to {bite the dust}.",
   "4. She always tries to {bend over backwards} to make sure everyone is happy.",
   "5. I’m exhausted; I think I’ll {hit the hay}.",
   "6. I had to {cough up|fork over} $50 for the concert tickets, which I wasn’t too happy about.",
   "7. Don’t {jump the gun}; we need to wait for the official announcement.",
   "8. If you {scratch my back} this time, I’ll help you next time.",
   "9. When he found out what happened, he {hit the ceiling}.",
   "10. I had to {fork over|cough up} my share of the bill, even though I didn’t eat much.",
   "11. His rude comments really {turned me off|turn me off}.",
   "12. If you’re not going to help, then go {fly a kite}.",
   "13. The old man finally {kicked the bucket} after a long illness.",
   "14. The new policy caused a lot of people to {raise a stink}."]}]},
 {id:"idm-t",title:"Mini test. People Do the Strangest Things",cards:[],context:[
  {type:"mcq",title:"Part A: Multiple Choice",instr:"Choose the best answer.",items:[
   {q:"1. Which idiom means “Go to bed”?",o:["Hit the Hay","Bite the Dust","Cough Up","Jump the Gun"],a:0},
   {q:"2. Which idiom is used to describe chatting informally?",o:["Scratch Someone’s Back","Raise a Stink","Shoot the Breeze","Hit the Ceiling"],a:2},
   {q:"3. Which idiom means “To make a special effort, especially in order to please”?",o:["Turn Someone Off","Bend Over Backwards","Fork Over","On Ice"],a:1},
   {q:"4. Which idiom means “Disgust someone”?",o:["Go Fly a Kite","Turn Someone Off","Kick the Bucket","Raise a Stink"],a:1},
   {q:"5. Which idiom means “Give unwillingly”?",o:["Hit the Ceiling","Jump the Gun","Cough Up","Bite the Dust"],a:2}]},
  {type:"cloze",title:"Part B: Fill in the Blanks",instr:"Write the idiom. Change its form if needed.",lines:[
   "6. When he found out about the mistake, he {hit the ceiling} and started yelling at everyone. (Hint: idiom for becoming very angry)",
   "7. She really {bent over backwards} to help me finish the project on time. (Hint: idiom for making a special effort)",
   "8. After hours of negotiation, they finally agreed to {cough up|fork over} the money. (Hint: idiom for giving unwillingly)",
   "9. My idea for the new project was put {on ice} until we have more funds. (Hint: idiom for setting aside for future use)",
   "10. He {bit the dust} after he was defeated in the competition. (Hint: idiom for going down in defeat)"]},
  {type:"mcq",title:"Part C: True or False",instr:"Choose True or False.",items:[
   {q:"11. “Go Fly a Kite” means to become very angry.",o:["True","False"],a:1},
   {q:"12. “Fork Over” means to hand over or give.",o:["True","False"],a:0},
   {q:"13. “Jump the Gun” means to start something too early.",o:["True","False"],a:0},
   {q:"14. “Scratch Someone’s Back” means to return a favor.",o:["True","False"],a:0},
   {q:"15. “Raise a Stink” means to chat informally.",o:["True","False"],a:1}]}]}
]}
];

/* ===== GRAMMAR: Unit 1. Present simple – Present continuous (class handout) =====
   Example markup: [s:subject] [v:verb] [t:time / how often]  */
const G_UNIT="Unit 1. Present simple – Present continuous";
const G_LEGEND=[["s","subject"],["v","verb"],["t","time word / how often"]];
const TL={ps:{label:"Present simple · permanent states, routines, general truths",from:0,to:1,cls:"v striped"},
 pt:{label:"Present simple · programmes & timetables",from:.42,to:.8,cls:"v"},
 pc:{label:"Present continuous · now",from:.3,to:.62,cls:"s"}};
const GRAMMAR=[
{id:"g1",n:1,title:"Present simple",related:"Adverbs of frequency",
 situation:{title:"In the office",lines:["[s:Richard Taylor and Sarah Perkins] [v:work] in the same office.","[s:Sarah] [v:arrives] at work [t:at 9 o’clock] but [s:Richard] [v:doesn’t get] to the office [t:until 10 o’clock]."],
  checks:[{q:"Who gets to the office at 10 o’clock?",o:["Sarah","Richard"],a:1},{q:"Is this something that happens every day?",o:["Yes, it is a routine.","No, it is happening only now."],a:0}]},
 board:{timeline:["ps","pt",{k:"pc",dim:true}],cards:[
  {icon:"blocks",title:"Forms",tag:"FORM",formula:[["(+)","I / you / we / they + V · he / she / it + V-s/-es"],["(−)","do not (don’t) / does not (doesn’t) + V"],["(?)","Do / Does + subject + V ?"]],
   text:"We usually add -s to the third person singular. We do not add -s to the main verb with does / doesn’t.",
   examples:["(+) [s:He] [v:wakes up] [t:at 7 a.m. every morning].","(−) [s:He] [v:doesn’t drink] coffee [t:in the morning].","(?) [v:Does] [s:he] [v:go] to school [t:on Mondays]?"]},
  {icon:"pencil",title:"Spelling",tag:"-S / -ES",formula:[["most verbs","+ s · read → reads"],["-ss, -sh, -ch, -x, -o","+ es · kiss → kisses, brush → brushes, teach → teaches, fix → fixes, go → goes"],["consonant + y","-y → -ies · try → tries, fly → flies"],["vowel + y","+ s · buy → buys"]]},
  {icon:"speaker",title:"Pronunciation",tag:"SOUND",formula:[["/s/","after /f/, /k/, /p/, /t/ · laughs, drinks, sleeps, hates"],["/ɪz/","after /s/, /ʃ/, /tʃ/, /dʒ/, /z/ · misses, wishes, matches, arranges, rises"],["/z/","any other sound · dreams, stays, begins, stands, saves"]]},
  {icon:"sun",title:"Use",tag:"USE",text:"Permanent states · repeated actions and daily routines · general truths and laws of nature · programmes and timetables.",
   examples:["[s:Oil] [v:floats] on water.","[s:He] [t:usually] [v:starts] work [t:at 9 am].","[s:The moon] [v:moves] round the earth.","[s:The bus] [v:leaves] [t:in ten minutes]."]},
  {icon:"loop",title:"Adverbs of frequency",tag:"HOW OFTEN?",formula:[["always","100%"],["usually","75%"],["often","50%"],["sometimes","25%"],["rarely / seldom","10%"],["never","0%"]],
   text:"They go before the main verb, but after the verb to be and after auxiliary verbs (can, do, must…). Time expressions: every day / week, on Mondays, in the morning, at night, at the weekend.",
   examples:["[s:Peter] [t:often] [v:visits] his grandparents [t:at the weekend].","[s:Jim] [v:is] [t:always] on time for work.","[s:Bob] [v:can] [t:never] [v:wake up] early in the morning."]},
  {icon:"warn",title:"Careful!",tag:"CAREFUL!",careful:true,text:"rarely, seldom and never have a negative meaning, so they are never used with not. No -s after does / doesn’t.",
   examples:["[s:He] [t:rarely] [v:goes] to the cinema.","[s:I] [t:never] [v:take] sugar in my coffee."],wrong:["He doesn’t rarely go to the cinema.","Does he goes to school on Mondays?"]}]},
 recog:[
  {type:"mcq",title:"What is the use?",instr:"Choose the use of the present simple.",items:[
   {q:"Oil floats on water.",o:["permanent state","daily routine","general truth / law of nature","timetable"],a:0},
   {q:"Mr Gibson is a businessman. He lives in New York.",o:["permanent state","daily routine","general truth / law of nature","timetable"],a:0},
   {q:"He usually starts work at 9 am.",o:["permanent state","daily routine","general truth / law of nature","timetable"],a:1},
   {q:"He often stays at the office until late in the evening.",o:["permanent state","daily routine","general truth / law of nature","timetable"],a:1},
   {q:"The moon moves round the earth.",o:["permanent state","daily routine","general truth / law of nature","timetable"],a:2},
   {q:"The bus leaves in ten minutes.",o:["permanent state","daily routine","general truth / law of nature","timetable"],a:3}]},
  {type:"mcq",title:"Which sound?",instr:"How do we say the -s ending?",items:[
   {q:"laughs",o:["/s/","/ɪz/","/z/"],a:0},{q:"misses",o:["/s/","/ɪz/","/z/"],a:1},{q:"dreams",o:["/s/","/ɪz/","/z/"],a:2},
   {q:"sleeps",o:["/s/","/ɪz/","/z/"],a:0},{q:"arranges",o:["/s/","/ɪz/","/z/"],a:1},{q:"stays",o:["/s/","/ɪz/","/z/"],a:2}]},
  {type:"mcq",title:"How often?",instr:"Choose the right percentage.",items:[
   {q:"usually",o:["100%","75%","50%","25%","10%","0%"],a:1},{q:"sometimes",o:["100%","75%","50%","25%","10%","0%"],a:3},{q:"rarely / seldom",o:["100%","75%","50%","25%","10%","0%"],a:4}]},
  {type:"mcq",title:"Where does the adverb go?",instr:"Choose the correct sentence.",items:[
   {q:"Sharon / never / drinks coffee",o:["Sharon never drinks coffee.","Sharon drinks never coffee."],a:0},
   {q:"Jim / always / is on time for work",o:["Jim always is on time for work.","Jim is always on time for work."],a:1},
   {q:"He / rarely / goes to the cinema",o:["He doesn’t rarely go to the cinema.","He rarely goes to the cinema."],a:1}]}],
 fill:[
  {type:"cloze",title:"Task 1. Write the present simple he/she/it form",instr:"Example: carry → carries",cols:true,lines:[
   "1. cost → {costs}","2. clean → {cleans}","3. dance → {dances}","4. eat → {eats}","5. fry → {fries}","6. go → {goes}","7. have → {has}","8. like → {likes}",
   "9. pass → {passes}","10. play → {plays}","11. talk → {talks}","12. teach → {teaches}","13. try → {tries}","14. use → {uses}","15. wash → {washes}","16. worry → {worries}"]},
  {type:"cloze",title:"Task 3. Complete the text with the present simple",instr:"Use the verbs in brackets.",lines:[
   "Daisy: Do you share a bedroom?",
   "Anna: Yes, 1. {I do} (I/do). I share with my sister.",
   "Daisy: 2. {Do you mind} (you/mind) sharing?",
   "Anna: There’s one big problem. We 3. {don't go|do not go} (not/go) to the same school. So my sister 4. {gets} (get) up at half past six and 5. {catches} (catch) a bus at quarter past seven. That 6. {wakes} (wake) me up, but I 7. {don't get|do not get} (not/get) up until half past seven. I 8. {walk} (walk) to school and it only 9. {takes} (take) ten minutes.",
   "Daisy: Are there any other problems?",
   "Anna: Well, my sister 10. {doesn't tidy|does not tidy} (not/tidy) the room. 11. {She leaves} (she/leave) her clothes on the floor. That 12. {makes} (make) me angry.",
   "Daisy: 13. {Does she do} (she/do) anything else annoying?",
   "Anna: She sometimes 14. {watches} (watch) loud music videos on her laptop. I 15. {don't like|do not like} (not/like) that.",
   "Daisy: 16. {Do you do} (you/do) anything annoying?",
   "Anna: Me? No. I’m perfect."]}],
 apply:[
  {type:"write",title:"Task 15. Ask Liz questions about herself and her family",instr:"Write the question.",items:[
   {q:"1. You know that Liz plays tennis. You want to know how often. Ask her.",example:"How often do you play tennis?"},
   {q:"2. Perhaps Liz’s sister plays tennis too. You want to know. Ask Liz.",cue:"___ your sister ___?",a:["Does your sister play tennis?"]},
   {q:"3. You know that Liz reads a newspaper every day. You want to know which one. Ask her.",a:["Which newspaper do you read?","Which newspaper do you read every day?","What newspaper do you read?"]},
   {q:"4. You know that Liz’s brother works. You want to know what he does. Ask Liz.",a:["What does your brother do?"]},
   {q:"5. You know that Liz goes to the cinema a lot. You want to know how often. Ask her.",a:["How often do you go to the cinema?"]},
   {q:"6. You don’t know where Liz’s mother lives. Ask Liz.",a:["Where does your mother live?"]}]}]},

{id:"g2",n:2,title:"Present continuous",related:"Spelling of -ing",
 situation:{title:"On holiday",lines:["[s:Bob and Claire] [v:aren’t working] [t:today]. [s:They]’re on holiday. [s:They]’[v:re having] a nice time.","A: What [v:is] [s:Bob] [v:doing] [t:now]?","B: [s:He] [v:is taking] a picture of Claire."],
  checks:[{q:"Are Bob and Claire working today?",o:["Yes, they are.","No. They’re on holiday."],a:1},{q:"What is Bob doing now?",o:["He is taking a picture of Claire.","He is working."],a:0}]},
 board:{timeline:[{k:"ps",dim:true},"pc"],cards:[
  {icon:"blocks",title:"Forms",tag:"FORM",formula:[["(+)","I am · he / she / it is · you / we / they are + V-ing"],["(−)","am not (’m not) · is not (isn’t) · are not (aren’t) + V-ing"],["(?)","Am / Is / Are + subject + V-ing ?"]],
   text:"We form the present continuous with the verb to be and the main verb with -ing. The -ing verb is the same in all persons.",
   examples:["(+) [s:Peter] [v:is feeding] his dog.","(−) [s:They] [v:aren’t talking] in the class [t:now].","(?) [v:Are] [s:you] [v:cooking] in the kitchen?"]},
  {icon:"pencil",title:"Spelling",tag:"-ING",formula:[["consonant + e","drop -e · dance → dancing (but see → seeing)"],["one stressed vowel between two consonants","double the last consonant · run → running, get → getting (but open → opening)"],["-l","double the l · travel → travelling"],["-ie","-ie → -y + ing · lie → lying, die → dying"]]},
  {icon:"sun",title:"Use",tag:"USE",text:"For actions happening now, at the moment of speaking.",examples:["[s:He] [v:is reading] a book [t:right now]."]}]},
 recog:[
  {type:"mcq",title:"(+), (−) or (?)",instr:"Which form is it?",items:[
   {q:"Peter is feeding his dog.",o:["(+) affirmative","(−) negative","(?) question"],a:0},
   {q:"They aren’t talking in the class now.",o:["(+) affirmative","(−) negative","(?) question"],a:1},
   {q:"Are you cooking in the kitchen?",o:["(+) affirmative","(−) negative","(?) question"],a:2}]},
  {type:"mcq",title:"Spelling",instr:"Choose the correct -ing form.",items:[
   {q:"dance",o:["danceing","dancing"],a:1},{q:"see",o:["seeing","seing"],a:0},{q:"run",o:["runing","running"],a:1},{q:"get",o:["getting","geting"],a:0},
   {q:"open",o:["openning","opening"],a:1},{q:"travel",o:["travelling","traveleing"],a:0},{q:"lie",o:["lieing","lying"],a:1},{q:"die",o:["dying","dieing"],a:0}]}],
 fill:[
  {type:"cloze",title:"Task 2. Write the -ing forms",instr:"Example: put → putting · wait → waiting",cols:true,lines:[
   "1. write → {writing}","2. sleep → {sleeping}","3. try → {trying}","4. close → {closing}","5. die → {dying}","6. do → {doing}","7. study → {studying}","8. plan → {planning}","9. stay → {staying}",
   "10. wear → {wearing}","11. swim → {swimming}","12. snow → {snowing}","13. get → {getting}","14. look → {looking}","15. open → {opening}","16. relax → {relaxing}","17. begin → {beginning}","18. visit → {visiting}"]},
  {type:"cloze",title:"Task 4. Complete the text with the present continuous",instr:"Use the verbs in brackets.",lines:[
   "Peter: Hi, Jack. It’s Peter.","Jack: Hey. Where are you?","Peter: I’m sitting (sit) on a train with my family.",
   "Jack: Where 1. {are you going} (you/go)?",
   "Peter: We 2. {are travelling|'re travelling|are traveling|'re traveling} (travel) to Scotland to visit my cousins.",
   "Jack: That sounds exciting.",
   "Peter: Actually, I 3. {'m not enjoying|am not enjoying} (not/enjoy) the journey. The air-conditioning 4. {isn't working|is not working|'s not working} (not/work), so it’s really hot in here at the moment.",
   "Jack: So what are you doing? 5. {Are you playing} (you/play) games on your phone?",
   "Peter: No, I’m not. I 6. {'m revising|am revising} (revise) for the maths test.",
   "Jack: Bad luck. So what 7. {is everyone else doing} (everyone else/do)?",
   "Peter: My sister 8. {is listening|'s listening} (listen) to music and my parents 9. {are reading|'re reading} (read). Actually, no, they 10. {aren't reading|are not reading|'re not reading} (not read) now; they 11. {'re sleeping|are sleeping} (sleep).",
   "Jack: I’ve got to go now. Enjoy Scotland. I hope the sun shines.",
   "Peter: Thanks, but right now, I 12. {'m looking|am looking} (look) forward to some cold weather!"]}],
 apply:[
  {type:"cloze",title:"Task 12. Complete the sentences",instr:"Use one of these verbs in the correct form.",box:["come","get","happen","look","make","start","stay","try","work"],lines:[
   "1. ‘You’re working hard today.’ ‘Yes, I have a lot to do.’",
   "2. I {'m looking|am looking} for Christine. Do you know where she is?",
   "3. It {'s getting|is getting} dark. Shall I turn on the light?",
   "4. They haven’t got anywhere to live at the moment. They {'re staying|are staying} with friends until they find somewhere.",
   "5. ‘Are you ready, Ann?’ ‘Yes, I {'m coming|am coming}.’",
   "6. Have you got an umbrella? It {'s starting|is starting} to rain.",
   "7. You {'re making|are making} a lot of noise. Could you be quieter? I {'m trying|am trying} to concentrate.",
   "8. Why are all these people here? What {'s happening|is happening}?"]},
  {type:"cloze",title:"Task 13. Put the verb into the correct form",instr:"Sometimes you need the negative (I’m not doing etc.).",lines:[
   "1. I’m tired. I’m going (go) to bed now. Goodnight!","2. We can go out now. It isn’t raining (rain) any more.",
   "3. ‘How is your new job?’ ‘Not so good at the moment. I {'m not enjoying|am not enjoying} (enjoy) it very much.’",
   "4. Catherine phoned me last night. She’s on holiday in France. She {'s having|is having} (have) a great time and doesn’t want to come back.",
   "5. I want to lose weight, so this week I {'m not eating|am not eating} (eat) lunch.",
   "6. Angela has just started evening classes. She {'s learning|is learning} (learn) German.",
   "7. I think Paul and Ann have had an argument. They {aren't speaking|are not speaking|'re not speaking} (speak) to each other."]},
  {type:"cloze",title:"Task 14. Complete the sentences",instr:"Use one of these verbs. You can use a verb more than once.",box:["get","change","rise","fall","increase"],lines:[
   "1. The population of the world is rising very fast.",
   "2. Ken is still ill but he {'s getting|is getting} better slowly.",
   "3. The world {'s changing|is changing}. Things never stay the same.",
   "4. The cost of living {'s rising|is rising|'s increasing|is increasing}. Every year things are more expensive.",
   "5. The economic situation is already very bad and it {'s getting|is getting} worse."]}]},

{id:"g3",n:3,title:"State verbs",related:"Verbs with two meanings",
 situation:{title:"States, not actions",lines:["[s:Cathy] [v:likes] romantic films.","[s:I] [v:don’t believe] a word he’s saying.","[s:The soup] [v:tastes] delicious.","[s:This book] [v:is] mine. [s:It] [v:belongs] to me."],
  checks:[{q:"Do these verbs describe actions or states?",o:["actions","states"],a:1},{q:"Which is correct?",o:["Cathy is liking romantic films.","Cathy likes romantic films."],a:1}]},
 board:{timeline:["ps",{k:"pc",dim:true}],cards:[
  {icon:"blocks",title:"State verbs",tag:"STATE",text:"State verbs do not normally have continuous tenses because they describe a state rather than an action.",
   formula:[["likes / dislikes","like, love, hate, dislike, enjoy, prefer"],["perception","believe, know, notice, remember, forget, recognise, understand, realise, seem, think"],["the senses","see, hear, feel, taste, look, smell, sound"],["other verbs","be, contain, fit, include, matter, need, belong, cost, owe, mean, own, appear, want, have (= possess)"]]},
  {icon:"speaker",title:"Senses + can",tag:"SENSES",text:"We often use can or could with verbs of the senses for what we see, hear, etc. at the moment of speaking.",examples:["[s:John] must be in the attic. [s:I] [v:can hear] his footsteps."]},
  {icon:"loop",title:"Two meanings",tag:"NOTE",text:"Some state verbs have continuous tenses, but the meaning is different.",formula:[
   ["I think she’s Italian.","= believe"],["I’m thinking about my holiday.","= am considering"],
   ["The soup tastes awful.","= has an awful flavour"],["She’s tasting the soup.","= is testing the flavour of"],
   ["I can see an aeroplane in the sky.","= perceive with my eyes"],["I’m seeing Jill tonight.","= am meeting"],
   ["Susan looks tired.","= appears"],["Susan is looking at some photos.","= is studying"],
   ["The room smells of perfume.","= has the smell"],["The cat is smelling its food.","= is sniffing"],
   ["This towel feels soft.","= has a soft texture"],["Jill is feeling her son’s forehead.","= is touching"],
   ["He is selfish.","character – permanent state"],["He is being selfish.","behaviour – temporary situation"],
   ["He has a sports car.","= possesses"],["He’s having lunch now.","= is eating (idiom)"]]},
  {icon:"spark",title:"Idioms with have",tag:"HAVE",formula:[["have","breakfast / lunch / dinner"],["have","a bath / shower / swim / party"],["have","an accident / experience / dream"],["have","a baby · difficulty / fun / trouble"]],
   examples:["[s:He]’[v:s having] lunch [t:now]."],wrong:["He is having a sports car."]}]},
 recog:[
  {type:"mcq",title:"What does it mean?",instr:"Choose the meaning of the verb.",items:[
   {q:"I think she’s Italian.",o:["= believe","= am considering"],a:0},{q:"I’m thinking about my holiday.",o:["= believe","= am considering"],a:1},
   {q:"The soup tastes awful.",o:["= has an awful flavour","= is testing the flavour of"],a:0},{q:"She’s tasting the soup.",o:["= has an awful flavour","= is testing the flavour of"],a:1},
   {q:"I can see an aeroplane in the sky.",o:["= perceive with my eyes","= am meeting"],a:0},{q:"I’m seeing Jill tonight.",o:["= perceive with my eyes","= am meeting"],a:1},
   {q:"Susan looks tired.",o:["= appears","= is studying"],a:0},{q:"Susan is looking at some photos.",o:["= appears","= is studying"],a:1},
   {q:"The room smells of perfume.",o:["= has the smell","= is sniffing"],a:0},{q:"The cat is smelling its food.",o:["= has the smell","= is sniffing"],a:1},
   {q:"This towel feels soft.",o:["= has a soft texture","= is touching"],a:0},{q:"Jill is feeling her son’s forehead.",o:["= has a soft texture","= is touching"],a:1},
   {q:"He is selfish.",o:["character – permanent state","behaviour – temporary situation"],a:0},{q:"He is being selfish.",o:["character – permanent state","behaviour – temporary situation"],a:1},
   {q:"He has a sports car.",o:["= possesses","= is eating"],a:0},{q:"He’s having lunch now.",o:["= possesses","= is eating"],a:1}]},
  {type:"mcq",title:"Which group?",instr:"Choose the group of the state verb.",items:[
   {q:"prefer",o:["likes / dislikes","perception","the senses","other verbs"],a:0},{q:"recognise",o:["likes / dislikes","perception","the senses","other verbs"],a:1},
   {q:"smell",o:["likes / dislikes","perception","the senses","other verbs"],a:2},{q:"belong",o:["likes / dislikes","perception","the senses","other verbs"],a:3}]}],
 fill:[
  {type:"cloze",title:"Task 9. A hotel owner and the receptionist",instr:"Put the verbs into the present simple or the present continuous.",lines:[
   "A: Good morning, Catherine. A special guest is coming (come) to our hotel today.",
   "B: Really! 2. {Do I know} (I/know) who it is?",
   "A: I 3. {think} (think) you do. He 4. {is starring|'s starring} (star) in the TV series, “Rooftop”, at the moment.",
   "B: It 5. {is|'s} (be) Paul Roberts, isn’t it? When 6. {is he coming} (he/come)? I can’t wait to meet him in person!",
   "A: At 3 o’clock this afternoon. But there are a few things you 7. {need} (need) to know. First of all, he 8. {loves} (love) flowers. He also 9. {enjoys} (enjoy) having his breakfast in the dining-room, not in his room.",
   "B: Why 10. {is he staying} (he/stay) at our hotel?",
   "A: Because he 11. {wants} (want) some peace and quiet and he 12. {doesn't like|does not like} (not/like) to be disturbed by reporters.",
   "B: I see. Well, let’s hope that everything will be okay while he 13. {is staying|'s staying} (stay) here."]}],
 apply:[
  {type:"cloze",title:"Task 10. Present simple or present continuous?",instr:"Put the verbs in brackets into the correct form.",lines:[
   "1. Jason is not coming (not/come) with us this evening.",
   "2. What {does this sign mean} (this sign/mean)?",
   "3. We {usually meet} (usually/meet) at the sports centre every Wednesday afternoon.",
   "4. Greg {is training|'s training} (train) for the next Olympic Games.",
   "5. Michael Burns is very rich. He {owns} (own) a department store.",
   "6. John and Mary {are playing|'re playing} (play) chess at the moment.",
   "7. Peter {doesn't usually have|does not usually have} (not/usually/have) eggs for breakfast.",
   "8. My father {buys} (buy) a newspaper every day.",
   "9. Mr and Mrs Dean {aren't going|are not going|'re not going} (not/go) to Mexico tomorrow.",
   "10. ‘{Does Pierre speak} (Pierre/speak) English?’ ‘No, but he {speaks} (speak) French.’"]}]},

{id:"g4",n:4,title:"Simple or continuous?",related:"Practice tasks",
 situation:{title:"Right now, or always?",lines:["[s:Water] [v:boils] at 100 degrees Celsius.","[s:The water] [v:is boiling]. Can you turn it off?"],
  checks:[{q:"Which sentence is happening now?",o:["Water boils at 100 degrees Celsius.","The water is boiling. Can you turn it off?"],a:1},{q:"Which sentence is a general truth?",o:["Water boils at 100 degrees Celsius.","The water is boiling. Can you turn it off?"],a:0}]},
 board:{timeline:["ps","pt","pc"],cards:[
  {icon:"sun",title:"Present simple",tag:"ALWAYS / OFTEN",text:"Permanent states, routines, general truths, timetables.",formula:[["time words","usually, always, every day / week / month / year, on Mondays, in the morning, at night, at the weekend"]],
   examples:["[s:Julia] [v:speaks] four languages very well.","[s:The train] [v:is] [t:never] late. [s:It] [t:always] [v:leaves] on time."]},
  {icon:"spark",title:"Present continuous",tag:"NOW",text:"Actions happening now, at the moment of speaking.",formula:[["time words","now, right now, at the moment, today, this week"]],
   examples:["Let’s go out. [s:It] [v:isn’t raining] [t:now].","[s:Everybody] [v:is waiting] for you."]},
  {icon:"warn",title:"Careful!",tag:"CAREFUL!",careful:true,text:"State verbs (know, like, want, mean…) are not normally continuous.",examples:["What [v:does] [s:this sign] [v:mean]?"],wrong:["What is this sign meaning?"]}]},
 recog:[
  {type:"cloze",title:"Task 5. Circle the correct option",instr:"Tap the correct option. Example: It’s raining every day / at the moment → at the moment",lines:[
   "1. I [*normally|Today] take the bus to school.",
   "2. He eats fish [*every day|at the moment].",
   "3. [She’s often|*This week she’s] visiting friends in London.",
   "4. [*They always|Today they] do their homework together.",
   "5. He’s studying engineering [every year|*this year].",
   "6. Are you having dinner [on Mondays|*now]?",
   "7. The train is [never arriving|*arriving right now].",
   "8. I get up late [*at the weekend|this week].",
   "9. What are you [normally doing|*doing at the moment]?"]},
  {type:"cloze",title:"Task 16. Are the underlined verbs right or wrong?",instr:"Write RIGHT, or write the correct verb.",lines:[
   "1. Water <<boils>> at 100 degrees celsius. → RIGHT","2. The water <<boils>>. Can you turn it off? → WRONG: is boiling",
   "3. Look! That man <<tries>> to open the door of your car. → {is trying|'s trying}",
   "4. Can you hear those people? What <<do they talk>> about? → {are they talking}",
   "5. The moon <<goes>> round the earth. → {RIGHT|right|goes}",
   "6. I must go now. It <<gets>> late. → {is getting|'s getting}",
   "7. I usually <<go>> to work by car. → {RIGHT|right|go}",
   "8. ‘Hurry up! It’s time to leave.’ ‘OK, I <<come>>.’ → {am coming|'m coming}",
   "9. I hear you’ve got a new job. How <<do you get on>>? → {are you getting on}"]}],
 fill:[
  {type:"cloze",title:"Task 6. Complete the sentences with the correct verb form",instr:"Example: ‘What are you watching?’ ‘That new DVD. It’s great!’ (you/watch)",lines:[
   "1. Mary {goes} to yoga classes on Monday evenings. (go)",
   "2. ‘{Is it raining}?’ ‘No. Let’s play tennis.’ (it/rain)",
   "3. Elephants {live} for 50 or 60 years. (live)",
   "4. ‘Can I speak to Jack, please?’ ‘I’m sorry. {He's staying|He is staying} with his grandparents. He will be back tomorrow.’ (He/stay)",
   "5. ‘Are you OK?’ ‘No, I’m not. {I'm having|I am having} a very bad day!’ (I/have)",
   "6. ‘How often {does she tidy} her room?’ ‘Every week!’ (she/tidy)",
   "7. Lucy’s a vegetarian. {She doesn't eat|She does not eat} meat. (she/not eat)",
   "8. ‘Why {are you taking} the bus?’ ‘My bike’s got a puncture!’ (you/take)",
   "9. This is very funny but nobody {is laughing|'s laughing}. (laugh)",
   "10. ‘{Do you wear} glasses?’ ‘Yes. When I watch TV!’ (you/wear)"]},
  {type:"cloze",title:"Task 8. Charlie Foster",instr:"Put the verbs into the present simple or the present continuous.",lines:[
   "Charlie Foster 1. {works} (work) at a bakery. He 2. {always gets up} (always/get up) very early because he 3. {starts} (start) work at four o’clock every morning. Charlie 4. {isn't|is not} (not/be) at work this morning. At the moment, he 5. {is packing|'s packing} (pack) suitcase because he 6. {is going|'s going} (go) on holiday today. Charlie 7. {is singing|'s singing} (sing) to himself. He’s very happy. Right now he 8. {is looking for|'s looking for} (look for) his aeroplane tickets. Where are they? He can’t find them. There they are, under his bed! Charlie 9. {is calling|'s calling} (call) a taxi now. His plane 10. {leaves} (leave) in an hour. Where 11. {is Charlie going} (Charlie/go)? To Hawaii!"]}],
 apply:[
  {type:"cloze",title:"Task 7. Katy Dixon",instr:"Complete the text using the correct form of the verbs in brackets.",lines:[
   "Katy Dixon is a famous scientist. She works at a university in London. She is a vulcanologist. That means that she 1. {studies} (study) the science of volcanoes. She 2. {spends} (spend) most of the time at the university. She 3. {does} (do) experiments in a laboratory, and she also 4. {teaches} (teach) students. But sometimes she 5. {travels} (travel) to interesting places in the world and 6. {explores} (explore) real volcanoes. This week, Katy 7. {is visiting|'s visiting} (visit) South America. She 8. {is making|'s making} (make) a programme for television. Today they 9. {are filming|'re filming} (film) an ‘active’ volcano. Active volcanoes sometimes 10. {erupt} (erupt), so she has to be careful. At the moment, Katy 11. {is sitting|'s sitting} (sit) at the top of the volcano and 12. {talking|is talking} (talk) about lava. She 13. {is having|'s having} (have) a fantastic time. She 14. {thinks} (think) it is the best job in the world!"]},
  {type:"cloze",title:"Task 11. A letter",instr:"Put the verbs into the present simple or the present continuous.",lines:[
   "Dear Martin,",
   "How are you and Sally? I hope (hope) you’re well. I 2. {am writing|'m writing} (write) to give you some good news. I have got a summer job for the holidays! I 3. {am repairing|'m repairing} (repair) telephone lines for a telephone company.",
   "I 4. {usually ride} (usually/ride) my bicycle to work because it’s only a ten minute ride from home. We 5. {start} (start) work at 8:30. We 6. {finish} (finish) at 4:30 on Mondays to Thursdays, but at 2:30 on Fridays, so I 7. {have} (have) long weekends.",
   "I 8. {am working|'m working} (work) very hard at the moment. To tell you the truth, I 9. {am|'m} (be) a bit nervous because my boss 10. {is leaving|'s leaving} (leave) for Scotland on business next week, so I’ll be on my own. Lizzie says I 11. {worry} (worry) about it too much. She’s probably right!",
   "Please write with your news. Say hello to Sally for me.","Best wishes,","Richard"]},
  {type:"cloze",title:"Task 17. Present continuous or present simple?",instr:"Put the verb in the correct form.",lines:[
   "1. Let’s go out. It isn’t raining (not/rain) now.","2. Julia is very good at languages. She speaks (speak) four languages very well.",
   "3. Hurry up! Everybody {is waiting|'s waiting} (wait) for you.",
   "4. ‘{Are you listening} (you/listen) to the radio?’ ‘No, you can turn it off.’",
   "5. ‘{Do you listen} (you/listen) to the radio every day?’ ‘No, just occasionally.’",
   "6. The River Nile {flows} (flow) into the Mediterranean.",
   "7. Look at the river. It {is flowing|'s flowing} (flow) very fast today – much faster than usual.",
   "8. We usually {grow} (grow) vegetables in our garden but this year we {are not growing|aren't growing|'re not growing} (not/grow) any.",
   "9. ‘How is your English?’ ‘Not bad. It {is improving|'s improving} (improve) slowly.’",
   "10. Ron is in London at the moment. He {is staying|'s staying} (stay) at the Park Hotel. He {always stays} (always/stay) there when he’s in London.",
   "11. Can we stop walking soon? I {am starting|'m starting} (start) to feel tired.",
   "12. ‘Can you drive?’ ‘I {am learning|'m learning} (learn). My father {is teaching|'s teaching} (teach) me.’",
   "13. Normally I {finish} (finish) work at 5.00, but this week I {am working|'m working} (work) until 6.00 to earn a bit more money.",
   "14. My parents {live} (live) in Bristol. They were born there and have never lived anywhere else. Where {do your parents live} (your parents/live)?",
   "15. Sonia {is looking|'s looking} (look) for a place to live. She {is staying|'s staying} (stay) with her sister until she finds somewhere.",
   "16. ‘What {does your father do} (your/father/do)?’ ‘He’s an architect but he {isn't working|is not working|'s not working} (not/work) at the moment.’",
   "17. (at a party) Usually I {enjoy} (enjoy) parties but I {am not enjoying|'m not enjoying} (not/enjoy) this one very much.",
   "18. The train is never late. It {always leaves} (always/leave) on time.",
   "19. Jim is very untidy. He {is always leaving|'s always leaving} (always/leave) his things all over the place."]}]}
];

/* ===== Grammar topics (names from the topic list). Lessons = class Unit 1; practice = matching items from the class test (Test Boost 8). =====
   practice item: [test id, part id, item index] */
const GTOPICS=[
{id:"tenses",title:"Tenses",vi:"Các thì",ex:"She goes · she went · she will go",paper:"sky",lessons:["g1","g2","g3","g4"],
 practice:[["tb8","b",0],["tb8","b",5],["tb8","b",7],["tb8","d",0],["tb8","d",3],["tb8","i",5]]},
{id:"modal",title:"Modal Verbs",vi:"Động từ khuyết thiếu",ex:"must · should · might",paper:"mint",lessons:[],practice:[["tb8","b",1],["tb8","i",3]]},
{id:"conditionals",title:"Conditionals",vi:"Câu điều kiện",ex:"If it rains, we’ll stay in.",paper:"peach",lessons:[],practice:[["tb8","i",0]]},
{id:"passive",title:"Passive Voice",vi:"Câu bị động",ex:"English is spoken here.",paper:"lav",lessons:[],practice:[["tb8","d",2],["tb8","d",7],["tb8","i",2],["tb8","i",4]]},
{id:"relative",title:"Relative Clauses",vi:"Mệnh đề quan hệ",ex:"The girl who sings is my sister.",paper:"butter",lessons:[],practice:[["tb8","b",2],["tb8","g",0],["tb8","g",8]]},
{id:"gerunds",title:"Gerunds & Infinitives",vi:"V-ing và to V",ex:"enjoy reading · decide to go",paper:"pink",lessons:[],practice:[["tb8","b",9],["tb8","d",1],["tb8","d",4],["tb8","d",6],["tb8","d",8],["tb8","d",9],["tb8","g",3]]},
{id:"comparison",title:"Comparison",vi:"So sánh",ex:"taller · the most interesting · as … as",paper:"mint",lessons:[],practice:[["tb8","b",8],["tb8","g",2]]},
{id:"adjadv",title:"Adjectives & Adverbs",vi:"Tính từ và trạng từ",ex:"boring · bored · quickly · too / enough",paper:"butter",lessons:[],practice:[["tb8","e",0],["tb8","e",1],["tb8","e",2],["tb8","e",3],["tb8","e",4],["tb8","e",5],["tb8","e",6],["tb8","e",7],["tb8","e",8],["tb8","e",9]]},
{id:"adjprep",title:"Adjective + Preposition",vi:"Tính từ + giới từ",ex:"afraid of · good at · interested in",paper:"peach",lessons:[],practice:[["tb8","c",0],["tb8","c",1],["tb8","c",7],["tb8","g",6]]},
{id:"nouns",title:"Nouns & Quantifiers",vi:"Danh từ, mạo từ, lượng từ",ex:"an apple · some milk · a few friends",paper:"lav",lessons:[],practice:[]},
{id:"prep",title:"Prepositions & Phrasal Verbs",vi:"Giới từ & cụm động từ",ex:"at 6 · on Monday · look after",paper:"pink",lessons:[],practice:[["tb8","c",2],["tb8","c",3],["tb8","c",4],["tb8","c",5],["tb8","c",6],["tb8","c",8],["tb8","c",9],["tb8","g",4],["tb8","g",7],["tb8","g",9]]},
{id:"patterns",title:"Sentence Patterns",vi:"Cấu trúc câu & liên kết",ex:"so · because · There are…",paper:"sky",lessons:[],practice:[["tb8","b",3],["tb8","b",4],["tb8","b",6],["tb8","d",5],["tb8","g",1],["tb8","g",5],["tb8","i",1],["tb8","i",6],["tb8","i",7],["tb8","i",8],["tb8","i",9]]}
];

/* ===== Tab tree for Vocabulary and Grammar (names and order as given). Leaves hold lessons (class Unit 1), boards, or class-test practice items. ===== */
const FAMILY={
"to fulfill one’s wish":"fulfil / fulfill (v) · fulfilment / fulfillment (n) · fulfilled (adj) · fulfilling (adj)",
"to intercept":"intercept (v) · interception (n) · interceptor (n)",
"clumsy":"clumsy (adj) · clumsily (adv) · clumsiness (n)",
"to dust off":"dust (n, v) · dusty (adj) · duster (n)",
"vile":"vile (adj) · vilely (adv) · vileness (n)",
"in all seriousness":"serious (adj) · seriously (adv) · seriousness (n)",
"peephole":"peep (v, n) · peephole (n)",
"to dart off":"dart (v, n) · dart off / dart away (phrasal verb)",
"out of the question":"question (n, v) · questionable (adj) · unquestionable (adj)",
"a figment of one’s imagination":"imagine (v) · imagination (n) · imaginary (adj) · imaginative (adj)",
"disbelief":"believe (v) · belief (n) · disbelieve (v) · disbelieving (adj) · unbelievable (adj)",
"to rummage":"rummage (v, n)",
"to make a fuss":"fuss (n, v) · fussy (adj) · fussily (adv) · fussiness (n)"};
const GL_=(id,title,lessons,practice)=>({id,title,lessons:lessons||[],practice:practice||[]});
const NAV={
 vocabulary:[
  {id:"v-topics",title:"Vocabulary in topics",vi:"Từ vựng theo chủ đề",boards:["wt"]},
  {id:"v-phrasal",title:"Phrasal Verbs",vi:"Cụm động từ",boards:[]},
  {id:"v-idioms",title:"Idioms",vi:"Thành ngữ",boards:["idm"]},
  {id:"v-collocations",title:"Collocations",vi:"Cụm từ cố định",boards:["col"]},
  {id:"v-cat4",title:"CAT4",vi:"Ôn từ vựng CAT4 Level C & D",ex:"Flashcards · Match · Fill the gap",boards:[],cat4:true}],
 grammar:[
  {id:"tenses",title:"Tenses",vi:"Các thì",ex:"She goes · she went · she will go",children:[
   {id:"present",title:"Present",vi:"Hiện tại",children:[
    GL_("present-simple","Present Simple",["g1"]),
    GL_("present-continuous","Present Continuous",["g2","g3"]),
    GL_("present-perfect","Present Perfect",[],[["tb8","i",5]]),
    GL_("present-perfect-continuous","Present Perfect Continuous",[],[["tb8","d",0]])]},
   {id:"past",title:"Past",vi:"Quá khứ",children:[
    GL_("past-simple","Past Simple",[],[["tb8","b",7]]),
    GL_("past-continuous","Past Continuous"),
    GL_("past-perfect","Past Perfect",[],[["tb8","b",0],["tb8","b",5]]),
    GL_("past-perfect-continuous","Past Perfect Continuous")]},
   {id:"future",title:"Future",vi:"Tương lai",children:[
    GL_("future-simple","Future Simple"),
    GL_("future-continuous","Future Continuous",[],[["tb8","d",3]]),
    GL_("future-perfect","Future Perfect"),
    GL_("future-perfect-continuous","Future Perfect Continuous")]},
   GL_("mixed-tenses","Mixed tenses",["g4"])]},
  ...GTOPICS.filter(t=>t.id!=="tenses").map(t=>({id:t.id,title:t.title,vi:t.vi,ex:t.ex,lessons:[],practice:t.practice}))]
};

/* ===== READING (Reading Explorer). The passage text is pasted by the parent in the app. ===== */
const READINGS=[
{id:"re-6b",title:"The Truth about Great Whites",unit:"Reading Explorer · Unit 6B",
 before:[
  {type:"cloze",title:"A. Completion",instr:"Complete the information with the words from the box.",box:["fish","length","nets","teeth","whales"],lines:[
   "**Great White Shark Facts**",
   "Type: Like all sharks, great whites are a type of 1. {fish}.",
   "Size: They are 4.6 to 6 meters in 2. {length}. (They can be longer than a bus!)",
   "Weight: They can weigh up to 3,000 kilograms or more.",
   "Jaws: They have up to 300 3. {teeth} in several rows.",
   "Food: Their diet includes fish, seals, sea lions, and small 4. {whales}.",
   "Threats: They are threatened by overfishing and accidental catching in 5. {nets}.",
   "Situation: Endangered."]},
  {type:"discuss",title:"B. Predict",text:"What do you think is meant by the title “The Truth About Great Whites”? Discuss with a partner. Then read the passage to check your ideas."}],
 comp:[
  {type:"mcq",title:"Reading Comprehension",instr:"Choose the best answer for each question.",items:[
   {label:"Gist",q:"1. Another title for this passage could be ___.",o:["Surfers and Sharks: Unlikely Friends","How to Survive a Shark Attack","Why Great Whites Kill Humans","Great Whites: Facts and Fiction"],a:3},
   {label:"Detail",q:"2. After Craig Rogers fell into the water, ___.",o:["the shark swam away","the shark attacked him","the shark bit his fingers","the shark bit his surfboard"],a:0},
   {label:"Detail",q:"3. According to the author, it is difficult to understand why great whites ___.",o:["kill humans","have so many teeth","often let humans escape","grow to six meters or more"],a:2},
   {label:"Purpose",q:"4. What is the purpose of the third paragraph?",o:["to explain why great whites don’t see well","to describe how great whites hunt for seals","to provide advice on what to do if you see a great white","to give possible reasons why great whites don’t kill humans"],a:3},
   {label:"Vocabulary",q:"5. Which of the following words is closest in meaning to doubt in line 25?",o:["not believe","be curious about","be afraid of","think deeply about"],a:0},
   {label:"Reference",q:"6. In line 29, the word them refers to ___.",o:["people","teeth","great whites","seals"],a:0},
   {label:"Fact or Theory?",q:"7. Which statement is a fact and not a theory?",o:["Great whites are curious animals.","Great whites are not able to see well.","Great whites bite to get information.","Great whites eat seals and sea lions."],a:3}]}],
 skill:{title:"Recognizing Contrastive Relationships",text:"Some connecting words can be used to show contrast. Notice their placement and punctuation in the following examples.",
  examples:["I’m an excellent swimmer, [v:but / yet] I rarely go swimming.","I’m an excellent swimmer. [v:However,] I rarely go swimming.","[v:Though / Although / Even though] I’m afraid of the water, I went swimming.","I went swimming [v:though / although / even though] I’m afraid of the water.","[v:Despite / In spite of] the bad weather, I went swimming in the sea.","I went swimming in the sea [v:despite / in spite of] the bad weather."],
  ex:[
   {type:"write",title:"A. Joining Sentences",instr:"Using the words in parentheses, rewrite each set of sentences below to form a single sentence.",items:[
    {q:"1. Sharks are dangerous animals. Many people also think they’re beautiful.",cue:"(yet)",a:["Sharks are dangerous animals, yet many people also think they're beautiful.","Sharks are dangerous animals, yet many people think they're beautiful.","Sharks are dangerous animals yet many people also think they're beautiful."]},
    {q:"2. Seals and sea lions may look similar. They are actually very different species.",cue:"(although)",a:["Although seals and sea lions may look similar, they are actually very different species.","Seals and sea lions are actually very different species, although they may look similar.","Seals and sea lions are actually very different species although they may look similar."]},
    {q:"3. Many people think great whites are the biggest fish on Earth. Whale sharks are much bigger.",cue:"(but)",a:["Many people think great whites are the biggest fish on Earth, but whale sharks are much bigger.","Many people think great whites are the biggest fish on Earth but whale sharks are much bigger."]},
    {q:"4. There are many shark warning signs on that beach. People still go swimming there.",cue:"(despite)",a:["Despite the many shark warning signs on that beach, people still go swimming there.","People still go swimming on that beach despite the many shark warning signs.","People still go swimming there despite the many shark warning signs on that beach.","Despite the shark warning signs on that beach, people still go swimming there.","Despite many shark warning signs on that beach, people still go swimming there.","Despite there being many shark warning signs on that beach, people still go swimming there."]}]},
   {type:"discuss",title:"Critical Thinking",text:"Discuss with a partner. What theories does the author provide for why great whites attack people? Which theory do you think is the most believable? Can you think of any other reasons?"}]},
 vocab:[
  {type:"cloze",title:"A. Completion",instr:"Choose the correct words to complete the sentences.",lines:[
   "1. When they are out at sea, shark researchers put food in the water. The [*tempting|confusing] smell of the food makes the sharks come close enough for the scientists to study them.",
   "2. Whale sharks, the largest sharks in the world, never bite or chew, although they have thousands of tiny teeth [categorized|*arranged] in more than 300 rows.",
   "3. Scientists [arrange|*hypothesize] that the decline in the number of sharks may be related to overfishing.",
   "4. Each year, great white sharks [*gather|tempt] near Cape Town to eat seals, which are plentiful in South Africa’s water.",
   "5. The International Union for the Conservation of Nature [gathers|*categorizes] hundreds of shark species as endangered."]},
  {type:"cloze",title:"B. Completion",instr:"Complete the sentences with words from the box. One word is extra.",box:["arrange","bite","confusion","horror","inaccurate","victims"],lines:[
   "In 1974, writer Peter Benchley wrote the famous novel Jaws, about a killer shark that hunts its human 1. {victims}.",
   "While the movie was exciting, it led to some 2. {confusion} about the true nature of great whites.",
   "The movie made the great white into a symbol of 3. {horror} and death.",
   "However, the behavior of the shark shown in Jaws is actually quite 4. {inaccurate}.",
   "The truth is that great whites rarely 5. {bite} humans."]},
  {type:"info",title:"Word Link",text:"in– can be added to some words to form the opposite meaning, e.g., inaccurate, inability, inaction."}]}
];

/* Word helper for tapping words in a pasted passage: lemma → [IPA, part of speech, English, Vietnamese, other forms] */
const GLOSS={
"bite":["/baɪt/","verb","to cut into something with your teeth","cắn",["biting","bites","bit","bitten"]],
"horror":["/ˈhɒrə/","noun","a strong feeling of fear and shock","sự kinh hoàng",[]],
"confusion":["/kənˈfjuːʒn/","noun","a state of not understanding what is happening","sự bối rối, hoang mang",[]],
"categorize":["/ˈkætəɡəraɪz/","verb","to put people or things into groups","phân loại, xếp vào nhóm",["categorized","categorizes","categorise","categorised"]],
"inaccurate":["/ɪnˈækjərət/","adjective","not correct or not exact","không chính xác",[]],
"victim":["/ˈvɪktɪm/","noun","a person or animal that is hurt or killed","nạn nhân",["victims"]],
"arrange":["/əˈreɪndʒ/","verb","to put things in a particular order or position","sắp xếp",["arranged","arranges"]],
"tempting":["/ˈtemptɪŋ/","adjective","something you want to have or do","hấp dẫn, cám dỗ",["tempt"]],
"hypothesize":["/haɪˈpɒθəsaɪz/","verb","to suggest an idea that might explain something","đưa ra giả thuyết",["hypothesise"]],
"gather":["/ˈɡæðə/","verb","to collect; to come together in one place","thu thập; tụ tập",["gathers","gathered"]],
"surfboard":["/ˈsɜːfbɔːd/","noun","a long, narrow board used for surfing","ván lướt sóng",["surfboards"]],
"lightning":["/ˈlaɪtnɪŋ/","noun","the bright flashes of light and electricity in the sky during rainstorms","tia chớp, sét",[]],
"scan":["/skæn/","verb","to look carefully over an area","nhìn quét, quan sát",["scanning"]],
"distance":["/ˈdɪstəns/","noun","a place that is far away","khoảng cách; nơi xa",[]],
"wave":["/weɪv/","noun / verb","a line of water moving across the sea; to move your hand or arm","con sóng; vẫy tay",["waves","waved"]],
"terrified":["/ˈterɪfaɪd/","adjective","very frightened","vô cùng sợ hãi",[]],
"shark":["/ʃɑːk/","noun","a large sea fish with very sharp teeth","cá mập",["sharks"]],
"great white":["/ɡreɪt waɪt/","noun","a very large shark (great white shark)","cá mập trắng lớn",["great whites"]],
"elbow":["/ˈelbəʊ/","noun","the joint in the middle of your arm","khuỷu tay",[]],
"surface":["/ˈsɜːfɪs/","noun / verb","the top of water; to come up to the top of water","mặt nước; nổi lên mặt nước",["surfaced"]],
"accidentally":["/ˌæksɪˈdentəli/","adverb","by chance, not on purpose","vô tình",[]],
"finger":["/ˈfɪŋɡə/","noun","one of the five parts at the end of your hand","ngón tay",["fingers"]],
"tooth":["/tuːθ/","noun","one of the hard white things in your mouth for biting","răng",["teeth"]],
"opposite":["/ˈɒpəzɪt/","adjective","on the other side","đối diện, phía bên kia",[]],
"blood":["/blʌd/","noun","the red liquid in your body","máu",[]],
"flow":["/fləʊ/","verb","to move along like water","chảy",["flowing"]],
"attack":["/əˈtæk/","noun / verb","a violent act to hurt someone; to try to hurt someone","cuộc tấn công; tấn công",["attacks","attacking"]],
"man-eater":["/ˈmæn iːtə/","noun","an animal that kills and eats people","loài ăn thịt người",["man-eaters"]],
"hunt":["/hʌnt/","verb","to chase and catch animals to eat","săn mồi",[]],
"factually":["/ˈfæktʃuəli/","adverb","in a way that is about facts","về mặt sự thật",[]],
"rarely":["/ˈreəli/","adverb","not often","hiếm khi",[]],
"chance":["/tʃɑːns/","noun","how possible it is that something happens","khả năng, cơ hội",[]],
"frightening":["/ˈfraɪtnɪŋ/","adjective","making you feel afraid","đáng sợ",[]],
"jaws":["/dʒɔːz/","noun","the top and bottom bones of the mouth","hàm",["jaw"]],
"row":["/rəʊ/","noun","a line of things next to each other","hàng, dãy",["rows"]],
"live to tell the tale":["/lɪv tə tel ðə teɪl/","idiom","to survive a dangerous experience","sống sót trở về",[]],
"comprehend":["/ˌkɒmprɪˈhend/","verb","to understand","hiểu",[]],
"manage":["/ˈmænɪdʒ/","verb","to succeed in doing something difficult","xoay xở được, làm được",[]],
"escape":["/ɪˈskeɪp/","verb","to get away from danger","thoát khỏi",[]],
"horrible":["/ˈhɒrəbl/","adjective","very bad or frightening","khủng khiếp",[]],
"explanation":["/ˌekspləˈneɪʃn/","noun","a reason that makes something clear","lời giải thích",["explanations"]],
"mistake":["/mɪˈsteɪk/","verb","to think one thing is another thing","nhầm (cái này với cái kia)",[]],
"seal":["/siːl/","noun","a sea animal with smooth fur that eats fish","hải cẩu",["seals"]],
"sea lion":["/ˈsiː laɪən/","noun","a large kind of seal","sư tử biển",["sea lions"]],
"snack":["/snæk/","noun","a small amount of food","bữa ăn nhẹ, món ăn vặt",[]],
"doubt":["/daʊt/","verb","to not believe; to feel unsure","nghi ngờ",[]],
"identify":["/aɪˈdentɪfaɪ/","verb","to recognise and say what something is","nhận ra, xác định",["identifies"]],
"force":["/fɔːs/","noun","strength or power","sức mạnh, lực",[]],
"approach":["/əˈprəʊtʃ/","verb","to come near","tiến đến gần",[]],
"author":["/ˈɔːθə/","noun","a person who writes a book","tác giả",[]],
"expert":["/ˈekspɜːt/","noun","a person who knows a lot about something","chuyên gia",["experts"]],
"curious":["/ˈkjʊəriəs/","adjective","wanting to know or learn about something","tò mò",[]],
"investigate":["/ɪnˈvestɪɡeɪt/","verb","to find out about something carefully","điều tra, tìm hiểu",[]],
"information":["/ˌɪnfəˈmeɪʃn/","noun","facts about something","thông tin",[]],
"let go":["/let ɡəʊ/","phrasal verb","to stop holding something","buông ra",["lets go"]],
"unlucky":["/ʌnˈlʌki/","adjective","having bad luck","không may",[]],
"object":["/ˈɒbdʒɪkt/","noun","a thing you can see or touch","đồ vật",["objects"]],
"likely":["/ˈlaɪkli/","adjective / adverb","probably","có khả năng, có lẽ",[]],
"endangered":["/ɪnˈdeɪndʒəd/","adjective","in danger of disappearing for ever","có nguy cơ tuyệt chủng",[]],
"length":["/leŋθ/","noun","how long something is","chiều dài",[]],
"net":["/net/","noun","a piece of material with holes, used to catch fish","lưới",["nets"]],
"whale":["/weɪl/","noun","a very large sea animal","cá voi",["whales"]],
"overfishing":["/ˌəʊvəˈfɪʃɪŋ/","noun","catching too many fish","đánh bắt quá mức",[]],
"glide":["/ɡlaɪd/","verb","to move smoothly and quietly","lướt đi",["glides"]]
};

/* Class tests from the EXAM PRACTICE folder */
const EXAM_PASSAGES={"turtles":{"title":"Green turtles at Con Dao","text":["Every year between April and September, female green turtles come ashore on the beaches of Con Dao to lay their eggs. A single turtle may return three or four times in one season, and each nest holds about a hundred eggs.","The temperature of the sand decides whether the eggs become male or female. Below about 29 degrees most of the hatchlings are male; above it, most are female. For this reason rangers sometimes move a nest from the hottest part of the beach into the shade.","The eggs take roughly two months to hatch. The young turtles come out at night, when the sand is cooler and there are fewer birds, and head straight for the brightest line on the horizon, which is normally the sea. Lights from buildings can send them the wrong way, so lamps near the beach are switched off during the season.","Fewer than one hatchling in a thousand reaches adulthood. Those that do may live for eighty years, and the females return to lay their own eggs on the very beach where they were born."]}};
const CLASS_TESTS=[{"id":"tb8","cat":"booster","title":"Test Boost 8","level":"B1+","parts":[{"id":"a","title":"Sounds and stress","skill":"vocabulary","items":[["mc","Which word sounds different?",["l[i]st","m[i]nd","k[i]nd","f[i]nd"],0,"list has /ɪ/. The others have /aɪ/."],["mc","Which word sounds different?",["e[x]ample","e[x]act","e[x]cuse","e[x]ist"],2,"excuse has /ks/. The others have /gz/."],["mc","Which word sounds different?",["bridg[es]","orang[es]","pag[es]","plan[es]"],3,"planes ends in /z/. The others end in /ɪz/."],["mc","Which word sounds different?",["p[ea]ce","br[ea]k","cl[ea]n","r[ea]son"],1,"break has /eɪ/. The others have /iː/."],["mc","Which word sounds different?",["[g]ym","[g]ate","[g]oat","[g]lass"],0,"gym has /dʒ/. The others have /g/."],["mc","Which word has a different stress?",["advise","wander","explain","refuse"],1,"WAN-der. The others: ad-VISE, ex-PLAIN, re-FUSE."],["mc","Which word has a different stress?",["terrible","horrible","terrific","sensible"],2,"ter-RIF-ic. The others stress the first syllable."],["mc","Which word has a different stress?",["helicopter","calculator","everything","particular"],3,"par-TIC-u-lar. The others stress the first syllable."],["mc","Which word has a different stress?",["instead","income","indeed","inside"],1,"IN-come. The others stress the second syllable."],["mc","Which word has a different stress?",["situation","invitation","destination","development"],3,"de-VEL-op-ment. The others: -A-tion."]]},{"id":"b","title":"Choose the best answer","skill":"grammar","items":[["mc","It was the first time she ___ abroad.",["travels","travelled","had travelled","has travelled"],2,"It was the first time + past perfect (had travelled)."],["mc","You ___ have told me earlier; now it’s too late.",["must","should","can","will"],1,"should have + past participle = it was a good idea, but you didn’t."],["mc","The building ___ we visited last week is over two hundred years old.",["what","who","which","where"],2,"A thing → which."],["mc","She kept on talking ___ I asked her to stop.",["despite","even though","in spite of","because"],1,"even though + subject + verb. despite / in spite of + noun."],["mc","Do you know ___ the concert starts?",["what time does","what time","when does","that when"],1,"Indirect question → normal word order: what time the concert starts."],["mc","___ he arrived, the guests had already left.",["Until","By the time","As soon","While"],1,"By the time + past simple, past perfect."],["mc","She’s not only clever ___ hard-working.",["and","but also","or","as well"],1,"not only … but also."],["mc","I’d love to have gone with you, but I ___ busy.",["am","was","were","have been"],1,"It is about the past: I was busy."],["mc","___ he studied, the less he seemed to know.",["More","The more","Much","The most"],1,"The more …, the less …"],["mc","The room needs ___ before the guests arrive.",["clean","to clean","cleaning","cleaned"],2,"need + -ing has a passive meaning (= needs to be cleaned)."]]},{"id":"c","title":"Prepositions","skill":"grammar","items":[["gap","She is engaged ___ a doctor from Hue.",["to"],"engaged to someone."],["gap","He has a strong belief ___ his own ability.",["in"],"belief in something."],["gap","Don’t laugh ___ people who make mistakes.",["at"],"laugh at someone."],["gap","My brother has been out ___ work since March.",["of"],"out of work = without a job."],["gap","We must set ___ early to avoid the traffic.",["off","out"],"set off = start a journey."],["gap","The book was translated ___ English by a young writer.",["into"],"translate into a language."],["gap","Nobody could account ___ the sudden change.",["for"],"account for = explain."],["gap","She was very angry ___ her brother.",["with"],"angry with a person."],["gap","The village suffered badly ___ the flood.",["from"],"suffer from."],["gap","The whole class joined ___ the singing.",["in"],"join in = take part."]]},{"id":"d","title":"Verb forms","skill":"grammar","items":[["gap","My brother ___ (work) as a tour guide for three summers now.",["has been working","has worked"],"for … now → present perfect (continuous)."],["gap","She denied ___ (see) him that evening.",["seeing","having seen"],"deny + -ing."],["gap","The children ___ (not allow) to swim here.",["are not allowed","aren't allowed"],"Passive: are not allowed to."],["gap","This time next Sunday, we ___ (lie) on a beach in Nha Trang.",["will be lying","'ll be lying"],"This time next … → future continuous."],["gap","He always makes his sister ___ (cry).",["cry"],"make someone + base verb."],["gap","It is essential that everyone ___ (arrive) on time.",["arrive","should arrive"],"It is essential that + base verb."],["gap","I’d rather not ___ (talk) about it now.",["talk"],"would rather (not) + base verb."],["gap","The letter ___ (write) before I got home.",["had been written"],"Before a past moment + passive → had been written."],["gap","She spent all afternoon ___ (tidy) her room.",["tidying"],"spend time + -ing."],["gap","He can’t help ___ (laugh) when he sees that photo.",["laughing"],"can’t help + -ing."]]},{"id":"e","title":"Word form","skill":"vocabulary","items":[["gap","Ha Van Tuan lost his job as a ___ (DRIVE) after an accident five years ago.",["driver"],"A person who drives → driver."],["gap","For months he felt completely ___ (HOPE) and hardly left the house.",["hopeless"],"Without hope → hopeless."],["gap","Then he discovered an unexpected ___ (ABLE).",["ability"],"Noun → ability."],["gap","His work is surprisingly ___ (BEAUTY).",["beautiful"],"Adjective after is → beautiful."],["gap","Each piece is ___ (DIFFER) because the wood decides the shape.",["different"],"Adjective → different."],["gap","The ___ (GROW) of his small workshop has been steady.",["growth"],"Noun after the → growth."],["gap","He employs three young men and pays them ___ (GENEROUS).",["generously"],"How he pays → adverb: generously."],["gap","The hardest part was not the ___ (INJURE) but the waiting.",["injury"],"Noun after the → injury."],["gap","“Nobody gave me any ___ (GUIDE),” he explains.",["guidance"],"Noun after any → guidance."],["gap","Keep looking until you find something you can do ___ (GOOD).",["well"],"Adverb of good → well."]]},{"id":"f","title":"Best response","skill":"vocabulary","items":[["mc","“I’m sorry, I’ve left your book at home.”",["That’s very kind of you, but I’ve already eaten.","Oh, I’m sorry to hear that. I hope she gets better soon.","Of course. Was I speaking too fast?","Never mind. You can bring it tomorrow.","To be honest, I preferred the old one."],3,"A friendly answer to a small problem: Never mind."],["mc","“Would you like to join us for dinner?”",["That’s very kind of you, but I’ve already eaten.","Never mind. You can bring it tomorrow.","Yes, it’s on the second floor.","Of course. Was I speaking too fast?"],0,"A polite way to say no to an invitation."],["mc","“How do you find the new timetable?”",["To be honest, I preferred the old one.","Yes, it’s on the second floor.","Never mind. You can bring it tomorrow.","Of course. Was I speaking too fast?"],0,"How do you find…? = What do you think of…?"],["mc","“Could you speak more slowly, please?”",["Of course. Was I speaking too fast?","To be honest, I preferred the old one.","That’s very kind of you, but I’ve already eaten.","Yes, it’s on the second floor."],0,"Agree and check: Was I speaking too fast?"],["mc","“My grandmother is in hospital.”",["Never mind. You can bring it tomorrow.","Oh, I’m sorry to hear that. I hope she gets better soon.","To be honest, I preferred the old one.","Of course. Was I speaking too fast?"],1,"Show you care: I’m sorry to hear that."]]},{"id":"g","title":"Reading: Bamboo","skill":"reading","items":[["gap","Bamboo is a grass, and that single fact explains almost everything ___ makes it so useful.",["that","which"],"everything that…"],["gap","Bamboo grows from an underground root system, so cutting a stem does ___ kill the plant.",["not"],"does not kill: a new stem takes its place."],["gap","Some species can grow ___ than half a metre in a single day.",["more"],"more than half a metre."],["gap","After three years it is hard enough ___ build with.",["to"],"enough + to + verb."],["gap","In Viet Nam bamboo has been used ___ centuries for houses, bridges and baskets.",["for"],"for + a length of time."],["gap","A village has building material for ever, provided ___ it cuts only the older stems.",["that"],"provided that = only if."],["gap","Engineers have recently become interested ___ it again.",["in"],"interested in."],["gap","Weight for weight, bamboo is stronger ___ tension than steel.",["in"],"stronger in tension."],["gap","Every stem is slightly different, ___ makes it hard to use in large modern buildings.",["which"],"which refers to the whole idea before it."],["gap","A material that grows back ___ itself deserves a second look.",["by","on"],"by itself = without help."]]},{"id":"h","title":"Reading: Green turtles","skill":"reading","items":[["tf","Green turtles lay their eggs at Con Dao during only one month of the year.",null,1,"They come “between April and September”: that is many months."],["tf","The sex of the young turtles depends on the temperature of the sand.",null,0,"Paragraph 2: “The temperature of the sand decides whether the eggs become male or female.”"],["tf","Rangers may move a nest to a shadier place.",null,0,"Rangers “sometimes move a nest… into the shade”."],["tf","Baby turtles usually come out of the sand during the daytime.",null,1,"“The young turtles come out at night.”"],["tf","Thousands of tourists visit Con Dao every year to watch the turtles.",null,2,"The text never talks about tourists."]],"passage":"turtles"},{"id":"i","title":"Sentence building","skill":"grammar","items":[["order","If I knew the answer, I could help you.","I don’t know → imagine: If I knew… (second conditional).",["If I knew the answer, I would help you."],"I don’t know the answer, so I can’t help you. (KNEW)"],["order","He arrived so late that he missed the train.","so + adjective/adverb + that.",[],"He arrived too late to catch the train. (SO)"],["order","The concert was called off because of the storm.","call off = cancel. Passive: was called off.",[],"They cancelled the concert because of the storm. (CALLED)"],["order","She must be at home now.","must be = I’m sure it is true.",[],"I’m sure she is at home now. (MUST)"],["order","He wasn't visited by anyone while he was in hospital.","Passive: wasn’t visited by anyone.",[],"Nobody visited him while he was in hospital. (VISITED)"],["order","I haven't met her since we graduated from university.","since + past simple; main verb in present perfect.",[],"I / not meet / her / since / we / graduate / university"],["order","She is such a good teacher that everyone likes her.","such + a + adjective + noun + that.",[],"She / be / such / good teacher / that / everyone / like / her"],["order","It took them three months to build the house.","It took + person + time + to + verb.",[],"It / take / them / three months / build / house"],["order","Do you mind if I open the window?","Do you mind if I + present simple?",[],"Do / you / mind / if / I / open / window?"],["order","Neither my brother nor I am interested in football.","Neither … nor …: the verb agrees with the nearer subject (I am).",[],"Neither / my brother / nor / I / be / interested / football"]]}]},{"id":"idm","cat":"mc","title":"Idioms mini test","level":"B1+","parts":[{"id":"a","title":"Idioms","skill":"vocabulary","items":[["mc","Which idiom means “go to bed”?",["Hit the hay","Bite the dust","Cough up","Jump the gun"],0,"Hit the hay = go to bed."],["mc","Which idiom means “chat informally”?",["Scratch someone’s back","Raise a stink","Shoot the breeze","Hit the ceiling"],2,"Shoot the breeze = chat informally."],["mc","Which idiom means “make a special effort, especially to please”?",["Turn someone off","Bend over backwards","Fork over","On ice"],1,"Bend over backwards."],["mc","Which idiom means “disgust someone”?",["Go fly a kite","Turn someone off","Kick the bucket","Raise a stink"],1,"Turn someone off."],["mc","Which idiom means “give unwillingly”?",["Hit the ceiling","Jump the gun","Cough up","Bite the dust"],2,"Cough up."],["gap","When he found out about the mistake, he ___ and started yelling at everyone.",["hit the ceiling"],"hit the ceiling = become very angry (past: hit)."],["gap","She really ___ to help me finish the project on time.",["bent over backwards"],"Past tense: bend → bent over backwards."],["gap","After hours of talks, they finally agreed to ___ the money.",["cough up","fork over"],"cough up = give unwillingly."],["gap","My idea for the new project was put ___ until we have more money.",["on ice"],"put on ice = set aside for later."],["gap","He ___ after he was defeated in the competition.",["bit the dust"],"Past tense: bite → bit the dust."],["mc","“Go fly a kite” means to become very angry.",["True","False"],1,"It means “go away!”."],["mc","“Fork over” means to hand over or give.",["True","False"],0,"Yes: hand over, give."],["mc","“Jump the gun” means to start something too early.",["True","False"],0,"Yes."],["mc","“Scratch someone’s back” means to return a favour.",["True","False"],0,"Yes."],["mc","“Raise a stink” means to chat informally.",["True","False"],1,"It means protest strongly, complain."]]}]}];

