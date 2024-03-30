import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import { SidePanel } from "polotno/side-panel";
import { Workspace } from "polotno/canvas/workspace";

import "@blueprintjs/core/lib/css/blueprint.css";

import { createStore } from "polotno/model/store";

import { unstable_registerShapeModel } from "polotno/config";

import "./StarElement.tsx";
import "./HtmlElement.tsx";

const store: any = createStore({
  key: "yN3-z1XuP9HwXyGx3I_w", // you can create it here: https://polotno.com/cabinet/
  // you can hide back-link on a paid license
  // but it will be good if you can keep it for Polotno project support
  showCredit: true,
});

// @ts-ignore:next-line
export const App1 = ({ store }) => {
  return (
    <PolotnoContainer style={{ width: "100vw", height: "100vh" }}>
      <SidePanelWrap>
        <SidePanel store={store} />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Toolbar store={store} downloadButtonEnabled />
        <Workspace store={store} />
        <ZoomButtons store={store} />
      </WorkspaceWrap>
    </PolotnoContainer>
  );
};

const page = store.addPage();
store.pages[0].addElement({
  type: "html",
  id: "html1"
});



store.pages[0].addElement({
  x: store.width - 200,
  y: store.height - 200,
  type: "star",
  radius: 100,
  fill: "green",
});

// const videoElement = page.addElement({
//   type: "video",
//   x: 0,
//   y: 0,
//   rotation: 0,

//   // url path to video
//   src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
//   // start/end time of video in % from video duration
//   // can be used for trimming video
//   startTime: 0,
//   endTime: 60,

//   shadowEnabled: false,
//   shadowBlur: 5,
//   shadowOffsetX: 0,
//   shadowOffsetY: 0,
//   shadowColor: "black",
//   shadowOpacity: 1,
//   name: "", // name of element, can be used to find element in the store

//   width: 100,
//   height: 100,
//   cropX: 0, // 0-1 : % from original image width
//   cropY: 0, // 0-1 : % from original image height
//   cropWidth: 1, // 0-1 : % from original image width
//   cropHeight: 1, // 0-1 : % from original image height
//   borderColor: "black",
//   borderSize: 0,
//   flipX: false,
//   flipY: false,

//   // can user select element?
//   // if false, element will be "invisible" for user clicks
//   selectable: true,
//   // use for absolute positing of element
//   alwaysOnTop: false,
//   // also we can hide some elements from the export
//   showInExport: true,
//   // can element be moved and rotated
//   draggable: true,
//   // can we change content of element?
//   contentEditable: true,

//   // can we remove element from UI with button or keyboard?
//   removable: true,
//   // can we resize element?
//   resizable: true,
// });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App1 store={store} />
  </React.StrictMode>
);
