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
    
    const container = document.createElement('div');
    container.id = "container";

    const header = document.createElement("h1");      
    header.innerHTML= "Starbeans Café";
    container.appendChild(header);

    const img = document.createElement("img");      
    img.src= "https://www.spriters-resource.com/resources/sheets/1/901.png?updated=1460953132";
    img.alt = "Starbeans interior";
    container.appendChild(img);

    const para = document.createElement("p");      
    para.innerHTML = "Your beans. Our blends.";
    container.appendChild(para);

    const content = document.getElementById("content");
    content.appendChild(container);

    console.log("home Function");
};


const menu = () => {
    const container = document.createElement('div');
    container.id = "container";

    const header = document.createElement("h1");      
    header.innerHTML= "Blends";
    container.appendChild(header);

    const para = document.createElement("p");      
    para.innerHTML = "Select from our blends below!";
    container.appendChild(para);

    const menu_img1 = document.createElement("img");      
    menu_img1.src= "https://static.wikia.nocookie.net/mario/images/7/79/WoohooBlend.png/revision/latest/scale-to-width-down/42?cb=20180702051539";
    menu_img1.alt = "Woohoo Blend";
    menu_img1.classList = "menu";
    container.appendChild(menu_img1);

    const menu_para1 = document.createElement("p");      
    menu_para1.innerHTML = "Woohoo Blend \n 25 Woo Beans. +4 Hit Points.";
    menu_para1.classList = "menu";
    container.appendChild(menu_para1);

    const menu_img2 = document.createElement("img");      
    menu_img2.src= "https://static.wikia.nocookie.net/mario/images/6/6b/HoohooBlend.png/revision/latest/scale-to-width-down/42?cb=20180702051849";
    menu_img2.alt = "Hoohoo Blend";
    menu_img2.classList = "menu";
    container.appendChild(menu_img2);

    const menu_para2 = document.createElement("p");      
    menu_para2.innerHTML = "Hoohoo Blend \n 25 Hoo Beans. +4 Brothers Points.";
    menu_para2.classList = "menu";
    container.appendChild(menu_para2);
    

    const content = document.getElementById("content");
    content.appendChild(container);

    console.log("menu Function");
}

const contact = () => {

    const container = document.createElement('div');
    container.id = "container";
    
    const header = document.createElement("h1");      
    header.innerHTML= "Contact us!";
    container.appendChild(header);

    const img = document.createElement("img");      
    img.src= "https://static.wikia.nocookie.net/mario/images/f/f6/Cafe.jpg/revision/latest/scale-to-width-down/310?cb=20130728223809";
    img.alt = "Mario and Luigi in Starbeans Café.";
    container.appendChild(img);

    const contact_info = document.createElement('p');
    contact_info.classList = 
    contact_info.innerHTML = "Owned by Professor E. Gadd. \n Located in Beanbean Castle Town.";

    container.appendChild(contact_info);

    const content = document.getElementById("content");
    content.appendChild(container);
    
    console.log("contact Function");
}

const clear = () => {
    const container = document.getElementById("container");
    container.remove();
}


export {navBar, home, menu, contact, clear}