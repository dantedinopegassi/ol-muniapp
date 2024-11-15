
import selectDivApp from "./utils/createAppDiv";

const initializeApp = async function () {
  const appDiv = selectDivApp();

  appDiv.innerText = "funciona la creacion del appDiv";

  const mapDiv = document.createElement("div");
  mapDiv.setAttribute("id", "map");
};

initializeApp();
