import React, { useState } from "react";
import Text from "./Text";

function Bg() {
  var colorArray = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    "#4D8000",
    "#B33300",
    "#CC80CC",
    "#66664D",
    "#991AFF",
    "#E666FF",
    "#4DB3FF",
    "#1AB399",
    "#E666B3",
    "#33991A",
    "#CC9999",
    "#B3B31A",
    "#00E680",
    "#4D8066",
    "#809980",
    "#E6FF80",
    "#1AFF33",
    "#999933",
    "#FF3380",
    "#CCCC00",
    "#66E64D",
    "#4D80CC",
    "#9900B3",
    "#E64D66",
    "#4DB380",
    "#FF4D4D",
    "#99E6E6",
    "#6666FF",
  ];

  const quotesPool = [
    ["Less is More", "Ludwig Mies Van Der Rohe"],
    ["God is in the Details", "Ludwig Mies Van Der Rohe"],
    [
      "Architecture starts when you carefully put two bricks together. There it begins",
      "Ludwig Mies Van Der Rohe",
    ],
    [
      "Good building come from good people and all problems are solved by good design",
      "Stephen Gardiner",
    ],
    ["There are 360 degrees, so why stick to one?", "Zaha Hadid"],
    ["Form ever follows function", "Louis Sullivan"],
    [
      "Recognizing the need is the primary condition of design",
      "Charles Eames",
    ],
    [
      "Architecture is the learned game, correct and magnificent, of forms assembled in the light",
      "Le Corbusier",
    ],
    ["An idea is salvation by imagination", "Frank Lloyd Wright"],
    [
      "When I'm working on a problem, I never think about beauty. But when I've finished, if the solution is not beautiful I know it's wrong",
      "Buckminster Fuller",
    ],
    [
      "As an architect you design for the present, with an awareness of the past, for a future which is essentially unknown",
      "Norman Foster",
    ],
    [
      "To provide meaningful architecture is not to parody history but to articulate it",
      "Daniel Libeskind",
    ],
    ["To create, one must first question everything", "Eileen Gray"],
    [
      "One of the great beauties of architecture is that each time, it is like life starting all over again",
      "Renzo Piano",
    ],
    ["You’ve got to bumble forward into the unknown", "Frank Gehry"],
  ];

  const randomizeAll = () => {
    setColor(
      colorArray[Math.floor(Math.floor(Math.random() * colorArray.length))]
    );
    setText(
      quotesPool[Math.floor(Math.floor(Math.random() * quotesPool.length))]
    );
  };

  const [color, setColor] = useState("red");
  const [text, setText] = useState(quotesPool[0]);
  return (
    <div style={{ backgroundColor: `${color}`, height: "100vh" }}>
      <Text text={text} onClick={() => randomizeAll()} />
    </div>
  );
}

export default Bg;
