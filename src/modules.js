const navBar = () => {
    const content = document.getElementById('content');

    const navBar = document.createElement('div');
    navBar.id = "navBar";
    navBar.class = "tabs";
    
    const homeTab = document.createElement('div');
    homeTab.id = "homeTab";
    homeTab.classList = "tab";
    homeTab.innerHTML = "Home";

    const menuTab = document.createElement('div');
    menuTab.id = "menuTab";
    menuTab.classList = "tab";
    menuTab.innerHTML = "Menu";

    const contactTab = document.createElement('div');
    contactTab.id = "contactTab";
    contactTab.classList = "tab";
    contactTab.innerHTML = "Contact";

    navBar.appendChild(homeTab);
    navBar.appendChild(menuTab);
    navBar.appendChild(contactTab);

    content.prepend(navBar);
    
    console.log("navBar Function");
}

const home = () => {
    
    const header = document.createElement("h1");      
    header.innerHTML= "Starbeans Café";

    const img = document.createElement("img");      
    img.src= "https://www.spriters-resource.com/resources/sheets/1/901.png?updated=1460953132";
    img.alt = "Chili's logo";

    const para = document.createElement("p");      
    para.innerHTML = "Your beans. Our blends.";

    
    const container = document.createElement('div');
    container.id = "container";

    container.appendChild(header);
    container.appendChild(img);
    container.appendChild(para);

    const content = document.getElementById("content");
    content.appendChild(container);

    console.log("home Function");
};


const menu = () => {
    

    const header = document.createElement("h1");      
    header.innerHTML= "Blends";

    const para = document.createElement("p");      
    para.innerHTML = "At Starbeans we brew only the finest of beans our guests provide. \n Select from our blends below.";



    const container = document.createElement('div');
    container.id = "container";

    container.appendChild(header);
    //container.appendChild(img);
    container.appendChild(para);

    const content = document.getElementById("content");
    content.appendChild(container);

    console.log("menu Function");
}

const contact = () => {
    const container = document.createElement('div');
    container.id = "container";

    const test = document.createElement('div');
    test.innerHTML = "Conact goes here";

    container.appendChild(test);

    const content = document.getElementById("content");
    content.appendChild(container);
    
    console.log("contact Function");
}

const clear = () => {
    const container = document.getElementById("container");
    container.remove();
}


export {navBar, home, menu, contact, clear}