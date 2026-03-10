const scenes = [
  {
    id: 1,
    backgroundImage: "img/BlueFlower.png",
    descriptionBox1: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      textColor: "#ffffff",
    },
    description: `I am an automemory doll, which means I write letters for those who can’t. 
My journey started after someone told me:

“I love you.”

Now I write letters to find the meaning behind those words. 
I help other people express their feelings through words in hope that I find my own.`,
next: 2
  },

  {
    id: 2,
    backgroundImage: "img/s2.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `The sun outside shined brightly and warmed the office from where I sat. The cosy and quiet atmosphere, it felt just right. As I was lost in thought I heard footsteps approaching from outside the door. Not long after one of my collauges walked in holding three letters. “We got three request asking for you! The first one is from an older woman, it says she has cancer and need someone to write some very important letters. The second one is from a man that needs help finishing a script for a child play. `,
    choices: [

      
      {
        text: "1",
        choice: 3,
        backgroundColor: "#1E40AF",
        textColor: "#ffffff",
      },
      {
        text: "2",
        choice: 15,
        backgroundColor: "#166534",
        textColor: "#ffffff",
      },
    ]
  },

  {
    id: 3,
    backgroundImage: "img/s3.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“I’ll choose the woman”
Then the journey begins. 
It took almost half a day but now I have arrived at the house. It was in a good neighbourhood and the house it self looked well maintained. 
I walked up to the door and knocked.
There stood a young girl, no older than seven. After her came a woman. she looked more like a maid or butler. Just like I thought the woman showed me the way to my client. She was lying in an empty room with child drawings on the nightstand beside her.   `,
  },

  {
    id: 4,
    backgroundImage: "img/s4.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `I was scheduled for 7 days. And began writing on the second day, when the woman found the strength to sit up. I was told the letters were for the child when she would grow older, but had to promise not to tell. I kept that promise and wrote letter after letter at the woman’s request. At the 4th day while I was writing, the little girl who was introduced as Ann came up to me asking to play. `,
    choices: [
     {
      text: "play",
      choice: 5,
      backgroundColor: "#B45309",
      textColor: "#ffffff",
    },
 {
      text: "don't play",
      choice: 7,
      backgroundColor: "#6D28D9",
      textColor: "#ffffff",
    },
  ]
  },

  {
    id: 5,
    backgroundImage: "img/s56.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `I took a break to play with Ann. She seemed so exited when she talked about playing house, finding bugs and running around in the garden. We ended up playing house with her dolls. 
We played about once every day until my last day there.   That day, while we were playing, she suddenly paused and looked at the floor.
“You know, it wasn’t really you I wanted to play with”
“I know”
“Mom used to play with me before-
Why must you take her away from me! I didn’t do anything!”
“That is not my intensions, your mother hired me to write some important letters” `,
  },

  {
    id: 6,
    backgroundImage: "img/s56.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“Then tell me what you are writing! who is it for! It can’t be my dad, he’s already gone, so tell me. What is so important that mom wants to hide it from me, am I not important enough, does she not love me anymore! answer me.”
“Your mother l0ves you very much”
“Then why keep it a secret”
“That, I am afraid I cannot tell”
“Just tell me!” `,
choices: [
     {
      text: "tell",
      choice: 11,
      backgroundColor: "#1F2937",
      textColor: "#ffffff",
    },
     {
      text: "calm her down",
      choice: 10,
      backgroundColor: "#1D4ED8",
      textColor: "#ffffff",
    },
  ]
  },

  {
    id: 7,
    backgroundImage: "img/s7.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“I apologize ann, but I have to continue my work”
The rest of the day I wrote as many letters i could while the woman still had strength. Then the evening fell upon. I was combing my hair, and was about to turn off the lights when I heard a knock.
“Come in”
It was ann.
“What are you doing?”
“I was about to go to bed”
“Are you going to wite letters tomorrow too?” 
“Yes”
“And the next day after that and the day after that again, seven days. Who are you writing the letters for”

`,
choices: [
     {
      text: "tell",
      choice: 11,
      backgroundColor: "#047857",
      textColor: "#ffffff",
    },
     {
      text: "continue",
      choice: 8,
      backgroundColor: "#C2410C",
      textColor: "#ffffff",
    },
  ]
  },

  {
    id: 8,
    backgroundImage: "img/s89.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“It can’t be my father, he has ben gone a while now, he died after drowning at the sea...”
“Ann, did you come here for a reason?”
“Everyone is asleep so I thought we could do something”
“I think it’s better to go to sleep then, you shouldn’t stay up late”
The next day I continued the usual by writing letters, on the sixth day I had finished all my letters. The remaining time on the last day I finally decided to play and hang out with Ann, we played with dolls and ran around in the garden. She seemed to be enjoying herself, that was until she stopped and looked at the ground.`,
  },

  {
    id: 9,
    backgroundImage: "img/s89.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“You know, it wasn’t really you I wanted to play with”
“I know”
“Mom used to play with me before-
Why must you take her away from me! I didn’t do anything!”
“That is not my intensions, your mother hired me to write some important letters. Today is my last day, from tomorrow on you’ll have all the rest of the time to spend with your mother” `,
  },

  {
    id: 10,
    backgroundImage: "img/s10.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“I want you to know that the time spend with your mother is for a good reason, so please don’t blame her. It’s natural for you to feel angry and sad. You had to accept your mother sickness at a young age. You are very brave”
“I am not! Mom got sick because of me, I mess up and made mom sick!”
“That is not the reason she is sick, it has nothing to do with you. There is nothing that can be done” 
“...”
`,
  },

  {
    id: 11,
    backgroundImage: "img/s11.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“I promised your mother not to tell you. These letters are for a person that have yet to grow up. It’s someone you know very well”
“Just tell me who”
“You”
“What, for me? But mom said she was going to get better soon, she promised!”
I could only watch as Ann ran to her mother’s bedroom, the tears already sinking down her face. I chose to stay put, letting them talk in peace. From my end I could hear Ann’s cry and only imagine the pain she must be in.
After that i continued to write letters, but this time Ann got to be in the room with her mother while i wrote. `,
  },

  {
    id: 12,
    backgroundImage: "img/s12.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `Then it was time for me to say good bye. I travelled all the way back to the office. Not before I walked inside and one of my friends came over did I let out my sorrow.
“All I could do was just watch, I wrote over fifty letters but by the time the first one arrive her mother will already be... she will be so lonely, all alone in that house and there was nothing I could do”`,
choices: [
     {
      text: "read the letters",
      choice: 14,
      backgroundColor: "#7C2D12",
      textColor: "#ffffff",
    },
     {
      text: "end",
      choice: 13,
      backgroundColor: "#334155",
      textColor: "#ffffff",
    },
  ]
  },

  {
    id: 13,
    backgroundImage: "img/s13.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `END`,
  },

  {
    id: 14,
    backgroundImage: "img/s14.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `Dear Ann, happy eight birthday. There might be many sad things happening and you might be feeling really overwhelmed right now, but don’t give up hope. I know you might be sad and feel like crying sometimes but please don’t forget your mother loves you very much.

------------------------------------
Dear Ann, happy tenth birthday. I am sure you have grown up quite a lot, but I imagen you still love reading and dancing like you always did. Perhaps you have moved on from riddles and bugs.

-------------------------------------
Happy eighteenth birthday. you’re a young lady now. Have you fallen in love? I might not be able to help you with that, but I am sure whoever  you choose is a wonderful person.

-------------------------------------
Happy birthday Ann. You are already twenty years old now. That is amazing. But remember even adults are allowed to complain sometimes. I’ll always be there for you. Ann.

`,
  },
  {
    id: 15,
    backgroundImage: "img/.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“about the play
A girl named Olive has to leave her father to slay a monster with the help of  nature spirits. she travels far and manages to slay the monster and end up safely at an island.”

`,
  },
  {
    id: 16,
    backgroundImage: "img/s1617.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“I’ll choose the man”
Then the journey begins.
I had to travel far but eventually I arrived. The house was surrounded by beautiful nature, and right beside there was a lake. The blue water, reflecting the trees and green scenery around. I took a moment just to take it all in before i knocked on the door.
“Who is it!”
“you have requested an aoutomemorydoll, I am here to help writing the play” 
“Then just come inside”
I walk inside to see the man hungover at the sofa, and the whole house a complete mess.

`,
  },
  {
    id: 17,
    backgroundImage: "img/s1617.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“You- your hair”
“Is there something in my hair?”
“No, never mind”
His voice was slurred and by the way he was sitting I could tell he still was under the influence. I put my things down when I saw him reaching for more alcohol. 
“sir, I would ask you to not to drink while I am here”
“I can’t write unless I drink”
“I’ll be the one writing”
“Then let’s start tomorrow”
He said right before he pored himself a big glass of whatever booze was closest.

`,
choices: [
     {
      text: "help him",
      choice: 18,
      backgroundColor: "#0F766E",
      textColor: "#ffffff",
    },
     {
      text: "let him be",
      choice: 8,
      backgroundColor: "#3F6212",
      textColor: "#ffffff",
    },
  ]
  },
  // ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''image
  {
    id: 18,
    backgroundImage: "img/s7.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“I have brought my own typewriter, do you have typing paper?”
“no, they sell it in the store by the main road, go and buy some and while you’re at it I want carbonara for dinner”
“why must you bee so difficult”
No matter I went out again to buy some typing paper and ingrediencies for carbonara. It was my first time making it so I made a lot of mess in the process. By evening I had finally managed to make something half decent and the man had sobered up enough to come and sit at he table and eat. While eating I noticed the man starring at the food before every bite.

`,
  },
  {
    id: 19,
    backgroundImage: "img/s7.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `The next day I decided to tidy up the house and hide every bottle with booze. When the man woke up his first instinct was to find the booze but after I had told him that I had hid them all he quickly gave up. Then not long after we began writing the play. It took a long time but when I finished writing he asked, ”So what do you think?”
“It will be a beautiful play but she has los her boat, so how would she return to her waiting father?”
“I haven’t thought about that. Lets take a break”

`,
choices: [
     {
      text: "go outside",
      choice: 11,
      backgroundColor: "#BE123C",
      textColor: "#ffffff",
    },
     {
      text: "stay inside",
      choice: 20,
      backgroundColor: "#7C2D12",
      textColor: "#ffffff",
    },
  ]
    // ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''egenhånd
  },
  {
    id: 20,
    backgroundImage: "img/s7.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `"Okay"
    The man walked to his room while I explored the house and cleaned up here and there. I had just finished tyding up the living room when a loud bang filled the house.The sound came from one of the rooms, I walk into the room and saw a picture frame laying face down on the floor. I pick up the picture frame and see a photo of a young girl, she had blue eyes and blonde hair like mine. She lokked so happy, but I haven't seen her around the house. I put the picture back on the shelf when I heard a voice behind me

`,
  },
  {
    id: 21,
    backgroundImage: "img/s7.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `"What are you doing, GET OUT!"
    "sir, may I ask who the little girl is?"
    "I said get OUT"
    "Is there something youre hididing"
    "who is that girl?"
    The man paused before he talked again, shaking and quiet.
  "I... she was my daughter. Olivia. I can't write anymore, but I wanted to finish the story I told her. After I lost my wife, I decided to move here, to our summer house. Olivia continued to smile through it all. She even helped me out, but I think she was sad and only putting on a brave face.

Her favorite things were a silly frilled parasol and waterbirds. On the days we walked outside and stood by the lake, she would hold up her parasol and say, 'One day I'll walk on the leaves scattered over the lake, letting my parasol and the wind carry me. I promise I'll show you one day.'

Then... it all happened so suddenly. I had to argue with the doctors just to keep her home for the few remaining days she had left. Those days were spent in a comfortable quiet filled with warmth. Until the last day.

Why does God take what's most precious?"

`,

  },
  {
    id: 22,
    backgroundImage: "img/s7.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `"Let's finish the play and ge Olive back home"
    "Yes, I'll bring the typewriter and paper!"
    When I came back outsude I saw the man sitting on the tereace. I sat opisite of him and got everything ready.
    "So how will Olive return to her father?"
    "I haven't thought about that, give me a moment... I know! At last the wind spirit says ¨Olive, open your parasol and let the wind carry you, but don't fly too high so step on the lake fallen leaves.¨ Here take the parasol and walk twoards me from over there, I would like to visulize it.

`,
choices: [
     {
      text: "jump over the lake",
      choice: 11,
      backgroundColor: "#155E75",
      textColor: "#ffffff",
    },
     {
      text: "do what he asked",
      choice: 23,
      backgroundColor: "#991B1B",
      textColor: "#ffffff",
    },
  ]
  },
  {
    id: 23,
    backgroundImage: "img/s7.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `I took the parasol and walked to whrere he had pointed. Then I walked back while holding up the parasol up, letting the wind look like it guided me.
     The play was done and now it was time for me to say good bye. Before I left he gave me olivia's favorite parasol as a thank you gift for helping him.
     "Thank you for not only finishing the play but also helping me out when I idn't know how to continue." 

`,

  },
  {
    id: 24,
    backgroundImage: "img/s7.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“I apologize ann, but I have to continue my work”
The rest of the day I wrote as many letters i could while the woman still had strength. Then the evening fell upon. I was combing my hair, and was about to turn off the lights when I heard a knock.
“Come in”
It was ann.
“What are you doing?”
“I was about to go to bed”
“Are you going to wite letters tomorrow too?” 
“Yes”
“And the next day after that and the day after that again, seven days. Who are you writing the letters for”

`,
choices: [
     {
      text: "tell",
      choice: 11,
      backgroundColor: "#d6a77a",
      textColor: "#ffffff",
    },
     {
      text: "continue",
      choice: 8,
      backgroundColor: "#9c3e10",
      textColor: "#ffffff",
    },
  ]
  },
  {
    id: 25,
    backgroundImage: "img/s7.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“I apologize ann, but I have to continue my work”
The rest of the day I wrote as many letters i could while the woman still had strength. Then the evening fell upon. I was combing my hair, and was about to turn off the lights when I heard a knock.
“Come in”
It was ann.
“What are you doing?”
“I was about to go to bed”
“Are you going to wite letters tomorrow too?” 
“Yes”
“And the next day after that and the day after that again, seven days. Who are you writing the letters for”

`,
choices: [
     {
      text: "tell",
      choice: 11,
      backgroundColor: "#d6a77a",
      textColor: "#ffffff",
    },
     {
      text: "continue",
      choice: 8,
      backgroundColor: "#9c3e10",
      textColor: "#ffffff",
    },
  ]
  },
  {
    id: 26,
    backgroundImage: "img/s7.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“I apologize ann, but I have to continue my work”
The rest of the day I wrote as many letters i could while the woman still had strength. Then the evening fell upon. I was combing my hair, and was about to turn off the lights when I heard a knock.
“Come in”
It was ann.
“What are you doing?”
“I was about to go to bed”
“Are you going to wite letters tomorrow too?” 
“Yes”
“And the next day after that and the day after that again, seven days. Who are you writing the letters for”

`,
choices: [
     {
      text: "tell",
      choice: 11,
      backgroundColor: "#d6a77a",
      textColor: "#ffffff",
    },
     {
      text: "continue",
      choice: 8,
      backgroundColor: "#9c3e10",
      textColor: "#ffffff",
    },
  ]
  },
  {
    id: 27,
    backgroundImage: "img/s7.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“I apologize ann, but I have to continue my work”
The rest of the day I wrote as many letters i could while the woman still had strength. Then the evening fell upon. I was combing my hair, and was about to turn off the lights when I heard a knock.
“Come in”
It was ann.
“What are you doing?”
“I was about to go to bed”
“Are you going to wite letters tomorrow too?” 
“Yes”
“And the next day after that and the day after that again, seven days. Who are you writing the letters for”

`,
choices: [
     {
      text: "tell",
      choice: 11,
      backgroundColor: "#d6a77a",
      textColor: "#ffffff",
    },
     {
      text: "continue",
      choice: 8,
      backgroundColor: "#9c3e10",
      textColor: "#ffffff",
    },
  ]
  },
  {
    id: 28,
    backgroundImage: "img/s7.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“I apologize ann, but I have to continue my work”
The rest of the day I wrote as many letters i could while the woman still had strength. Then the evening fell upon. I was combing my hair, and was about to turn off the lights when I heard a knock.
“Come in”
It was ann.
“What are you doing?”
“I was about to go to bed”
“Are you going to wite letters tomorrow too?” 
“Yes”
“And the next day after that and the day after that again, seven days. Who are you writing the letters for”

`,
choices: [
     {
      text: "tell",
      choice: 11,
      backgroundColor: "#d6a77a",
      textColor: "#ffffff",
    },
     {
      text: "continue",
      choice: 8,
      backgroundColor: "#9c3e10",
      textColor: "#ffffff",
    },
  ]
  },
  {
    id: 29,
    backgroundImage: "img/s7.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“I apologize ann, but I have to continue my work”
The rest of the day I wrote as many letters i could while the woman still had strength. Then the evening fell upon. I was combing my hair, and was about to turn off the lights when I heard a knock.
“Come in”
It was ann.
“What are you doing?”
“I was about to go to bed”
“Are you going to wite letters tomorrow too?” 
“Yes”
“And the next day after that and the day after that again, seven days. Who are you writing the letters for”

`,
choices: [
     {
      text: "tell",
      choice: 11,
      backgroundColor: "#d6a77a",
      textColor: "#ffffff",
    },
     {
      text: "continue",
      choice: 8,
      backgroundColor: "#9c3e10",
      textColor: "#ffffff",
    },
  ]
  },
  {
    id: 30,
    backgroundImage: "img/s7.png",
    descriptionBox: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
      textColor: "#ffffff",
    },
    description: `“I apologize ann, but I have to continue my work”
The rest of the day I wrote as many letters i could while the woman still had strength. Then the evening fell upon. I was combing my hair, and was about to turn off the lights when I heard a knock.
“Come in”
It was ann.
“What are you doing?”
“I was about to go to bed”
“Are you going to wite letters tomorrow too?” 
“Yes”
“And the next day after that and the day after that again, seven days. Who are you writing the letters for”

`,
choices: [
     {
      text: "tell",
      choice: 11,
      backgroundColor: "#d6a77a",
      textColor: "#ffffff",
    },
     {
      text: "continue",
      choice: 8,                     
      backgroundColor: "#9c3e10",
      textColor: "#ffffff",
    },
    ]
  },
];

function startScene() {
  let scene = scenes[0];
  let bgimage = scene.backgroundImage;
  document.body.style.backgroundImage = `url(${bgimage})`;

  document.getElementById("description").innerText = scene.description;
    document.getElementById("description").innerHTML += `<button onclick="nextScene(2)">Next</button>`
}

startScene();


function nextScene(sceneId) {
  console.log("next scene", sceneId);
  sceneNumber = parseInt(sceneId);

  console.log("scene number", sceneNumber);
  document.getElementById("description").innerText = "";
   let scene = scenes[sceneNumber - 1];

   console.log(scene)
     let bgimage = scene.backgroundImage;
  document.body.style.backgroundImage = `url(${bgimage})`;

  document.getElementById("description").innerText = scene.description;

  document.getElementById("description").style.backgroundColor = scene.descriptionBox.backgroundColor;
  document.getElementById("description").style.color = scene.descriptionBox.textColor;
  let choices = scene.choices

  if (choices.length > 0) {
    choices.forEach(choice => {
      document.getElementById("description").innerHTML  += `<button style="background-color: ${choice.backgroundColor}; color: ${choice.textColor};" onclick="nextScene(${choice.choice})">${choice.text}</button>`;
      
    });
  }

}
