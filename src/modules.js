const navBar = () => {
    const content = document.getElementById('content');

    const navBar = document.createElement('div');
    navBar.id = "navBar";
    navBar.class = "tabs";
    
    const homeTab = document.createElement('div');
    homeTab.id = "homeTab";
    homeTab.class = "tab";
    homeTab.innerHTML = "Home";

    const menuTab = document.createElement('div');
    menuTab.id = "menuTab";
    menuTab.class = "tab";
    menuTab.innerHTML = "Menu";

    const contactTab = document.createElement('div');
    contactTab.id = "contactTab";
    contactTab.class = "tab";
    contactTab.innerHTML = "Contact";

    navBar.appendChild(homeTab);
    navBar.appendChild(menuTab);
    navBar.appendChild(contactTab);

    content.prepend(navBar);
    
    console.log("navBar Function");
}

const home = () => {
    
    const header = document.createElement("h1");      
    header.append("Hi Welcome to Chili's");

    const img = document.createElement("img");      
    img.src= "https://pbs.twimg.com/profile_images/1333865953600397319/6QdVDXpS_400x400.jpg";
    img.alt = "Not Wendy's logo";

    const para = document.createElement("p");      
    para.innerHTML = "Fresh food. Even fresher Chili.";

    
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
    const container = document.createElement('div');
    container.id = "container";

    const test = document.createElement('div');
    test.innerHTML = "Menu goes here";

    container.appendChild(test);

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
    
    console.log("menu Function");
}

const clear = () => {
    const container = document.getElementById("container");
    container.remove();
}


export {navBar, home, menu, contact, clear}