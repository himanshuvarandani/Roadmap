import React from "react"
import * as go from "gojs"
import { ReactDiagram } from "gojs-react"

import "./webDevelopment.css"

const initDiagram = () => {
  const $ = go.GraphObject.make
  // set your license key here before creating the diagram: go.Diagram.licenseKey = "...";
  const diagram = $(go.Diagram, {
    "undoManager.isEnabled": true, // must be set to allow for model change listening
    "undoManager.maxHistoryLength": 0, // uncomment disable undo/redo functionality
    "clickCreatingTool.archetypeNodeData": {
      text: "new node",
      color: "lightblue",
    },
    isReadOnly: true,
    // allowHorizontalScroll: false,
    // allowVerticalScroll: false,
    // autoScale: go.Diagram.Uniform,
    model: $(go.GraphLinksModel, {
      linkKeyProperty: "key", // IMPORTANT! must be defined for merges and data sync when using GraphLinksModel
    }),
  })

  // define a simple Node template
  diagram.nodeTemplate = $(
    go.Node,
    "Auto", // the Shape will go around the TextBlock
    new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
      go.Point.stringify
    ),
    $(
      go.Shape,
      "RoundedRectangle",
      { name: "SHAPE", fill: "white", strokeWidth: 0 },
      // Shape.fill is bound to Node.data.color
      new go.Binding("fill", "color")
    ),
    $(
      go.TextBlock,
      { margin: 8, editable: true }, // some room around the text
      new go.Binding("text").makeTwoWay()
    )
  )

  return diagram
}

// const handleModelChange = (changes) => {
//   alert("GoJS model changed!")
// }

const Roadmap = () => {
  return (
    <div className="roadmap">
      <ReactDiagram
        initDiagram={initDiagram}
        divClassName="diagram-component"
        nodeDataArray={[
          {
            key: 0,
            text: "Lorem Ipsum",
            color: "lightblue",
            loc: "0 -600",
          },
          { key: 1, text: "Lorem Ipsum", color: "lightblue", loc: "0 -400" },
          { key: 2, text: "Lorem Ipsum", color: "orange", loc: "-200 -475" },
          {
            key: 3,
            text: "Lorem Ipsum",
            color: "lightgreen",
            loc: "-200 -400",
          },
          { key: 4, text: "Lorem Ipsum", color: "pink", loc: "-200 -325" },
          {
            key: 5,
            text: "Lorem Ipsum",
            color: "lightgreen",
            loc: "-350 -425",
          },
          { key: 6, text: "Lorem Ipsum", color: "lightblue", loc: "-350 -375" },
          { key: 7, text: "Lorem Ipsum", color: "orange", loc: "200 -475" },
          {
            key: 8,
            text: "Lorem Ipsum",
            color: "lightgreen",
            loc: "200 -400",
          },
          { key: 9, text: "Lorem Ipsum", color: "pink", loc: "200 -325" },
          {
            key: 10,
            text: "Lorem Ipsum",
            color: "lightgreen",
            loc: "350 -325",
          },
          { key: 11, text: "Lorem Ipsum", color: "lightblue", loc: "0 -150" },
          { key: 12, text: "Lorem Ipsum", color: "orange", loc: "-200 -225" },
          {
            key: 13,
            text: "Lorem Ipsum",
            color: "lightgreen",
            loc: "-200 -150",
          },
          { key: 14, text: "Lorem Ipsum", color: "pink", loc: "-200 -75" },
          {
            key: 15,
            text: "Lorem Ipsum",
            color: "lightgreen",
            loc: "-350 -225",
          },
          {
            key: 16,
            text: "Lorem Ipsum",
            color: "lightblue",
            loc: "-350 -75",
          },
          { key: 17, text: "Lorem Ipsum", color: "orange", loc: "200 -225" },
          {
            key: 18,
            text: "Lorem Ipsum",
            color: "lightgreen",
            loc: "200 -150",
          },
          { key: 19, text: "Lorem Ipsum", color: "pink", loc: "200 -75" },
          {
            key: 20,
            text: "Lorem Ipsum",
            color: "lightgreen",
            loc: "350 -150",
          },
        ]}
        linkDataArray={[
          { key: -1, from: 0, to: 1 },
          { key: -2, from: 1, to: 2 },
          { key: -3, from: 1, to: 3 },
          { key: -4, from: 1, to: 4 },
          { key: -5, from: 1, to: 7 },
          { key: -6, from: 1, to: 8 },
          { key: -7, from: 1, to: 9 },
          { key: -8, from: 1, to: 11 },
          { key: -9, from: 3, to: 5 },
          { key: -10, from: 3, to: 6 },
          { key: -11, from: 9, to: 10 },
          { key: -12, from: 11, to: 12 },
          { key: -13, from: 11, to: 13 },
          { key: -14, from: 11, to: 14 },
          { key: -15, from: 11, to: 17 },
          { key: -16, from: 11, to: 18 },
          { key: -17, from: 11, to: 19 },
          { key: -18, from: 12, to: 15 },
          { key: -19, from: 14, to: 16 },
          { key: -20, from: 18, to: 20 },
        ]}
        // onModelChange={handleModelChange}
      />
    </div>
  )
}

export default Roadmap
